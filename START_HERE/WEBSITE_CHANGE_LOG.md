# UI Change Log

This is the chronological record of root-website and exploratory visual decisions. It does not replace the brand guide, project state, source-of-truth documents, or explicit approval from Bridget or Gavin.

## Entry template

```markdown
## YYYY-MM-DD — Page / section — Short change name

**Status:** Exploratory | Preferred direction | Approved visual baseline | Superseded | Rejected

**Change:**

**Preserve:**

**Reference:**

**Acceptance criteria:**

- [ ] Criterion

**Files changed:**

**Outcome and validation:**

**Open questions / follow-up:**
```

---

## 2026-08-27 — Site-wide media — Durable shared editor

**Status:** Implemented development tooling

**Change:** Wired all ten pages to the canonical media-selection JSON through a small shared loader and one localhost-only editor. Added stable slots for current heroes, homepage section media and videos, Services media states, and Studio A/B primary images, rails, and generated galleries. Added an unmistakable unsaved state and full JSON download for durable project saving.

**Preserve:** The approved homepage baseline, current page layouts, `noindex` status, and public-site invisibility of editing controls.

**Outcome and validation:** Syntax and JSON validation passed. Fresh browser checks on all ten pages found the editor toolbar and drawer, correct page-specific media counts, canonical media loading, and no horizontal overflow. A simulated crop change produced the required unsaved warning and JSON-export prompt.

**Open questions / follow-up:** Texture implementation remains gated on approved assets in `MEDIA/IMAGES/TEXTURES/APPROVED/`.

## 2026-08-11 — Process — Visual-tweak protocol established

**Status:** Preferred direction

**Change:** Establish a repeatable design-tweak procedure, decision log, approval-gated visual-baseline folder, and open-questions register.

**Preserve:** Existing project authority, production isolation, current repository conflict rules, and explicit human approval requirements.

**Reference:** Bridget's direction in the active design-preview task on 2026-08-11.

**Acceptance criteria:**

- [x] Every future visual request begins with Change / Preserve / Reference / Acceptance Criteria.
- [x] Visual outcomes use explicit decision-status labels.
- [x] Approved screenshots have a dedicated, approval-gated location.
- [x] Unresolved design choices have one active register.

**Files changed:**

- `DRAFTS/active/UI_TWEAK_PROTOCOL.md`
- `DRAFTS/active/UI_CHANGE_LOG.md`
- `DRAFTS/active/APPROVED_VISUAL_BASELINES/README.md`
- `DRAFTS/active/OPEN_DESIGN_QUESTIONS.md`

**Outcome and validation:** The procedure and supporting records were created and cross-aligned.

**Open questions / follow-up:** Existing exploratory changes below predate the protocol and should not be retroactively treated as approved.

## 2026-08-11 — Homepage / hero — Checkmark studio-sign composition

**Status:** Exploratory

**Change:** Use `albuquerque-new-mexico-music-studio-recording-checkmark-sign.webp` as the hero image and move toward the current CheckmarkAudio.com composition.

**Preserve:** Left-weighted title, champagne-gold typography, readable call to action, and the named image.

**Reference:** User screenshots comparing the draft with the current aired website.

**Acceptance criteria:**

- [ ] Complete sign is clearly visible with breathing room.
- [ ] Sign is noticeably right-of-center, not centered or clipped at the edge.
- [ ] Dark studio area remains useful behind the title.
- [ ] Desktop and mobile crops are both intentional.

**Files changed:** `DRAFTS/active/checkmark-website-draft-preview-2026-08-05.html`, `DRAFTS/active/checkmark-home-interactions.css`

**Outcome and validation:** Still under active visual review. No approved baseline exists yet.

**Open questions / follow-up:** Confirm the final crop against a refreshed preview and the live-site reference.

## 2026-08-11 — Homepage / reviews — Full-width looping carousel

**Status:** Exploratory

**Change:** Make the verified-review carousel span the page and loop automatically.

**Preserve:** Five verified excerpts, attribution, manual arrows, warm-cream review treatment, and responsive access.

**Reference:** Homepage design direction and user feedback from the rendered preview.

**Acceptance criteria:**

- [x] Three evenly aligned reviews appear on desktop.
- [x] Carousel stays inside its background without horizontal page overflow.
- [x] Automatic loop and manual arrows operate.
- [x] Responsive review counts adjust for smaller screens.

**Files changed:** `DRAFTS/active/checkmark-website-draft-preview-2026-08-05.html`, `DRAFTS/active/checkmark-home-interactions.css`

**Outcome and validation:** Alignment, automatic movement, and arrow control were functionally checked. Visual approval remains open.

**Open questions / follow-up:** Decide whether the final motion should be stepped, continuous, or user-controlled only.

## 2026-08-11 — Booking / calendar — Large selectable consultation calendar

**Status:** Preferred direction

**Change:** Restore the large visual scale of the earlier calendar while keeping the real Cal.com consultation calendar selectable.

**Preserve:** Direct booking for the free one-hour consultation, optional inquiry path, and separation from future paid-session booking.

**Reference:** Earlier large read-only calendar layout plus the corrected 2026-08-10/11 scheduling decision.

**Acceptance criteria:**

- [x] Live Cal.com times remain selectable.
- [x] Calendar uses near-full-page width.
- [x] Calendar remains usable on service pages and the homepage.
- [x] Mobile retains a tall touch-friendly layout.

**Files changed:** `DRAFTS/active/checkmark-live-calendar.css`, homepage and shared service-page calendar integration.

**Outcome and validation:** The selectable embed was enlarged without reverting to illustrative or read-only slots.

**Open questions / follow-up:** Final visual balance between the information sidebar and scheduler remains subject to approval.

## 2026-08-11 — Services / overview — Editorial services presentation

**Status:** Exploratory

**Change:** Replace the office-like three-box presentation with an image-led recording feature and quieter editorial rows.

**Preserve:** Approved service groupings, descriptions, starting-price guidance, and links to detailed pages.

**Reference:** Classy but authentic brand direction and user feedback on the blocky rendered design.

**Acceptance criteria:**

- [x] Less corporate card repetition.
- [x] More authentic studio imagery and editorial hierarchy.
- [x] All prices and service links remain visible.
- [x] Responsive layout collapses cleanly.

**Files changed:** `DRAFTS/active/checkmark-preview-services.html`, `DRAFTS/active/checkmark-services-editorial.css`

**Outcome and validation:** Implemented for evaluation; not approved as a baseline.

**Open questions / follow-up:** Confirm whether the image-led Recording emphasis is the intended service hierarchy.

## 2026-08-11 — Homepage / structure and media — Remove drift and restore recorded requirements

**Status:** Preferred direction

**Change:** Remove the entire “Your vision. Our craft.” and standalone “Starting points” sections; replace the post-review feature strip with affiliation/recognition logos; add the documented studio-tour and music-demo-reel videos to the homepage; verify and wire the documented Millie raw/master comparison pair.

**Preserve:** Verified reviews, Services navigation and pricing destination, studio-gallery introduction, selectable consultation calendar, optional inquiry path, synchronized A/B behavior, and draft-only isolation.

**Reference:** Bridget's 2026-08-11 correction; `START_HERE/PROJECT_STATE.md`; `START_HERE/NEXT_STEPS.md`; `SEO/OPEN_QUESTIONS_FOR_LAUNCH.md`; current root `index.html`; media catalog and metadata.

**Acceptance criteria:**

- [x] “Your vision. Our craft.” is absent from the homepage.
- [x] The standalone homepage “Starting points” pricing section is absent.
- [x] Service pricing remains available on the Services overview and detailed service pages.
- [x] The black strip below reviews contains real repository affiliation/recognition logos.
- [x] Studio tour uses `intro-richard-music-studio-checkmark-audio-recording.mp4`.
- [x] Music demo reel uses `cma-music-studio-demo.mp4`.
- [x] A/B player uses the Millie “Love All of Me” raw/master pair, with matched 160.968-second web files and original WAV fallbacks.
- [x] Homepage script parses after the structural changes.

**Files changed:**

- `DRAFTS/active/checkmark-website-draft-preview-2026-08-05.html`
- `DRAFTS/active/checkmark-home-media.css`
- `DRAFTS/active/UI_CHANGE_LOG.md`
- `DRAFTS/active/OPEN_DESIGN_QUESTIONS.md`

**Outcome and validation:** Required media and filenames were verified against the current active notes and repository files. Audio durations match to the millisecond. Both local videos are embedded with controls and metadata-only preload. The removed sections no longer exist in the homepage source.

**Open questions / follow-up:** Third-party trademark-use review remains open for the affiliation marks. Final visual approval of the new media section and affiliate bar remains open.

## 2026-08-19 — Homepage / hero — Draft visual carousel editor

**Status:** Exploratory

**Change:** Convert the protected draft's single hero background into a timed carousel and add a draft-only visual interface for selecting, reordering, hiding, adding, dragging, zooming, and positioning repository photographs separately for desktop and mobile.

**Preserve:** Current studio-sign first slide and composition, hero copy and CTAs, navigation, all homepage sections below the hero, production files, Wix, DNS, Cal.com, and EmailJS.

**Reference:** The current protected draft before implementation (`checkmark-website-draft-preview-2026-08-05.html`, SHA-256 `f740257d6f497b5e7f19e9a15b738b4d133958c3db548762ad8174423554ad67`) and the 2026-08-19 four-part design contract.

**Acceptance criteria:**

- [x] Current studio-sign photograph remains slide one and the safe fallback.
- [x] Carousel has previous, next, dot, and pause controls.
- [x] Automatic movement stops for reduced-motion users and while editing.
- [x] Draft editor supports direct dragging, precision positioning, zoom, ordering, enable/disable, adding from a bounded media library, timing, transitions, and reset.
- [x] Desktop and mobile positions are stored separately.
- [x] An invalid or empty saved configuration falls back safely and at least one slide must remain visible.
- [x] Settings persist only in local browser storage and are not connected to production or publishing.

**Files changed:**

- `DRAFTS/active/checkmark-website-draft-preview-2026-08-05.html`
- `DRAFTS/active/checkmark-hero-editor.css`
- `DRAFTS/active/checkmark-hero-editor.js`
- `DRAFTS/active/UI_CHANGE_LOG.md`

**Outcome and validation:** Implemented as an isolated CSS/JavaScript layer over the existing hero. Final browser interaction and responsive visual evaluation remain required before this can become a preferred direction.

**Open questions / follow-up:** This prototype deliberately does not upload files, authenticate users, or publish changes. Those capabilities require a separately approved secure persistence architecture.

## 2026-08-19 — Homepage / hero editor — Full project media browser and natural crop dragging

**Status:** Exploratory

**Change:** Replace the bounded hero-photo dropdown with a searchable, filterable browser for the complete `MEDIA/IMAGES` and `MEDIA/VIDEO` project folders; add large media previews; allow any indexed project photograph to be added to the carousel; change direct manipulation from click-position jumping to natural drag-offset cropping similar to social cover-photo editors.

**Preserve:** Existing carousel configuration, starter slides, separate desktop/mobile crops, zoom controls, local-only persistence, original media files and filenames, and all page content outside the hero editor.

**Reference:** Bridget's 2026-08-19 request and the repository's active `MEDIA` organization.

**Acceptance criteria:**

- [x] All supported project photographs and videos appear in a generated media index.
- [x] Search, media-type filters, folder filters, result counts, pagination, and lazy image thumbnails are available.
- [x] Images and videos can be previewed without moving or editing their source files.
- [x] Any indexed photograph can be added to the locally saved header carousel.
- [x] Videos are previewable but cannot be inserted into the header until playback and performance rules are approved.
- [x] Dragging begins from the current crop and moves by pointer offset instead of jumping to the click location.
- [x] Existing range controls and reset behavior remain available.

**Files changed:**

- `DRAFTS/active/checkmark-website-draft-preview-2026-08-05.html`
- `DRAFTS/active/checkmark-hero-editor.css`
- `DRAFTS/active/checkmark-hero-editor.js`
- `DRAFTS/active/build-media-index.mjs`
- `DRAFTS/active/checkmark-media-index.json`
- `DRAFTS/active/UI_CHANGE_LOG.md`

**Outcome and validation:** The generated index contains 1,007 supported assets: 945 photographs and 62 videos. The browser renders only the first 60 matches at a time and lazy-loads image thumbnails to limit initial work.

**Open questions / follow-up:** Decide whether future header videos should autoplay silently, require a play action, or remain excluded. Uploading new files and publishing shared edits still require the separately approved secure editing architecture.

## 2026-08-19 — Homepage / media browser — Persistent selected-photo action

**Status:** Preferred direction

**Change:** Move the selected-photo action above the large preview and keep it fixed at the top of the right preview column.

**Preserve:** Search, filters, selected asset, preview size, gallery scroll position, and add-to-carousel behavior.

**Reference:** Bridget's screenshot showing the action falling below the visible preview area.

**Acceptance criteria:**

- [x] The selected filename and Add Photo to Header action appear above the preview.
- [x] The action remains visible while the preview column scrolls.
- [x] Disabled states still explain videos and photographs already in the header.

**Files changed:** `DRAFTS/active/checkmark-website-draft-preview-2026-08-05.html`, `DRAFTS/active/checkmark-hero-editor.css`, and `DRAFTS/active/UI_CHANGE_LOG.md`.

**Outcome and validation:** The preview action is now a sticky top toolbar in the right media column.

## 2026-08-19 — All draft pages / editorial media — Shared section media editor

**Status:** Exploratory

**Change:** Extend the homepage media-editing interaction to editorial media across every page in the protected multipage draft: page hero backgrounds, homepage feature videos, homepage studio photographs, and the Studio A/B galleries.

**Preserve:** Specialized homepage hero carousel editor, page copy and layout, navigation, service pricing, reviews, audio comparison, booking, logos, affiliate marks, badges, icons, original media files, and production isolation.

**Reference:** Bridget's request to make the photo editor usable on each section and page; the approved homepage editor interaction; current page-specific media assignments.

**Acceptance criteria:**

- [x] All nine draft HTML pages load the shared media editor.
- [x] Eight inner-page hero backgrounds have stable page-specific slots.
- [x] Both homepage feature videos and all three homepage studio photographs are editable.
- [x] All 24 generated Studio A/B gallery positions have stable slot identifiers.
- [x] Photographs support replacement, direct drag cropping, zoom, desktop/mobile positioning, and per-slot reset.
- [x] Video positions support browsing, preview, replacement, and per-slot reset without image-only crop controls.
- [x] Changes persist locally by named page and slot and do not alter source media.
- [x] Brand marks and functional interfaces remain locked.

**Files changed:**

- `DRAFTS/active/checkmark-site-media-editor.css`
- `DRAFTS/active/checkmark-site-media-editor.js`
- `DRAFTS/active/checkmark-preview-pages.js`
- all nine `DRAFTS/active/` preview HTML files
- `DRAFTS/active/UI_CHANGE_LOG.md`

**Outcome and validation:** Shared scripts parse successfully, every draft page includes the shared editor, and gallery slots are generated after the shared page content is constructed.

**Open questions / follow-up:** Sections without an existing visual slot remain structurally unchanged. Adding brand-new media blocks to text-only sections would be a separate layout decision rather than a media replacement.

## 2026-08-19 — All draft pages / editor navigation — Persistent header and gallery controls

**Status:** Exploratory

**Change:** Replace easy-to-miss media overlays with a persistent page media toolbar. Give every inner page an explicit **Header image** action, and give Studio A and Studio B a separate **Photo gallery** manager showing all gallery positions together.

**Preserve:** Existing page layouts, copy, assigned photographs, per-slot crop settings, the homepage carousel editor, project-media browser, local-only persistence, and production isolation.

**Reference:** Bridget's Studio B screenshot and request to differentiate header-image editing from gallery-image editing.

**Acceptance criteria:**

- [x] Every inner page exposes a persistent Header image action without hover.
- [x] Studio A and Studio B expose a separately labeled Photo gallery action.
- [x] The gallery manager shows all 12 positions for the selected studio in one organized view.
- [x] Selecting a gallery position opens the existing crop and replacement editor for that specific slot.
- [x] Scattered gallery hover buttons are removed from the presentation.
- [x] The shared editor continues to parse and the Studio B workflow is browser-tested.

**Outcome and validation:** Studio B now renders a fixed two-action toolbar—Header image and Photo gallery—and the gallery manager exposes all 12 positions before the user chooses an image to crop or replace. Other inner pages receive the Header image action; Studio A receives the same 12-position gallery workflow.

## 2026-08-21 — Homepage hero / recovered selected carousel

**Status:** Incomplete recovery — corrected below

**Change:** Preserve Bridget's four selected homepage hero photographs and crop positions directly in the draft files instead of relying only on browser-local settings.

**Selected order:** Control-room microphone, red electric guitar, Checkmark studio sign, and studio patch-bay/rack gear.

**Reference:** Bridget's four screenshots from `localhost:4173/DRAFTS/active/checkmark-website-draft-preview-2026-08-05.html?v=20260819-7` and the matching Chrome local-storage configuration recovered on August 21.

**Files changed:** `checkmark-hero-editor.js`, `checkmark-website-draft-preview-2026-08-05.html`, `recovered-media-selections-2026-08-21.json`, and this change log.

**Outcome and validation:** The exact four-image, eight-second crossfade sequence is now the file-backed default. The recovered JSON also preserves the three edited homepage studio-photo selections and desktop/mobile crop positions.

## 2026-08-21 — Homepage media recovery / correction after visual review

**Status:** Superseded by the approval entry below

**Report from Bridget:** The linked preview is not yet an exact match. Some photographs do not reflect her changes and some selected photographs are missing.

**Verified:** The four recovered hero source files match the four supplied screenshots. The earlier recovery made those hero images file-backed, but only archived the three recovered homepage studio-photo choices in JSON instead of making them the page defaults.

**Correction:** Promote the recovered homepage studio-photo sources and their desktop/mobile crop positions into the shared media editor's file-backed defaults. The three selections are the engineers at the control-room workstation, the blue-light vocal-booth microphone, and Richard Baca at the mixing workstation.

**Files changed:** `checkmark-site-media-editor.js`, `checkmark-website-draft-preview-2026-08-05.html`, and this change log.

**Approval state:** Bridget subsequently confirmed the recovered version; see the approval entry below.

## 2026-08-21 — Homepage / recovered editorial direction promoted

**Status:** Approved visual baseline

**Change:** Make the recovered editorial homepage the one canonical root homepage and preserve the selected media/crops outside browser-local storage.

**Preserve:** Four-image hero carousel, editorial black/cream/gold composition, approved section photographs, real EmailJS inquiry behavior, selectable Cal.com consultation calendar, responsive controls, and launch `noindex` boundary.

**Reference:** Bridget's four screenshots in `APPROVED_VISUAL_BASELINES/` and her confirmation, “yayyy! you found it!”

**Files changed:** Root `index.html` and support files; `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`; `APPROVED_VISUAL_BASELINES/`; project-state and routing records.

**Outcome and validation:** The recovered configuration is now file-backed at root. The superseded root homepage, old mockup, and pre-promotion preview are separated in dated archive folders so none can be mistaken for the active design.

**Open questions / follow-up:** Approval protects this homepage direction and supplied desktop references; complete page-by-page, responsive, accessibility, content, SEO, and launch approval remain open.

## 2026-08-21 — Homepage and Services / services catalog placement

**Status:** Preferred direction

**Change:** Move the complete filterable “Come with an idea. Leave with a record.” services catalog from the canonical homepage to the Services page.

**Preserve:** The catalog's six service cards, approved starting-price guidance, filter categories, cream editorial styling, service-specific inquiry paths, shared navigation, homepage media, inquiry form, selectable Cal.com consultation calendar, and development `noindex` boundary.

**Reference:** Bridget's attached screenshot, `Screenshot 2026-08-21 at 12.14.38 PM.png`, and her instruction to put the pictured section on the Services page and remove it from the front page.

**Acceptance criteria:**

- [x] The catalog appears on `services.html` and no longer appears in `index.html`.
- [x] All, Recording, Finish, and Create filters update the visible cards and pressed state.
- [x] Card links return to the homepage inquiry form with the matching service selected and a starter message filled in.
- [x] Desktop, tablet, and mobile layouts have no horizontal overflow; cards display in three, two, and one columns respectively.
- [x] The homepage media, inquiry form, consultation calendar, navigation, and `noindex` state remain in place.

**Files changed:** `index.html`, `services.html`, `checkmark-services-editorial.css`, and this change log.

**Outcome and validation:** Browser-tested at 1440 px, 768 px, and 390 px. The six-card catalog renders on Services, the category control filters correctly, the homepage contains no catalog instance, and the Vocal Recording card successfully prefills the homepage inquiry form. The only console warnings came from the existing third-party Cal.com embed and are unrelated to this placement change.

**Open questions / follow-up:** This entry records the requested placement as the preferred direction; it does not approve the entire Services page or authorize launch.

## 2026-08-21 — Shared header and Q & A page / first page-review addition

**Status:** Preferred direction

**Change:** Add a `Q & A` item to the shared website header and create a dedicated `faq.html` review page containing the six questions Bridget supplied: free-consultation inclusions, first-time/beginner artists, mixing/mastering file formats, remote mixing/mastering, session preparation, and recording full bands/drums/podcasts/voice-over.

**Preserve:** Canonical root website, approved homepage imagery and crops, existing navigation order and Services dropdown, free-consultation CTA, EmailJS and Cal.com behavior, editorial black/cream/gold styling, mobile navigation, development `noindex`, and all unresolved policy boundaries.

**Reference:** Bridget's `Screenshot 2026-08-21 at 12.30.39 PM.png` and her instruction to add a Q & A section to the header using those questions. `SEO/FAQ_BANK.md`, `SEO/BUSINESS_FACTS.md`, and `POLICIES/01_STUDIO_CLIENT/POLICY_SET.md` constrain the answers where the screenshot truncates wording.

**Acceptance criteria:**

- [x] `Q & A` appears in the homepage and shared inner-page header and footer navigation.
- [x] The six requested questions appear on one dedicated, accessible expandable-answer page.
- [x] No unapproved revision count, turnaround, retention period, included stem count, payment rule, or refund promise is invented.
- [x] Newer podcast, remote-work, and deliverable decisions are reconciled into the active fact and FAQ records rather than left contradictory.
- [ ] Bridget reviews the rendered desktop and mobile page and confirms or revises the answer wording.

**Files changed:** `faq.html`, `faq.css`, `index.html`, `inner-pages.js`, `recording.html`, `README.md`, active state/content records, and this change log.

**Outcome and validation:** The new page contains six expandable questions and six answers, retains `noindex`, loads the shared header/footer and visual review controls, and passes the active-site local-reference check with no missing files. The in-app preview was unable to access the local server during this pass, so desktop/mobile visual approval remains with Bridget's page review.

**Open questions / follow-up:** The screenshot truncates parts of several answers. Conservative wording is used in the review page; Bridget can edit or replace it during page review. This does not approve the entire Q & A page or authorize launch.

## 2026-08-22 — All pages / hero imagery — Full-strength photographs with translucent title panels

**Status:** Preferred direction

**Change:** Remove the darkening filters and full-image gradient overlays from the homepage carousel and every inner-page hero. Place the hero eyebrow, title, tagline, and supporting introduction on a restrained translucent panel instead.

**Preserve:** The protected homepage composition, all file-backed image selections and crop positions, page copy, navigation, calls to action, media-editing controls, gallery and video presentation, responsive behavior, and development `noindex` state.

**Reference:** Bridget's 2026-08-22 instruction: do not dim the lighting or opacity of page background images; use a translucent box behind the title fonts.

**Acceptance criteria:**

- [x] Homepage carousel images render without brightness, saturation, contrast, or opacity reduction.
- [x] Inner-page hero images render without a full-image dark gradient or image brightness reduction.
- [x] Homepage and inner-page hero copy has a translucent, bordered readability panel.
- [x] Ordinary content images, studio galleries, video, captions, and approved crop settings remain unchanged.
- [x] The treatment adapts to desktop and mobile widths.
- [ ] Bridget reviews the treatment across the homepage, Q & A, one service page, and one studio page.

**Files changed:** `checkmark-title-panels.css`, `index.html`, `inner-pages.js`, `START_HERE/PROJECT_STATE.md`, and this change log.

**Outcome and validation:** Shared CSS now owns the hero-image and title-panel rule for all ten active pages, including locally selected hero images. JavaScript syntax, 106 active local references, nine inner-page hero hooks, and the local server responses pass; visual desktop/mobile approval remains with Bridget's page-by-page review.

**Open questions / follow-up:** Fine-tune the panel opacity, width, and padding only after reviewing representative light and dark hero photographs. This entry does not authorize changes to ordinary editorial imagery or launch.

## 2026-08-23 — All pages / hero titles — Broad left-anchored gradient selected

**Status:** Preferred direction selected by Bridget

**Change:** Replace the bordered translucent title boxes on the homepage and all nine inner-page heroes with the broad left-anchored Atmospheric Veil concept. Keep the gradient darkest directly behind the eyebrow, title, tagline, and supporting copy, then feather it smoothly to full transparency without a visible panel edge.

**Preserve:** All approved hero photographs, carousel selections, crop positions, page wording, navigation, calls to action, media-editing controls, ordinary editorial imagery, responsive structure, and development `noindex` state.

**Reference:** Bridget's 2026-08-23 review of the three title-treatment image boards and instruction, “lets do the broad left anchored gradient for each page then yes I like that.” The selected concept board is `DRAFTS/active/2026-08-23-hero-title-treatments/01-atmospheric-veil.png`.

**Acceptance criteria:**

- [x] No thin border, rectangular glass card, or hard title-container edge remains.
- [x] One shared style applies the chosen gradient to the homepage and every inner-page hero.
- [x] The gradient stays concentrated behind the copy and fades to clear before obscuring the full photograph.
- [x] Homepage carousel imagery and inner-page hero photography remain at full image strength.
- [x] The treatment adapts at mobile widths and includes a reduced-transparency fallback.
- [ ] Bridget reviews the browser-rendered homepage, Services, Studio A, and Q & A pages after implementation.

**Files changed:** `checkmark-title-panels.css`, `index.html`, `inner-pages.js`, `START_HERE/PROJECT_STATE.md`, the dated concept-study README, and this change log.

**Outcome and validation:** Browser-tested on the homepage, Services, Studio A, and Q & A at desktop and 390-pixel mobile widths. The shared gradient renders without a border or solid panel background, stays concentrated behind the copy, preserves full-strength imagery, and introduces no horizontal overflow. The homepage mobile title size was tightened so “CHECKMARK” remains fully visible, and the homepage calls to action were given an explicit foreground layer above the extended gradient.

**Open questions / follow-up:** Page-specific gradient position variables may be added only if representative photographs expose a readability problem. This selection does not authorize changing the approved photos or launching the website.

### 2026-08-23 refinement — gradient spans the full banner height

Bridget's follow-up screenshot exposed a horizontal seam where the copy-anchored gradient ended before the top of the hero. The shared treatment now lives on the full hero banner rather than the title container, covering the complete banner height and fading only from left to right. This removes the double-line/misalignment effect while preserving the selected Atmospheric Veil direction, full-strength photography, and borderless title presentation.

## 2026-08-26 — Studio A and Studio B / matched cinematic split pages

**Status:** Preferred direction selected and implemented by Bridget

**Change:** Replace the generic Studio A and Studio B intro layouts with the matched Concept 01 cinematic split system: a large room-specific hero, broad dark copy veil, monumental serif room name, three concise use chips, a stacked three-image room-detail rail, and a cream three-column information deck.

**Preserve:** The root website, shared header/footer, `noindex` development state, factual Studio A/B descriptions, complete 12-image galleries, free-consultation and inquiry destinations, approved homepage baseline, and all unresolved gear/rate/roster approval gates.

**Reference:** Bridget's 2026-08-26 instruction, “I like studio a and b examples 1 and 2 here, can you implement them into the website?”, the supplied Studio B mockup, and the paired `studio-a-concept-01-cinematic-split.png` and `studio-b-concept-01-cinematic-split.png` files in `DRAFTS/active/inner-page-layout-mockups-2026-08-26/`.

**Acceptance criteria:**

- [x] Studio A and Studio B use one cohesive component and responsive-layout system.
- [x] Each page has its own authentic hero and supporting room-detail imagery.
- [x] Only confirmed room uses and descriptions appear; no equipment models, rates, testimonials, or people were invented.
- [x] The existing studio galleries remain present with all 12 images per page.
- [x] Inquiry actions still lead to `index.html#book` and the shared mobile menu still works.
- [x] Both pages retain `noindex,nofollow`, correct active navigation, and no broken local images.
- [x] Browser testing at 1536×1024 and 390×844 shows no horizontal overflow or console warnings.

**Files changed:** `studio-a.html`, `studio-b.html`, `studio-pages.css`, `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`, `START_HERE/PROJECT_STATE.md`, the dated study README, two approved visual baseline PNGs, and this change log.

**Outcome and validation:** The implemented pages closely reproduce the selected visual hierarchy while remaining real HTML/CSS rather than flattened mockup artwork. Desktop keeps the stacked right-side photo rail; tablet and mobile convert it to a three-image horizontal filmstrip and stack the cream information cards. Wide approved baselines are stored as `2026-08-26-studio-a-cinematic-layout-wide.png` and `2026-08-26-studio-b-cinematic-layout-wide.png`.

**Open questions / follow-up:** Final room-specific rates and any public equipment highlights remain approval-gated. This selection does not authorize launch or changes to the protected homepage.

## 2026-08-26 — Services / interactive signal-path page

**Status:** Preferred direction selected and implemented by Bridget

**Change:** Replace the older cream filter-card catalog with the selected Concept 09 single-window Services layout, refined with the quieter vertical selector from Concept 11. Add a full-width illustrated `IDEA → RECORD → PRODUCE → MIX → MASTER → RELEASE` signal path, monumental condensed title, one cinematic media window, gold-filled consultation CTA, and six service rows whose outline, bullet, rate, copy, link, and authentic image update on interaction.

**Preserve:** Root canonical site, shared destinations, development `noindex`, approved vocal/general/band starting-price model, project-quote boundaries, real `MEDIA/` photography, protected homepage, Studio A/B pages, EmailJS inquiry and Cal.com consultation paths, and all unresolved service-page/rights approvals.

**Reference:** Bridget's 2026-08-26 selection of “the first revision” plus her instruction to use the simpler highlightable rows where the box outline and bullet appear on hover. Primary layout reference: `DRAFTS/active/inner-page-layout-mockups-2026-08-26/services-concept-09-single-cinematic-window.png`.

**Acceptance criteria:**

- [x] The top process diagram is code-native scalable line art rather than a flattened mockup image.
- [x] The page title remains `SERVICES`, with one clean rectangular media window.
- [x] Hover, focus, click/tap, Home/End, and arrow-key interactions update the selected service.
- [x] The selected outline and bullet are visible without relying on color alone.
- [x] All six selected images come from the active `MEDIA/` library and are recorded in `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.
- [x] Pricing uses the confirmed $50/$65/$75 starting-price guidance and project-quote language only.
- [x] Desktop 1600×1000 and mobile 390×844 checks show no page-level horizontal overflow or console warnings.

**Files changed:** `services.html`, `services-page.css`, `services-page.js`, `inner-pages.js`, `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`, `START_HERE/PROJECT_STATE.md`, the active study README, the approved wide baseline, and this change log.

**Outcome and validation:** The selected design is implemented as responsive HTML/CSS/SVG with an accessible tab interface. The six service states switch their correct photograph, text, price guidance, and destination; mobile keeps the service list vertical and makes the top process diagram an intentional horizontal strip. Baseline: `2026-08-26-services-signal-path-layout-wide.png`.

**Open questions / follow-up:** Production placement and Artist Media's final public service role remain subject to the approved page-intent map. This implementation retains their existing Services-page presence but does not authorize new standalone URLs, final packages, or launch.

## 2026-08-26 — Sitewide / unified navigation header

**Status:** Selected and implemented by Bridget

**Change:** Replace page-specific header treatments with one shared website navigation system. Use the protected homepage's official Checkmark microphone logo and Josefin Sans `CHECKMARK AUDIO` wordmark on every page, increase the spacing between page titles, retain a clear gold active-page marker, and standardize the filled metallic-gold `BOOK A FREE CONSULTATION` button with its star detail.

**Preserve:** Navigation order and destinations, Services dropdown behavior, responsive mobile menu, development draft bar on the homepage, fixed inner-page header behavior, root canonical site, `noindex`, EmailJS, Cal.com, and all approved page-specific body designs.

**Reference:** Bridget's three 2026-08-26 header screenshots and her instruction to keep the Checkmark logo, font, spacious navigation layout, and consultation button consistent throughout the website.

**Acceptance criteria:**

- [x] Home, Services, Studio A, Team, and Community use the same logo, wordmark, navigation spacing, CTA dimensions, and responsive breakpoint system.
- [x] Desktop inspection at 1600×900 returns the same 1528×96 navigation geometry, 62×66 logo, 32-pixel link gap, and 243×52 CTA on all five representative pages.
- [x] Mobile inspection at 390×844 returns the same 364×76 navigation geometry, 47×50 logo, wordmark, and menu control on all five representative pages.
- [x] The desktop consultation CTA is filled metallic gold; mobile intentionally hides it in favor of the shared menu.
- [x] No representative page introduces horizontal overflow.

**Files changed:** `checkmark-header-brand.css`, `inner-pages.js`, `index.html`, `services-page.css`, `START_HERE/PROJECT_STATE.md`, the refreshed Services baseline and its README entry, and this change log.

**Outcome and validation:** The header no longer changes visual identity between pages. The homepage sits below its development notice while inner pages remain fixed at the viewport top, but the navigation's internal proportions and brand treatment are identical. The Services approved baseline was refreshed after the shared header implementation.

**Open questions / follow-up:** None for header consistency. This implementation does not change the site's development or launch-approval status.

## 2026-08-27 — Sitewide / warm rich gold palette

**Status:** Implemented at Bridget's direction; final visual approval pending

**Change:** Replace the remaining orange accent and display-type treatment with one warm, rich gold family. Apply the shared gold to brand typography, major display headings, eyebrow labels, active navigation, process diagrams, outlines, icons, rules, hover/focus states, and consultation-calendar branding. Keep long-form body copy cream or charcoal for readability and retain small red LEDs only where they communicate an actual recording/status state.

**Preserve:** Approved page layouts, authentic media, header geometry, Services interactions, Studio A/B cohesion, navigation order, pricing and content facts, EmailJS and Cal.com behavior, development `noindex`, and all launch gates.

**Reference:** Bridget's 2026-08-27 instruction to “change the orange coloration and make the font color consistent warm rich gold throughout the whole website.”

**Acceptance criteria:**

- [x] One shared `#d6a85e` gold token drives representative brand, display, label, and active-navigation typography.
- [x] Services signal-path line art, selector states, media frame, and supporting typography no longer render orange.
- [x] Homepage, Services, Recording, Studio A, Team, Community, and Q & A return the shared computed gold for representative display and label text.
- [x] Service-detail pages highlight both the Services section and current dropdown destination in the same gold family.
- [x] Desktop and 390-pixel mobile checks introduce no horizontal overflow.
- [x] `noindex` remains unchanged.

**Files changed:** `checkmark-gold-theme.css`, `checkmark-header-brand.css`, `services-page.css`, `inner-pages.js`, `index.html`, `404.html`, `START_HERE/PROJECT_STATE.md`, the approved-baseline note, and this change log.

**Outcome and validation:** Browser inspection confirms `rgb(214, 168, 94)` for the wordmark, active navigation, eyebrow labels, and representative display headings across the tested pages. The Services illustration and Studio title treatment now share that same visual temperature. Functional red recording LEDs remain intentionally distinct.

**Open questions / follow-up:** Bridget should review the rendered palette before a new screenshot is admitted to `APPROVED_VISUAL_BASELINES/`; the prior Services screenshot remains a layout reference whose orange color is explicitly superseded.

## 2026-08-28 — Team / equal five-person editorial grid

**Status:** Selected and implemented by Bridget

**Change:** Replace the generic dark Team hero and approval-gate panels with the selected light editorial contact-sheet direction. Present Gavin Hammond, Bridget Reinhard, Richard Baca, Matt Bow, and Tony Rivera as five equally weighted cards with identical portrait proportions, frame labels, typography, spacing, and responsive behavior.

**Preserve:** Shared website navigation and footer, official Checkmark logo and wordmark, warm-rich-gold palette, restrained red micro-accents, confirmed public names and roles, authentic `MEDIA/` files, development `noindex`, protected homepage, and all existing booking paths.

**Reference:** Bridget's selected double-portrait editorial concept and her 2026-08-28 instruction that all five team members be treated as equals rather than giving some people more or larger imagery.

**Acceptance criteria:**

- [x] All five confirmed team members appear in the approved order and with confirmed titles only.
- [x] Every card uses the same portrait dimensions, name/title hierarchy, rules, and spacing.
- [x] Gavin, Bridget, and Richard use safely attributable Checkmark media recorded in `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.
- [x] Matt and Tony use equal-sized designed placeholders rather than incorrectly attributed photography.
- [x] Desktop and current narrow-screen checks show equal card geometry and no horizontal overflow.
- [x] Shared navigation, footer, media editor integration, and `noindex` remain intact.

**Files changed:** `team.html`, `team-page.css`, `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`, `SEO/BUSINESS_FACTS.md`, `SEO/OPEN_QUESTIONS_FOR_LAUNCH.md`, `START_HERE/PROJECT_STATE.md`, the approved baseline PNG and README entry, and this change log.

**Outcome and validation:** Root `team.html` now contains the approved responsive five-person composition. Browser validation confirmed the active Team navigation state, five exact names, all confirmed images loaded, equal frame dimensions, no page-level overflow, and no console warnings. Baseline: `2026-08-28-team-editorial-five-person-wide.png`.

**Open questions / follow-up:** Individual portrait files for Matt Bow and Tony Rivera remain pending approval. Their placeholders must be replaced one-for-one without changing card dimensions or hierarchy.

## 2026-09-01 — Homepage / cinematic lower-third hero

**Status:** Selected and implemented by Bridget; rendered baseline review pending

**Change:** Implement the fourth homepage-hero study: keep the duplicate large `CHECKMARK AUDIO` heading visually hidden, strengthen and color-match the navigation logo/wordmark lockup, and organize the existing location, tagline, supporting copy, and calls to action as one cinematic editorial lower-third panel.

**Preserve:** The four approved homepage hero photographs and their recorded crops, carousel behavior, shared navigation destinations, existing homepage copy, consultation and work links, development controls, `noindex`, EmailJS, Cal.com, and the remainder of the protected homepage.

**Reference:** Bridget's 2026-09-01 selection of visual Draft 4, the “Cinematic Lower-Third” study.

**Acceptance criteria:**

- [x] The navigation is the only visible `CHECKMARK AUDIO` name treatment in the hero viewport.
- [x] The microphone logo and wordmark use a coordinated warm metallic-gold treatment and stronger editorial proportions.
- [x] The location, tagline, supporting sentence, and both actions share one aligned lower-third composition.
- [x] The existing authentic hero carousel media and file-backed selections remain unchanged.
- [x] Desktop, 1440-pixel, and 390-pixel checks show no page-level horizontal overflow.
- [x] Mobile keeps the complete tagline, copy, and actions readable without changing their order.

**Files changed:** `index.html`, `checkmark-home-hero.css`, `START_HERE/PROJECT_STATE.md`, and this change log.

**Outcome and validation:** The selected direction is implemented as homepage-specific responsive HTML/CSS. Browser inspection confirmed a 390-pixel viewport and scroll width of 390 pixels, a 1440-pixel viewport and scroll width of 1440 pixels, and the desktop consultation CTA remaining inside the shared navigation bounds.

**Open questions / follow-up:** Bridget should review the live render before a new screenshot is admitted to `START_HERE/APPROVED_VISUAL_BASELINES/`.

## 2026-09-01 — Community / cinematic broadcast wall

**Status:** Selected and implemented by Bridget; rendered baseline review pending

**Change:** Replace the generic Community hero and informational panels with the selected dark cinematic broadcast-wall direction: a monumental gold `COMMUNITY` masthead, one large authentic studio-session image, and a numbered feature rail for Checkmark Tonight, Artist Stories, and Produced at Checkmark.

**Preserve:** Shared navigation and footer, official Checkmark logo and wordmark, warm-rich-gold palette, restrained red micro-accents, authentic `MEDIA/` assets, existing Community page intent, consultation path, development `noindex`, and all launch gates.

**Reference:** Bridget's selected 2026-09-01 Community Draft 2, generated as `exec-bc0c99da-1b5d-4b44-956e-d69ddef1f564.png`.

**Acceptance criteria:**

- [x] The root page reproduces the selected asymmetric dark broadcast-wall composition in responsive HTML/CSS rather than embedding the mockup as a flat image.
- [x] All visible photographs come from the active Checkmark `MEDIA/` library and are recorded in `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.
- [x] The three approved Community categories remain Checkmark Tonight, Artist Stories, and Produced at Checkmark.
- [x] The page does not invent artist names, project credits, testimonials, pricing, or a false live-broadcast state.
- [ ] A new wide screenshot is admitted to `START_HERE/APPROVED_VISUAL_BASELINES/` after Bridget reviews the live render.

**Files changed:** `community.html`, `community-page.css`, `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`, `START_HERE/PROJECT_STATE.md`, and this change log.

**Open questions / follow-up:** Final public project names, credits, captions, outbound links, and permissions remain subject to the existing media and launch review gates.

## 2026-09-01 — Logo audio visualizer draft (standalone experiment)

**Status:** Draft prototype awaiting Bridget's review; no root website files touched

**Change:** New standalone experiment at `DRAFTS/active/logo-audio-visualizer-2026-09-01/` — a music-reactive replacement candidate for the homepage YouTube music-demo video. The official gold checkmark logo pulses to the low end inside a mirrored circular spectrum analyzer (Web Audio API + canvas) in the brand gold palette. The track dropdown auto-lists every audio file in `MEDIA/AUDIO/`, so new song demos appear without code changes.

**Preserve:** Root homepage and its gear-UI music-demo framing remain untouched; the official gold-gradient logo geometry is used unmodified per `SEO/LOGO_ASSET_MANIFEST.md`.

**Files changed:** `DRAFTS/active/logo-audio-visualizer-2026-09-01/index.html`, its `README.md`, and this change log.

**Open questions / follow-up:** Bridget reviews the motion and styling; integration into the homepage music section (inside the existing gear-UI framing) is a separate approved change. Final curated track list and display titles are Bridget's call — the auto-list currently shows raw session filenames, including unmixed/inst versions.

## 2026-09-01 — Sound demo visualizer replaces demo reel video

**Status:** Implemented per Bridget's direction; live-render review pending

**Change:** The homepage gear console ("Demo reel") now hosts the approved music-reactive logo visualizer instead of the demo mp4: the bright official gold logo pulses to the low end inside the ambient twin-line halo (locked baseline `DRAFTS/active/logo-audio-visualizer-2026-09-01/APPROVED-LOCKED-2026-09-01.html`). Console head renamed "Sound demo"; cue arrows now toggle tracks; the Gain fader drives a Web Audio gain node; the readout shows track number and title.

**Tracks:** Listed in `checkmark-demo-playlist.js` (11 mp3s from `MEDIA/AUDIO/`, filename-derived titles pending Bridget's edits). Adding a song = drop the mp3 in `MEDIA/AUDIO/` and add one line there. `untagged-master.mp3` omitted (no derivable title).

**Compatibility:** Tap-to-play (mobile autoplay policies), `preload="none"`, blur fallback for pre-18 Safari, drawing paused off-screen/hidden tab, `prefers-reduced-motion` honored. Visualizer logo overrides the site-wide champagne toning to keep full gold (`#demoVizLogo img{filter:none}`).

**Preserve:** Gear console framing, official logo geometry, `noindex`, launch gates. Prior video untouched at `MEDIA/VIDEO/cma-music-studio-demo.mp4`; old controller `checkmark-home-video-console.js` retained but no longer loaded.

**Files changed:** `index.html`, `checkmark-home-media.css`, new `checkmark-demo-playlist.js`, new `checkmark-home-visualizer.js`, `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`, and this change log.

**Validation:** Local server checks — play/pause via logo, track toggle continues playback, fader paints, no console errors, 390-pixel viewport shows no horizontal overflow and the stage fills the console screen.

**Open questions / follow-up:** Bridget to edit playlist titles/order, review on her phone and desktop, and approve a new baseline screenshot. If the visualizer screen should center within the whole console (moving the gain channel), that is a separate design decision.

## 2026-09-01 — Sound demo serves 30-second clips only

**Change:** The sound demo now plays 30-second demo clips from `MEDIA/AUDIO/demo-clips/` instead of the full songs. `MEDIA/AUDIO/make-demo-clips.py` (requires ffmpeg) finds each song's most active 30 seconds by loudness, cuts it with fades, and strips metadata; rerunning it clips any newly added mp3. The full masters are never referenced by the website and stay out of Git per the `MEDIA/README.md` storage boundary; the small clips (~0.55 MB each) are committed and are the only audio the deployed site exposes.

**Files changed:** `checkmark-demo-playlist.js`, new `MEDIA/AUDIO/make-demo-clips.py`, new `MEDIA/AUDIO/demo-clips/` (11 clips), and this change log.

## 2026-09-01 — Sound demo play affordance

**Change:** The paused sound demo now shows a centered white play arrow over the full-brightness logo, with a warm glow and slight scale-up on hover. Replaces the small gold arrow that sat below the logo; an earlier red treatment was rejected as too dark.

**Files changed:** `checkmark-home-media.css`, `index.html` (stylesheet cache version), and this change log.

## 2026-09-01 — Community hero foreground depth effect

**Status:** Implemented to Bridget's selected concept; live-render review pending

**Change:** The Community hero now has the intended depth effect — the foreground people overlap the `COMMUNITY` title like an iPhone lock screen. The lead photo is drawn twice: the full photo behind the title, and a transparent cutout of the foreground subjects above it. The cutout is traced from the exact selected lead photo with `MEDIA/IMAGES/make-subject-cutout.swift` (macOS Vision subject isolation) and kept on the source's original canvas size, so it overlays 1:1. Restored `community-page.js`, which mirrors the lead photo's live layout box, object-fit, crop, and zoom transform onto the cutout on load, resize, and mutation — so alignment holds through re-crops, breakpoints, and the localhost media editor, which restyles slotted images. Lead and rail photography brightened and the hero vignettes lightened to match the approved concept.

**Safeguards:** The depth layer starts hidden and is only shown once alignment is computed, so it degrades to the plain title if scripting fails. It hides itself when the lead photo no longer matches `data-depth-for`, preventing a cutout of the wrong photo from being overlaid.

**Files changed:** `community.html`, `community-page.css`, new `community-page.js`, new `MEDIA/IMAGES/GALLERY/group-recording-session-studio-b-foreground-cutout.webp`, new `MEDIA/IMAGES/make-subject-cutout.swift`, `START_HERE/CODEX_HANDOFF_QUEUE.md`, and this change log.

**Validation:** Lead and cutout layers measured pixel-identical at desktop, 1150px, and 390px, including the mobile 1.15 zoom transform; verified both with the localhost media editor active and with it simulated off (production behaviour); no console errors; no horizontal overflow at 390px.

**Open questions / follow-up:** The distressed/textured gold treatment on the `COMMUNITY` letters in the concept art is not implemented — the title still uses the smooth gold gradient. Bridget to review the live render and approve a baseline screenshot.

## 2026-09-01 — Community title grit and hero exposure

**Change:** The `COMMUNITY` title now carries the distressed gold finish from Bridget's selected concept. A procedurally generated greyscale wear map (`MEDIA/IMAGES/TEXTURES/APPROVED/community-title-grit.webp`) is multiplied into the existing gold gradient with `background-blend-mode` and clipped to the letterforms, so the approved typography, size, and gradient are unchanged — only the surface is textured. Hero and rail photography exposure raised further toward the concept, and the "Produced at Checkmark" silhouette re-cropped so the figure's head and shoulders are visible instead of a band of empty purple.

**Licensing note:** The grit map is generated from noise in-repo, not sourced stock, so nothing new needs a third-party licence. The unlicensed screenshots in `MEDIA/IMAGES/TEXTURES/REFERENCE/` were deliberately not used and remain uncommitted.

**Files changed:** `community-page.css`, `community.html` (stylesheet cache version), new `MEDIA/IMAGES/TEXTURES/APPROVED/community-title-grit.webp`, `MEDIA/IMAGES/TEXTURES/APPROVED/SOURCES.md`, and this change log.

**Validation:** Desktop render captured at 1680x980 against the LAN address, which bypasses the localhost-only media editor and so reflects production. Depth effect, grit, and re-crop all confirmed; no console errors.

## 2026-09-02 — Community title contrast scrim

**Change:** Added a directional dark scrim behind the `COMMUNITY` title, following the homepage `.hero::before` treatment (same `rgba(5,6,6,…)` ramp plus the warm radial). Studio wall lighting and the framed picture behind the letters were washing out the gold and flattening the grit. The scrim sits above the photo and below the title, and the foreground cutout layer stays above it — so the depth subjects keep their full brightness and read more strongly in front of the darkened letters.

**Files changed:** `community-page.css`, `community.html` (stylesheet cache version), and this change log.

**Validation:** Desktop (1680x980) and mobile (390px) renders captured against the LAN address, bypassing the localhost-only media editor. Title contrast confirmed against the previously blown-out wall art; foreground subjects unaffected. At 375px the title measures 321px wide inside the viewport with Bebas Neue loaded and page scroll width equals viewport width, so there is no overflow.

## 2026-09-02 — Community lead photo exposure

**Change:** Lifted the Community lead photo's brightness a further step (1.22 to 1.34) at Bridget's request. The title contrast scrim and the hero vignettes are deliberately unchanged, so the letters keep the contrast added the previous day. The lead photo and the foreground cutout share a single filter declaration, so both layers brighten together and stay registered.

**Files changed:** `community-page.css`, `community.html` (stylesheet cache version), and this change log.

**Validation:** Desktop render captured at 1680x980 against the LAN address; room and subjects read brighter with the scrim and title contrast held.

## 2026-09-02 — Community lead photo genuinely brightened

**Change:** Bridget reported the banner photo still reading dark. Two real causes, both fixed.

1. The contrast scrim added the previous day covered the whole feature panel, not just the title, so it was darkening the room down to roughly two-thirds height. It is now an ellipse concentrated behind the `COMMUNITY` letters plus a short top band, so the letters keep their contrast and the rest of the photo is free.
2. The source photo is severely underexposed — median luminance 17 of 255, 75th percentile 41 — so a CSS `brightness()` multiply could not lift it without washing the highlights. Baked a gamma-plus-S-curve lift into new derivative assets, raising median luminance to 55 and the mean from 33 to 69 while leaving white at white.

New assets: `MEDIA/IMAGES/GALLERY/group-recording-session-studio-b-brightened.webp` and its matching `-brightened-foreground-cutout.webp`, generated with the identical curve (cutout alpha untouched) so the two layers stay visually and geometrically identical. The originals are unchanged and still available for other uses. The CSS filter is back to near-neutral now that the lift lives in the asset.

**Files changed:** `community.html`, `community-page.css`, `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`, the two new GALLERY assets, and this change log.

**Validation:** Desktop render captured at 1680x980 against the LAN address. In-browser check confirms the depth layer visible, lead and cutout layers pixel-aligned, both brightened assets loading, and no console errors.

**Open questions / follow-up:** If Bridget re-picks the original unbrightened photo in the media editor, the depth layer will hide itself by design (`data-depth-for` guard); regenerate the pair to re-enable it.

## 2026-09-02 — Community lead photo lifted further

**Change:** Bridget asked for lighter still. Regenerated the brightened pair at a stronger curve (exponent 0.42), taking the source from median luminance 17/255 to 79 and mean 33 to 90, with white still held at white. The lift work is now a reusable, measurable tool at `MEDIA/IMAGES/make-brightened-photo.py` rather than a one-off, so the strength can be dialled either way and reports before/after luminance.

**Files changed:** `community.html` (stylesheet cache version), the two regenerated GALLERY assets, new `MEDIA/IMAGES/make-brightened-photo.py`, and this change log.

**Validation:** Desktop render captured at 1680x980 against the LAN address. In-browser check confirms the depth layer visible, lead and cutout layers pixel-aligned, cutout loaded, and no console errors.

## 2026-09-02 — Sound demo TV static

**Change:** Added subtle white TV static behind the pulsing logo in the homepage sound demo. The screen was black on a black bezel and read as sunk in; the grain lifts the panel so it looks lit. It shows while paused (a no-signal look) and continues under the visualizer during playback, brightening slightly with track energy.

**Implementation:** Eight noise tiles are pre-rendered once into canvas repeat patterns, so each frame costs a single `fillRect` rather than per-pixel work; the pattern origin jitters per frame so tile seams never settle into a visible grid. The grain is drawn last, after the halo's `destination-out` punch-out, which would otherwise erase a hole in it behind the logo. The logo is an HTML element above the canvas, so it still sits over the static. Reduced-motion visitors get one still noise frame instead of the animation.

**Files changed:** `checkmark-home-visualizer.js`, `index.html` (script cache version), and this change log.

**Validation:** Verified in-browser paused and playing; grain uniform across the screen with no punch-out hole, halo and logo unaffected, no console errors.

## 2026-09-02 — Sound demo static made visible

**Change:** Bridget could not see the TV static. It was drawing correctly but at 0.055 alpha it composited to roughly 12 of 255 above the black screen — present in the pixel data, invisible in practice. Raised to 0.2 (plus up to 0.1 more with track energy), which reads as real fuzz while still sitting under the gold halo and logo.

**Files changed:** `checkmark-home-visualizer.js`, `index.html` (script cache version), and this change log.

**Validation:** Confirmed in-browser paused and playing; grain clearly visible across the screen, halo and logo still dominant, no console errors.

## 2026-09-02 — Sound demo static pacing and logo disc restored

**Change:** Two corrections to the static, both from Bridget's review.

1. **Calmer.** Each noise frame is now held for six render frames, so the static settles at roughly 10fps instead of churning at the display's 60. The tile and its offset change together on that beat; re-randomising the offset every frame was what made it read as frantic.
2. **Dark disc behind the logo restored.** The grain is drawn before the halo again, so the halo's feathered punch-out carves it back out behind the logo, leaving the clean black disc the approved draft had. Drawing the grain last had filled that disc in and cost the logo its pop.

**Files changed:** `checkmark-home-visualizer.js`, `index.html` (script cache version), and this change log.

**Validation:** Confirmed in-browser paused and playing; static calmer, dark disc present behind the logo, halo and play-arrow states correct, no console errors.

## 2026-09-02 — Sound demo static contrast lowered

**Change:** Softened the static's grain. The per-pixel value and alpha spreads were wide, which reads as harsh on/off speckle; both are now narrow, so it renders as a smooth haze. Measured composited range across the screen went from roughly 0-51 to 15-31 (contrast spread 51 to 16) while mean brightness held near 23, so the panel still sits clear of the black bezel without the speckle being aggressive.

**Files changed:** `checkmark-home-visualizer.js`, `index.html` (script cache version), and this change log.

**Validation:** Measured canvas pixels directly rather than judging by eye; confirmed in-browser with no console errors.

## 2026-09-02 — Sound demo static only while playing

**Change:** The static now runs only during playback. Previously it ran whenever the section was on screen, so a stopped demo still showed a live screen. Paused and pre-play now clear the canvas completely and return the logo to rest with its glow off, so off reads as genuinely off. Reduced-motion visitors get the same behaviour: the soft glow appears on play and clears on pause.

**Files changed:** `checkmark-home-visualizer.js`, `index.html` (script cache version), and this change log.

**Validation:** Canvas pixels measured in all three states — before play mean 0, playing mean 29.8, after pause mean 0 with logo glow back to 0. No console errors.

## 2026-09-02 — Sound demo static dimmed behind the waveform

**Change:** Darkened the static so it reads as texture rather than competing with the reactive halo. Two adjustments: the grain's grey value was lowered (it was near-white), and its opacity roughly halved. The energy coupling was also cut back sharply — it had been brightening the grain in proportion to track energy, which meant the fuzz peaked at exactly the moments the waveform is most active.

Measured composited brightness over the screen fell from a mean of 29.8 to 14.1. For reference, an earlier pass at a mean near 12 was reported as invisible, so this sits just above the perceptual floor: subtle, still clearly present, and no longer contending with the halo.

**Files changed:** `checkmark-home-visualizer.js`, `index.html` (script cache version), and this change log.

**Validation:** Canvas pixels measured during playback; confirmed in-browser with no console errors.

## 2026-09-02 — Studio B photo selections saved from the media editor

**Change:** Persisted Bridget's Studio B photo edits from the browser media editor into `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`. Twelve `studioB-gallery-*` slots were added (the gallery had never been recorded in the project file) and the four existing `studioB-*` slots gained their default crop/zoom values. All sixteen Studio B images verified loading on the page.

**Deliberately not applied:** The export is a full snapshot of the browser's state, so it was merged selectively rather than replacing the file. Only `studioB-*` slots were taken. Verified afterwards that `recovery`, `homepageHero`, `homepageSectionMedia`, and `innerPageMedia` are byte-identical to before, that no non-`studioB` slot changed, and that `community-lead-depth` still points at the brightened banner asset.

**Open question for Bridget:** The export's `homepageHero` differs from the project file — it leads with `checkmark-audio-studio-sign-png.webp` where the project leads with `vocal-recording-albuquerque-nm-control-room-microphone-view-01.webp`, and slide labels/alt text differ. That was left untouched pending Bridget's decision, since it is unclear whether it is a newer intentional hero edit or stale browser state that would revert approved work.

**Files changed:** `MEDIA/WEBSITE_MEDIA_SELECTIONS.json` and this change log.
