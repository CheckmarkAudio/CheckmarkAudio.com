---
title: SEO Master Plan
status: active
phase: all_phases
tags:
  - consolidated
  - website_planning
---

# SEO Master Plan

This file consolidates the active planning notes that previously lived in several smaller Markdown files. The archived originals are preserved under `99_ARCHIVE/reference/consolidated-md-sources/2026-07-02/`.

Current rule: this master file is the active planning file for this folder. Any older file paths mentioned inside archived source sections are historical references only.


---

## Archived Source: `01_WEBSITE/08_SEO/local-seo-page-targets.md`

---
title: Local SEO Page Targets
status: planned
phase: phase_04_seo_launch
kpi:
  - local_seo_visibility
  - booking_conversion
tags:
  - seo
  - local_seo
  - urls
---

# Local SEO Page Targets

## High-Intent Pages

- `/recording-studio-albuquerque`
- `/vocal-recording-albuquerque`
- `/mixing-mastering-albuquerque`
- `/music-production-albuquerque`
- `/band-recording-albuquerque`
- `/podcast-recording-albuquerque`
- `/artist-photography-albuquerque`
- `/audio-engineering-school-albuquerque`

---

## Archived Source: `01_WEBSITE/08_SEO/page-metadata-tracker.md`

---
title: Page Metadata Tracker
status: planned
phase: phase_04_seo_launch
kpi:
  - local_seo_visibility
tags:
  - seo
  - metadata
  - launch_now
---

# Page Metadata Tracker

| Page | SEO Title | Meta Description | Status |
| --- | --- | --- | --- |
| Home | Needs draft | Needs draft | planned |
| Services | Needs draft | Needs draft | planned |
| Pricing | Needs draft | Needs draft | planned |
| Book Now | Needs draft | Needs draft | planned |
| Contact | Needs draft | Needs draft | planned |
| School | Needs draft | Needs draft | planned |

---

## Archived Source: `01_WEBSITE/08_SEO/schema-plan.md`

---
title: Schema Plan
status: planned
phase: phase_04_seo_launch
kpi:
  - local_seo_visibility
tags:
  - schema
  - seo
  - local_seo
---

# Schema Plan

Add structured data after page structure, contact information, and service details are approved.

## Known Local Business Details

- Business name: `Checkmark Audio`.
- Address to keep consistent everywhere: `5413 Lomas Blvd NE, Albuquerque, NM, USA`.
- Address source: Current `checkmarkaudio.com` page title/metadata and Bridget confirmation.
- Verification gap: Confirm the same address across contact page, footer, booking form, Google Business Profile, map embed, metadata, and LocalBusiness schema before launch.

## Likely Schema Types

- Organization.
- LocalBusiness.
- Service.
- FAQPage.
- BreadcrumbList.
- MusicGroup or RecordingStudio if supported cleanly by the chosen schema strategy.

---

## Archived Source: `01_WEBSITE/08_SEO/analytics-search-console-launch-checklist.md`

---
title: Analytics And Search Console Launch Checklist
status: planned
phase: phase_04_seo_launch
kpi:
  - local_seo_visibility
  - booking_conversion
  - mobile_conversion
tags:
  - analytics
  - seo
  - launch_now
---

# Analytics And Search Console Launch Checklist

## Before Launch

- Connect Google Analytics.
- Connect Google Search Console.
- Submit sitemap.
- Track booking clicks.
- Track phone clicks.
- Track email clicks.
- Track pricing page engagement.
- Track portfolio interactions.
- Track school inquiry clicks.

---

## Archived Source: `01_WEBSITE/08_SEO/kpi-forward-folder-and-url-map.md`

---
title: KPI-Forward Folder And URL Map
status: active
phase: phase_04_seo_launch
kpi:
  - local_seo_visibility
  - booking_conversion
  - findability
tags:
  - seo
  - local_seo
  - urls
  - schema
  - conversion
---

# KPI-Forward Folder And URL Map

## Naming Principle

Use names that describe the visitor intent and business outcome. Avoid vague labels like `misc`, `more`, `old`, `new-page`, `content`, or `draft`. Website files should map to a page, service, conversion path, SEO topic, or measurable proof asset.

## Recommended Website Source Folders

Use this structure when the non-Wix website codebase is created or migrated.

```text
src/
  app/
    book-now/
    contact/
    pricing/
    services/
    studios/
    our-work/
    school/
    about/
    faq/
    policies/
    recording-studio-albuquerque/
    vocal-recording-albuquerque/
    mixing-mastering-albuquerque/
    music-production-albuquerque/
    band-recording-albuquerque/
    podcast-recording-albuquerque/
    artist-photography-albuquerque/
    audio-engineering-school-albuquerque/
  components/
    conversion-cta/
    pricing-cards/
    service-cards/
    portfolio-embeds/
    studio-comparison/
    testimonial-proof/
    local-seo-schema/
    mobile-booking-bar/
  content/
    services/
    pricing/
    portfolio/
    studios/
    team/
    testimonials/
    policies/
    school/
    local-seo/
  assets/
    brand-logos/
    studio-a-photos/
    studio-b-photos/
    team-headshots/
    portfolio-audio/
    portfolio-video/
    client-session-photos/
    school-program-photos/
```

## Required Core URLs

| KPI | URL | Page Purpose |
| --- | --- | --- |
| Qualified booking | `/book-now` | Route visitors to consultation, session, quote, or admissions path. |
| Pricing clarity | `/pricing` | Reduce confusion and help visitors self-select. |
| Service discovery | `/services` | Show what Checkmark sells and who each service is for. |
| Trust/proof | `/our-work` | Let visitors hear, see, and verify the work. |
| Studio confidence | `/studios` | Explain Studio A, Studio B, use cases, and capabilities. |
| Local contact | `/contact` | Make location, phone, email, hours, and map obvious. |
| Brand trust | `/about` | Explain mission, standards, Albuquerque role, and ecosystem. |
| School lead gen | `/school` | Route education interest to the school path. |
| Objection handling | `/faq` | Answer booking, pricing, prep, revisions, and school questions. |
| Risk reduction | `/policies` | Make deposit, cancellation, file, privacy, and terms clear. |

## Local SEO Landing Pages

| Search Intent | URL | Primary CTA |
| --- | --- | --- |
| Recording studio Albuquerque | `/recording-studio-albuquerque` | Book a Free Consultation |
| Vocal recording Albuquerque | `/vocal-recording-albuquerque` | Book a Vocal Session |
| Mixing and mastering Albuquerque | `/mixing-mastering-albuquerque` | Request a Mix/Master Quote |
| Music production Albuquerque | `/music-production-albuquerque` | Start a Production Project |
| Band recording Albuquerque | `/band-recording-albuquerque` | Ask About Band Recording |
| Podcast recording Albuquerque | `/podcast-recording-albuquerque` | Book Podcast Recording |
| Artist photography Albuquerque | `/artist-photography-albuquerque` | Book Artist Photos |
| Audio engineering school Albuquerque | `/audio-engineering-school-albuquerque` | Learn Audio Engineering |

## File Naming Rules

- Page files: `page-name-primary-kpi.md` or framework-native route files inside a descriptive route folder.
- Components: `conversion-cta-button`, `pricing-card-grid`, `studio-comparison-table`, `portfolio-audio-embed`.
- Images: `checkmark-audio-studio-a-vocal-booth-albuquerque.jpg`, not `IMG_1234.jpg`.
- Audio: `artist-song-service-engineer-checkmark-audio.mp3`.
- Video: `checkmark-live-sessions-artist-song-albuquerque.mp4`.
- Policy files: `deposit-cancellation-policy.md`, `mix-master-revision-policy.md`.
- SEO content: `recording-studio-albuquerque-seo-brief.md`.

## Metadata Required Per Page

- SEO title.
- Meta description.
- Clean slug.
- Main H1.
- Primary CTA.
- Secondary CTA.
- Local keyword target.
- Internal links.
- Image alt text.
- Schema type if applicable.
- Conversion event name.
