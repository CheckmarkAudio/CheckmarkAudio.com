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

