---
title: Checkmark Audio Website Growth System
status: active
phase: all_phases
kpi:
  - booking_conversion
  - local_seo_visibility
  - pricing_clarity
  - portfolio_trust
tags:
  - website_completion
  - source_of_truth
  - organization
  - planning
---

# Checkmark Audio Website Growth System

This folder is the website encyclopedia for the post-Wix Checkmark Audio website. It organizes the completion playbook by subject, not only by project phase, so every page, asset, blocker, SEO target, and KPI can be found quickly.

The source of truth is `99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`. The working website planning index is `00_INDEX/website-master-plan.md`.

Archived legacy references live outside this active website folder in `99_ARCHIVE/`.

Do not rename or replace the source-of-truth DOCX without Bridget explicitly approving that change.

## Folder Map

- `00_INDEX/` - `website-master-plan.md` and `source-of-truth-rules.md`.
- `01_PAGES/` - `pages-master-plan.md` for Home, Services, Pricing, Book Now, Contact, FAQ, and Policies.
- `02_SERVICES/` - `services-master-plan.md` for recording, production, mixing/mastering, artist media, and education service planning.
- `03_STUDIOS/` - `studios-master-plan.md` for Studio A, Studio B, room comparison, gear highlights, photos needed, and booking use cases.
- `04_PROOF/` - `proof-portfolio-master-plan.md` for audio/video examples, Checkmark Live Sessions, testimonials, credits, case studies, and student proof.
- `05_BRAND/` - `brand-about-team-master-plan.md` for team, About, mission, story, community positioning, and brand decisions.
- `07_POLICIES/` - `policies-master-plan.md` for deposit, cancellation, no-show, refund, revisions, file delivery, privacy, terms, and trust language.
- `08_SEO/` - `seo-master-plan.md` for URL map, local keyword pages, metadata, schema, analytics, Search Console, and sitemap planning.
- `09_ASSETS/` - `asset-master-plan.md` for asset naming, inventory, logos, photos, audio, video, headshots, and portfolio media.
- `10_PHASES/` - `phase-roadmap.md` for phase plans and notes on what was done during each launch phase.
- `99_SOURCES/` - active source-of-truth DOCX and playbook summaries.

Separate-school, imported-conversion, old design-draft, and legacy DOCX references are archived in `99_ARCHIVE/`.

## System Rule

Actual website knowledge belongs in a subject folder. Phase notes only record timing, decisions, and progress.

Example: pricing requirements live in `01_PAGES/`, related service rates live in `02_SERVICES/`, and the note that pricing was worked on in Phase 2 lives in `10_PHASES/`.

## Tag Rule

Every important Markdown file should include frontmatter tags so the site system can be searched like an encyclopedia:

```md
---
title: Pricing Page Requirements
status: needs_content
phase: phase_02_core_pages
page: pricing
kpi:
  - pricing_clarity
  - booking_conversion
tags:
  - pricing
  - booking
  - conversion
  - needs_pricing
  - needs_gavin_approval
---
```

Use `00_INDEX/source-of-truth-rules.md` for statuses, phases, KPIs, tags, and handler rules.
