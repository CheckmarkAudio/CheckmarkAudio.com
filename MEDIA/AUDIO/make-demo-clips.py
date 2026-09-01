#!/usr/bin/env python3
"""Cut 30-second demo clips for the homepage sound demo.

Scans MEDIA/AUDIO/ for .mp3 files, finds each song's most active 30 seconds
(by RMS loudness), and writes a faded, metadata-stripped clip to
MEDIA/AUDIO/demo-clips/<name>-demo-clip.mp3. Songs that already have a clip
are skipped, so it is safe to rerun after dropping in new mp3s.

Usage (from the repository root, requires ffmpeg):
    python3 MEDIA/AUDIO/make-demo-clips.py            # clip new songs
    python3 MEDIA/AUDIO/make-demo-clips.py --force    # recut everything

Then add each new clip to checkmark-demo-playlist.js.
Full masters stay out of Git per MEDIA/README.md; only these small clips
are committed and served by the website.
"""
import os, struct, subprocess, sys

AUDIO_DIR = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(AUDIO_DIR, 'demo-clips')
CLIP_LEN = 30.0
SR = 8000       # analysis sample rate (RMS only)
FRAME = 0.5     # seconds per RMS frame
FORCE = '--force' in sys.argv

def rms_profile(path):
    raw = subprocess.run(
        ['ffmpeg', '-v', 'error', '-i', path, '-ac', '1', '-ar', str(SR),
         '-f', 's16le', '-'], capture_output=True, check=True).stdout
    n = len(raw) // 2
    samples = struct.unpack(f'<{n}h', raw[:n*2])
    frame_n = int(SR * FRAME)
    return [
        (sum(s*s for s in samples[i:i+frame_n]) / frame_n) ** 0.5
        for i in range(0, n - frame_n, frame_n)
    ]

def best_window_start(frames, total_dur):
    win = int(CLIP_LEN / FRAME)
    if len(frames) <= win:
        return 0.0
    best_i, best_v = 0, -1
    cur = sum(frames[:win])
    for i in range(len(frames) - win):
        if i > 0:
            cur += frames[i+win-1] - frames[i-1]
        if cur > best_v:
            best_v, best_i = cur, i
    return max(0.0, min(best_i * FRAME, total_dur - CLIP_LEN))

os.makedirs(OUT_DIR, exist_ok=True)
for name in sorted(os.listdir(AUDIO_DIR)):
    if not name.lower().endswith('.mp3'):
        continue
    src = os.path.join(AUDIO_DIR, name)
    out = os.path.join(OUT_DIR, os.path.splitext(name)[0] + '-demo-clip.mp3')
    if os.path.exists(out) and not FORCE:
        continue
    dur = float(subprocess.run(
        ['ffprobe', '-v', 'error', '-show_entries', 'format=duration',
         '-of', 'csv=p=0', src], capture_output=True, text=True, check=True).stdout.strip())
    start = best_window_start(rms_profile(src), dur)
    subprocess.run(
        ['ffmpeg', '-v', 'error', '-y', '-ss', f'{start:.2f}', '-t', str(CLIP_LEN),
         '-i', src, '-map_metadata', '-1',
         '-af', f'afade=t=in:st=0:d=0.7,afade=t=out:st={CLIP_LEN-1.5}:d=1.5',
         '-codec:a', 'libmp3lame', '-q:a', '4', out], check=True)
    print(f'{name}: {start:.1f}s-{start+CLIP_LEN:.1f}s of {dur:.0f}s -> {os.path.basename(out)}')
print('done')
