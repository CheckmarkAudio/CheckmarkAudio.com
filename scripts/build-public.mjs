#!/usr/bin/env node

// Builds the public/ folder Netlify publishes: the root site pages, their
// runtime code and web-ready media only. Internal docs, DRAFTS, ARCHIVE,
// migration tooling and media masters stay out of the published site.
//
// Indexing is off unless this is Netlify's production context AND the
// SITE_LAUNCHED=true environment variable is set (the launch-day switch).
import { copyFile, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'public');
const launched = process.env.CONTEXT === 'production' && process.env.SITE_LAUNCHED === 'true';
const siteUrl = 'https://www.checkmarkaudio.com';

const ROOT_FILE = /^(?:[^/]+\.(?:html|css|js)|sitemap\.xml|_redirects)$/;
const MEDIA_REFERENCE = /MEDIA\/[A-Za-z0-9_.\/-]+\.(?:webp|avif|png|jpe?g|gif|svg|mp3|m4a|mp4|webm)/gi;
const MEDIA_DATA = new Set(['MEDIA/WEBSITE_MEDIA_SELECTIONS.json']);
const STATIC_MEDIA = Array.from(
  { length: 7 },
  (_, index) => `MEDIA/ARTWORK/mixing-fader-handle-${index + 1}.png`,
);

// Git-tracked files only, so a deploy never depends on something that exists
// on one person's computer. Falls back to the folder listing outside Git.
function listFiles() {
  try {
    return execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8', maxBuffer: 64 << 20 }).split('\0').filter(Boolean);
  } catch {
    return null;
  }
}
async function walk(dir, prefix = '') {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const rel = prefix + entry.name;
    if (entry.isDirectory()) found.push(...await walk(path.join(dir, entry.name), rel + '/'));
    else found.push(rel);
  }
  return found;
}
const all = listFiles() ?? [...(await readdir(root)), ...(await walk(path.join(root, 'MEDIA'), 'MEDIA/'))];
const rootFiles = all.filter(file => ROOT_FILE.test(file));
const referencedMedia = new Set();
for (const file of [...rootFiles, ...MEDIA_DATA]) {
  const source = await readFile(path.join(root, file), 'utf8');
  for (const match of source.matchAll(MEDIA_REFERENCE)) referencedMedia.add(match[0]);
}
const selected = [...new Set([...rootFiles, ...MEDIA_DATA, ...STATIC_MEDIA, ...referencedMedia])]
  .filter(file => all.includes(file));

await rm(out, { recursive: true, force: true });
for (const file of selected) {
  const target = path.join(out, file);
  await mkdir(path.dirname(target), { recursive: true });
  if (file.endsWith('.html')) {
    let html = await readFile(path.join(root, file), 'utf8');
    // The 404 page keeps its noindex even after launch; it is never a search result.
    if (launched && file !== '404.html') html = html.replace(/<meta name="robots" content="noindex[^"]*">/gi, '');
    // Netlify serves 404.html at the missing URL itself, so relative links
    // need an absolute base when the missing URL is in a subfolder.
    if (file === '404.html' && !/<base\s/i.test(html)) html = html.replace(/<head>/i, '<head><base href="/">');
    await writeFile(target, html);
  } else {
    await copyFile(path.join(root, file), target);
  }
}

await writeFile(path.join(out, 'robots.txt'), launched
  ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  : 'User-agent: *\nDisallow: /\n');
if (!launched) await writeFile(path.join(out, '_headers'), '/*\n  X-Robots-Tag: noindex, nofollow\n');

console.log(`Published ${selected.length} files to public/ (context: ${process.env.CONTEXT ?? 'local'}, indexing ${launched ? 'ON' : 'off'}).`);
