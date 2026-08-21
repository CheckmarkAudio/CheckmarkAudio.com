#!/usr/bin/env node

import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const intakeRoot = path.join(root, "ARCHIVE", "ignored-local", "wix-media-intake");
const output = path.join(intakeRoot, "MEDIA_REVIEW_QUEUE.csv");
const groups = ["images", "audio", "video", "documents"];

const hashFile = (file) => new Promise((resolve, reject) => {
  const hash = createHash("sha256");
  const stream = createReadStream(file);
  stream.on("data", (chunk) => hash.update(chunk));
  stream.on("error", reject);
  stream.on("end", () => resolve(hash.digest("hex")));
});

const scopeHint = (filename) => {
  const value = filename.toLowerCase();
  if (/school|lesson|teacher|teaching|student|piano|violin|guitar lesson|audio school/.test(value)) return "school-review";
  if (/logo|icon|badge|accredit|namm|workforce|library|rrfcs|lafa|lafs/.test(value)) return "brand-or-credential-review";
  if (/studio|booth|control room|live room|microphone|mixer|mixing|gear|rack|engineer|recording|checkmark sign|waiting room/.test(value)) return "studio-review";
  if (/album|artist|rapper|band|gardenview|millie|antoin|diego|vohn|country|song|music video|demo|richard|marz|megan|gavin/.test(value)) return "person-or-client-permission-review";
  return "manual-review";
};

const csv = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
const records = [];

for (const group of groups) {
  const directory = path.join(intakeRoot, group);
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || entry.name === ".DS_Store") continue;
    const file = path.join(directory, entry.name);
    const info = await stat(file);
    records.push({
      group,
      filename: entry.name,
      sizeBytes: info.size,
      sha256: await hashFile(file),
      scopeHint: scopeHint(entry.name),
    });
  }
}

const byHash = new Map();
for (const record of records.filter((item) => item.sizeBytes > 0)) {
  const items = byHash.get(record.sha256) || [];
  items.push(record);
  byHash.set(record.sha256, items);
}

let duplicateNumber = 1;
for (const items of byHash.values()) {
  if (items.length < 2) continue;
  for (const item of items) item.duplicateGroup = `duplicate-${String(duplicateNumber).padStart(3, "0")}`;
  duplicateNumber += 1;
}

records.sort((a, b) => a.group.localeCompare(b.group) || a.filename.localeCompare(b.filename));

const header = [
  "media_type", "current_filename", "size_bytes", "sha256", "duplicate_group",
  "preliminary_scope", "decode_or_playback_status", "ownership_status",
  "people_or_client_permission", "keep_status", "content_category", "proposed_catalog_id",
  "proposed_description", "proposed_source_filename", "proposed_web_filename",
  "creator", "credit_line", "copyright_notice", "location_confirmed", "page_assignment",
  "alt_text", "caption", "review_notes",
];

const lines = [header.map(csv).join(",")];
for (const record of records) {
  lines.push([
    record.group,
    record.filename,
    record.sizeBytes,
    record.sha256,
    record.duplicateGroup || "",
    record.scopeHint,
    record.sizeBytes === 0 ? "zero-byte-recover-again" : "pending-human-review",
    "unconfirmed",
    "unconfirmed",
    record.sizeBytes === 0 ? "recover" : "pending",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ].map(csv).join(","));
}

await writeFile(output, `${lines.join("\n")}\n`);
console.log(`Wrote ${output}`);
console.log(`Records: ${records.length}`);
console.log(`Exact duplicate groups: ${duplicateNumber - 1}`);
console.log(`Zero-byte placeholders: ${records.filter((item) => item.sizeBytes === 0).length}`);
