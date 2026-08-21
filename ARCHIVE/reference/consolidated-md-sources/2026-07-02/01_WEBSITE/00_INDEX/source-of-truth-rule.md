---
title: Website Source Of Truth Rule
status: active
phase: all_phases
kpi:
  - findability
  - handler_consistency
tags:
  - source_of_truth
  - handlers
  - docx
---

# Website Source Of Truth Rule

There is exactly one active DOCX checklist for Checkmark Audio website completion:

`01_WEBSITE/99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`

Codex and Claude must update this file only when filling answers, checkboxes, SEO notes, SEO gaps, and build-ready instructions.

## Do Not Update

- Do not update Bridget's Desktop original.
- Do not update `99_ARCHIVE/reference/legacy-docs/LEGACY_BRIDGET_WEBSITE_COMPLETION_GUIDE.docx` except to replace it only if Bridget explicitly requests a new legacy snapshot.
- Do not create another active checklist DOCX with a different name.
- Do not rename the source-of-truth DOCX without Bridget explicitly approving the rename first.

## Main Checklist Format

For quick factual answers, put the answer on the checklist line.

```md
Correct address: 5413 Lomas Blvd NE, Albuquerque, NM, USA
SEO: Current website page title/metadata includes this address.
SEO gaps:
- [ ] Add/confirm address on the Contact page.
- [ ] Add/confirm address in the footer.
- [ ] Add/confirm address in Google Business Profile and Google Maps embed.
- [ ] Add/confirm address in booking flow/client inquiry emails where useful.
- [ ] Add/confirm address in LocalBusiness schema.
```

Do not put `Source:` on the main checklist. The approved source pool is Bridget, Gavin, and the current `checkmarkaudio.com` site.
