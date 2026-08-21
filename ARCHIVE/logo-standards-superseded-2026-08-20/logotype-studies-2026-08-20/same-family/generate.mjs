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
  gold: "#d6a85e",
  cream: "#f3e7d7",
  muted: "#958d82",
  red: "#d73228",
};

const options = [
  {
    id: "01",
    slug: "optima-caps-stacked",
    label: "OPTIMA / CAPS STACKED",
    note: "One humanist family, with a calm spaced AUDIO",
    family: "Optima",
    first: "CHECKMARK",
    second: "AUDIO",
    firstSize: 88,
    secondSize: 61,
    firstSpacing: 1.2,
    secondSpacing: 12,
    firstY: 250,
    secondY: 344,
  },
  {
    id: "02",
    slug: "optima-title-stacked",
    label: "OPTIMA / TITLE CASE",
    note: "Softer and more personable, still distinctly premium",
    family: "Optima",
    first: "Checkmark",
    second: "Audio",
    firstSize: 101,
    secondSize: 70,
    firstSpacing: 0,
    secondSpacing: 4,
    firstY: 250,
    secondY: 346,
  },
  {
    id: "03",
    slug: "optima-single-line",
    label: "OPTIMA / SINGLE LINE",
    note: "The clearest unified wordmark treatment",
    family: "Optima",
    first: "Checkmark Audio",
    second: "",
    firstSize: 77,
    secondSize: 0,
    firstSpacing: 0.6,
    secondSpacing: 0,
    firstY: 300,
    secondY: 0,
  },
  {
    id: "04",
    slug: "baskerville-caps-stacked",
    label: "BASKERVILLE / CAPS STACKED",
    note: "One editorial serif family with restrained hierarchy",
    family: "Baskerville",
    first: "CHECKMARK",
    second: "AUDIO",
    firstSize: 92,
    secondSize: 64,
    firstSpacing: 0.8,
    secondSpacing: 11,
    firstY: 250,
    secondY: 344,
  },
  {
    id: "05",
    slug: "baskerville-title-stacked",
    label: "BASKERVILLE / TITLE CASE",
    note: "Warm editorial character without mixing typefaces",
    family: "Baskerville",
    first: "Checkmark",
    second: "Audio",
    firstSize: 107,
    secondSize: 75,
    firstSpacing: 0,
    secondSpacing: 3,
    firstY: 252,
    secondY: 350,
  },
  {
    id: "06",
    slug: "baskerville-single-line",
    label: "BASKERVILLE / SINGLE LINE",
    note: "An editorial masthead with the name fully unified",
    family: "Baskerville",
    first: "Checkmark Audio",
    second: "",
    firstSize: 82,
    secondSize: 0,
    firstSpacing: 0.4,
    secondSpacing: 0,
    firstY: 302,
    secondY: 0,
  },
];

function escapeXml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function wordmark(option, x, y) {
  const second = option.second
    ? `<text x="${x}" y="${y + option.secondY}" fill="${colors.gold}" font-family="${option.family}" font-size="${option.secondSize}" font-weight="400" letter-spacing="${option.secondSpacing}">${escapeXml(option.second)}</text>`
    : "";
  return `
    <text x="${x}" y="${y + option.firstY}" fill="${colors.cream}" font-family="${option.family}" font-size="${option.firstSize}" font-weight="400" letter-spacing="${option.firstSpacing}">${escapeXml(option.first)}</text>
    ${second}`;
}

function card(option, x, y, width = 1110, height = 465) {
  return `
  <g>
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="10" fill="${colors.panel}" stroke="${colors.border}" stroke-width="2"/>
    <text x="${x + 32}" y="${y + 53}" fill="${colors.gold}" font-family="Avenir Next Condensed, sans-serif" font-size="27" font-weight="400">${escapeXml(option.id + " / " + option.label)}</text>
    <text x="${x + 32}" y="${y + 84}" fill="${colors.muted}" font-family="Avenir Next, sans-serif" font-size="18" font-weight="400">${escapeXml(option.note)}</text>
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
  <text x="90" y="116" fill="${colors.gold}" font-family="Baskerville" font-size="61" font-weight="400" letter-spacing="1">CHECKMARK AUDIO</text>
  <text x="90" y="154" fill="${colors.cream}" font-family="Avenir Next Condensed, sans-serif" font-size="25" font-weight="400" letter-spacing="0.5">SAME-FAMILY STUDIES / NO MIXED TYPEFACES</text>
  <line x1="90" y1="175" x2="2310" y2="175" stroke="${colors.gold}" stroke-width="2"/>
  ${options.map((option, index) => card(option, ...positions[index])).join("\n")}
</svg>`;
}

function individualSvg(option) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
  <rect width="1200" height="600" fill="${colors.black}"/>
  ${card(option, 45, 67, 1110, 465)}
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
  if (result.status !== 0) {
    throw new Error(result.stderr || `rsvg-convert failed for ${svgName}`);
  }
}

writeAndRender(
  "checkmark-audio-same-family-board.svg",
  "checkmark-audio-same-family-board.png",
  boardSvg(),
);

for (const option of options) {
  writeAndRender(
    `${option.id}-${option.slug}-lockup.svg`,
    `${option.id}-${option.slug}-lockup.png`,
    individualSvg(option),
  );
}
