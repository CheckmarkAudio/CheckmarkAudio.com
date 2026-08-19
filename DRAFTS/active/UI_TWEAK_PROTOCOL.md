# UI Tweak Protocol

Status: Active procedure for exploratory website-design work
Applies to: `DRAFTS/active/` visual previews
Does not authorize: changes to production, promotion into the real build, or labeling a design as approved

## Primary rule

Every visual request begins with a compact design contract using these four headings:

```text
CHANGE
What should become different?

PRESERVE
What must remain unchanged?

REFERENCE
Which screenshot, URL, file, approved direction, or existing section should guide the change?

ACCEPTANCE CRITERIA
What visible and functional facts must be true when the change is complete?
```

If the requester supplies only part of the contract, fill in the remaining fields from their wording and current repository authority. Ask a question only when a missing answer would materially alter the outcome. State any consequential assumption before editing.

## Procedure

### 1. Identify the exact surface

Record the page, section, component, viewport, and preview file. Do not expand a localized request into unrelated restyling.

### 2. Check the relevant authority

Read only the sources needed for the requested surface:

- current brand/design guide;
- latest dated project and decision notes;
- navigation and page-structure rules;
- approved media assignments and metadata;
- user-supplied screenshot or named reference;
- current production site when the requester explicitly asks for that comparison;
- latest accepted visual baseline, when one exists.

Use the repository conflict rules when sources disagree. A newer explicit decision supersedes an older exploratory note. Do not allow a draft or screenshot to silently become a source of truth.

### 3. Capture the before state

Keep or identify a screenshot of the affected surface before editing. Record the reference in `UI_CHANGE_LOG.md`. Do not put it in `APPROVED_VISUAL_BASELINES/` unless the requester explicitly approves it.

### 4. Make one conceptual change per pass

Keep these categories separate unless the request explicitly combines them:

- layout and spacing;
- typography;
- palette and contrast;
- imagery and crop;
- animation and interaction;
- content and messaging.

A crop adjustment should not quietly change typography. A carousel repair should not rewrite reviews. A visual calendar change should not alter booking policy.

### 5. Preserve functionality and authority

Before finishing, confirm that the change did not break or replace required behavior, including:

- navigation and service dropdowns;
- service and pricing links;
- verified review attribution;
- synchronized before/after audio;
- selectable Cal.com consultation booking;
- inquiry-form behavior;
- responsive and keyboard behavior.

Do not invent prices, reviews, policies, credits, team facts, or booking details.

### 6. Validate proportionately

For layout work, check desktop, tablet, and mobile. For interactive work, also test the interaction itself. At minimum verify:

- no clipping or horizontal overflow;
- readable type and sufficient contrast;
- intentional image crop at each breakpoint;
- working controls and links;
- reduced-motion behavior where animation is used;
- no regression outside the requested section.

### 7. Compare against the contract

Evaluate every acceptance criterion explicitly. If one is not met, continue iterating or record the blocker. Do not call the tweak complete merely because the code changed.

### 8. Log the outcome

Add an entry to `UI_CHANGE_LOG.md` containing:

- date and time when useful;
- page and section;
- Change / Preserve / Reference / Acceptance Criteria;
- files changed;
- outcome and validation;
- decision status;
- remaining ambiguity or follow-up.

### 9. Apply a decision label

Use exactly one:

- **Exploratory** — implemented for evaluation; carries no approval.
- **Preferred direction** — requester favors it, but final approval or validation remains.
- **Approved visual baseline** — requester explicitly approves this rendered state.
- **Superseded** — a later decision replaces it.
- **Rejected** — do not reuse without explicit revival.

### 10. Promote an approved baseline carefully

When the requester explicitly approves a rendered state:

1. Save the screenshot in `APPROVED_VISUAL_BASELINES/`.
2. Use a descriptive filename: `[page]-[section]-approved-direction-YYYY-MM-DD.png`.
3. Add its context and acceptance criteria to the folder `README.md`.
4. Mark the matching change-log entry **Approved visual baseline**.
5. Record any conditions or unresolved details that approval did not cover.

Approval of one section does not approve the whole page or authorize production promotion.

## Completion report

Every completed tweak should be handed back in this order:

1. outcome;
2. what changed;
3. what was preserved;
4. validation performed;
5. remaining ambiguity;
6. preview link.
