#!/usr/bin/env node

import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const mediaDir = process.argv[2] || "MEDIA";
const inventoryPath = process.argv[3] || "MIGRATION/asset-inventory.json";
const catalogPath = process.argv[4] || "MEDIA/MEDIA_CATALOG.md";
const supportedExtensions = new Set([
  ".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg",
  ".avif", ".arw", ".cr2", ".cr3", ".dng", ".nef", ".orf", ".raf", ".rw2",
  ".mp3", ".wav", ".aif", ".aiff", ".m4a", ".flac",
  ".mp4", ".mov", ".webm", ".m4v",
  ".pdf",
]);

const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const rawExtensions = new Set([".arw", ".cr2", ".cr3", ".dng", ".nef", ".orf", ".raf", ".rw2"]);
const audioExtensions = new Set([".aif", ".aiff", ".flac", ".m4a", ".mp3", ".wav"]);
const videoExtensions = new Set([".m4v", ".mov", ".mp4", ".webm"]);

const hashFile = (file) => new Promise((resolve, reject) => {
  const hash = createHash("sha256");
  const stream = createReadStream(file);
  stream.on("data", (chunk) => hash.update(chunk));
  stream.on("error", reject);
  stream.on("end", () => resolve(hash.digest("hex")));
});

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    if (entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase())) files.push(fullPath);
  }
  return files;
};

const classify = (file) => {
  const extension = path.extname(file).toLowerCase();
  if (imageExtensions.has(extension)) return "image";
  if (rawExtensions.has(extension)) return "raw";
  if (audioExtensions.has(extension)) return "audio";
  if (videoExtensions.has(extension)) return "video";
  if (extension === ".pdf") return "document";
  return "other";
};

const files = (await walk(mediaDir)).sort();
const records = [];

for (const file of files) {
  const info = await stat(file);
  const name = path.basename(file);
  const id = name.match(/^(\d+)-/)?.[1] || "--";
  const variant = name.match(/-(source|web)\.[^.]+$/)?.[1] || "other";
  records.push({
    id,
    name,
    path: file,
    type: classify(file),
    variant,
    extension: path.extname(file).slice(1).toLowerCase(),
    sizeBytes: info.size,
    sizeMB: Number((info.size / 1024 / 1024).toFixed(3)),
    sha256: await hashFile(file),
  });
}

const byHash = new Map();
for (const record of records) {
  const group = byHash.get(record.sha256) || [];
  group.push(record.path);
  byHash.set(record.sha256, group);
}
const duplicateGroups = [...byHash.entries()]
  .filter(([, group]) => group.length > 1)
  .map(([sha256, group]) => ({ sha256, files: group }));

const summary = {
  total: records.length,
  images: records.filter((item) => item.type === "image").length,
  audio: records.filter((item) => item.type === "audio").length,
  video: records.filter((item) => item.type === "video").length,
  raw: records.filter((item) => item.type === "raw").length,
  documents: records.filter((item) => item.type === "document").length,
  other: records.filter((item) => item.type === "other").length,
  source: records.filter((item) => item.variant === "source").length,
  web: records.filter((item) => item.variant === "web").length,
  totalMB: Number((records.reduce((sum, item) => sum + item.sizeBytes, 0) / 1024 / 1024).toFixed(2)),
  duplicateGroups: duplicateGroups.length,
};

const generatedAt = new Date().toISOString();
await writeFile(inventoryPath, `${JSON.stringify({ generatedAt, mediaDir, summary, duplicateGroups, records }, null, 2)}\n`);

const catalog = [
  "# Media Catalog",
  "",
  `Generated: ${generatedAt}`,
  "",
  "This is the active catalog for Checkmark Audio website media. Public filenames follow Gavin's descriptive service/location/subject/brand formula; IDs and hashes belong in the inventory.",
  "",
  "## Summary",
  "",
  `- Total media files: ${summary.total}`,
  `- Images: ${summary.images}`,
  `- Audio: ${summary.audio}`,
  `- Video: ${summary.video}`,
  `- Camera RAW: ${summary.raw}`,
  `- Documents: ${summary.documents}`,
  `- Other: ${summary.other}`,
  `- Source variants: ${summary.source}`,
  `- Web variants: ${summary.web}`,
  `- Total size: ${summary.totalMB} MB`,
  `- Exact duplicate groups: ${summary.duplicateGroups}`,
  "",
  "## Files",
  "",
  "| ID | File | Type | Variant | Size |",
  "| --- | --- | --- | --- | ---: |",
  ...records.map((item) => `| ${item.id} | \`${item.name}\` | ${item.type} | ${item.variant} | ${item.sizeMB} MB |`),
  "",
].join("\n");

await writeFile(catalogPath, catalog);
console.log(`Cataloged ${summary.total} media files (${summary.totalMB} MB).`);
console.log(`Wrote ${inventoryPath}`);
console.log(`Wrote ${catalogPath}`);
