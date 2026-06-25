# Checkmark Audio School — Design System

> Imported reference from the old `CHECKMARK_SCHOOL` repo. Use for brand and UI context only; current website production assets still belong in `02_ASSETS/production/`.

The brand and UI system for **Checkmark Audio School**, the educational branch of
**Checkmark Audio**. The school delivers a 12-month, studio-based audio program in
three modules — Production & Sound Design, Recording & Engineering, and Mixing,
Mastering & Delivery. This design system dresses that curriculum: lesson UIs,
student/teacher dashboards, workbooks, handouts, slides, and marketing.

It is a **gold-forward** evolution of the parent Checkmark Audio dashboard aesthetic
(black / white / gold), retuned for an **educational** feel. **Purple is reserved
strictly as an accent** for "important" curriculum moments — key concepts, milestones,
must-know callouts. It is never a primary surface or default action.

> **Identity in one line:** black & white & gold, learn-by-listening, studio precision
> with classroom clarity. The mark is a **book inside headphones**.

---

## Sources

These informed the system. The reader is **not** assumed to have access — paths are
recorded in case they do.

| Source | What it gave us | Access |
| --- | --- | --- |
| `Dashboard-V3/` (codebase) | The live Checkmark Audio brand aesthetic — gold palette (`#C9A84C`), charcoal surfaces, Inter type, Lucide icons, card/widget/shell chrome, light+dark themes, button/badge/card primitives. Primary visual source of truth. | Mounted locally (read-only) |
| `Dashboard-V3/src/index.css` | The canonical token block (`@theme`) + semantic typography + component classes. | — |
| `Dashboard-V3/docs/ui-standards.md` | Token-first styling philosophy, component hierarchy, accessibility baseline. | — |
| `CHECKMARK_SCHOOL/` (curriculum repo) | The educational framework being dressed: program structure, modules, chapters, scope & sequence, content tone, the `09_BRAND_UI/` intent docs. | Mounted locally (read-only) |
| `uploads/01-school-logo-white-upload.png` & `00-school-logo-black-upload.png` | The school's primary logo — book + headphones. | In project (`assets/`) |

> **Note on the curriculum repo:** most `CHECKMARK_SCHOOL/` documents are intentional
> *stubs / drafts* (frontmatter + a one-line intent). The *structure* is real and
> authoritative; the *prose* is not yet written. This system supplies the visual layer
> those documents will eventually render through.

---

## Products / Surfaces

1. **Student & Teacher Learning UI** (the focus of this system) — the app where students
   move through modules, open chapters/classes, submit deliverables, and track progress,
   and where teachers deliver and assess. Built as a UI kit in `ui_kits/learning-app/`.
2. **Curriculum documents** (workbooks, handouts, rubrics) — print/reading surfaces that
   use the **Classroom Studio** theme. Components like lesson cards and callouts are shared.
3. **Parent brand: Checkmark Audio** — the studio operations dashboard (`Dashboard-V3`).
   The school is a sub-brand of it; lockups show the relationship.

---

## CONTENT FUNDAMENTALS

How Checkmark Audio School writes. Pulled from the curriculum's own style intent
("clear, direct, professional language") and the dashboard's friendly-but-precise voice.

- **Voice:** Calm, expert, encouraging. A working engineer mentoring a student in the
  room — never academic-stuffy, never hype. Confidence without jargon-flexing.
- **Person:** Address the student as **"you"** ("you'll export a first-pass mix").
  Describe the program in plain third person ("Students learn by doing real audio work").
  The school speaks as "we" sparingly.
- **Casing:** **Title Case** for module, chapter, and class titles
  ("Critical Listening & Analyzing Pro Mixes"). **Sentence case** for body, descriptions,
  buttons, and UI labels. **UPPERCASE** only for micro-labels (`REQUIRED MATERIALS`,
  `KEY CONCEPT`) at the 11px label tier with wide tracking.
- **Clarity contract:** Every lesson must make three things obvious — *what you are
  learning, what you are making, and how it connects to the final portfolio.* Copy should
  always answer "so what do I do?"
- **Action-first:** Buttons and tasks start with verbs — "Mark Complete", "Submit Mix",
  "Start Key Lesson", "View Syllabus". Friendly error recovery with a next step
  (mirrors the dashboard's login errors: "That email and password don't match. Double-check
  both — passwords are case-sensitive.").
- **Specificity over fluff:** Prefer real engineering values to vague praise — "reference
  at −14 LUFS", "set monitor gain to zero before patching", not "make it sound good."
- **Numbers & units:** Technical values use the mono face with units spelled tight:
  `−14 LUFS`, `2.4 kHz`, `−3 dB`, `120 ms`. Program facts are consistent: *12 months /
  48 weeks · 3 modules · 8 chapters each · 2 classes per chapter · 4-hour classes.*
- **No subtext by default:** Following the dashboard's "title-first and compact" rule, do
  **not** add descriptive subtext under cards/rows/headers unless it's required for
  comprehension, accessibility, or a destructive-action warning.
- **Emoji:** **Not used.** Status and meaning come from iconography (Lucide), color tokens,
  and the ✓ checkmark brand glyph — never from emoji.
- **Tone examples:**
  - Heading: *"Module 3 · Mixing, Mastering & Delivery"*
  - Promise: *"Students learn by doing real audio work in a professional studio, with teacher guidance, critique, repetition, and clear deliverables."*
  - Key concept: *"Always reference at −14 LUFS so loudness doesn't trick your ear into thinking a mix is 'better.'"*
  - Button: *"✓ Mark Complete"*

---

## VISUAL FOUNDATIONS

- **Color vibe:** Black / white / **gold** is the whole identity. Gold (`#C9A84C`) is the
  hero — used for primary actions, highlights, brand marks, focus. The default stage is
  warm white paper with black ink; charcoal is reserved for the optional dark studio mode.
  **Purple** appears only as the "important" accent. Status colors (emerald/amber/red/sky)
  are functional, low-saturation, and translucent.
- **Two themes:**
  - **Classroom Studio** (default) — `#fffaf0` body, white cards, near-black text, gold
    signal. This is the app's home base.
  - **Studio Dark** — `#15151b` body, `#1e1e25` cards, gold ink. The "in the studio,
    lights down" feel for focused work.
- **Type:** **Inter** for everything UI + reading (400–800). **JetBrains Mono** for
  technical readouts and tabular numbers (an educational addition — see Iconography/Fonts
  flag). Display/H1 use tight negative tracking; micro-labels use wide positive tracking
  and uppercase.
- **Backgrounds:** Predominantly **flat solid surfaces**. The parent dashboard uses very
  subtle corner radial washes (gold top-left, faint purple bottom-right, ~10–22% alpha)
  behind the app shell — used sparingly here for hero/shell areas only. **No** gradient
  cards, **no** photographic full-bleed backgrounds by default, **no** repeating textures.
  Imagery, when present, is studio photography (warm, low-key, gold-lit) — treated as
  cards, not background.
- **Cards:** `bg-surface` + `1px` hairline `border` + `8px` radius (`12px` for widgets,
  `16px` for the app shell). **Flat by default** — nesting reads via the border line, not
  shadow ("subtle line, not a shadow"). A gentle hover lift (`shadow-md` + lighter border)
  is allowed on interactive cards.
- **Borders:** Hairline is the primary separator everywhere. Dark `#34343d`; light soft
  `#dedee5` with a `border-strong #b4b4c0` tier for "must be visible" dividers.
- **Shadows:** Restrained. `sm` for chips, `md` for hover lift, `lg (0 22px 70px / .45)`
  only for the app shell and floating modals. Inner highlight `inset 0 1px 0 rgba(255,255,255,.03)`
  on dark widgets for a hint of depth.
- **Corner radii:** Practical and tidy — 8 (controls/cards) · 12 (inputs/widgets) ·
  16 (shell) · 999 (pills). Nothing sharp-cornered.
- **Animation:** Quiet and quick. Fades (`0.3s ease-out`), slide-up `8px`, slide-in `8px`.
  A signature **gold pulse-lift** (translateY −4px, scale 1.008, gold glow, ~1.8s
  ease-out-expo) for one-time attention nudges. No bounces, no infinite decorative loops
  on content. Respect `prefers-reduced-motion`.
- **Hover states:** Backgrounds step one surface lighter (`surface → surface-hover`); gold
  fills darken to `gold-muted`; ghost items gain a `surface-hover` wash and brighten text.
- **Press / active:** Color shift (to muted gold) over movement; controls stay put. Focus
  is a **2px gold ring at 30% alpha** (`--ring-gold`), offset from the surface.
- **Transparency & blur:** Used for *tints*, not glass — translucent gold (`gold/10–18%`)
  and purple (`accent/16%`) chip backgrounds, translucent status surfaces. A `.glass`
  backdrop-blur(12px) exists for overlays/sticky bars but is used sparingly.
- **Iconography:** **Lucide** line icons (the dashboard uses `lucide-react`). See below.
- **Layout rules:** Contained app **shell** (max-width ~1440px, centered, `28px` radius)
  rather than edge-to-edge chrome. Sticky header. Token-first: a visual decision lives in
  a CSS variable or shared class, never as a one-off hex. 4px spacing base.
- **The checkmark (✓):** The brand's namesake glyph. Used as a completion marker, in ink
  icon-tiles (`ink` background + `gold` ✓), and as a quiet motif. Not overused.

---

## ICONOGRAPHY

- **System:** **Lucide** (`lucide.dev`) — the parent dashboard imports `lucide-react`
  throughout (`Music`, `LogIn`, `Eye`, `Loader2`, `HelpCircle`, `Package`, `Trash2`, …).
  Clean, consistent **line icons**, ~1.75–2px stroke, rounded caps. This is the school's
  icon language too.
  - **In HTML artifacts:** load Lucide from CDN — `https://unpkg.com/lucide@latest` — and
    call `lucide.createIcons()`, or inline the SVG. The UI kit does this.
  - Pair icons with the **ink icon-tile** pattern: a near-black rounded tile
    (`--ink`, 10px radius) holding a **gold** glyph. Soft-gold tiles
    (`color-mix(gold 18%)`) are the lighter alternative.
- **Brand glyph:** The **✓ checkmark** and the **book-in-headphones** logo mark are the
  signature symbols. The logo is a raster PNG (provided in white/black; a gold tint was
  generated). Use the logo files, do not redraw.
- **SVGs vs PNG:** UI icons are SVG via Lucide. The **logo** is PNG with transparency
  (4000×4000). The parent app favicon is the 🎵 emoji in the browser tab only — *not*
  used in product UI.
- **Emoji:** **Not used in product surfaces.** (The only exception is the parent repo's
  dev favicon.) Meaning is carried by Lucide icons + color, never emoji.
- **Unicode glyphs:** A few are used decoratively in this system's specimens (★ for key
  concept, ♪ for listening, ⚠ for safety, ✓ for done). In production, prefer the matching
  Lucide icon (`Star`, `Music`, `AlertTriangle`, `Check`) for crispness and consistency.

---

## FONT SUBSTITUTION FLAGS

- **Inter** — loaded from Google Fonts. The parent dashboard declares `'Inter'` in its
  font stack but ships no font files (relies on system/Google Inter). ✅ Match is exact.
- **JetBrains Mono** — **added by this system**, loaded from Google Fonts, for technical
  audio readouts (dB / LUFS / Hz / ms). The parent dashboard ships **no monospace face**.
  ⚠️ **Flag:** if Checkmark Audio School has (or wants) a specific mono brand font, send
  it and we'll swap. Until then JetBrains Mono is the recommended default.

---

## INDEX — what's in this folder

| Path | What it is |
| --- | --- |
| `README.md` | This file — context, content + visual foundations, iconography, index. |
| `SKILL.md` | Agent-Skill manifest so this system works as a downloadable Claude skill. |
| `colors_and_type.css` | All design tokens (colors, type, radius, shadow, spacing) for both themes + semantic type classes. **Import this first.** |
| `assets/` | Logos (school white/black/gold, parent Checkmark Audio mark). |
| `preview/` | The Design System cards (registered in the DS tab) — color, type, spacing, component, brand specimens. |
| `ui_kits/learning-app/` | High-fidelity recreation of the student/teacher learning UI — `index.html` (interactive demo) + JSX components. See its own README. |

### Assets

| File | Use |
| --- | --- |
| `assets/03-school-logo-white.png` | School mark, white — for dark/ink backgrounds. |
| `assets/01-00-school-logo-black-upload.png` | School mark, black — for white/print backgrounds. |
| `assets/02-school-logo-gold.png` | School mark, gold — generated, for charcoal/brand backgrounds. |
| `assets/00-checkmark-audio-logo.png` | Parent brand mark (headphones + microphone). |

### UI Kits

- `ui_kits/learning-app/` — the Checkmark Audio School learning interface.
