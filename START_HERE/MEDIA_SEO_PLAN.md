---
title: Media SEO Implementation Plan
status: active_flat_media_review
updated: 2026-08-02
---

# Media SEO Implementation Plan

This plan applies the SEO Master Plan and SEO Training Manual to the actual Checkmark Audio media library while preserving the repository rules in `MEDIA/README.md`.

## Current Inventory

- Flat active library: 506 readable, byte-unique images in `MEDIA/IMAGES/`, 20 readable audio files in `MEDIA/AUDIO/`, and 41 readable videos in `MEDIA/VIDEO/`.
- Unreadable library: 107 zero-byte placeholders in `MEDIA/UNREADABLE/` for Bridget's later deletion decision.
- Five readable Wix PDFs are preserved outside the media library in `ARCHIVE/reference/wix-documents/`.
- Wix-generated batch folders and the protected intake hierarchy are no longer part of the working structure.
- All media filenames were normalized to lowercase kebab-case using Gavin's preferred formula. A July 31 visual review covered all recovered images and replaced camera-number, hash-only, sentence-length, workflow-noise, and mismatched-format names with concise factual names.
- On August 2, a full SHA-256 pass identified 111 exact readable-image groups and deleted 116 redundant copies while retaining one file from each group. Different angles, crops, edits, resolutions, or metadata variants were not removed. `MEDIA/EXACT_DUPLICATE_DELETION_LOG.csv` records every retained and deleted path and hash. No exact readable-image duplicate remains.
- `MEDIA/IMAGE_VISUAL_REVIEW_MANIFEST.csv` records the visual-review rename pass.
- `MEDIA/RENAME_MANIFEST.csv` records every old path, new path, type, size, and hash.
- Metadata privacy review: some recovered source photographs contain embedded GPS EXIF data. Preserve originals privately, but remove precise GPS data from public web copies unless Bridget explicitly approves publishing it.
- The available source ZIP listings also contain zero-byte entries, so extracting those archives alone will not recover every missing asset.
- The intake is ignored by Git and is not part of the deployable public media library.
- No intake file should move into `MEDIA/` until ownership, permission, scope, subject, and publication purpose are confirmed.

## SEO Value Tiers

### Critical

- Keep private, unapproved, school-only, or rights-unclear media out of public deployment.
- Use authentic media on a relevant, crawlable page near useful supporting text.
- Provide accurate contextual alt text for meaningful images and empty alt text for decorative images.
- Use supported formats, correct dimensions, appropriate compression, and stable URLs.
- Preserve working references whenever a file is renamed or moved.
- Provide captions, credits, transcripts, or surrounding context when the media needs them.

### Helpful

- Use short, descriptive filenames that identify the real subject.
- Create right-sized WebP or AVIF website copies with a suitable fallback where needed.
- Add confirmed creator, credit, copyright, rights, title, description, and truthful location data using IPTC/XMP where supported.
- Maintain a catalog connecting each source file, web copy, permission record, page assignment, alt text, caption, and credit.
- Use consistent image URLs so search engines and browsers can reuse cached assets.

### Nice-to-have

- Add `ImageObject` or video structured data when the visible page content and confirmed rights information support it.
- Add licensing metadata when Checkmark Audio has an actual public rights or licensing page.
- Maintain controlled-vocabulary keywords inside the asset catalog for internal retrieval.

### Not worth doing

- Adding Albuquerque, New Mexico, “best,” “cheap,” or “near me” to every filename.
- Copying a filename directly into alt text.
- Filling embedded keywords with search-query lists.
- Inventing GPS coordinates, capture locations, creators, dates, clients, or copyright ownership.
- Assuming EXIF/IPTC tags can replace a useful page, nearby text, alt text, permission, performance, or accessibility.
- Renaming decorative icons for local-search phrases.

## Naming Formula

Repository filenames follow Gavin's required formula:

`[service]-[location when useful]-[specific-description]-[brand when useful].[format]`

Location may be included between the subject and description only when it distinguishes the asset naturally and is factually confirmed.

Good:

- `band-recording-studio-a-live-room.webp`
- `vocal-recording-albuquerque-checkmark-audio-booth.webp`
- `gavin-hammond-audio-engineering-instructor.webp`

Bad:

- `best-cheap-recording-studio-albuquerque-near-me.webp`
- `albuquerque-gold-arrow-icon.svg`
- `studio-final-final-new-2.jpg`

## Metadata Fields

Use `MEDIA/MEDIA_METADATA.csv` as the human-reviewed control record.

Metadata may be embedded only when confirmed:

- Title
- Description/caption
- Creator
- Credit line
- Copyright notice
- Rights usage terms
- City, state, and country when the depicted or captured location is known and relevant
- Keywords limited to accurate subject, service, room, person, or project terms

Do not add exact GPS coordinates merely because the business is in Albuquerque. A studio address is not proof that every photograph was captured there, and publishing precise coordinates may create privacy or safety concerns.

## Implementation Sequence

1. Review or delete the 107 files isolated in `MEDIA/UNREADABLE/`.
2. Use the rename manifest and hashes to select among exact readable duplicates.
3. Flag files whose type, name, or contents indicate school, private-client, unrelated, licensed, or uncertain material.
4. Create contact sheets for visual classification without changing originals.
5. Review candidates by durable purpose: brand, exterior, Studio A, Studio B, vocal booth, control room, gear, services, team, clients/proof, audio, and video.
6. Obtain missing ownership, credit, and publication decisions.
7. Select only useful, permission-cleared assets; do not turn the website into an uncurated dump.
8. Assign stable IDs and approve concise names in a rename manifest.
9. Preserve sources and create optimized web variants.
10. Embed confirmed rights and descriptive metadata without overwriting original capture facts.
11. Promote approved files into `MEDIA/`, update the metadata control record, and regenerate the catalog.
12. Assign each web asset to a page with contextual alt text, captions/credits where needed, and correct loading behavior.
13. Test every path, image dimension, audio/video control, mobile layout, and page-load impact.

## Current Training Gate

Filename training, the first-pass qualification inventory, and exact-image deduplication are complete. The current training step is **human media approval**, completing sequence items 3, 6, and 7 above:

1. Confirm or correct each proposed scope: public website, private client portal, internal staff only, separate school site, or unassigned.
2. Confirm ownership, creator/credit, publication permission, and permission for identifiable people.
3. Confirm or correct the proposed authoritative page or `Gallery` assignment, or mark the asset unused.
4. Preserve every approved decision in `MEDIA/MEDIA_METADATA.csv` before optimization, embedded metadata, or alt-text production. `MEDIA/MEDIA_QUALIFICATION_REVIEW.xlsx` is the formatted review copy.

Do not write public alt text or embed rights/location metadata before this gate is complete; those fields depend on the approved page context and verified facts.

## Source Guidance Applied

- Google Search Central describes image filenames as light clues and recommends short, descriptive names, useful contextual alt text, relevant surrounding page content, supported formats, and stable URLs.
- Google supports IPTC or structured image metadata mainly for creator, credit, copyright, and licensing information; it does not guarantee enhanced search presentation.
- IPTC treats descriptive, rights, and administrative metadata as portable asset information. These fields must remain factual.

Primary-source URLs should be rechecked when implementation guidance changes:

- `https://developers.google.com/search/docs/appearance/google-images`
- `https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata`
- `https://iptc.org/standards/photo-metadata/photo-metadata/`
