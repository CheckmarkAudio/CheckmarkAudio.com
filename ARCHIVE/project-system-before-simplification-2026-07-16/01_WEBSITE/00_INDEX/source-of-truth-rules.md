---
title: Source Of Truth Rules
status: active
phase: all_phases
tags:
  - consolidated
  - website_planning
---

# Source Of Truth Rules

This file consolidates the active planning notes that previously lived in several smaller Markdown files. The archived originals are preserved under `99_ARCHIVE/reference/consolidated-md-sources/2026-07-02/`.

Current rule: this master file is the active planning file for this folder. Any older file paths mentioned inside archived source sections are historical references only.


---

## Archived Source: `01_WEBSITE/00_INDEX/source-of-truth-rule.md`

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

---

## Archived Source: `01_WEBSITE/00_INDEX/handler-filing-protocol.md`

---
title: Handler Filing Protocol
status: active
phase: all_phases
kpi:
  - findability
tags:
  - filing_system
  - handlers
  - encyclopedia
  - assets
---

# Handler Filing Protocol

This is the standing protocol for Codex, Claude, or any other handler organizing the Checkmark Audio website system.

## Source Of Truth

The website completion process follows `99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`.

This file name must not be changed unless Bridget explicitly approves the rename. Use this consolidated rules file as the active handler reference.

Use `99_ARCHIVE/reference/legacy-docs/LEGACY_BRIDGET_WEBSITE_COMPLETION_GUIDE.docx` only as the untouched legacy reference. Do not fill answers into the legacy reference.

Use `00_INDEX/website-master-plan.md` as the consolidated Markdown operating plan for the source-of-truth DOCX. Do not replace the plan with a new parallel checklist unless Bridget explicitly approves a change.

## Completion Workflow

For each playbook item, follow this order:

1. Read the next item from `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`.
2. Summarize the next step to Bridget in plain language.
3. State what information, copy, images, media, prices, policies, or approvals are needed.
4. Review `checkmarkaudio.com` as the existing public reference and use it to answer any checklist questions it can answer.
5. Clearly name knowledge gaps Bridget/Gavin must fill.
6. Show the planning work to Bridget.
7. Wait for Bridget to add, correct, or approve missing details.
8. Add the confirmed details to the correct Markdown files.
9. Update `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` with the visible answer on or directly under the checklist line, plus checkbox/status notes where appropriate.

Do not move into website build implementation until Bridget explicitly says the planning/checklist phase is ready to become build work.

## Checklist Answer Format

When a checklist item is completed or partially answered, show the work directly under the item.

Preferred format:

```md
- [x] Mission statement

  Answer: Checkmark Audio helps artists, singers, and bands record, produce, mix, and master release-ready music in a professional Albuquerque studio environment.

  SEO: Use this line when the answer has already been located on the current website, Google profile, social profiles, schema, metadata, or other public-facing surfaces.

  SEO gaps:
  - [ ] Add the answer to any important missing website, SEO, schema, social, or conversion surface.
```

Use `Answer:` for the actual copy, decision, or factual response. Do not add a `Source:` line on the main checklist because the approved source pool is Bridget, Gavin, and the current `checkmarkaudio.com` site. Use `SEO:` when checking where an answer already appears publicly. Use `SEO gaps:` for missing SEO, schema, social, map, metadata, or web-presence opportunities; nest those as their own sub-checkboxes so they can be checked off later. If an answer simply needs owner approval or live verification, label that clearly as `Verification Needed:` rather than calling it a gap. This same format should appear in Markdown and in `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`.

## Main Checklist vs Appendix

The main checklist in `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` is the build source. Every important answer needed by Codex or Claude to build the website belongs directly on or under the related main checklist line.

The lower appendix is not the build checklist. Use it only for handler evidence, deeper SEO notes, questions for Bridget/Gavin, audit trails, and extra context that would clutter the main checklist. It may include `Source:` or longer research notes when useful, but those lines should not replace the answer on the main checklist.

## First Rule

Do not create loose files at the repository root unless the file is a true repo-level entry point. Website completion planning belongs in `01_WEBSITE/`.

## Where Things Go

- Page requirements go in `01_PAGES/`.
- Service offers go in `02_SERVICES/`.
- Studio A, Studio B, gear, rooms, and room comparison go in `03_STUDIOS/`.
- Portfolio examples, testimonials, proof, credits, and case studies go in `04_PROOF/`.
- Team, About, mission, story, and brand positioning go in `05_BRAND/`.
- Public-facing school copy belongs to the separate school website. Reference-only school material is archived in `99_ARCHIVE/reference/checkmark-school/`.
- Policies, terms, privacy, deposit, cancellation, and trust language go in `07_POLICIES/`.
- SEO, URLs, schema, analytics, sitemap, metadata, and keyword plans go in `08_SEO/`.
- Final website-ready media assets go in `09_ASSETS/`.
- Phase progress notes go in `10_PHASES/`.
- Original source docs go in `99_SOURCES/`.

## Naming Rules

- Use short descriptive names.
- Prefer 1-3 words for asset titles before the extension.
- Use lowercase kebab-case for files: `studio-a.jpg`, `pricing-page.md`, `audio-logo.png`.
- Use uppercase numbered folders only for major encyclopedia sections.
- Do not use dates, screenshots, camera names, or vague words like `final`, `new`, `misc`, `stuff`, `copy`, or `updated` unless the date is the actual subject.

## Markdown Rules

Every important Markdown file needs frontmatter:

```md
---
title: Human Readable Title
status: planned
phase: phase_02_core_pages
kpi:
  - booking_conversion
tags:
  - booking
  - conversion
---
```

Use the tag system section in this consolidated rules file for approved status, phase, KPI, and tag values.

## Asset Rules

- Website-ready images go in `09_ASSETS/`.
- Working screenshots and design references stay near the design system unless they are approved for the public website.
- Generated page sequences can keep numbered names like `page-01.jpg` when order matters.
- Before renaming assets, search for references and update them in the same pass.
- If a file name is not obvious from looking at it, add an asset inventory note.

## Phase Rules

Phase folders are not the filing cabinet. They are the logbook.

If a pricing page is worked on during Phase 2, the pricing requirements still live in `01_PAGES/`; the Phase 2 note only records what changed, what is blocked, and what was decided.

---

## Archived Source: `01_WEBSITE/00_INDEX/tag-system-guide.md`

---
title: Website Tag System Guide
status: active
phase: all_phases
kpi:
  - findability
tags:
  - tags
  - encyclopedia
  - filing_system
---

# Website Tag System Guide

Tags make the website system searchable across folders. Use plain tag names in frontmatter without `#` so tools can parse them cleanly. In notes and comments, writing `#pricing` is fine.

## Status Values

- `active` - source of truth currently in use.
- `planned` - file or page is expected but not fully built.
- `draft` - content exists but needs review.
- `needs_content` - blocked by missing copy, media, pricing, policy, or approval.
- `needs_approval` - content exists but needs Gavin/final approval.
- `ready_to_build` - enough content exists to implement.
- `published` - live on the website.
- `archived` - no longer current.

## Phase Values

- `phase_01_foundation`
- `phase_02_core_pages`
- `phase_03_sales_improvements`
- `phase_04_seo_launch`
- `future_growth`
- `all_phases`

## KPI Values

- `booking_conversion`
- `pricing_clarity`
- `lead_quality`
- `portfolio_trust`
- `local_seo_visibility`
- `mobile_conversion`
- `school_inquiries`
- `brand_trust`
- `policy_clarity`
- `findability`

## Core Tags

- `launch_now`
- `needs_content`
- `future_plan`
- `booking`
- `pricing`
- `portfolio`
- `studio_a`
- `studio_b`
- `team`
- `about`
- `school`
- `seo`
- `local_seo`
- `mobile`
- `policy`
- `trust`
- `conversion`
- `analytics`
- `schema`
- `assets`

## Blocker Tags

- `needs_gavin_approval`
- `needs_photos`
- `needs_audio`
- `needs_video`
- `needs_pricing`
- `needs_policy`
- `needs_contact_info`
- `needs_booking_system`
- `needs_team_list`
- `needs_testimonials`
- `needs_portfolio_examples`

## Example Frontmatter

```md
---
title: Studio A Requirements
status: needs_content
phase: phase_03_sales_improvements
page: studio_a
kpi:
  - booking_conversion
  - brand_trust
  - portfolio_trust
tags:
  - studio_a
  - booking
  - trust
  - needs_photos
  - needs_pricing
---
```
