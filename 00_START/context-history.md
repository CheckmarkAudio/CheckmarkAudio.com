# Context History

## Business

Checkmark Audio is a recording studio in Albuquerque, New Mexico.

Public contact details currently used:

- Address: 5413 Lomas Blvd, Albuquerque, NM 87110
- Phone: 505-267-0558
- Email: CheckmarkAudio@gmail.com

Core services reflected from the existing site:

- Recording
- Mixing
- Mastering
- Studio rental
- Artist promotion
- Artist photography
- Music education
- Gift cards
- Booking / consultation

## Migration Goal

Move the public marketing website off Wix and onto a GitHub-hosted static site, while preserving enough of the current site structure that clients are not confused by the transition.

## Design Notes

- The first draft felt too changed and too chunky.
- The preferred near-term direction is: keep the current Wix layout/order, make it cleaner, more professional, darker in places, with white/gray breaks like the existing site.
- Typography should not feel oversized or cartoonish.
- The hero should use a full-page/header image treatment.
- Testimonials should feel like floating quote elements rather than heavy blocks.

## Asset Notes

- `02_ASSETS/library/` contains the tracked source image library with human-readable names.
- `99_ARCHIVE/ignored-local/original-assets/` is now only temporary local intake and is intentionally ignored by Git.
- `02_ASSETS/production/` contains deployable optimized files with professional names.
- More final asset selection is still needed before launch, but the source image library is now browseable and tracked.

## 2026-06-25 Website Completion Handoff

The website completion planning system was moved into the correct repo, `CheckmarkAudio.com`, under `01_WEBSITE/`. Treat the older `CHECKMARK_SCHOOL` copy as a wrong-folder archive/reference only.

Active source-of-truth DOCX:

- `01_WEBSITE/99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`

Handler rules:

- `01_WEBSITE/00_INDEX/source-of-truth-rule.md`
- `01_WEBSITE/00_INDEX/handler-filing-protocol.md`

Current checklist format for quick factual answers:

- Put the factual answer on the checklist line.
- Use `SEO:` for where the answer already appears publicly.
- Use `SEO gaps:` with nested checkboxes for missing SEO/web-presence opportunities.
- Do not use `Source:` on the main checklist. The approved source pool is Bridget, Gavin, and the current `checkmarkaudio.com` site.

Current verified example:

- `Correct address: 5413 Lomas Blvd NE, Albuquerque, NM, USA`
- `SEO: Current website page title/metadata includes this address.`
- `SEO gaps:` includes footer, Google Business Profile/Maps, booking flow/client emails, and LocalBusiness schema.
