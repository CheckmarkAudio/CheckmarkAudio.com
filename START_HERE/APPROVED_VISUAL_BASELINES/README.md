# Approved Visual Baselines

This folder contains screenshots that Bridget or Gavin has explicitly approved as the visual reference for a specific page, section, component, and viewport.

These files preserve the homepage hero carousel that Bridget explicitly identified on 2026-08-21 as the recovered version to keep.

## Admission rule

A screenshot enters this folder only after an explicit statement that the rendered state is approved. Preference, implementation, or absence of further feedback is not approval.

## Filename format

`[page]-[section]-approved-direction-YYYY-MM-DD.png`

Example:

`homepage-hero-approved-direction-2026-08-11.png`

## Required record

For every accepted screenshot, add an entry below and a matching entry in `../WEBSITE_CHANGE_LOG.md`.

```markdown
### Filename

- Approved by:
- Approval date:
- Page / section:
- Viewport represented:
- Change:
- Preserve:
- Reference:
- Acceptance criteria met:
- Conditions or exclusions:
- Supersedes:
```

## Baselines approved 2026-08-21

The four screenshots below show the approved homepage hero carousel in the root website. They preserve the selected photographs, crops, dark editorial treatment, gold display type, header, and controls. Browser chrome is reference context only and is not part of the design.

- `homepage-hero-studio-sign-approved-2026-08-21.png`
- `homepage-hero-patch-bay-approved-2026-08-21.png`
- `homepage-hero-microphone-approved-2026-08-21.png`
- `homepage-hero-guitarist-approved-2026-08-21.png`

- Approved by: Bridget
- Approval date: 2026-08-21
- Page / section: Homepage hero carousel
- Viewport represented: Wide desktop
- Preserve: All four chosen images and their intended crops; the recovered editorial composition
- Canonical implementation: `/index.html`
- Canonical selection record: `/MEDIA/WEBSITE_MEDIA_SELECTIONS.json`
- Supersedes: The homepage that was at the repository root before this recovery

## Baseline selected 2026-08-26

## Baseline selected 2026-08-28

### 2026-08-28-team-editorial-five-person-wide.png

- Approved by: Bridget
- Approval date: 2026-08-28
- Page / section: Team page
- Viewport represented: Wide desktop
- Change: Light editorial contact-sheet layout with five equally weighted team cards
- Preserve: Equal portrait dimensions, identical name/title treatment, thin warm-gold rules, off-white canvas, restrained red frame labels, and the shared sitewide navigation
- Reference: Bridget's selected Team concept and her explicit correction that every team member must receive equal visual treatment
- Acceptance criteria met: Five confirmed public names and roles, equal desktop and mobile card geometry, authentic Checkmark media for confirmed portraits, no horizontal overflow, no browser warnings, and `noindex` retained
- Conditions or exclusions: Matt Bow and Tony Rivera retain same-size designed placeholders until their individual portraits are approved; localhost-only editing controls are preview tooling and are not public website UI
- Supersedes: The prior dark generic Team hero and two-person approval-gate layout

### 2026-08-26-services-signal-path-layout-wide.png

- Approved by: Bridget
- Approval date: 2026-08-26
- Page / section: Services first viewport and interactive service selector
- Viewport represented: 1600×1000 desktop
- Change: Code-native signal path, monumental Services title, vertical highlight selector, single cinematic image window, and the unified sitewide logo/wordmark/navigation with gold-filled consultation CTA
- Preserve: Quiet technical illustration language and layout; one media window; hover/focus outline and filled bullet; approved price guidance; authentic service imagery; shared homepage-derived header identity and spacing. The orange accent shown in this dated screenshot was superseded by Bridget's 2026-08-27 warm-gold direction; a replacement screenshot remains approval-gated.
- Reference: Bridget's selection of the first Services revision with the simpler selector interaction from the monitor treatment
- Acceptance criteria met: Responsive layout, keyboard/touch/pointer switching, exact shared-header geometry across representative pages, no page-level mobile overflow, no console errors, `noindex` retained
- Conditions or exclusions: Final production/Artist Media page intent remains approval-gated; this does not authorize launch
- Supersedes: The previous cream Services filter-card first viewport
