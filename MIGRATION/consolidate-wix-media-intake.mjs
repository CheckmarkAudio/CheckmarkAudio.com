#!/usr/bin/env node

import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { mkdir, open, readdir, rename, rmdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const apply = process.argv.includes("--apply");
const root = process.cwd();
const mediaRoot = path.join(root, "MEDIA");
const intakeRoot = path.join(root, "ARCHIVE", "ignored-local", "wix-media-intake");
const approvedImageName = /^\d{2,}-[a-z0-9]+(?:-[a-z0-9]+)*-(?:source|web)\.[a-z0-9]+$/;
const mediaControlFiles = new Set([
  "MEDIA_CATALOG.md",
  "MEDIA_METADATA.csv",
  "NEEDED_MEDIA.md",
  "README.md",
]);
const intakeControlFiles = new Set([
  "asset-inventory.json",
  "INTAKE_CATALOG.md",
  "CONSOLIDATION_MANIFEST.json",
]);

const extensionGroups = {
  images: new Set([".arw", ".avif", ".cr2", ".cr3", ".dng", ".gif", ".jpeg", ".jpg", ".nef", ".orf", ".png", ".raf", ".rw2", ".svg", ".webp"]),
  audio: new Set([".aif", ".aiff", ".flac", ".m4a", ".mp3", ".wav"]),
  video: new Set([".m4v", ".mov", ".mp4", ".webm"]),
  documents: new Set([".pdf"]),
};

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === ".DS_Store") continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    if (entry.isFile()) files.push(fullPath);
  }
  return files;
};

const hashFile = (file) => new Promise((resolve, reject) => {
  const hash = createHash("sha256");
  const stream = createReadStream(file);
  stream.on("data", (chunk) => hash.update(chunk));
  stream.on("error", reject);
  stream.on("end", () => resolve(hash.digest("hex")));
});

const classify = async (filename, source) => {
  const extension = path.extname(filename).toLowerCase();
  for (const [group, extensions] of Object.entries(extensionGroups)) {
    if (extensions.has(extension)) return group;
  }
  const handle = await open(source, "r");
  const buffer = Buffer.alloc(32);
  const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0);
  await handle.close();
  const bytes = buffer.subarray(0, bytesRead);
  const ascii = bytes.toString("ascii");
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "images";
  if (bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "images";
  if (ascii.startsWith("GIF87a") || ascii.startsWith("GIF89a")) return "images";
  if (ascii.startsWith("RIFF") && ascii.slice(8, 12) === "WEBP") return "images";
  if (ascii.startsWith("II*\0") || ascii.startsWith("MM\0*")) return "images";
  if (ascii.startsWith("%PDF")) return "documents";
  if (ascii.startsWith("RIFF") && ascii.slice(8, 12) === "WAVE") return "audio";
  if (ascii.startsWith("fLaC") || ascii.startsWith("ID3") || ascii.startsWith("OggS")) return "audio";
  if (ascii.slice(4, 8) === "ftyp") {
    const brand = ascii.slice(8, 16).toLowerCase();
    if (brand.includes("avif") || brand.includes("avis")) return "images";
    return "video";
  }
  return "other";
};

const numberedName = (filename, label, number) => {
  const extension = path.extname(filename);
  let basename = extension ? filename.slice(0, -extension.length) : filename;
  const suffix = `--${label}-${number}${extension}`;
  const maxBytes = 240;
  while (Buffer.byteLength(`${basename}${suffix}`, "utf8") > maxBytes && basename.length > 1) {
    basename = basename.slice(0, -1);
  }
  return `${basename}${suffix}`;
};

const candidates = [];

for (const file of await walk(mediaRoot)) {
  const relative = path.relative(mediaRoot, file);
  const segments = relative.split(path.sep);
  if (segments.length === 1 && mediaControlFiles.has(segments[0])) continue;
  if (segments.length === 2 && segments[0] === "IMAGES" && approvedImageName.test(segments[1])) continue;
  candidates.push({ source: file, origin: "MEDIA recovery batch" });
}

for (const file of await walk(intakeRoot)) {
  const relative = path.relative(intakeRoot, file);
  if (!relative.includes(path.sep) && intakeControlFiles.has(relative)) continue;
  candidates.push({ source: file, origin: "existing protected intake" });
}

for (const candidate of candidates) {
  const info = await stat(candidate.source);
  candidate.sizeBytes = info.size;
  candidate.sha256 = await hashFile(candidate.source);
  candidate.group = await classify(path.basename(candidate.source), candidate.source);
}

// Give a real file the clean basename when a zero-byte placeholder has the same name.
candidates.sort((a, b) => b.sizeBytes - a.sizeBytes || a.source.localeCompare(b.source));

const reserved = new Map();
const manifest = [];
const totals = {};

for (const candidate of candidates) {
  const originalName = path.basename(candidate.source);
  let destination = path.join(intakeRoot, candidate.group, originalName);
  let disposition = "canonical";
  let relatedDestination = null;
  let number = 2;

  while (reserved.has(destination)) {
    const existing = reserved.get(destination);
    relatedDestination = path.relative(root, existing.destination);
    let label = "name-collision";
    if (candidate.sizeBytes === 0) label = "zero-placeholder";
    else if (candidate.sha256 === existing.sha256) label = "exact-duplicate";
    destination = path.join(intakeRoot, candidate.group, numberedName(originalName, label, number));
    disposition = label;
    number += 1;
  }

  const record = { ...candidate, destination };
  reserved.set(destination, record);
  totals[candidate.group] = (totals[candidate.group] || 0) + 1;
  manifest.push({
    originalPath: path.relative(root, candidate.source),
    consolidatedPath: path.relative(root, destination),
    origin: candidate.origin,
    group: candidate.group,
    disposition,
    relatedDestination,
    sizeBytes: candidate.sizeBytes,
    sha256: candidate.sha256,
  });
}

console.log(`${apply ? "Consolidating" : "Would consolidate"} ${candidates.length} files`);
for (const [group, total] of Object.entries(totals).sort()) console.log(`${group}: ${total}`);
for (const disposition of ["canonical", "exact-duplicate", "name-collision", "zero-placeholder"]) {
  console.log(`${disposition}: ${manifest.filter((item) => item.disposition === disposition).length}`);
}

if (!apply) {
  console.log("Dry run only. Re-run with --apply after reviewing the totals.");
  process.exit(0);
}

for (const record of manifest) {
  const source = path.join(root, record.originalPath);
  const destination = path.join(root, record.consolidatedPath);
  if (source === destination) continue;
  await mkdir(path.dirname(destination), { recursive: true });
  await rename(source, destination);
}

const removeEmptyDirectories = async (directory, keep = new Set()) => {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const fullPath = path.join(directory, entry.name);
    await removeEmptyDirectories(fullPath, keep);
    if (keep.has(fullPath)) continue;
    try { await rmdir(fullPath); } catch (error) {
      if (error.code !== "ENOTEMPTY") throw error;
    }
  }
};

await removeEmptyDirectories(mediaRoot, new Set([
  path.join(mediaRoot, "IMAGES"),
  path.join(mediaRoot, "AUDIO"),
  path.join(mediaRoot, "VIDEO"),
]));
await removeEmptyDirectories(intakeRoot, new Set([
  path.join(intakeRoot, "images"),
  path.join(intakeRoot, "audio"),
  path.join(intakeRoot, "video"),
  path.join(intakeRoot, "documents"),
  path.join(intakeRoot, "other"),
]));

await writeFile(
  path.join(intakeRoot, "CONSOLIDATION_MANIFEST.json"),
  `${JSON.stringify({ generatedAt: new Date().toISOString(), totals, records: manifest }, null, 2)}\n`,
);

console.log(`Wrote ${path.join(intakeRoot, "CONSOLIDATION_MANIFEST.json")}`);
