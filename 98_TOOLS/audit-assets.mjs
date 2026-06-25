#!/usr/bin/env node

import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceDir = process.argv[2] || "02_ASSETS/library";
const productionDir = process.argv[3] || "02_ASSETS/production";
const outputDir = process.argv[4] || "04_MIGRATION";

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"]);
const videoExtensions = new Set([".mp4", ".mov", ".webm", ".m4v"]);

const hashFile = (file) =>
  new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    const stream = createReadStream(file);

    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(hash.digest("hex")));
  });

const classify = (file) => {
  const extension = path.extname(file).toLowerCase();

  if (imageExtensions.has(extension)) {
    return "image";
  }

  if (videoExtensions.has(extension)) {
    return "video";
  }

  return "other";
};

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (entry.isFile() && classify(fullPath) !== "other") {
      files.push(fullPath);
    }
  }

  return files;
};

const collect = async (dir, label) => {
  const files = await walk(dir);
  const records = [];

  for (const file of files) {
    const info = await stat(file);

    records.push({
      area: label,
      path: file,
      name: path.basename(file),
      extension: path.extname(file).toLowerCase(),
      type: classify(file),
      sizeBytes: info.size,
      sizeMB: Number((info.size / 1024 / 1024).toFixed(3)),
      sha256: await hashFile(file),
    });
  }

  return records.sort((a, b) => a.path.localeCompare(b.path));
};

const source = await collect(sourceDir, "source");
const production = await collect(productionDir, "production");

const sourceByHash = new Map();
for (const item of source) {
  if (!sourceByHash.has(item.sha256)) {
    sourceByHash.set(item.sha256, []);
  }

  sourceByHash.get(item.sha256).push(item);
}

const duplicateGroups = [...sourceByHash.values()]
  .filter((group) => group.length > 1)
  .map((group) => ({
    sha256: group[0].sha256,
    count: group.length,
    files: group.map((item) => item.path),
  }));

const summarize = (items) => ({
  files: items.length,
  images: items.filter((item) => item.type === "image").length,
  videos: items.filter((item) => item.type === "video").length,
  other: items.filter((item) => item.type === "other").length,
  totalMB: Number((items.reduce((sum, item) => sum + item.sizeBytes, 0) / 1024 / 1024).toFixed(2)),
});

const audit = {
  generatedAt: new Date().toISOString(),
  sourceDir,
  productionDir,
  summary: {
    source: summarize(source),
    production: summarize(production),
    duplicateSourceGroups: duplicateGroups.length,
  },
  duplicateGroups,
  source,
  production,
};

const markdown = [
  "# Source Asset Inventory",
  "",
  `Generated: ${audit.generatedAt}`,
  "",
  "## Summary",
  "",
  `- Source archive: ${audit.summary.source.files} files, ${audit.summary.source.totalMB} MB`,
  `- Source images: ${audit.summary.source.images}`,
  `- Source videos: ${audit.summary.source.videos}`,
  `- Source other files: ${audit.summary.source.other}`,
  `- Production assets: ${audit.summary.production.files} files, ${audit.summary.production.totalMB} MB`,
  `- Duplicate source hash groups: ${audit.summary.duplicateSourceGroups}`,
  "",
  "## Production Assets",
  "",
  ...production.map((item) => `- \`${item.path}\` (${item.sizeMB} MB)`),
  "",
  "## Duplicate Source Groups",
  "",
  duplicateGroups.length
    ? duplicateGroups.flatMap((group, index) => [
        `### Group ${index + 1}`,
        "",
        ...group.files.map((file) => `- \`${file}\``),
        "",
      ]).join("\n")
    : "No exact duplicate source files found by SHA-256.",
  "",
].join("\n");

await mkdir(outputDir, { recursive: true });
await mkdir("00_START", { recursive: true });
await writeFile(path.join(outputDir, "asset-inventory.json"), JSON.stringify(audit, null, 2));
await writeFile(path.join("00_START", "source-asset-inventory.md"), markdown);

console.log(`Source files: ${audit.summary.source.files}`);
console.log(`Production files: ${audit.summary.production.files}`);
console.log(`Duplicate source groups: ${audit.summary.duplicateSourceGroups}`);
console.log(`Wrote ${path.join(outputDir, "asset-inventory.json")}`);
console.log("Wrote 00_START/source-asset-inventory.md");
