# Active Website Media

`MEDIA/` is the only active, publishable website-media library. Files in this folder may become publicly reachable when the website is deployed.

## Git storage boundary — 2026-08-21

The optimized image library and the two small homepage comparison `.m4a` files are protected in Git. The remaining full audio masters and the multi-gigabyte `VIDEO/` library are correctly filed here locally but are intentionally not committed yet; some are too large for ordinary Git hosting. Do not delete them or add them wholesale to Git. Choose Git LFS or protected object storage first, then document and perform that migration as a separate task.

## Active Structure

```text
MEDIA/
├── IMAGES/       all readable image and camera-source media
├── AUDIO/        all readable audio media
├── VIDEO/        all readable video media
├── UNREADABLE/   zero-byte or unreadable media pending deletion review
├── MEDIA_CATALOG.md
├── MEDIA_METADATA.csv
├── MEDIA_QUALIFICATION_REVIEW.xlsx
├── MEDIA_QUALIFICATION_SUPABASE_NOTES.md
├── EXACT_DUPLICATE_DELETION_LOG.csv
├── IMAGE_VISUAL_REVIEW_MANIFEST.csv
├── RENAME_MANIFEST.csv
└── NEEDED_MEDIA.md
```

## Naming Rule

Use Gavin's lowercase kebab-case formula:

`[service]-[location when useful]-[specific description]-[brand when useful].[format]`

The description should identify the visible subject or audible work naturally. Add a service, room, person, or Albuquerque location only when it is accurate and useful. Do not add keyword chains, promotional claims, “near me,” or location terms to decorative assets.

Every image visibly showing Checkmark Audio's logo must include both `checkmark-audio` and `logo` in its filename. Logo-color and treatment words should be factual, while third-party logos retain the third party's name.

Examples:

- `band-recording-studio-a-live-room.webp`
- `vocal-recording-albuquerque-checkmark-audio-booth.webp`
- `checkmark-audio-demo-reel.mp4`

## Metadata Rule

Filename changes and embedded metadata are separate tasks.

- Preserve original capture metadata in source files.
- Never invent GPS coordinates, capture locations, dates, creators, copyright owners, clients, credits, or permissions.
- Add IPTC/XMP fields only after the corresponding facts are confirmed.
- Prioritize creator, credit line, copyright notice, rights/usage terms, title, description, and truthful location information.
- Use metadata keywords as catalog aids, not as hidden keyword stuffing.
- Web copies may remove nonessential technical metadata for performance, but should retain confirmed rights and identification fields where the format and optimization workflow permit.
- Page context, captions, accurate alt text, dimensions, compression, and stable URLs are part of image SEO and must be completed when an asset is assigned to a page.

## Promotion Workflow

1. Inspect the intake candidate and identify exact duplicates.
2. Confirm ownership, publication permission, people/client approval, credits, and studio-versus-school scope.
3. Assign an internal catalog record without adding its ID to the public filename.
4. Write a short descriptive basename using Gavin's formula.
5. Preserve the original as the `source` variant.
6. Create an appropriately sized `web` variant in a supported modern format.
7. Enter confirmed metadata and page-use fields in `MEDIA_METADATA.csv`, including `usage_scope` (see below) and a `page_assignment` value — `Gallery` is now a valid target alongside the existing service pages, for the planned photo gallery page.
8. Add contextual alt text, caption/credit, and nearby copy in the page—not mechanically from the filename.
9. Update all references in the same pass.
10. Regenerate and review `MEDIA_CATALOG.md`.

### `usage_scope` field

Checkmark Audio's roadmap includes a future client-portal file-delivery feature, separate from this public website. A client's own session photos could eventually be shown back to them privately, which is a different consent scope than publishing on the public site — so capture both while permission is already being confirmed in step 2, rather than re-contacting people later. Record one of: `public-website`, `private-client-portal`, `internal-staff-only`, `school-site`, `unassigned`. Full reasoning in `MEDIA_QUALIFICATION_SUPABASE_NOTES.md`. Material qualified as private-client or third-party isn't just excluded from this workflow — it's the likely seed content for that future private delivery feature, so don't treat it as discardable.

### Qualification inventory status

The qualification inventory now covers all 674 current media records in `MEDIA_METADATA.csv`: 506 readable byte-unique images, 20 audio files, 41 videos, and 107 unreadable placeholders. Stable catalog IDs remain assigned, 30 clear separate-school assets are scoped to `school-site`, and proposed page assignments are recorded where the visible subject or filename supports them.

On August 2, 2026, full-file SHA-256 comparison identified 111 exact readable-image groups and removed 116 redundant copies. Only files with identical bytes were deleted; similar angles, crops, edits, resolutions, and metadata variants were preserved. `EXACT_DUPLICATE_DELETION_LOG.csv` records the retained file, deleted filename, hash, and size for every removal. The retained files preserve the complete image content.

`MEDIA_QUALIFICATION_REVIEW.xlsx` is the human-friendly review copy with frozen identifiers, filters/dropdowns for `usage_scope`, and highlighted duplicate/unreadable statuses. Proposed page assignments are not publication approval. Permission, rights, creator/credit, identifiable-person approval, and final usage scope remain human decisions.

Google describes filenames as a light clue. Alt text and relevant page context carry more meaning, so filenames should remain concise and factual.

## Visual Review Record

All recovered readable images were inspected in contact sheets on July 31, 2026. Camera-number, hash-only, sentence-length, misleading-format, workflow-noise, one-word, project-shorthand, and underspecified filenames were corrected from visible content. Clearly local studio, room, service, and exterior images use `albuquerque-nm` where it adds truthful context. Logos, album covers, third-party marks, and unrelated artwork do not receive artificial location keywords. `IMAGE_VISUAL_REVIEW_MANIFEST.csv` records the review passes. Files that already had concise, factual names were retained.

This visual review does not establish copyright ownership, model releases, client approval, or permission to publish. Those fields remain pending in `MEDIA_METADATA.csv` and must be confirmed before an image is placed on a public page.

## September 5 storage and deployment audit

In addition to the comparison M4A pair, Git now protects 11 optimized 30-second MP3 demo clips and their generator. The existing local-only master boundary is explicitly recorded in `.gitignore`: 20 root audio masters (~384 MiB), 62 video files (~8.04 GiB), 14 unlicensed texture references, and one Affinity lock file were excluded from the synchronization. They were not deleted.

The selected studio-tour MP4 (~45.50 MiB) and two optional WAV fallback paths are still absent from Git, so the tour cannot play from the GitHub Pages preview. Its catalog entry VID-0027 remains unverified for permission; resolve that before creating/publishing a web copy. `node MIGRATION/check-site-links.mjs --tracked` detects these gaps even when a local existence check passes. Historical inventory totals above are dated snapshots, not current filesystem counts.
