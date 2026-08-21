#!/usr/bin/env node

import { mkdir, readdir, rename } from "node:fs/promises";
import path from "node:path";

const apply = process.argv.includes("--apply");
const root = process.cwd();
const activeMedia = path.join(root, "MEDIA");
const intakeRoot = path.join(root, "ARCHIVE", "ignored-local", "wix-media-intake");

const groups = {
  images: new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]),
  audio: new Set([".aif", ".aiff", ".flac", ".m4a", ".mp3", ".wav"]),
  video: new Set([".m4v", ".mov", ".mp4", ".webm"]),
  raw: new Set([".arw", ".cr2", ".cr3", ".dng", ".nef", ".orf", ".raf", ".rw2"]),
  documents: new Set([".pdf"]),
};

const approvedName = /^\d{2,}-[a-z0-9]+(?:-[a-z0-9]+)*-(?:source|web)\.[a-z0-9]+$/;

const groupFor = (filename) => {
  const extension = path.extname(filename).toLowerCase();
  for (const [group, extensions] of Object.entries(groups)) {
    if (extensions.has(extension)) return group;
  }
  return "other";
};

const filesIn = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesIn(entryPath));
    if (entry.isFile() && entry.name !== ".DS_Store") files.push(entryPath);
  }
  return files;
};

const candidates = [];

for (const folder of ["IMAGES", "AUDIO", "VIDEO"]) {
  const directory = path.join(activeMedia, folder);
  for (const file of await filesIn(directory)) {
    const filename = path.basename(file);
    if (folder === "IMAGES" && path.dirname(file) === directory && approvedName.test(filename)) continue;
    const relativePath = path.relative(directory, file);
    candidates.push({
      source: file,
      group: groupFor(filename),
      relativePath,
    });
  }
}

const destinations = new Set();
for (const candidate of candidates) {
  const destination = path.join(intakeRoot, candidate.group, candidate.relativePath);
  if (destinations.has(destination)) {
    throw new Error(`Two intake files would collide at ${destination}`);
  }
  destinations.add(destination);
  candidate.destination = destination;
}

console.log(`${apply ? "Moving" : "Would move"} ${candidates.length} unreviewed files to ${intakeRoot}`);

const totals = {};
for (const candidate of candidates) {
  totals[candidate.group] = (totals[candidate.group] || 0) + 1;
  if (!apply) continue;
  await mkdir(path.dirname(candidate.destination), { recursive: true });
  await rename(candidate.source, candidate.destination);
}

for (const [group, total] of Object.entries(totals).sort()) {
  console.log(`${group}: ${total}`);
}

if (!apply) {
  console.log("Dry run only. Re-run with --apply after reviewing the counts.");
}
