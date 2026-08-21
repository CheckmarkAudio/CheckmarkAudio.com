# AGENTS.md

## Project

Build, test, approve, and launch Checkmark Audio's independent replacement for the Wix-hosted CheckmarkAudio.com website. Wix is the current production host, not the destination. Keep it live until the replacement is approved and ready for controlled cutover.

The replacement includes branded EmailJS inquiries and a selectable Cal.com calendar for the free one-hour consultation. Paid project-session self-booking is separate future work.

## Read first

1. `START_HERE/PROJECT_STATE.md`
2. `START_HERE/RULES.md`
3. `START_HERE/DOCUMENT_MAP.md`
4. `START_HERE/NEXT_STEPS.md`
5. `START_HERE/SEO_STRUCTURE.md`
6. `START_HERE/MEDIA_SEO_PLAN.md` for media work
7. `START_HERE/PLATFORM_ARCHITECTURE.md`
8. `START_HERE/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`
9. the two required SEO DOCX files listed in `DOCUMENT_MAP.md`
10. `SEO/README.md` and relevant `SEO/` references

## Non-negotiable rules

- The Source of Truth DOCX is the only active completion checklist. Do not rename it without Bridget's approval.
- The repository root is the one active replacement website. Do not create a second active site tree.
- `index.html` is the protected homepage direction selected on 2026-08-21. Preserve its approved visual baseline and media selections unless Bridget asks for a change.
- The site remains `noindex` and in development until explicit launch approval.
- `MEDIA/` is the only active website-media library.
- `DRAFTS/active/` is for genuinely active off-direction experiments only; each experiment gets one dated folder. Drafts never override root.
- `DRAFTS/reference/` and `ARCHIVE/` are reference-only unless Bridget explicitly revives an item.
- Do not invent prices, policies, testimonials, credits, team facts, or booking details.
- Preserve user changes and update references in the same pass when moving files.
- Browser-local visual changes are not safely preserved until written into root files and `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.
- Do not point the domain away from Wix until the replacement is approved and tested.
- Keep the school on its separate website; the studio site may introduce and link to it without duplicating its SEO pages.

## Media naming

Follow `SEO/ASSET_NAMING_RULES.md`: lowercase kebab-case using service, useful location, specific description, and brand only when useful. Do not keyword-stuff or invent a location.

## Git

Before committing, confirm the changed-file list matches the request and do not revert user work. Before pushing `main`, sync with `origin/main` and report the final commit hash.
