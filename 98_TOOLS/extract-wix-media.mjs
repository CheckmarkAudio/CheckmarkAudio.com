#!/usr/bin/env node

import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const input = process.argv[2];
const outputDir = process.argv[3] || "99_ARCHIVE/ignored-local/wix-export";

if (!input) {
  console.error("Usage: node 98_TOOLS/extract-wix-media.mjs path/to/wix-network.har [output-dir]");
  process.exit(1);
}

const seen = new Map();

const decodeHtml = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#34;", '"')
    .replaceAll("\\u002F", "/")
    .replaceAll("\\/", "/");

const stripWixTransform = (url) => {
  const clean = decodeHtml(url).replace(/[)"'<>]+$/g, "");
  const mediaMatch = clean.match(/https:\/\/static\.wixstatic\.com\/media\/([^?\s"'<>]+)/);

  if (!mediaMatch) {
    return clean;
  }

  const mediaPath = mediaMatch[1];
  const transformIndex = mediaPath.indexOf("/v1/");
  return `https://static.wixstatic.com/media/${transformIndex === -1 ? mediaPath : mediaPath.slice(0, transformIndex)}`;
};

const addUrl = (url, source = "unknown") => {
  if (!url) {
    return;
  }

  const normalized = stripWixTransform(url);

  if (!normalized.startsWith("https://static.wixstatic.com/media/")) {
    return;
  }

  if (!seen.has(normalized)) {
    const pathname = new URL(normalized).pathname;
    seen.set(normalized, {
      url: normalized,
      file: decodeURIComponent(path.basename(pathname)),
      sources: [],
    });
  }

  seen.get(normalized).sources.push(source);
};

const scanText = (text, source) => {
  if (!text) {
    return;
  }

  const decoded = decodeHtml(text);
  const matches = decoded.match(/https:\/\/static\.wixstatic\.com\/media\/[^\s"'<>\\]+/g) || [];
  matches.forEach((url) => addUrl(url, source));
};

const scanJson = (value, source) => {
  if (typeof value === "string") {
    scanText(value, source);
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => scanJson(item, source));
    return;
  }

  if (value && typeof value === "object") {
    Object.values(value).forEach((item) => scanJson(item, source));
  }
};

const unwrapRtf = (value) => {
  if (!value.startsWith("{\\rtf")) {
    return value;
  }

  const bodyStart = value.indexOf("\\{\\");
  const body = bodyStart === -1 ? value : value.slice(bodyStart);

  return body
    .replace(/\\[a-z]+-?\d* ?/g, "")
    .replace(/\\'/g, "'")
    .replace(/\\([{}\\])/g, "$1")
    .replace(/\r?\n/g, "")
    .replace(/}\s*$/g, "")
    .trim();
};

const raw = unwrapRtf(await readFile(input, "utf8"));
const har = JSON.parse(raw);
const entries = har?.log?.entries || [];

for (const entry of entries) {
  const source = entry.request?.url || "har-entry";
  addUrl(entry.request?.url, source);
  scanText(entry.response?.content?.text || "", source);

  if (entry.response?.content?.mimeType?.includes("json")) {
    try {
      scanJson(JSON.parse(entry.response.content.text), source);
    } catch {
      // Some Wix responses are JSON-ish or compressed placeholders in HAR exports.
    }
  }
}

const media = [...seen.values()].sort((a, b) => a.file.localeCompare(b.file));
const urls = media.map((item) => item.url).join("\n");

await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "wix-media-manifest.json"), JSON.stringify(media, null, 2));
await writeFile(path.join(outputDir, "wix-media-urls.txt"), `${urls}\n`);

console.log(`Found ${media.length} Wix media URLs.`);
console.log(`Wrote ${path.join(outputDir, "wix-media-manifest.json")}`);
console.log(`Wrote ${path.join(outputDir, "wix-media-urls.txt")}`);
