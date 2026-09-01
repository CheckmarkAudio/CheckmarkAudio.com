---
title: Project State
status: active
updated: 2026-08-23
---

# Project State

## North star

Checkmark Audio is replacing its Wix-hosted marketing website with an independent site built in this repository. Wix remains public only while the replacement is developed, reviewed, and tested. Domain cutover requires Bridget's explicit approval.

The replacement conversion path is a selectable Cal.com calendar for the free one-hour consultation plus branded EmailJS inquiry emails. Paid project-session self-booking is separate future work.

The Source of Truth DOCX is the only active completion checklist. `DOCUMENT_MAP.md` defines authority and routing; this file records the short current state.

## Current canonical website

The repository root is the only active website. It contains ten pages: `index.html`, `services.html`, `recording.html`, `mixing-mastering.html`, `live-recordings.html`, `studio-a.html`, `studio-b.html`, `team.html`, `community.html`, and `faq.html`.

On 2026-08-21 Bridget identified the browser-edited editorial homepage she wanted preserved. Its local media selections and crops were recovered, reviewed against her four screenshots, written into files, and promoted to root `index.html`. This supersedes the homepage previously at root.

Protected records:

- `START_HERE/APPROVED_VISUAL_BASELINES/` — four approved wide-desktop hero screenshots
- `MEDIA/WEBSITE_MEDIA_SELECTIONS.json` — canonical hero and section-media selections/crops
- `START_HERE/WEBSITE_CHANGE_LOG.md` — chronological design decisions
- `START_HERE/WEBSITE_CHANGE_PROTOCOL.md` — design-change procedure
- `START_HERE/OPEN_DESIGN_QUESTIONS.md` — unresolved visual decisions

The homepage's four approved hero images are the studio sign, patch bay/rack gear, control-room microphone, and Antoine guitarist image recorded in the selection JSON. The three approved homepage section images are also file-backed there.

On 2026-09-01 Bridget selected the fourth cinematic lower-third homepage-hero study. The root homepage now keeps the large duplicate `CHECKMARK AUDIO` hero heading visually hidden, gives the shared navigation brand lockup a more prominent color-matched metallic-gold treatment on Home, and places the existing location, tagline, supporting copy, and two calls to action inside a restrained translucent lower-third panel. The approved hero carousel imagery and media selections remain unchanged. Desktop, 1440-pixel, and 390-pixel responsive checks show no horizontal overflow; a new approved baseline remains pending Bridget's review of the live render.

On 2026-08-26 Bridget selected the matched dark-cinematic Studio A and Studio B concept pair for implementation. Both root studio pages now use the shared cinematic split layout: a large room-specific hero, three factual use chips, a three-image room-detail rail, and a cream three-column information deck. The complete existing page galleries and inquiry path remain in place. The selected page media is recorded in `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`, and wide rendered baselines are preserved in `START_HERE/APPROVED_VISUAL_BASELINES/`.

Also on 2026-08-26 Bridget selected the Services Concept 09 single-window direction, refined with the simpler vertical selector from the illustrated-monitor study. Root `services.html` now uses a scalable warm-gold signal-path diagram, monumental `SERVICES` title, one cinematic media window, and six interactive service rows. Hover, focus, keyboard arrows, and tap update the active outline, bullet, rate guidance, supporting line, destination, and authentic service image. The selected imagery is recorded in `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`; the page remains `noindex` and retains only approved starting-price guidance.

On 2026-08-28 Bridget approved the light editorial Team-page direction and explicitly required equal visual treatment for all five public team members: Gavin Hammond, Bridget Reinhard, Richard Baca, Matt Bow, and Tony Rivera. Root `team.html` now uses one equal five-card contact-sheet grid with identical portrait dimensions, name/title treatment, and responsive behavior. Confirmed individual media is assigned to Gavin, Bridget, and Richard; Matt and Tony retain equal-sized designed placeholders until their portraits are approved. The selected media is recorded in `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.

On 2026-09-01 Bridget selected the dark cinematic broadcast-wall direction for Community. Root `community.html` now uses a monumental gold Community masthead, an authentic session photograph, and a numbered three-part feature rail for Checkmark Tonight, Artist Stories, and Produced at Checkmark. The implementation uses verified repository media, avoids unconfirmed artist credits or live-status claims, remains responsive, and records its page assignments in `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.

The root website now also uses one shared navigation-header system on every page. It preserves the homepage's official microphone logo and Josefin Sans `CHECKMARK AUDIO` wordmark, applies the more spacious page-title rhythm across the navigation, and uses the same filled metallic-gold `BOOK A FREE CONSULTATION` button throughout. Desktop and 390-pixel mobile checks across Home, Services, Studio A, Team, and Community confirmed matching header geometry, correct active-page treatment, and no horizontal overflow.

On 2026-08-27 Bridget directed the active website to replace the remaining orange accent treatment with a consistent warm, rich gold. `checkmark-gold-theme.css` now defines the shared gold family for display headings, eyebrow labels, active navigation, rules, icons, outlines, and interactive states across the root site. Body copy remains cream or charcoal for readability, while genuine recording/status LEDs remain red. The revised palette is implemented and awaiting final visual approval.

The root site remains visibly marked as in development and `noindex`. It is not public production. It retains the real EmailJS inquiry flow and selectable Cal.com consultation calendar.

On 2026-08-27 the media editor was made site-wide and durable. All ten pages load media selections through `MEDIA/WEBSITE_MEDIA_SELECTIONS.json` and the shared `checkmark-media-loader.js`; one localhost-only editor module handles current hero images, section photos, videos, Services states, Studio A/B rails, and generated galleries. Browser changes are explicitly marked unsaved until the editor downloads a replacement canonical JSON file. The five-review homepage carousel also now pans continuously, pauses on hover or keyboard focus, and becomes static/scrollable when reduced motion is requested. The queued texture implementation remains blocked because `MEDIA/IMAGES/TEXTURES/APPROVED/` is empty.

## Repository organization

- Root: one canonical website only
- `START_HERE/`: current state, authority, decisions, and active actions
- `MEDIA/`: one active media library
- `DRAFTS/active/`: off-direction work currently expected to continue; currently empty except its README
- `DRAFTS/reference/`: paused/protected design studies
- `ARCHIVE/`: permanently superseded directions and historical systems

The former top-level `MOCKUP/` is archived at `ARCHIVE/old-website-directions/mockup-before-root-build-2026-08-11/`. The pre-recovery root homepage and recovered preview copies are in their dated archive folders. There is deliberately no second active site tree.

## Active brand and content facts

- Active official logo standards are the matching gold, black, and white 2000×2000 transparent files recorded in `SEO/LOGO_ASSET_MANIFEST.md`; superseded logo work is archived.
- Approved visual character: deep black, warm cream, champagne gold, restrained red accent, editorial serif, expressive italic, and condensed labels.
- Approved hero-image treatment: show homepage and inner-page hero photography at full strength. Use a broad, full-banner-height left-anchored charcoal gradient that is darkest behind the hero heading and supporting copy and fades horizontally to clear, with no border, visible container edge, or horizontal seam. Do not dim or lower the opacity of the underlying image.
- Approved starting-price model: vocal recording from $50/hour, general studio/engineering from $65/hour, band recording from $75/hour; project work is quoted.
- Studio-client policies are approved in `POLICIES/01_STUDIO_CLIENT/POLICY_SET.md`. Website privacy/legal documents retain the statuses written in their files.
- The shared header includes a `Q & A` destination. Its six current questions and conservative answers were confirmed by Bridget's 2026-08-21 review screenshot and are recorded in `SEO/FAQ_BANK.md`; unresolved delivery, revision, payment, and turnaround specifics remain unpublished.
- Do not infer missing team, studio, rights, testimonial, policy, or business facts.

## What remains open

Use `NEXT_STEPS.md` for the live list. The principal open areas are human review of the complete root site; final page-intent/URL approval; remaining team and studio facts; public review/proof approval; privacy/legal completion; responsive, accessibility, link, form, metadata, and launch QA; and controlled hosting/domain cutover.

## History note

Earlier directions, contradictory build attempts, and the July repository system are preserved in Git and `ARCHIVE/`. They are evidence, not current instructions. New sessions should not reconstruct current state from branch names, browser local storage, or archived previews when the files above answer it directly.
