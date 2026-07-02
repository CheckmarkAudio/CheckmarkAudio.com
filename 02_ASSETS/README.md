# Assets

Tracked website images and media live here.

- `library/`: browsable source image library with descriptive names.
- `production/`: optimized assets selected for the active website build.

## Archived Subfolder Notes

### `02_ASSETS/library/README.md`

# Asset Library

This folder contains tracked source-library images that may be useful for future CheckmarkAudio.com planning and production.

These files are intentionally separate from `02_ASSETS/production/`:

- `public-crawl/`: cleaned image set gathered from public CheckmarkAudio.com pages.
- `original-uploads/`: unique source images from the first Wix Media Manager extraction that were not duplicates of the public crawl.

Use `02_ASSETS/production/` only for optimized files selected for the active website build.

### `02_ASSETS/production/README.md`

# Production Assets

This folder contains optimized assets intended for the deployed website.

Tracked source-library images live in `02_ASSETS/library/`. Temporary raw intake can still go in `99_ARCHIVE/ignored-local/original-assets/`, which is ignored by Git.

## Folders

- `brand/`: logos, marks, brand identifiers.
- `hero/`: primary first-viewport imagery.
- `gallery/`: selected studio and artist images.
- `video/`: video thumbnails, stills, and eventual optimized video assets.

## Naming

Use:

```text
[number]-[brief-description].[ext]
```

Example:

```text
04-control-room.jpg
```

Use the numeric prefix to keep assets sorted by added/selection order inside each folder. Keep the description short and visual.
