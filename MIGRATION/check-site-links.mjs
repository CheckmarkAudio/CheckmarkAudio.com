#!/usr/bin/env node

// Local existence is not enough: --tracked also checks that Git can reproduce
// the referenced assets. Dynamic URLs still require the browser launch checks.
import { access, readFile, readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const root = process.cwd();
const trackedOnly = process.argv.includes('--tracked');
const tracked = new Set(execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0'));
const files = (await readdir(root)).filter(file => /\.(html|css|js)$/.test(file));
files.push('MEDIA/WEBSITE_MEDIA_SELECTIONS.json');
const references = new Map();
function add(file, value) {
  const reference = value.split('#')[0].split('?')[0];
  if (!reference || reference.includes('${') || reference.startsWith('%23') || /^(?:[a-z]+:|\/\/)/i.test(reference)) return;
  const target = path.resolve(root, path.dirname(file), reference.startsWith('/') ? `.${reference}` : reference);
  const relative = path.relative(root, target).split(path.sep).join('/');
  references.set(`${file}\0${relative}`, { file, reference, relative, target });
}
for (const file of files) {
  const raw = await readFile(path.join(root, file), 'utf8');
  if (file.endsWith('.json')) {
    const visit = value => {
      if (typeof value === 'string' && /^MEDIA\/[^\s]+\.[a-z0-9]+$/i.test(value)) add('index.html', value);
      else if (Array.isArray(value)) value.forEach(visit);
      else if (value && typeof value === 'object') Object.values(value).forEach(visit);
    };
    visit(JSON.parse(raw));
    continue;
  }
  const content = raw.replace(/^\s*\/\/.*$/gm, '');
  for (const pattern of [/(?:src|href|poster)=["']([^"']+)["']/g, /url\(["']?([^"')]+)["']?\)/g, /["'](MEDIA\/[^"'\s]+\.[a-z0-9]+)["']/gi]) {
    for (const match of content.matchAll(pattern)) add(file, match[1]);
  }
}
const missing = [], localOnly = new Set();
for (const item of references.values()) {
  try { await access(item.target); } catch { missing.push(`${item.file}: ${item.reference}`); }
  if (!tracked.has(item.relative)) localOnly.add(item.relative);
}
console.log(`Checked ${references.size} literal local references across ${files.length} root site/selection files.`);
if (missing.length) console.error('Missing local files:\n' + missing.map(s => `- ${s}`).join('\n'));
else console.log('No missing local files found.');
if (trackedOnly && localOnly.size) console.error('Referenced files absent from Git (not reproducible in a fresh checkout):\n' + [...localOnly].sort().map(s => `- ${s}`).join('\n'));
if (missing.length || (trackedOnly && localOnly.size)) process.exitCode = 1;
