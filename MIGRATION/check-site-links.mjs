#!/usr/bin/env node

import { access, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const files = [
  "index.html",
  "services.html",
  "recording.html",
  "mixing-mastering.html",
  "live-recordings.html",
  "studio-a.html",
  "studio-b.html",
  "team.html",
  "community.html",
  "site.css",
  "inner-pages.css",
  "inner-pages.js",
  "checkmark-hero-editor.js",
  "checkmark-site-media-editor.js",
  "visual-edit-mode.js",
];
const references = [];

for (const file of files) {
  const content = await readFile(path.join(root, file), "utf8");
  const patterns = [
    /(?:src|href)=["']([^"']+)["']/g,
    /url\(["']?([^"')]+)["']?\)/g,
  ];

  for (const pattern of patterns) {
    for (const match of content.matchAll(pattern)) {
      const reference = match[1].split("#")[0].split("?")[0];
      if (!reference || reference.includes("${") || reference.startsWith("%23") || /^(?:https?:|mailto:|tel:|sms:|data:|javascript:)/.test(reference)) continue;
      references.push({ file, reference });
    }
  }
}

const missing = [];
for (const item of references) {
  const target = path.resolve(root, path.dirname(item.file), item.reference);
  try {
    await access(target);
  } catch {
    missing.push(item);
  }
}

if (missing.length) {
  console.error("Missing local references:");
  for (const item of missing) console.error(`- ${item.file}: ${item.reference}`);
  process.exit(1);
}

console.log(`Checked ${references.length} local references across ${files.length} active site files.`);
console.log("No missing local files found.");
