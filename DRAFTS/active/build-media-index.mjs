import { readdir, writeFile } from 'node:fs/promises';
import { extname, relative, resolve, sep } from 'node:path';

const draftDir = resolve(import.meta.dirname);
const repoRoot = resolve(draftDir, '../..');
const roots = [resolve(repoRoot, 'MEDIA/IMAGES'), resolve(repoRoot, 'MEDIA/VIDEO')];
const imageExtensions = new Set(['.webp', '.jpg', '.jpeg', '.png', '.gif', '.avif']);
const videoExtensions = new Set(['.mp4', '.webm', '.mov', '.m4v']);
const entries = [];

async function walk(directory) {
  const children = await readdir(directory, { withFileTypes: true });
  children.sort((a, b) => a.name.localeCompare(b.name));
  for (const child of children) {
    const absolute = resolve(directory, child.name);
    if (child.isDirectory()) await walk(absolute);
    if (!child.isFile()) continue;
    const extension = extname(child.name).toLowerCase();
    const type = imageExtensions.has(extension) ? 'image' : videoExtensions.has(extension) ? 'video' : null;
    if (!type) continue;
    const repoPath = relative(repoRoot, absolute).split(sep).join('/');
    const folder = repoPath.slice(0, repoPath.lastIndexOf('/'));
    const label = child.name.replace(extension, '').replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
    entries.push({ id: repoPath, type, name: child.name, label, folder, src: `../../${repoPath}` });
  }
}

for (const root of roots) await walk(root);
entries.sort((a, b) => a.folder.localeCompare(b.folder) || a.name.localeCompare(b.name));
await writeFile(resolve(draftDir, 'checkmark-media-index.json'), `${JSON.stringify({ generated: new Date().toISOString(), count: entries.length, entries })}\n`);
console.log(`Indexed ${entries.length} media files.`);
