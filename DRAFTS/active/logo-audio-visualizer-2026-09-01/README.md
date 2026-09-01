# Logo audio visualizer — 2026-09-01

Standalone experiment. Not wired into the root website.

Purpose: replace the homepage YouTube music-demo video with a live, music-reactive
version — the official gold checkmark logo pulsing to the low end, ringed by a
mirrored circular spectrum analyzer in the brand gold palette. Inspired by the
Proximity-style pulsing-logo visualizers but restyled to Checkmark's look.

- `index.html` — the whole prototype (Web Audio API `AnalyserNode`, canvas).
- Track dropdown auto-lists every audio file in `MEDIA/AUDIO/` (needs the
  `static-preview` server from `.claude/launch.json`; drop a new song in that
  folder and reload). "Load file" plays any local file without adding it.
- Logo: `MEDIA/IMAGES/checkmark-audio-logo-official-gold-gradient-transparent.png`
  (official standard, untouched geometry).

Integration into the homepage music section (inside the existing gear-UI framing)
happens only after Bridget approves the look; the analyzer/pulse code is
self-contained and portable.

## Locked baseline — 2026-09-01

Bridget approved the ambient twin-line version ("locked in until further notice").
Exact state preserved as `APPROVED-LOCKED-2026-09-01.html`. `index.html` in this
folder remains the working copy; do not change the locked file without Bridget's
approval.
