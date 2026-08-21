import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const outputDir = path.dirname(new URL(import.meta.url).pathname);
const repoRoot = path.resolve(outputDir, "../../../../..");
const officialLogoPath = path.join(
  repoRoot,
  "MEDIA/IMAGES/checkmark-audio-logo-official-white-transparent.png",
);
const officialLogoData = `data:image/png;base64,${fs.readFileSync(officialLogoPath).toString("base64")}`;

const white = "#FFFFFF";
const black = "#070808";

function lockupSvg({ background = false } = {}) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="720" viewBox="0 0 2400 720">
  ${background ? `<rect width="2400" height="720" fill="${black}"/>` : ""}
  <image href="${officialLogoData}" x="80" y="100" width="520" height="520" preserveAspectRatio="xMidYMid meet"/>
  <text x="680" y="335" fill="${white}" font-family="Optima" font-size="150" font-weight="400" letter-spacing="7">CHECKMARK AUDIO</text>
  <line x1="680" y1="405" x2="2290" y2="405" stroke="${white}" stroke-width="4"/>
</svg>`;
}

function render(svgName, pngName, svg, width) {
  const svgPath = path.join(outputDir, svgName);
  const pngPath = path.join(outputDir, pngName);
  fs.writeFileSync(svgPath, svg);
  const args = ["--output", pngPath];
  if (width) args.push("--width", String(width));
  args.push(svgPath);
  const result = spawnSync("rsvg-convert", args, {
    encoding: "utf8",
    env: { ...process.env, XDG_CACHE_HOME: "/private/tmp/checkmark-font-cache" },
  });
  if (result.status !== 0) throw new Error(result.stderr || `Could not render ${svgName}`);
}

const transparentSvg = lockupSvg();
const previewSvg = lockupSvg({ background: true });

render(
  "checkmark-audio-selected-04-white-transparent.svg",
  "checkmark-audio-selected-04-white-transparent-2400.png",
  transparentSvg,
);
render(
  "checkmark-audio-selected-04-white-transparent.svg",
  "checkmark-audio-selected-04-white-transparent-1200.png",
  transparentSvg,
  1200,
);
render(
  "checkmark-audio-selected-04-white-on-black-preview.svg",
  "checkmark-audio-selected-04-white-on-black-preview.png",
  previewSvg,
  1400,
);
