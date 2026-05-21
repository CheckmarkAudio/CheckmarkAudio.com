#!/usr/bin/env node

import { createWriteStream } from "node:fs";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pipeline } from "node:stream/promises";

const input = process.argv[2] || "wix-export/wix-media-urls.txt";
const outputDir = process.argv[3] || "original-assets";

const urls = (await readFile(input, "utf8"))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

await mkdir(outputDir, { recursive: true });

for (const [index, url] of urls.entries()) {
  const pathname = new URL(url).pathname;
  const base = decodeURIComponent(path.basename(pathname)) || `wix-media-${index + 1}`;
  const destination = path.join(outputDir, base);

  console.log(`Downloading ${index + 1}/${urls.length}: ${base}`);
  const response = await fetch(url);

  if (!response.ok || !response.body) {
    console.warn(`Skipped ${url}: ${response.status} ${response.statusText}`);
    continue;
  }

  await pipeline(response.body, createWriteStream(destination));
}

console.log(`Done. Files saved in ${outputDir}`);
