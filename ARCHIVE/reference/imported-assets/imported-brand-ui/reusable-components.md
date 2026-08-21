---
title: Reusable Components
program_section: brand_ui
audience: teacher
status: draft
owner: Checkmark Audio School
---

# Reusable Components

These components should appear across the learning app, student materials, teacher views, and curriculum documents. The goal is consistency without making every page feel like a stack of identical cards.

## Core Components

| Component | Use | Visual Notes |
| --- | --- | --- |
| App shell | Main student/teacher app frame | Warm paper canvas, white interior, sticky compact header |
| Lesson card | Chapter/class preview | 8px radius, one module color strip, title, outcome, progress |
| Continue panel | Dashboard primary action | Strongest card on the page; includes current module, class, progress, and action |
| Callout | Key concept, listening task, safety, deliverable | Left border plus icon tile; purple only for key concepts/milestones |
| Progress bar | Class, chapter, deliverable progress | Thin, quiet, gold by default; success only when complete |
| Progress ring | Program-level progress | Use sparingly, one per dashboard |
| Badge | Status, module, milestone | Small pill; never replace headings with badges |
| Assignment block | Student task or deliverable | Objective, requirements, due timing, submit action |
| Rubric table | Assessment criteria | High contrast rows, no decorative fills, clear score labels |
| Resource row | Downloads, templates, studio docs | Icon, title, file/type metadata, action icon |

## Callout Types

- **Key concept:** purple accent, `Star` icon, reserved for must-know curriculum ideas.
- **Listening task:** gold accent, `Music` icon, used when students must reference or analyze audio.
- **Safety:** red accent, `TriangleAlert` icon, used only for studio/equipment risk.
- **Deliverable:** green accent, `Check` icon, used for work students must submit or demonstrate.

## Button Rules

- One primary gold button should dominate a view.
- Secondary buttons are neutral surface buttons.
- Ghost buttons are for low-risk navigation and utility actions.
- Icon-only buttons need tooltips.
- Learning actions use verbs: `Resume Class`, `Submit Mix`, `View Rubric`, `Mark Complete`.

## Card Rules

- Cards hold repeated or bounded content only.
- Do not put page sections inside decorative cards.
- Do not nest cards inside cards.
- Use borders first, shadows second.
- Keep radius at `8px`; large panels may use `12px`.

## Document Components

The same components should translate into print/PDF versions:

- Lesson objective block
- Required materials list
- Key concept callout
- Listening log
- Safety note
- Deliverable checklist
- Rubric table
- Teacher note

Document components should preserve the same color meanings but use less fill and more border so printed pages stay clean.
