# UI/Design Redesign — Handoff to Codex

Written 2026-08 by Claude, at Bridget's request, so Codex can pick up the visual redesign effort without re-deriving context or re-litigating decisions already made. Read this before touching layout, palette, typography, or the draft file below.

## Where this came from

Codex already produced the reference concept — `DRAFTS/active/website-visual-concepts/2026-07-24/PRIMARY-CONCEPTS.md` and its PNGs are the origin of this direction ("Editorial Singer Hero": champagne gold, deep black, warm cream review panel, oversized editorial serif wordmark). That doc's locked decisions (heading text, no photo avatars on reviews, no subtext under the bottom icons, etc.) are still the source of truth for content/composition — this handoff doesn't change any of that, it just adds what happened next.

## What exists now: a coded prototype

`DRAFTS/active/editorial-singer-hero-draft.html` is a working HTML/CSS implementation of that concept — not just a mockup image, an actual page you can open and click through. It covers Hero, Reviews, Feature row, Sound/Listening, Gallery, and Booking/Inquiries sections. **Visual only** — no real audio, EmailJS, or Cal.com wiring; the calendar in it is a static styled mockup, not a live embed.

### Exact palette (pixel-sampled from the reference PNG, not eyeballed)

- `#e8bd7e` — bright champagne gold (text, linework, icons)
- `#c0905e` — deeper gold (solid button fills)
- `#dbc0a2` — warm cream (review panel background)
- `#e2382b` — restrained red accent (used sparingly — eyebrow labels, the tagline's period, nothing else)
- `#070707` — near-black (base background)
- `#efeae1` — light grey, added later (see Iteration Log) for a section that isn't the cream panel, matching the live site's existing `.cool-light` tone

### Fonts (loaded via Google Fonts CDN in the draft — not on the live site yet)

- **Playfair Display** — the wordmark, tagline, and review quotes. This was a real correction, not a first guess: the reference's wordmark is a high-contrast Didone-style serif (thin hairlines against thick stems, flared serifs) — the live site's default Georgia stack doesn't have that character at all. Playfair Display was chosen after zooming into the reference letterforms specifically.
- **Oswald** — bold condensed all-caps headings (e.g. "IN THEIR OWN WORDS."). Matches the reference's blocky, tightly-tracked heading treatment, which is a completely different typeface family from the wordmark, not a weight variant of it.

## Iteration log — what was tried, corrected, and why (don't redo this loop)

In rough order, each round was real user feedback on a rendered preview:

1. First pass used Georgia everywhere and looser, more "templated" spacing → **called out as looking less professional, wrong font, tagline was accidentally white instead of gold.** Fixed: fonts above, tagline color, and tightened spacing ~30-40% across hero/reviews/features.
2. Asked to show the effect on the rest of the site, not just the hero → added the Sound/Listening and Booking/Inquiries sections using real copy from live `index.html`, in the same visual language.
3. "Need to be able to click on everything, links should guide to the inquiry form, need real images, need light-grey sections so it isn't all black, needs to read easier/friendlier" → fixed all four: every nav link/CTA now points at a real in-page anchor (nothing is a dead `href="#"`), added the Gallery section (real studio photos, not placeholders) on that new light-grey background, brightened muted text for contrast, added hover states everywhere.
4. Hero photo went through two rounds: first an artist portrait (rejected as tonally mismatched — cool/muted lighting against a warm gold palette), then `MEDIA/IMAGES/female-singer-smoke-stage-performance.jpg` (kept — warm amber stage lighting actually matches the palette). It's still a placeholder, not final — director wants this to eventually be **video**, not a still, once real footage exists (none exists in `MEDIA/` yet).

## Non-negotiables (from this repo's `AGENTS.md` / `START_HERE/RULES.md` — still apply)

- Root `index.html` is the only active homepage. `DRAFTS/` never silently overrides it — nothing here goes live without Bridget/Gavin explicitly approving the promotion.
- Don't invent prices, policies, reviews, credits, or team facts. The review quotes/names in the draft are the real, already-approved ones from the live site — don't swap in placeholder content.
- Media filenames must match whatever Codex's SEO pass has already renamed them to — check `MEDIA/MEDIA_CATALOG.md` for current names before referencing anything; the draft's image paths were already broken and fixed once already after a rename pass, don't reintroduce stale filenames.

## What's live and functional on the real site right now (redesign needs to preserve/reintegrate these, not just the look)

The current `index.html` — separate from this draft — has real, tested functionality that any eventual redesign needs to carry forward:

- EmailJS wired for the inquiry form (2 templates, real IDs, already tested sending).
- A **fully open, clickable Cal.com calendar** booking the free 1-hour consultation directly — no login gate. (This was gated/`inert` earlier this same week, then reverted once Gavin clarified consultations don't carry the scope-mismatch risk that real paid sessions do.)
- A "Client Portal — Coming Soon" email-capture box in `#book`, reusing the internal EmailJS template — the client portal itself is planned as a **separate site**, not part of this repo, so there's nothing to redesign for it here beyond that waitlist box.

Full architecture context (shared Supabase backend, why the portal is separate, what's built vs. not) is in `START_HERE/PLATFORM_ARCHITECTURE.md` if the redesign work touches anything beyond pure visual/layout.

## Suggested workflow

Same pattern already proven in the Dashboard-V3 repo (Team Schedule redesign): **draft/mockup first, get Bridget's sign-off in chat, then build against the real page.** Don't skip straight to editing live `index.html`/`services.html`/`team.html` — those files are also actively touched by the SEO media pass, so uncoordinated concurrent edits risk clobbering each other's work either way.
