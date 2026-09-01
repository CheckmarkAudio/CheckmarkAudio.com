# Inner-page layout mockups — 2026-08-26

## Purpose

This is an active, off-direction visual study requested by Bridget on 2026-08-26. It explores four desktop layout directions each for Studio A, Studio B, Q & A, Community, and Team before any direction is selected for implementation.

## Current selection

Bridget selected the Studio A and Studio B Concept 01 cinematic split pair on 2026-08-26 and asked for it to be implemented. That pair is now promoted into root `studio-a.html` and `studio-b.html` through the shared `studio-pages.css` system. Bridget subsequently selected Community Concept 03 (independent music zine) and Team Concept 03 (documentary contact sheet) as the preferred directions; those remain mockups pending implementation. Bridget selected Services Concept 09 (single cinematic window) with the simpler vertical selector behavior from Concept 11; that combined direction is now implemented in root `services.html`, `services-page.css`, and `services-page.js`.

The canonical website remains the repository root. These images are design references only and do not override root HTML, CSS, media assignments, or `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.

## Guardrails

- Studio A and Studio B are designed as four cohesive pairs, all derived from the supplied dark cinematic artist-homepage reference.
- Q & A, Community, and Team intentionally use different page-specific layout languages while retaining the Checkmark Audio palette, typography character, navigation, and conversion path.
- No unapproved equipment, rates, credits, testimonials, team members, biographies, or policies are introduced.
- Mockup copy is intentionally short and drawn from the current root pages and active project references. Image-rendered text is conceptual and must be re-typeset in HTML if selected.
- Root `index.html` and its approved homepage baseline are unchanged.
- The replacement remains in development and `noindex`.

## Concept map

| Variant | Studio A / Studio B paired system | Q & A | Community | Team |
| --- | --- | --- | --- | --- |
| 01 | Cinematic split-screen room portrait | Signal-path question index | Artist campaign wall | Double-portrait editorial |
| 02 | Noir filmstrip / room sequence | Ask-the-engineer editorial desk | Checkmark Tonight broadcast timeline | Mixing-desk role cards |
| 03 | Gold architectural room panels | Patchbay knowledge grid | Independent music zine | Documentary contact sheet |
| 04 | Immersive room journey / numbered scenes | Vinyl liner-notes index | Artist orbit / community network | Stage-credits poster |

## Output naming

Each final image uses:

`[page]-concept-[01-04]-[short-direction].png`

The corresponding production prompts are recorded in `PROMPTS.md`.

## Services round 2 — tactile studio-tech

These concepts respond to Bridget's request for a diagram-like, playful technical aesthetic with tactile textures and retro-computer clip art. The supplied doodle artwork is a visual-language reference only. The concepts use authentic `MEDIA/` photography and are designed around implementable CSS Grid plus SVG line work.

| Variant | Direction |
| --- | --- |
| 05 | Signal-chain playground |
| 06 | Studio OS |
| 07 | Audio blueprint |
| 08 | Modular service map |

## Services round 3 — refined media integration

Bridget locked the round-two title, signal-chain diagram, CTA treatment, rate detail, texture, and orange-on-black illustration language. These four variants isolate the remaining decision: how authentic photography should sit inside that system without pulling the page away from the site's cinematic visual baseline.

| Variant | Media treatment |
| --- | --- |
| 09 | One clean cinematic window |
| 10 | Three-frame editorial filmstrip |
| 11 | One illustrated monitor reveal |
| 12 | Cinematic split panel with narrow photo rail |

## Queued page 2 direction — hardware video players

Bridget selected the illustrated hardware-module framing language as the direction for presenting the site's two existing videos: the demo reel and the studio tour. The saved visual reference is `page-2-video-player-frame-reference.png`.

Required interaction model for implementation:

- Two framed video players: demo reel and studio tour.
- A horizontal timeline scrubber runs across the bottom of each video frame and moves through video time.
- The large rotary knob controls player gain/volume.
- Standard accessible video controls and keyboard behavior must remain available even when the custom controls are shown.
- The frame should retain the tactile black hardware surface, thin orange linework, red status LED, and restrained physical controls without adding decorative cables or unnecessary interface clutter.
