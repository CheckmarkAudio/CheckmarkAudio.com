# Live muted video carousel banner (mock)

**Author:** Grok (Bridget Bot)  
**Date:** 2026-09-25  
**Status:** Preview only — does not change `community.html`

## Purpose

High-end muted video carousel banner for the Checkmark Live / Tonight page (`community.html`), matching Studio A/B cover typography and scrim.

## Clips (no audio)

| Slide | Source under `MEDIA/VIDEO/` |
|-------|-----------------------------|
| 1 | `gregorio-and-the-unknown-bird-without-wings-music-video-checkmark-audio.mp4` (falls back to `.mov`) |
| 2 | `05-sharlet-alternate-02.mp4` |
| 3 | `john-and-elizabeth-song.mp4` (falls back to `.mov`) |
| 4 | `recording-artist-live-performance-checkmark-audio-view-01.mp4` (falls back to `.mov`) |

Each slide plays a muted 4s window (clip window via JS; no re-encode), then hard-cuts to the next (no fade). Loop forever. Respects `prefers-reduced-motion` (shows first frame still).

## How to preview

From repo root (preferred):

```bash
python3 scripts/dev-server.py
```

Then open:

`http://localhost:4191/DRAFTS/active/grok/2026-09-25-live-muted-video-carousel-banner/`

Or open `index.html` in a browser with paths relative to this folder.

## Overlay recipe

Matches `.studio-cover` on Studio A/B: Barlow Condensed kicker, Playfair Display title, italic tagline, outlined CTA, chip pills, dual scrim over video.

## Next (if approved)

Port the banner into `community.html` + a small CSS/JS module; optionally trim true web proxies with ffmpeg for lighter loads (Sharlet master is ~1.2 GB).
