# Migration

This folder contains the records and repeatable tools needed to move CheckmarkAudio.com away from Wix. It is not an active media folder.

## Records

- `public-wix-media-manifest.json` - media discovered from public Wix pages.
- `public-wix-media-urls.txt` - source URLs from that public crawl.
- `asset-inventory.json` - generated audit of the unified `MEDIA/` library.

## Tools

- `audit-assets.mjs` - regenerates `asset-inventory.json` and `MEDIA/MEDIA_CATALOG.md`.
- `extract-wix-media.mjs` - reads a Chrome HAR export.
- `extract-public-wix-media.mjs` - scans locally saved Wix HTML pages.
- `download-wix-media.mjs` - downloads URLs found by the extraction tools.

Raw HAR files and temporary downloads belong in `ARCHIVE/ignored-local/` and remain excluded from Git. New approved material should be renamed and moved into `MEDIA/` after review.

Unreviewed Wix media belongs in `ARCHIVE/ignored-local/wix-media-intake/`, organized by file type. To identify misplaced or nonconforming files without changing anything:

```sh
node MIGRATION/organize-media-intake.mjs
```

After reviewing the counts, move them into the ignored local intake:

```sh
node MIGRATION/organize-media-intake.mjs --apply
```

This move is reversible and does not rename, compress, strip metadata from, or delete the originals.

After Wix has produced several recovery-batch folders, consolidate every batch and the earlier intake into one flat protected folder per media type:

```sh
node MIGRATION/consolidate-wix-media-intake.mjs
node MIGRATION/consolidate-wix-media-intake.mjs --apply
```

The consolidation keeps the approved cataloged images in `MEDIA/IMAGES/` untouched. It preserves exact duplicates, zero-byte placeholders, and same-name/different-content files with explicit suffixes, and writes a local `CONSOLIDATION_MANIFEST.json` tracing every original path to its consolidated location.

Build the human-review and SEO-renaming queue after consolidation:

```sh
node MIGRATION/build-media-review-queue.mjs
```

The queue remains in the ignored local intake because filenames may contain client, student, or unpublished project information.

## Refresh The Media Catalog

From the repository root:

```sh
node MIGRATION/audit-assets.mjs
```

## September 5 migration readiness

Read [`STATUS_2026-09-05.md`](STATUS_2026-09-05.md) for the synchronization audit, contributor history, known deployment gaps, and controlled-cutover sequence. [`WIX_URL_INVENTORY_2026-09-05.csv`](WIX_URL_INVENTORY_2026-09-05.csv) captures 21 current URLs from Wix's three public sitemap children. Replacement destinations are deliberately blank pending page-intent/URL approval; this is an inventory, not executable redirects.

Run `node MIGRATION/check-site-links.mjs` for literal local references across root HTML/CSS/JS plus canonical selections. Run `node MIGRATION/check-site-links.mjs --tracked` to expose assets a fresh Git checkout cannot reproduce. Dynamic URLs, external services, accessibility, and live transactions still require browser/launch QA.
