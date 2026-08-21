#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const manifestPath = path.join(root, "MEDIA", "RENAME_MANIFEST.csv");
const siteFiles = ["index.html", "services.html", "team.html", "site.css", "404.html"];

const parseCsvLine = (line) => {
  const values = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (quoted && character === '"' && line[index + 1] === '"') { value += '"'; index += 1; }
    else if (character === '"') quoted = !quoted;
    else if (character === "," && !quoted) { values.push(value); value = ""; }
    else value += character;
  }
  values.push(value);
  return values;
};

const lines = (await readFile(manifestPath, "utf8")).trim().split("\n").slice(1);
const replacements = new Map();
for (const line of lines) {
  const [originalPath, newPath] = parseCsvLine(line);
  if (originalPath.startsWith("MEDIA/IMAGES/") || originalPath.startsWith("MEDIA/AUDIO/") || originalPath.startsWith("MEDIA/VIDEO/")) {
    replacements.set(originalPath, newPath);
  }
}

let replacementCount = 0;
for (const filename of siteFiles) {
  const file = path.join(root, filename);
  let content = await readFile(file, "utf8");
  for (const [before, after] of replacements) {
    const occurrences = content.split(before).length - 1;
    if (!occurrences) continue;
    content = content.replaceAll(before, after);
    replacementCount += occurrences;
  }
  await writeFile(file, content);
}

console.log(`Updated ${replacementCount} active-site media references.`);
