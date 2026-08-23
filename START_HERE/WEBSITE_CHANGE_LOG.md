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
