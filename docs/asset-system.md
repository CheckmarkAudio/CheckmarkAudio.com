# Asset System

## Folder Strategy

Use this structure for production assets:

```text
assets/
  production/
    brand/
    hero/
    gallery/
    video/
```

Keep full-resolution source downloads local only:

```text
original-assets/
  public-crawl/
```

`original-assets/` is ignored by Git because it is large source material, not deployment material.

## Naming Convention

Production asset names should use:

```text
checkmark-audio-[section]-[description]-[number].[ext]
```

Rules:

- Use lowercase.
- Use hyphens.
- Start with `checkmark-audio`.
- Include the page/usage area when useful: `hero`, `gallery`, `brand`, `video`.
- Use simple subject names: `studio-sign`, `control-room`, `vocal-booth`, `microphone`.
- Add a two-digit or one-digit sequence when multiple files share a subject.
- Do not use raw Wix IDs for production asset filenames.

## Current Production Assets

```text
assets/production/brand/checkmark-audio-logo-mark.png
assets/production/hero/checkmark-audio-studio-sign-hero.jpg
assets/production/video/checkmark-audio-studio-video-still-01.jpg
assets/production/gallery/checkmark-audio-artist-portrait-01.jpg
assets/production/gallery/checkmark-audio-control-room-01.jpg
assets/production/gallery/checkmark-audio-control-room-session-01.jpg
assets/production/gallery/checkmark-audio-equipment-01.jpg
assets/production/gallery/checkmark-audio-live-room-01.jpg
assets/production/gallery/checkmark-audio-microphone-01.jpg
assets/production/gallery/checkmark-audio-session-01.jpg
assets/production/gallery/checkmark-audio-studio-room-01.jpg
assets/production/gallery/checkmark-audio-vocal-booth-01.jpg
```

## Source Asset Inventory

- Authenticated Wix Media Manager extraction: 29 files.
- Public CheckmarkAudio.com crawl: 90 files.
- Local source archive total after the public crawl: 119 files.
- Source archive size after public crawl: about 615 MB.
- Current production optimized set: about 2.1 MB.
- Current source audit found 28 exact duplicate groups, mostly files that exist in both the authenticated HAR extraction and public crawl.
- Current source audit found 0 video files.

## Next Asset Tasks

- Identify duplicate files between authenticated extraction and public crawl.
- Pick final hero candidates.
- Pick final gallery candidates.
- Gather video assets from Wix video library.
- Create `assets/production/social/` if social preview images are created.
- Create `assets/production/team/` if team headshots are used.
