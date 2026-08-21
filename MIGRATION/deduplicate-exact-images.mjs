#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const apply = process.argv.includes("--apply");
const repoRoot = process.cwd();
const inventoryPath = path.join(repoRoot, "MIGRATION/asset-inventory.json");
const metadataPath = path.join(repoRoot, "MEDIA/MEDIA_METADATA.csv");
const logPath = path.join(repoRoot, "MEDIA/EXACT_DUPLICATE_DELETION_LOG.csv");

const inventory = JSON.parse(fs.readFileSync(inventoryPath, "utf8"));
const activeSiteFiles = ["index.html", "services.html", "team.html", "site.css", "404.html"]
  .filter((file) => fs.existsSync(path.join(repoRoot, file)));
const activeText = activeSiteFiles
  .map((file) => fs.readFileSync(path.join(repoRoot, file), "utf8"))
  .join("\n");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function csvCell(value) {
  const string = String(value ?? "");
  return /[",\n\r]/.test(string) ? `"${string.replaceAll('"', '""')}"` : string;
}

function stringifyCsv(rows) {
  return `${rows.map((row) => row.map(csvCell).join(",")).join("\n")}\n`;
}

const metadataRows = parseCsv(fs.readFileSync(metadataPath, "utf8"));
const headers = metadataRows[0];
const sourceIndex = headers.indexOf("source_file");
const statusIndex = headers.indexOf("status");
const notesIndex = headers.indexOf("notes");
const metadataByPath = new Map(metadataRows.slice(1).map((row) => [row[sourceIndex], row]));

const groupsByHash = new Map();
for (const record of inventory.records) {
  if (!record.path.startsWith("MEDIA/IMAGES/") || record.sizeBytes <= 0) continue;
  if (!fs.existsSync(path.join(repoRoot, record.path))) continue;
  if (!groupsByHash.has(record.sha256)) groupsByHash.set(record.sha256, []);
  groupsByHash.get(record.sha256).push(record);
}

function keeperScore(record) {
  const metadata = metadataByPath.get(record.path) || [];
  const status = metadata[statusIndex] || "";
  let score = 0;
  if (activeText.includes(record.path)) score += 1_000_000;
  if (status === "duplicate-preferred-candidate") score += 100_000;
  if (!/-view-\d+\./.test(record.path)) score += 10_000;
  if (record.path.includes("checkmark-audio")) score += 1_000;
  score -= record.path.length;
  return score;
}

const duplicateGroups = [...groupsByHash.entries()]
  .filter(([, records]) => records.length > 1)
  .sort((a, b) => a[0].localeCompare(b[0]));
const deletions = [];
const keepers = new Set();

for (const [hash, records] of duplicateGroups) {
  const ranked = [...records].sort((a, b) => keeperScore(b) - keeperScore(a) || a.path.localeCompare(b.path));
  const keeper = ranked[0];
  keepers.add(keeper.path);
  for (const duplicate of ranked.slice(1)) {
    deletions.push({ hash, keeper: keeper.path, duplicate: duplicate.path, sizeBytes: duplicate.sizeBytes });
  }
}

console.log(JSON.stringify({
  mode: apply ? "apply" : "dry-run",
  exactDuplicateGroups: duplicateGroups.length,
  redundantCopies: deletions.length,
  bytesRecoverable: deletions.reduce((sum, item) => sum + item.sizeBytes, 0),
  referencedDeletionTargets: deletions.filter((item) => activeText.includes(item.duplicate)).length,
}, null, 2));

if (!apply) process.exit(0);

for (const item of deletions) {
  for (const siteFile of activeSiteFiles) {
    const absolute = path.join(repoRoot, siteFile);
    const before = fs.readFileSync(absolute, "utf8");
    const after = before.replaceAll(item.duplicate, item.keeper);
    if (after !== before) fs.writeFileSync(absolute, after);
  }
  fs.unlinkSync(path.join(repoRoot, item.duplicate));
}

const deletedPaths = new Set(deletions.map((item) => item.duplicate));
const retainedRows = [headers];
for (const row of metadataRows.slice(1)) {
  const source = row[sourceIndex];
  if (deletedPaths.has(source) || !fs.existsSync(path.join(repoRoot, source))) continue;
  if (keepers.has(source) && row[statusIndex]?.startsWith("duplicate-")) {
    row[statusIndex] = "pending-human-approval";
    row[notesIndex] = (row[notesIndex] || "")
      .replace(/Exact duplicate group [^.]+\.[ ]?/g, "")
      .trim();
  }
  retainedRows.push(row);
}
fs.writeFileSync(metadataPath, stringifyCsv(retainedRows));

const logRows = [["sha256", "kept_file", "deleted_file", "deleted_size_bytes"]];
for (const item of deletions) logRows.push([item.hash, item.keeper, item.duplicate, item.sizeBytes]);
fs.writeFileSync(logPath, stringifyCsv(logRows));

console.log(`Deleted ${deletions.length} byte-identical image copies; retained ${duplicateGroups.length} keeper files.`);
