---
title: Background Textures
status: sourcing
updated: 2026-08-26
---

# Background Textures

Textures for layering into the site's backgrounds — especially the light/cream sections — using professional layering and blend-mode techniques so the site reads as high-quality, classy, and deliberately designed rather than flat.

## Folder layout

- `REFERENCE/` — inspiration only. Bridget's search-engine screenshots and any mood/direction images. **Never use these on the site** — they're low-res screen grabs of stock previews, most watermarked/licensable.
- `APPROVED/` — the real, usable texture files: properly licensed (or genuinely free — CC0/public domain), full resolution, cleared for commercial web use. Only files in here may be built into the site.

## Direction (from Bridget's reference screenshots, 2026-08-26)

Three texture families were pulled as the direction:

1. **Warm brown/gold grunge** — earthy, aged, warm-toned distressed surfaces (fits the champagne-gold/warm-cream palette directly)
2. **B&W industrial** — concrete, brushed/perforated metal, grunge walls (for dark sections; convert/tint to fit the palette, never cold-blue)
3. **Geometric line patterns** — fine isometric-cube and lattice linework (subtle, low-contrast use only — e.g., a barely-visible pattern layer behind a section)

## Sourcing rules

- Every file added to `APPROVED/` needs its source and license noted in `SOURCES.md` in that folder (create on first add). Same rights discipline as the photo library — no unlicensed stock pulls.
- Good free sources: Unsplash, Pexels, Lost & Taken, TextureLabs, Transparent Textures, Pixabay (check each file's license individually).
- Prefer large source files (2000px+ on the long edge); we can downscale/compress to WebP for the site afterward.
- Seamless/tileable versions preferred where available — they stay small and repeat cleanly.

## Usage technique (for whoever implements)

Layer textures over the flat brand background colors — don't replace the colors with a texture image:

- Base layer: the brand color (`--cream #F0E1CF` / `#F7ECDE` light sections, deep blacks for dark sections)
- Texture layer(s) on top via CSS `background-image` stacking or a pseudo-element, using `mix-blend-mode` (`multiply`, `overlay`, or `soft-light`) at **low opacity (roughly 4–15%)** — the texture should be felt, not seen
- Tint to palette: textures must read warm (cream/gold/brown character), never introduce off-palette hues
- Keep text contrast intact — WCAG AA still applies over textured backgrounds
- Compress final assets to WebP; tile small seamless textures rather than shipping huge images
- Per the brand guide: "Use texture sparingly: subtle paper grain or warm photographic texture is acceptable" — this is refinement, not decoration
