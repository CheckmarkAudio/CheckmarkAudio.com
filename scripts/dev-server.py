#!/usr/bin/env python3
"""Local preview server with a real Save for the website media editor.

Serves the repository the way `python3 -m http.server` did, and adds one
endpoint so the in-browser media editor can write its selections straight into
the project instead of downloading a file for someone to merge by hand:

    POST /__save-media-selections   ->  MEDIA/WEBSITE_MEDIA_SELECTIONS.json

Safety, because this endpoint overwrites a tracked project file:

* Writes are accepted only from this machine (loopback). The server still
  serves pages to the local network, but nothing on the network can write.
* The payload must parse as JSON and carry a `mediaEditor.slots` object.
* The previous file is copied into .media-backups/ before every write, so a
  bad save is always recoverable. The newest MAX_BACKUPS are kept.
* A save that would drop more than DROP_LIMIT of the existing slots is
  refused unless it is sent with ?force=1. A stale browser tab holding an old
  snapshot is the likely cause, and silently accepting it would delete work.
* The write is atomic (temp file, then rename), so an interrupted save cannot
  leave a half-written selections file.

The response reports exactly which slots and which top-level sections changed,
so the editor can show what a save actually did rather than claiming success.

Usage:
    python3 scripts/dev-server.py            # port 4173, or $PORT
"""
import http.server
import json
import os
import shutil
import socketserver
import sys
import tempfile
import time
from datetime import datetime, timezone
from urllib.parse import urlparse, parse_qs

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET = os.path.join(REPO, 'MEDIA', 'WEBSITE_MEDIA_SELECTIONS.json')
BACKUP_DIR = os.path.join(REPO, '.media-backups')
SAVE_PATH = '/__save-media-selections'
MAX_BACKUPS = 40
DROP_LIMIT = 0.2          # refuse a save losing more than 20% of slots
MAX_BODY = 8 * 1024 * 1024


def load_current():
    try:
        with open(TARGET, encoding='utf-8') as fh:
            return json.load(fh)
    except (OSError, ValueError):
        return {}


def summarise(before, after):
    """Human-readable description of what a save changed."""
    b = (before.get('mediaEditor') or {}).get('slots') or {}
    a = (after.get('mediaEditor') or {}).get('slots') or {}
    added = sorted(set(a) - set(b))
    removed = sorted(set(b) - set(a))
    changed = sorted(k for k in set(a) & set(b) if a[k] != b[k])
    sections = [s for s in ('recovery', 'homepageHero', 'homepageSectionMedia', 'innerPageMedia')
                if before.get(s) != after.get(s)]
    bits = []
    if added:
        bits.append(f'{len(added)} added')
    if changed:
        bits.append(f'{len(changed)} updated')
    if removed:
        bits.append(f'{len(removed)} removed')
    text = ', '.join(bits) if bits else 'no slot changes'
    if sections:
        text += f'; also changed: {", ".join(sections)}'
    return {'summary': text, 'added': added, 'updated': changed,
            'removed': removed, 'sections': sections}


def dumps_repo_style(doc):
    """Serialise in the project file's existing shape.

    Slots go one per line rather than expanded over five, which is how the file
    was already written. A plain json.dumps(indent=2) turns a one-photo change
    into a several-hundred-line diff and makes review and rollback painful.
    """
    doc = dict(doc)
    editor = dict(doc.get('mediaEditor') or {})
    slots = editor.pop('slots', {})
    editor['slots'] = '@@SLOTS@@'
    doc['mediaEditor'] = editor
    text = json.dumps(doc, indent=2, ensure_ascii=False)
    def one_line(value):
        if isinstance(value, dict):
            inner = ', '.join(
                '%s: %s' % (json.dumps(k2, ensure_ascii=False), one_line(v2))
                for k2, v2 in value.items())
            return '{ %s }' % inner if inner else '{}'
        return json.dumps(value, separators=(', ', ': '), ensure_ascii=False)

    rows = ['      %s: %s' % (json.dumps(k, ensure_ascii=False), one_line(v))
            for k, v in slots.items()]
    block = '{\n' + ',\n'.join(rows) + '\n    }' if rows else '{}'
    return text.replace('"@@SLOTS@@"', block) + '\n'


def rotate_backups():
    files = sorted(
        (f for f in os.listdir(BACKUP_DIR) if f.endswith('.json')), reverse=True)
    for stale in files[MAX_BACKUPS:]:
        try:
            os.remove(os.path.join(BACKUP_DIR, stale))
        except OSError:
            pass


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=REPO, **kwargs)

    def log_message(self, fmt, *args):
        if self.path.startswith('/__'):
            sys.stderr.write(f'[media-save] {fmt % args}\n')

    def _json(self, status, payload):
        body = json.dumps(payload).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(body)

    def _is_local(self):
        return self.client_address[0] in ('127.0.0.1', '::1', 'localhost')

    def do_HEAD(self):
        # The editor probes this to decide between "Save" and "Export".
        if urlparse(self.path).path == SAVE_PATH:
            if not self._is_local():
                self.send_response(403)
                self.end_headers()
                return
            self.send_response(200)
            self.send_header('Content-Length', '0')
            self.end_headers()
            return
        super().do_HEAD()

    def do_POST(self):
        if urlparse(self.path).path != SAVE_PATH:
            self._json(404, {'error': 'unknown endpoint'})
            return
        if not self._is_local():
            self._json(403, {'error': 'saves are only accepted from this computer'})
            return

        try:
            length = int(self.headers.get('Content-Length') or 0)
        except ValueError:
            length = 0
        if length <= 0 or length > MAX_BODY:
            self._json(413, {'error': 'missing or oversized body'})
            return

        try:
            incoming = json.loads(self.rfile.read(length).decode('utf-8'))
        except (ValueError, UnicodeDecodeError) as exc:
            self._json(400, {'error': f'body is not valid JSON ({exc})'})
            return

        slots = (incoming.get('mediaEditor') or {}).get('slots')
        if not isinstance(slots, dict) or not slots:
            self._json(400, {'error': 'payload has no mediaEditor.slots object'})
            return

        current = load_current()
        existing = (current.get('mediaEditor') or {}).get('slots') or {}
        force = parse_qs(urlparse(self.path).query).get('force', ['0'])[0] == '1'
        if existing and not force:
            dropped = set(existing) - set(slots)
            if len(dropped) > max(1, int(len(existing) * DROP_LIMIT)):
                self._json(409, {
                    'error': (f'refused: this save would remove {len(dropped)} of '
                              f'{len(existing)} slots, which usually means the page '
                              f'was loaded before recent changes. Reload the page and '
                              f'try again, or resend with ?force=1 if this is intended.'),
                    'wouldRemove': sorted(dropped)[:20],
                })
                return

        os.makedirs(BACKUP_DIR, exist_ok=True)
        if os.path.exists(TARGET):
            stamp = datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%SZ')
            shutil.copy2(TARGET, os.path.join(
                BACKUP_DIR, f'WEBSITE_MEDIA_SELECTIONS-{stamp}.json'))
            rotate_backups()

        text = dumps_repo_style(incoming)
        handle, tmp = tempfile.mkstemp(dir=os.path.dirname(TARGET), suffix='.tmp')
        try:
            with os.fdopen(handle, 'w', encoding='utf-8') as fh:
                fh.write(text)
            os.replace(tmp, TARGET)
        except OSError as exc:
            try:
                os.unlink(tmp)
            except OSError:
                pass
            self._json(500, {'error': f'could not write the file ({exc})'})
            return

        result = summarise(current, incoming)
        result['ok'] = True
        result['path'] = os.path.relpath(TARGET, REPO)
        self._json(200, result)


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == '__main__':
    port = int(os.environ.get('PORT') or (sys.argv[1] if len(sys.argv) > 1 else 4173))
    os.chdir(REPO)
    with Server(('', port), Handler) as httpd:
        print(f'Checkmark dev server on http://localhost:{port}')
        print(f'Media editor saves write to {os.path.relpath(TARGET, REPO)} '
              f'(backups in {os.path.relpath(BACKUP_DIR, REPO)}/)')
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\nstopped')
