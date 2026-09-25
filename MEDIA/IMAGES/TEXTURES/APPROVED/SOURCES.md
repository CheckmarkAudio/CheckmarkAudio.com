# Approved texture sources

## Microphone diagram pattern

- Web asset: `microphone-diagram-pattern-gold-black.webp`
- Source project: `Microphone-diagram.af`
- Source: User-supplied original placed in the approved Checkmark Audio texture folder on 2026-09-01.
- Use: Checkmark Audio website background texture.
- Derivation: The embedded artwork preview was exported to a 512 × 288 WebP for lightweight tiled browser use. The Affinity source remains unchanged.

## Community title grit

- Web asset: `community-title-grit.webp`
- Source: Generated procedurally on 2026-09-01 (multi-octave noise, speckle, and wear streaks composed with Pillow). No third-party or stock imagery is used, so there is no external licence to track.
- Use: Multiplied into the gold gradient of the Community page `COMMUNITY` title via `background-blend-mode`, giving the distressed finish in Bridget's selected concept.
- Regenerating: Adjust and rerun the generator; the file is a greyscale multiply map, so lighter values leave the gold untouched and darker values read as wear.

## September 10 — Large demo-section background

Bridget requested that the microphone drawing read as a visible background rather than tiny repeating texture. `MEDIA/ARTWORK/microphone-diagram-background-bronze.png` isolates the supplied drawing from its dark matte and uses bronze linework on the existing cream section. The demo section displays one large, non-repeating composition, with a local heading fade. The Affinity source and original export are preserved. The available embedded export is 512 × 288, so the enlarged background retains its original raster softness.

## September 10 — Replace thumbnail with supplied -02 export

Bridget supplied and explicitly selected `MEDIA/IMAGES/TEXTURES/Microphone-diagram-02.png` (3840 × 2160). The active background now uses `MEDIA/ARTWORK/microphone-diagram-background-bronze-02.png`, a full-resolution RGBA derivative that preserves the source dimensions and diagram shapes while isolating bronze ink for the existing cream treatment. No resizing, upscaling or regeneration. The original PNG is unchanged. This supersedes the 512 × 288 background derivative.


## September 25 — Studio panel textures (sawdust / foam / felt / mesh)

User-supplied JPG stills processed into repeating WebP tiles for flat cream/dark tab panels. Microphone diagram is not used.

| Web asset | Original | Use |
| --- | --- | --- |
| `panel-sawdust-press-neutral.webp` | `panel-sawdust-press-neutral.jpg` | `.proofbox` / `#reviews` — light horizontal grain / wooden pressing sawdust |
| `panel-acoustic-foam-neutral.webp` | `panel-acoustic-foam-neutral.jpg` | Studio A/B black `.pagecta.pagecta--foam` only (“Make room for the whole idea.” / “Keep the focus on the performance.”) |
| `panel-industrial-felt-neutral.webp` | `panel-industrial-felt-neutral.jpg` | Dark bands: `.formbox`, `.contactbox`, `.sound-proof`, other `.pagecta` |
| `panel-perforated-mesh-neutral.webp` | `panel-perforated-mesh-neutral.jpg` | Cream `.section.light` (subtle multiply) |

Derivation: center/aligned crop → large-scale lighting flatten (Gaussian subtract) → half-tile offset + edge crossfade (sawdust/felt/mesh) or panel-aligned crop (foam) → WebP quality ~82, long side ≤1280. Originals kept alongside in APPROVED.

## September 25 — Mesh seamless retile (foam10)

- Web asset: `panel-perforated-mesh-seamless.webp` (+ `.jpg`)
- Replaces `panel-perforated-mesh-neutral.webp` as `--tex-mesh` for cream `.section.light`.
- Derivation from `panel-perforated-mesh-neutral.jpg`: large-scale lighting flatten → period-aligned center crop → multipass half/quarter-offset OpenCV Navier–Stokes inpaint across crossed seams → edge luminance equalize for multiply-on-cream → 1280 WebP. Original neutral webp/jpg retained.
