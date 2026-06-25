#!/usr/bin/env node

import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const inputDir = process.argv[2] || "99_ARCHIVE/ignored-local/public-pages";
const outputDir = process.argv[3] || "migration";

const decodeHtml = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#34;", '"')
    .replaceAll("\\u002F", "/")
    .replaceAll("\\/", "/");

const stripWixTransform = (url) => {
  const clean = decodeHtml(url).replace(/[)"'<>]+$/g, "");
  const mediaMatch = clean.match(/https:\/\/static\.wixstatic\.com\/media\/([^?\s"'<>]+)/);

  if (!mediaMatch) {
    return clean;
  }

  const mediaPath = mediaMatch[1];
  const transformIndex = mediaPath.indexOf("/v1/");
  return `https://static.wixstatic.com/media/${transformIndex === -1 ? mediaPath : mediaPath.slice(0, transformIndex)}`;
};

const media = new Map();
const files = (await readdir(inputDir)).filter((file) => file.endsWith(".html")).sort();

for (const file of files) {
  const html = await readFile(path.join(inputDir, file), "utf8");
  const decoded = decodeHtml(html);
  const matches = decoded.match(/https:\/\/static\.wixstatic\.com\/media\/[^\s"'<>\\]+/g) || [];

  for (const match of matches) {
    const url = stripWixTransform(match);
    const pathname = new URL(url).pathname;
    const mediaFile = decodeURIComponent(path.basename(pathname));

    if (!media.has(url)) {
      media.set(url, { url, file: mediaFile, pages: [] });
    }

    if (!media.get(url).pages.includes(file)) {
      media.get(url).pages.push(file);
    }
  }
}

const manifest = [...media.values()].sort((a, b) => a.file.localeCompare(b.file));

await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "public-wix-media-manifest.json"), JSON.stringify(manifest, null, 2));
await writeFile(path.join(outputDir, "public-wix-media-urls.txt"), `${manifest.map((item) => item.url).join("\n")}\n`);

console.log(`Scanned ${files.length} HTML files.`);
console.log(`Found ${manifest.length} unique public Wix media URLs.`);
console.log(`Wrote ${path.join(outputDir, "public-wix-media-manifest.json")}`);
console.log(`Wrote ${path.join(outputDir, "public-wix-media-urls.txt")}`);
