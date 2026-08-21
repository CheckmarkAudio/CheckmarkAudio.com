import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const outputDir = path.dirname(new URL(import.meta.url).pathname);
const repoRoot = path.resolve(outputDir, "../../../../..");
const officialLogoPath = path.join(
  repoRoot,
  "MEDIA/IMAGES/checkmark-audio-logo-official-white-transparent.png",
);
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "checkmark-vector-"));
const maskPath = path.join(tempDir, "isotype-mask.pbm");
const tracedPath = path.join(tempDir, "isotype-traced.svg");
const wordmarkPath = path.join(tempDir, "wordmark-outlined.svg");

function run(command, args, env = process.env) {
  const result = spawnSync(command, args, { encoding: "utf8", env });
  if (result.status !== 0) {
    throw new Error(result.stderr || `${command} failed`);
  }
}

try {
  run("python3", [
    "-c",
    [
      "from PIL import Image",
      "import sys",
      "im = Image.open(sys.argv[1]).convert('RGBA')",
      "alpha = im.getchannel('A')",
      "alpha.point(lambda x: 0 if x > 127 else 255, mode='1').save(sys.argv[2])",
    ].join("; "),
    officialLogoPath,
    maskPath,
  ]);

  run("potrace", [
    "--svg",
    "--flat",
    "--color", "#ffffff",
    "--turdsize", "2",
    "--alphamax", "1",
    "--opttolerance", "0.05",
    "--unit", "100",
    "--output", tracedPath,
    maskPath,
  ]);

  run("pango-view", [
    "--no-display",
    "--pixels",
    "--font=Optima 150",
    "--foreground=#ffffff",
    "--background=transparent",
    "--markup",
    "--text=<span letter_spacing=\"7168\">CHECKMARK AUDIO</span>",
    `--output=${wordmarkPath}`,
  ], { ...process.env, XDG_CACHE_HOME: "/private/tmp/checkmark-font-cache" });

  const tracedSvg = fs.readFileSync(tracedPath, "utf8");
  const wordmarkSvg = fs.readFileSync(wordmarkPath, "utf8");

  const isotypeGroup = tracedSvg.match(/(<g transform="translate\([\s\S]*?<\/g>)/)?.[1];
  const glyphDefs = wordmarkSvg.match(/<defs>([\s\S]*?)<\/defs>/)?.[1];
  const glyphUses = wordmarkSvg.match(/<\/defs>\s*(<g fill=[\s\S]*?<\/g>)\s*<\/svg>/)?.[1];

  if (!isotypeGroup || !glyphDefs || !glyphUses) {
    throw new Error("Could not extract vector paths from generated SVG sources.");
  }

  const cleanGlyphDefs = glyphDefs
    .replace(/<g id="glyph-0-7">[\s\S]*?<\/g>/, "")
    .replace(/<image id="source-17"[\s\S]*?\/>/, "")
    .replace(/<mask id="mask-0">[\s\S]*?<\/mask>/, "");
  const cleanGlyphUses = glyphUses.replace(/<use xlink:href="#glyph-0-7"[\s\S]*?\/>/, "");

  const isotypeSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000" viewBox="0 0 2000 2000" role="img" aria-labelledby="title desc">
  <title id="title">Checkmark Audio isotype</title>
  <desc id="desc">White headphones surrounding a vintage studio microphone.</desc>
  ${isotypeGroup}
</svg>`;

  const wordmarkSvgOnly = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1551" height="199" viewBox="0 0 1551 199" role="img" aria-labelledby="title desc">
  <title id="title">Checkmark Audio outlined wordmark</title>
  <desc id="desc">The words Checkmark Audio in uppercase outlined Optima lettering.</desc>
  <defs>${cleanGlyphDefs}</defs>
  ${cleanGlyphUses}
</svg>`;

  function fullLockup(background = false) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2400" height="720" viewBox="0 0 2400 720" role="img" aria-labelledby="title desc">
  <title id="title">Checkmark Audio horizontal logo</title>
  <desc id="desc">White headphones and studio microphone isotype beside an uppercase Checkmark Audio wordmark and fine underline.</desc>
  ${background ? '<rect width="2400" height="720" fill="#070808"/>' : ""}
  <defs>${cleanGlyphDefs}</defs>
  <g transform="translate(80 100) scale(0.26)">${isotypeGroup}</g>
  <g transform="translate(680 184)">${cleanGlyphUses}</g>
  <path d="M680 405H2290" fill="none" stroke="#ffffff" stroke-width="4"/>
</svg>`;
  }

  const vectorPath = path.join(outputDir, "checkmark-audio-selected-04-white-true-vector.svg");
  const previewSvgPath = path.join(outputDir, "checkmark-audio-selected-04-true-vector-preview.svg");
  fs.writeFileSync(path.join(outputDir, "checkmark-audio-isotype-white-traced-vector.svg"), isotypeSvg);
  fs.writeFileSync(path.join(outputDir, "checkmark-audio-optima-wordmark-white-outlined.svg"), wordmarkSvgOnly);
  fs.writeFileSync(vectorPath, fullLockup());
  fs.writeFileSync(previewSvgPath, fullLockup(true));

  run("rsvg-convert", [
    "--output", path.join(outputDir, "checkmark-audio-selected-04-white-true-vector-2400.png"),
    vectorPath,
  ], { ...process.env, XDG_CACHE_HOME: "/private/tmp/checkmark-font-cache" });
  run("rsvg-convert", [
    "--width", "1400",
    "--output", path.join(outputDir, "checkmark-audio-selected-04-true-vector-preview.png"),
    previewSvgPath,
  ], { ...process.env, XDG_CACHE_HOME: "/private/tmp/checkmark-font-cache" });
} finally {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
