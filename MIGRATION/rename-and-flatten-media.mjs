#!/usr/bin/env node

import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { mkdir, readdir, rename, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const apply = process.argv.includes("--apply");
const root = process.cwd();
const mediaRoot = path.join(root, "MEDIA");
const intakeRoot = path.join(root, "ARCHIVE", "ignored-local", "wix-media-intake");
const documentRoot = path.join(root, "ARCHIVE", "reference", "wix-documents");

const hashFile = (file) => new Promise((resolve, reject) => {
  const hash = createHash("sha256");
  const stream = createReadStream(file);
  stream.on("data", (chunk) => hash.update(chunk));
  stream.on("error", reject);
  stream.on("end", () => resolve(hash.digest("hex")));
});

const filesIn = async (directory) => {
  try {
    return (await readdir(directory, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && entry.name !== ".DS_Store")
      .map((entry) => path.join(directory, entry.name));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
};

const cleanBase = (filename, hash, type) => {
  const extension = path.extname(filename);
  let value = extension ? filename.slice(0, -extension.length) : filename;
  value = value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  value = value.replace(/^\d{2,3}-/, "");
  value = value.replace(/--(?:zero-placeholder|exact-duplicate|name-collision)-\d+$/i, "");
  value = value.replace(/[-_][0-9a-f]{24,}$/i, "");
  value = value.replace(/\b(?:copy|edited|final)(?:[-_ ]?\d+)?\b/gi, " ");
  value = value.replace(/%25|%20/gi, " ");
  value = value.replace(/&/g, " and ").replace(/[’'“”"`]/g, "");
  value = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  value = value.replace(/(?:-)+/g, "-");
  const generic = /^(?:dsc|img|image|photo|screenshot|screen-shot|studio|background|booth|mic|music|video)(?:-|$)/.test(value) && value.length < 28;
  if (!value || generic) value = `checkmark-audio-${type}-${hash.slice(0, 10)}`;
  if (value.length > 150) value = value.slice(0, 150).replace(/-+$/g, "");
  return value;
};

const preferredNameScore = (name) => {
  let score = name.length;
  if (/checkmark|albuquerque|studio|recording|vocal|mixing|mastering|band|booth|control|artist|logo|gavin|richard/i.test(name)) score += 100;
  if (/^(?:dsc|img|image|photo|screenshot|screen shot)/i.test(name)) score -= 150;
  if (/edited|copy|final|[0-9a-f]{24,}/i.test(name)) score -= 40;
  return score;
};

const sources = [];
for (const [folder, type] of [["IMAGES", "image"], ["AUDIO", "audio"], ["VIDEO", "video"]]) {
  for (const file of await filesIn(path.join(mediaRoot, folder))) sources.push({ file, type, origin: "active-media" });
}
for (const [folder, type] of [["images", "image"], ["audio", "audio"], ["video", "video"], ["documents", "document"]]) {
  for (const file of await filesIn(path.join(intakeRoot, folder))) sources.push({ file, type, origin: "wix-recovery" });
}

for (const source of sources) {
  source.sizeBytes = (await stat(source.file)).size;
  source.sha256 = await hashFile(source.file);
}

const namesByHash = new Map();
for (const source of sources.filter((item) => item.sizeBytes > 0)) {
  const names = namesByHash.get(source.sha256) || [];
  names.push(path.basename(source.file));
  namesByHash.set(source.sha256, names);
}

const countByHash = new Map();
const reserved = new Set();
const records = [];

for (const source of sources.sort((a, b) => a.file.localeCompare(b.file))) {
  const originalName = path.basename(source.file);
  const extension = path.extname(originalName).toLowerCase();
  let folder;
  let finalExtension = extension;
  if (source.sizeBytes === 0) folder = path.join(mediaRoot, "UNREADABLE");
  else if (source.type === "image") folder = path.join(mediaRoot, "IMAGES");
  else if (source.type === "audio") folder = path.join(mediaRoot, "AUDIO");
  else if (source.type === "video") folder = path.join(mediaRoot, "VIDEO");
  else folder = documentRoot;

  if (!finalExtension) {
    if (source.type === "image") finalExtension = ".jpg";
    else if (source.type === "audio") finalExtension = ".audio";
    else if (source.type === "video") finalExtension = ".video";
    else finalExtension = ".file";
  }

  const preferred = source.sizeBytes > 0
    ? [...namesByHash.get(source.sha256)].sort((a, b) => preferredNameScore(b) - preferredNameScore(a))[0]
    : originalName;
  const typeLabel = source.type === "document" ? "document" : source.type;
  let basename = cleanBase(preferred, source.sha256, typeLabel);
  if (source.sizeBytes === 0) basename = `${basename}-unreadable`;

  const hashCount = (countByHash.get(source.sha256) || 0) + 1;
  countByHash.set(source.sha256, hashCount);
  if (source.sizeBytes > 0 && hashCount > 1) basename = `${basename}-alternate-${String(hashCount).padStart(2, "0")}`;

  let filename = `${basename}${finalExtension}`;
  let variant = 2;
  while (reserved.has(path.join(folder, filename))) {
    filename = `${basename}-variant-${String(variant).padStart(2, "0")}${finalExtension}`;
    variant += 1;
  }
  const destination = path.join(folder, filename);
  reserved.add(destination);
  records.push({ ...source, originalName, destination, filename });
}

console.log(`${apply ? "Moving and renaming" : "Would move and rename"} ${records.length} files`);
for (const folder of ["IMAGES", "AUDIO", "VIDEO", "UNREADABLE"]) {
  console.log(`${folder}: ${records.filter((item) => path.dirname(item.destination) === path.join(mediaRoot, folder)).length}`);
}
console.log(`ARCHIVE/reference/wix-documents: ${records.filter((item) => path.dirname(item.destination) === documentRoot).length}`);

if (!apply) {
  console.log("Dry run only. Re-run with --apply after reviewing totals.");
  process.exit(0);
}

const stagingRoot = path.join(root, ".media-rename-staging");
await mkdir(stagingRoot, { recursive: true });
for (let index = 0; index < records.length; index += 1) {
  const record = records[index];
  const staged = path.join(stagingRoot, `${String(index).padStart(4, "0")}${path.extname(record.destination)}`);
  await rename(record.file, staged);
  record.staged = staged;
}
for (const record of records) {
  await mkdir(path.dirname(record.destination), { recursive: true });
  await rename(record.staged, record.destination);
}

const csv = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
const lines = [["original_path", "new_path", "media_type", "size_bytes", "sha256"].map(csv).join(",")];
for (const record of records) {
  lines.push([
    path.relative(root, record.file), path.relative(root, record.destination), record.type, record.sizeBytes, record.sha256,
  ].map(csv).join(","));
}
await writeFile(path.join(mediaRoot, "RENAME_MANIFEST.csv"), `${lines.join("\n")}\n`);

console.log(`Wrote ${path.join(mediaRoot, "RENAME_MANIFEST.csv")}`);
