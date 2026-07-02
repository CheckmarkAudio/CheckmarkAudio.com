---
title: Asset Master Plan
status: active
phase: all_phases
tags:
  - consolidated
  - website_planning
---

# Asset Master Plan

This file consolidates the active planning notes that previously lived in several smaller Markdown files. The archived originals are preserved under `99_ARCHIVE/reference/consolidated-md-sources/2026-07-02/`.

Current rule: this master file is the active planning file for this folder. Any older file paths mentioned inside archived source sections are historical references only.


---

## Archived Source: `01_WEBSITE/09_ASSETS/asset-naming-guide.md`

---
title: Asset Naming Guide
status: active
phase: all_phases
kpi:
  - findability
  - local_seo_visibility
tags:
  - assets
  - filing_system
  - seo
---

# Asset Naming Guide

Use descriptive, concise names for internal filing and website-ready image SEO. Image filenames are not the strongest SEO signal, but they are still a best practice because they help humans, accessibility workflows, image search context, and future page building.

## Good Asset Names

- `00-studio-a.jpg`
- `01-studio-b.jpg`
- `02-vocal-booth.jpg`
- `03-control-room.jpg`
- `00-audio-logo.png`
- `01-school-logo.png`
- `00-team-gavin.jpg`
- `00-live-session.jpg`

Use a two-digit numeric prefix inside each folder, followed by a short visual description. For website-ready public images, include the service and location when relevant.

Preferred website image format:

```text
00-visual-description-service-location.ext
```

Examples:

- `00-vocal-booth-recording-albuquerque.jpg`
- `01-control-room-mixing-mastering.jpg`
- `02-gavin-engineering-session-checkmark-audio.jpg`
- `03-studio-sign-recording-studio-albuquerque.jpg`
- `mix-before.mp3`
- `mix-after.mp3`

## Avoid

- `IMG_1234.jpg`
- `Screenshot 2026-06-04 at 11.10.39 AM.png`
- `final-final-new.png`
- `misc-photo.jpg`
- `untitled.png`

## SEO Note

Public website SEO should come from the full image system:

- Image alt text.
- Descriptive filenames.
- Captions.
- Nearby page copy.
- Page title and H1.
- Structured data when appropriate.
- URL slug when the image is part of a page.

Ranking weight and best practice are different. A descriptive filename may be a lighter signal than alt text or page context, but it is still worth doing when organizing website assets.

Before renaming many assets, state the naming rule first and confirm whether the numeric prefix is based on upload order, folder order, chronology, or page priority.

---

## Archived Source: `01_WEBSITE/09_ASSETS/current-asset-inventory.md`

---
title: Current Asset Inventory
status: active
phase: phase_01_foundation
kpi:
  - findability
tags:
  - assets
  - inventory
  - needs_photos
---

# Current Asset Inventory

## Website-Ready Assets

Current optimized public website assets live in `02_ASSETS/production/`.

- `02_ASSETS/production/brand/00-checkmark-audio-logo-mark.png`
- `02_ASSETS/production/hero/00-studio-sign-hero.jpg`
- `02_ASSETS/production/video/00-studio-video-still.jpg`
- `02_ASSETS/production/gallery/00-control-room-instruments.jpg`
- `02_ASSETS/production/gallery/01-live-room.jpg`
- `02_ASSETS/production/gallery/02-blue-microphone-pop-filter.jpg`
- `02_ASSETS/production/gallery/03-artist-portrait.jpg`
- `02_ASSETS/production/gallery/04-control-room.jpg`
- `02_ASSETS/production/gallery/05-microphone-pop-filter.jpg`
- `02_ASSETS/production/gallery/06-synth-keyboards.jpg`
- `02_ASSETS/production/gallery/07-compressor-rack.jpg`
- `02_ASSETS/production/gallery/08-vocal-booth-artist.jpg`

Tracked source-library images live in `02_ASSETS/library/` and should not be promoted into the active website until selected, optimized, and copied into `02_ASSETS/production/`.

## Brand And Design Assets Already In The Repo

- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/design-system/assets/00-checkmark-audio-logo.png`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/design-system/assets/01-school-logo-black.png`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/design-system/assets/02-school-logo-gold.png`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/design-system/assets/03-school-logo-white.png`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/design-system/uploads/00-school-logo-black-upload.png`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/design-system/uploads/01-school-logo-white-upload.png`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/design-system/uploads/02-type-preview.png`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/design-system/uploads/03-dashboard-light.png`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/design-system/uploads/04-dashboard-dark.png`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/brand-booklet-images/00-brand-booklet-full.jpg`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/brand-booklet-images/00-brand-booklet-full.png`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/brand-booklet-images/01-brand-booklet-page-01.jpg`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/brand-booklet-images/01-brand-booklet-page-01.png`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/brand-booklet-images/02-brand-booklet-page-02.jpg`
- `99_ARCHIVE/reference/imported-assets/imported-brand-ui/brand-booklet-images/02-brand-booklet-page-02.png`
- `99_ARCHIVE/reference/imported-assets/imported-conversions/00-audio-logo-preview.png`

These are imported reference assets from the old `CHECKMARK_SCHOOL` repo. They are not automatically final public website assets; promote only approved, optimized files into `02_ASSETS/production/`.

## Generated Conversion Assets Kept Numbered

The module conversion files in `99_ARCHIVE/reference/imported-assets/imported-conversions/module1-page-images/`, `module1-exact-svg/`, and `module1-editable-overlay-svg/` intentionally keep ordered names like `00-module-1-page-01.jpg` because their sequence matters and supporting OCR files reference them.
