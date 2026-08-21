import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const outputDir = path.dirname(new URL(import.meta.url).pathname);
const isotypePath = path.resolve(outputDir, "../isotype-unchanged-crop.png");
const isotypeData = `data:image/png;base64,${fs.readFileSync(isotypePath).toString("base64")}`;

const colors = {
  black: "#070808",
  panel: "#10110f",
  border: "#443b2b",
  cream: "#f3e7d7",
  muted: "#958d82",
  red: "#d73228",
};

// Every brand-name treatment below deliberately uses the exact same typeface,
// weight, case, and color for both words. Only layout and spacing vary.
const options = [
  {
    id: "01",
    slug: "stacked-balanced",
    label: "STACKED / BALANCED",
    note: "The corrected continuation of the preferred 01",
    lines: ["CHECKMARK", "AUDIO"],
    size: 76,
    tracking: 2,
    lineGap: 96,
    align: "start",
  },
  {
    id: "02",
    slug: "stacked-airy",
    label: "STACKED / AIRY",
    note: "More breathing room, with identical typography",
    lines: ["CHECKMARK", "AUDIO"],
    size: 70,
    tracking: 7,
    lineGap: 102,
    align: "start",
  },
  {
    id: "03",
    slug: "single-line-balanced",
    label: "SINGLE LINE / BALANCED",
    note: "A straightforward horizontal wordmark",
    lines: ["CHECKMARK AUDIO"],
    size: 66,
    tracking: 1.5,
    lineGap: 0,
    align: "start",
  },
  {
    id: "04",
    slug: "single-line-spaced",
    label: "SINGLE LINE / SPACED",
    note: "The same wordmark with a wider editorial rhythm",
    lines: ["CHECKMARK AUDIO"],
    size: 58,
    tracking: 6,
    lineGap: 0,
    align: "start",
  },
  {
    id: "05",
    slug: "stacked-centered",
    label: "STACKED / CENTERED",
    note: "Equal treatment with centered line alignment",
    lines: ["CHECKMARK", "AUDIO"],
    size: 73,
    tracking: 3,
    lineGap: 96,
    align: "middle",
  },
  {
    id: "06",
    slug: "stacked-compact",
    label: "STACKED / COMPACT",
    note: "A tighter studio-mark arrangement",
    lines: ["CHECKMARK", "AUDIO"],
    size: 79,
    tracking: 0.5,
    lineGap: 82,
    align: "start",
  },
];

function escapeXml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function wordmark(option, x, y) {
  const oneLine = option.lines.length === 1;
  const startY = oneLine ? y + 296 : y + 245;
  const textAnchor = option.align === "middle" ? "middle" : "start";
  const textX = option.align === "middle" ? x + 320 : x;
  return option.lines.map((line, index) => `
    <text x="${textX}" y="${startY + index * option.lineGap}" fill="${colors.cream}" font-family="Optima" font-size="${option.size}" font-weight="400" letter-spacing="${option.tracking}" text-anchor="${textAnchor}">${escapeXml(line)}</text>`).join("");
}

function card(option, x, y, width = 1110, height = 465) {
  return `
  <g>
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="10" fill="${colors.panel}" stroke="${colors.border}" stroke-width="2"/>
    <text x="${x + 32}" y="${y + 53}" fill="${colors.cream}" font-family="Avenir Next Condensed, sans-serif" font-size="27">${escapeXml(option.id + " / " + option.label)}</text>
    <text x="${x + 32}" y="${y + 84}" fill="${colors.muted}" font-family="Avenir Next, sans-serif" font-size="18">${escapeXml(option.note)}</text>
    <rect x="${x + width - 44}" y="${y + 31}" width="10" height="10" rx="2" transform="rotate(45 ${x + width - 39} ${y + 36})" fill="${colors.red}"/>
    <image href="${isotypeData}" x="${x + 48}" y="${y + 149}" width="255" height="242" preserveAspectRatio="xMidYMid meet"/>
    ${wordmark(option, x + 347, y)}
  </g>`;
}

function boardSvg() {
  const positions = [
    [70, 225], [1220, 225],
    [70, 735], [1220, 735],
    [70, 1245], [1220, 1245],
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1800" viewBox="0 0 2400 1800">
  <rect width="2400" height="1800" fill="${colors.black}"/>
  <text x="90" y="116" fill="${colors.cream}" font-family="Optima" font-size="61" font-weight="400" letter-spacing="1">CHECKMARK AUDIO</text>
  <text x="90" y="154" fill="${colors.cream}" font-family="Avenir Next Condensed, sans-serif" font-size="25">UNIFORM OPTIMA STUDIES / ONE FONT + ONE COLOR</text>
  <line x1="90" y1="175" x2="2310" y2="175" stroke="${colors.cream}" stroke-width="2"/>
  ${options.map((option, index) => card(option, ...positions[index])).join("\n")}
</svg>`;
}

function individualSvg(option) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
  <rect width="1200" height="600" fill="${colors.black}"/>
  ${card(option, 45, 67)}
</svg>`;
}

function writeAndRender(svgName, pngName, svg) {
  const svgPath = path.join(outputDir, svgName);
  const pngPath = path.join(outputDir, pngName);
  fs.writeFileSync(svgPath, svg);
  const result = spawnSync("rsvg-convert", ["--output", pngPath, svgPath], {
    encoding: "utf8",
    env: { ...process.env, XDG_CACHE_HOME: "/private/tmp/checkmark-font-cache" },
  });
  if (result.status !== 0) throw new Error(result.stderr || `Could not render ${svgName}`);
}

writeAndRender("checkmark-audio-uniform-optima-board.svg", "checkmark-audio-uniform-optima-board.png", boardSvg());

for (const option of options) {
  writeAndRender(
    `${option.id}-${option.slug}-lockup.svg`,
    `${option.id}-${option.slug}-lockup.png`,
    individualSvg(option),
  );
}
