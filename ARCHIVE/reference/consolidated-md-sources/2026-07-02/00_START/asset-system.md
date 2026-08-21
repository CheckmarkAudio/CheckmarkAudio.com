# Asset System

## Folder Strategy

Use this structure for production assets:

```text
assets/
  library/
    public-crawl/
    original-uploads/
  production/
    brand/
    hero/
    gallery/
    video/
```

Use `02_ASSETS/library/` for tracked source-library images with readable names. Use `02_ASSETS/production/` for optimized deployable files selected for the active website.

Keep temporary raw downloads local only:

```text
99_ARCHIVE/ignored-local/original-assets/
```

`99_ARCHIVE/ignored-local/original-assets/` is ignored by Git and should be treated as intake only. Move usable website images into `02_ASSETS/library/` after deduping and renaming.

## Naming Convention

Asset names should use a numeric prefix plus a short visual description:

```text
[number]-[brief-description].[ext]
```

Rules:

- Use lowercase.
- Use hyphens.
- Use two-digit numeric prefixes inside each folder.
- Keep page/usage area in the folder path when an asset is production-ready: `hero`, `gallery`, `brand`, `video`.
- Keep broader source images in `02_ASSETS/library/public-crawl/` or `02_ASSETS/library/original-uploads/`.
- Use simple subject names: `studio-sign`, `control-room`, `vocal-booth`, `microphone`.
- Do not use raw Wix IDs for production asset filenames.

## Current Production Assets

```text
02_ASSETS/production/brand/00-checkmark-audio-logo-mark.png
02_ASSETS/production/hero/00-studio-sign-hero.jpg
02_ASSETS/production/video/00-studio-video-still.jpg
02_ASSETS/production/gallery/00-control-room-instruments.jpg
02_ASSETS/production/gallery/01-live-room.jpg
02_ASSETS/production/gallery/02-blue-microphone-pop-filter.jpg
02_ASSETS/production/gallery/03-artist-portrait.jpg
02_ASSETS/production/gallery/04-control-room.jpg
02_ASSETS/production/gallery/05-microphone-pop-filter.jpg
02_ASSETS/production/gallery/06-synth-keyboards.jpg
02_ASSETS/production/gallery/07-compressor-rack.jpg
02_ASSETS/production/gallery/08-vocal-booth-artist.jpg
```

## Source Asset Inventory

- Tracked source library: 91 unique image files.
- Public CheckmarkAudio.com crawl: 90 cleaned files in `02_ASSETS/library/public-crawl/`.
- Unique authenticated Wix Media Manager upload: 1 file in `02_ASSETS/library/original-uploads/`.
- Current production optimized set: about 2.1 MB.
- Current source audit found 0 exact duplicate groups after deduping the old authenticated extraction against the public crawl.
- Current source audit found 0 video files.

## Next Asset Tasks

- Pick final hero candidates.
- Pick final gallery candidates.
- Gather video assets from Wix video library.
- Create `02_ASSETS/production/social/` if social preview images are created.
- Create `02_ASSETS/production/team/` if team headshots are used.
