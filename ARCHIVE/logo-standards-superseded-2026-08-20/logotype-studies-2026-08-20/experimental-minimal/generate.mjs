import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const outputDir = path.dirname(new URL(import.meta.url).pathname);
const isotypePath = path.resolve(outputDir, "../isotype-unchanged-crop.png");
const isotypeData = `data:image/png;base64,${fs.readFileSync(isotypePath).toString("base64")}`;

const c = {
  black: "#070808",
  panel: "#10110f",
  border: "#443b2b",
  cream: "#f3e7d7",
  muted: "#958d82",
  red: "#d73228",
};

const options = [
  {
    id: "01",
    slug: "microline",
    label: "MICROLINE",
    note: "Small scale and generous negative space",
    size: 45,
    tracking: 6,
    icon: { x: 58, y: 167, w: 225, h: 214 },
    render(x, y) {
      return text("CHECKMARK AUDIO", x + 337, y + 288, this);
    },
  },
  {
    id: "02",
    slug: "offset-axis",
    label: "OFFSET AXIS",
    note: "The two words share one style but occupy separate planes",
    size: 58,
    tracking: 2,
    icon: { x: 48, y: 149, w: 255, h: 242 },
    render(x, y) {
      return text("CHECKMARK", x + 347, y + 236, this) + text("AUDIO", x + 670, y + 342, this);
    },
  },
  {
    id: "03",
    slug: "vertical-spine",
    label: "VERTICAL SPINE",
    note: "A compact editorial edge treatment",
    size: 30,
    tracking: 3,
    icon: { x: 108, y: 149, w: 255, h: 242 },
    render(x, y) {
      return text("CHECKMARK", x + 420, y + 398, this, `transform="rotate(-90 ${x + 420} ${y + 398})"`) +
        text("AUDIO", x + 472, y + 398, this, `transform="rotate(-90 ${x + 472} ${y + 398})"`);
    },
  },
  {
    id: "04",
    slug: "hairline",
    label: "HAIRLINE",
    note: "A single restrained rule anchors the wordmark",
    size: 57,
    tracking: 3,
    icon: { x: 48, y: 149, w: 255, h: 242 },
    render(x, y) {
      return text("CHECKMARK AUDIO", x + 347, y + 273, this) +
        `<line x1="${x + 347}" y1="${y + 312}" x2="${x + 1005}" y2="${y + 312}" stroke="${c.cream}" stroke-width="1.5"/>`;
    },
  },
  {
    id: "05",
    slug: "split-horizon",
    label: "SPLIT HORIZON",
    note: "Extreme separation with a shared baseline system",
    size: 52,
    tracking: 4,
    icon: { x: 48, y: 149, w: 255, h: 242 },
    render(x, y) {
      return text("CHECKMARK", x + 347, y + 248, this) +
        text("AUDIO", x + 780, y + 344, this) +
        `<line x1="${x + 347}" y1="${y + 292}" x2="${x + 1005}" y2="${y + 292}" stroke="${c.cream}" stroke-width="1"/>`;
    },
  },
  {
    id: "06",
    slug: "quiet-stack",
    label: "QUIET STACK",
    note: "A narrow typographic column beside the isotype",
    size: 49,
    tracking: 9,
    icon: { x: 62, y: 159, w: 235, h: 223 },
    render(x, y) {
      return text("CHECKMARK", x + 365, y + 255, this) + text("AUDIO", x + 365, y + 342, this);
    },
  },
];

function escapeXml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function text(value, x, y, option, extra = "") {
  return `<text x="${x}" y="${y}" fill="${c.cream}" font-family="Optima" font-size="${option.size}" font-weight="400" letter-spacing="${option.tracking}" ${extra}>${escapeXml(value)}</text>`;
}

function card(option, x, y, width = 1110, height = 465) {
  const icon = option.icon;
  return `
  <g>
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="10" fill="${c.panel}" stroke="${c.border}" stroke-width="2"/>
    <text x="${x + 32}" y="${y + 53}" fill="${c.cream}" font-family="Avenir Next Condensed, sans-serif" font-size="27">${escapeXml(option.id + " / " + option.label)}</text>
    <text x="${x + 32}" y="${y + 84}" fill="${c.muted}" font-family="Avenir Next, sans-serif" font-size="18">${escapeXml(option.note)}</text>
    <rect x="${x + width - 44}" y="${y + 31}" width="10" height="10" rx="2" transform="rotate(45 ${x + width - 39} ${y + 36})" fill="${c.red}"/>
    <image href="${isotypeData}" x="${x + icon.x}" y="${y + icon.y}" width="${icon.w}" height="${icon.h}" preserveAspectRatio="xMidYMid meet"/>
    ${option.render(x, y)}
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
  <rect width="2400" height="1800" fill="${c.black}"/>
  <text x="90" y="116" fill="${c.cream}" font-family="Optima" font-size="61" font-weight="400" letter-spacing="1">CHECKMARK AUDIO</text>
  <text x="90" y="154" fill="${c.cream}" font-family="Avenir Next Condensed, sans-serif" font-size="25">EXPERIMENTAL MINIMAL STUDIES / ONE FONT + ONE COLOR</text>
  <line x1="90" y1="175" x2="2310" y2="175" stroke="${c.cream}" stroke-width="2"/>
  ${options.map((option, index) => card(option, ...positions[index])).join("\n")}
</svg>`;
}

function individualSvg(option) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
  <rect width="1200" height="600" fill="${c.black}"/>
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

writeAndRender("checkmark-audio-experimental-minimal-board.svg", "checkmark-audio-experimental-minimal-board.png", boardSvg());

for (const option of options) {
  writeAndRender(
    `${option.id}-${option.slug}-lockup.svg`,
    `${option.id}-${option.slug}-lockup.png`,
    individualSvg(option),
  );
}
