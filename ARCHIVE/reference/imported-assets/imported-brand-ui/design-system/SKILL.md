---
name: checkmark-audio-school-design
description: Use this skill to generate well-branded interfaces and assets for Checkmark Audio School (the educational branch of Checkmark Audio), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a gold-forward, studio-meets-classroom audio-education brand.
user-invocable: true
---

Read the `README.md` file within this skill first — it holds the brand context, content
fundamentals, visual foundations, iconography, and a full index of what's available.
Then explore the other files:

- `colors_and_type.css` — all design tokens (colors, type, radius, shadow, spacing) for
  both the Classroom Studio and Studio Dark themes, plus semantic type classes. Import this
  before building anything.
- `assets/` — logos (school book+headphones in white / black / gold; parent Checkmark
  Audio mark). Copy these out; never redraw them.
- `preview/` — design-system specimen cards (color, type, spacing, components, brand).
- `ui_kits/learning-app/` — a high-fidelity, click-through recreation of the student
  learning UI (login → overview → curriculum → lesson detail) with reusable JSX
  components. Lift components and patterns from here.

If creating visual artifacts (slides, mocks, throwaway prototypes, handouts), copy the
assets out and produce static HTML files for the user to view. If working on production
code, copy the assets and read the rules here to become an expert in designing with this
brand.

Brand essentials to honor every time:
- **Black / white / GOLD** is the identity. Gold (`#C9A84C`) is the hero — primary
  actions, highlights, focus, the brand mark. Warm white paper is the default canvas;
  charcoal is reserved for Studio Dark mode.
- **Purple is an accent only** (`#8b5cf6` / `#a78bfa`) — reserved for "important"
  curriculum moments (key concepts, milestones, must-know callouts). Never a primary
  surface or default action.
- **Inter** for UI + reading; **JetBrains Mono** for technical audio readouts (dB / LUFS /
  Hz / ms). **Lucide** line icons. **No emoji** in product surfaces.
- Flat, hairline-bordered, tightly-rounded cards; quiet quick animations; gold focus
  ring; contained app shell. Title-first, action-first, no filler subtext.

If the user invokes this skill without other guidance, ask them what they want to build or
design, ask a few focused questions (surface, audience, theme, variations), and act as an
expert designer who outputs HTML artifacts _or_ production code, depending on the need.
