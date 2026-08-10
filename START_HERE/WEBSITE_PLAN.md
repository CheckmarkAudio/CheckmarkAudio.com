---
title: Master Build Plan Prompt v2 (Draft Revision)
status: draft_revision_pending_bridget_approval
phase: phase_01_foundation
supersedes: master-build-plan-prompt.md (only after Bridget approves)
source_docx: CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx
updated: 2026-07-22
kpi:
  - booking_conversion
  - local_seo_visibility
  - portfolio_trust
  - pricing_clarity
tags:
  - build_prompt
  - website_planning
  - revision
---

# Checkmark Audio Website Master Build Prompt — v2 (Draft Revision)

## Document Role

This is the earlier detailed Website Plan. Keep using its page, content, and build detail where that detail remains compatible with current decisions, but do not treat it as a second source of truth. `DOCUMENT_MAP.md` defines how it relates to the Source of Truth, SEO Master Plan, SEO Training Manual, and active project state.

This is a revision of `Checkmark_Audio_Website_Master_Build_Prompt.docx` / `master-build-plan-prompt.md`. It does not replace the source-of-truth DOCX. It becomes the active build prompt only when Bridget approves it.

## Revision Changelog (2026-07-02)

What changed from v1, and why. **No new business facts were invented.** Everything added comes from Bridget's direct answers in this session or from resolving internal contradictions in v1.

1. **Technical stack section rewritten.** v1 said "use the existing project stack and conventions already present in the repository" and told the builder to read `package.json` — but this repository has no package.json, framework, or component system. Bridget has confirmed the site will migrate to **GitHub**. The stack section now specifies a static HTML/CSS/JS site (see Technical Requirements).
2. **New booking and email integration technical section added.** v1 listed form fields and tracking events but never named a form provider, while also forbidding the introduction of an unapproved one. Bridget has confirmed an **EmailJS account with a ready-to-use template** exists. Credentials and routing details are marked TODO, not invented.
3. **All scattered "if approved" / unresolved items consolidated** into one "Open Decisions and Missing Facts" checklist at the end, so nothing is buried mid-document. The rules themselves are unchanged.
4. **Pricing conflict flagged per the conflict rule.** The Source of Truth booklet notes the current live site lists studio rental "from $30/hr"; v1's three-card pricing model does not include it. This is now an explicit decision item, not silently dropped.
5. **Copyright line conflict flagged.** v1 says "© 2025 by Checkmark Audio" unless updated; the Source of Truth example shows a 2026 format. Now a decision item.
6. **Studio page URL style flagged** (`/studios/studio-a` vs `/studio-a`) — carried over from the planning checklist as an explicit pre-build decision.
7. Everything else — positioning, page list, approved copy, pricing cards, guardrails, SEO/schema/image rules, launch checklist — is **unchanged from v1**.

### Second pass (same day): repo-wide MD review findings

A full review of the repo's Markdown files (`ARCHIVE/project-system-before-simplification-2026-07-16/00_START/project-context.md`, `EMAIL/README.md`, all consolidated master plans, root `index.html`/`sitemap.xml`) answered several open items and exposed three previously unflagged conflicts:

8. **EmailJS templates are further along than v1 knew.** `EMAIL/` holds three ready templates with documented variables (see Booking and Email Integration Technical Spec): internal notification, client inquiry confirmation, and client booking confirmation. Client auto-confirmation is therefore YES by existing plan.
9. **Hosting details confirmed from repo docs:** GitHub Pages static hosting was already decided (`.nojekyll` present, root `index.html` is the "active deployable baseline"). **But `CNAME` is missing** even though `ARCHIVE/project-system-before-simplification-2026-07-16/00_START/project-context.md` says it exists for CheckmarkAudio.com — flagged as decision item.
10. **NEW CONFLICT — launch scope.** Migration-era docs (`ARCHIVE/project-system-before-simplification-2026-07-16/00_START/project-context.md`) decided the first GitHub Pages launch is a **static single-page site**, splitting into pages later. This master build prompt specifies a **10-page Phase 1**. Bridget must rule which launch shape is current.
11. **NEW CONFLICT — design direction.** The current deployable `index.html` is a **dark theme** (gold `#f1aa2e` brand, red `#d83f2f` accent, Helvetica Neue/Georgia), and the archived project context says the preferred near-term direction is "darker in places." The source-of-truth DOCX says **mostly white/light mode with earthy accents**. The DOCX outranks older notes, but Bridget must confirm before styling work.
12. **Copyright conflict effectively resolved by current usage:** the deployed baseline `index.html` already uses `© 2026 by Checkmark Audio`. Needs only a yes from Bridget.
13. **Social links gap found:** `index.html` displays "Facebook / Instagram / YouTube" as text with **no URLs**. Actual profile links still needed.
14. **Hero/demo-reel status clarified:** a production hero exists (`MEDIA/IMAGES/00-studio-sign-hero-web.jpg`); final pick still open. Zero video files have been captured from Wix (capture workflow documented in `ARCHIVE/project-system-before-simplification-2026-07-16/00_START/project-context.md`), so demo-reel reuse is blocked on that capture task, not just a decision.

### Third pass (same day): gap planning added

15. **FAQ draft answers written** — 13 of 15 FAQ questions now have draft answers composed strictly from approved source-of-truth copy; 2 are marked TODO (what to bring; cancellation/revisions pending policy approval). Filed in `ARCHIVE/project-system-before-simplification-2026-07-16/01_WEBSITE/01_PAGES/pages-master-plan.md` § "FAQ Draft Answers — 2026-07-02".
16. **Policies page shell drafted** — full 10-section structure with anchors, internal link plan, and the source-of-truth deposit-policy draft direction; all wording remains pending Gavin. Filed in `ARCHIVE/project-system-before-simplification-2026-07-16/01_WEBSITE/07_POLICIES/policies-master-plan.md` § "Policies Page Shell Draft — 2026-07-02".
17. **Studio comparison table made build-ready** below, using only approved facts with TBD price slots.

### Fourth pass (2026-07-22): Wix replacement and booking direction reconfirmed

18. **Project destination made explicit.** This repository is building the independent replacement for the current Wix-hosted CheckmarkAudio.com website. Wix remains live only through approval, testing, and controlled domain cutover.
19. **Calendar decision superseded.** Bridget's July 22 direction supersedes the July 3 form-only launch ruling: the replacement site will include an embedded Cal.com calendar.
20. **Booking email direction confirmed.** Cal.com bookings will use the existing branded EmailJS booking-confirmation template through a secure, verified integration. The EmailJS inquiry flow remains available for consult-first services.

---

## Purpose

Build Checkmark Audio's independent Wix replacement as a professional, client-facing sales system for a recording studio in Albuquerque, New Mexico.

The site must be based on `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` as the highest source of truth. The goal is not just a nice website: it is a complete, clear, trustworthy path for visitors to understand the studio, choose a service, hear and see proof, and book or contact Checkmark Audio.

The website should be clean, professional, mobile-first, easy to navigate, locally relevant, and built to convert visitors into free consultations, calls, texts, emails, and booking inquiries.

## Source-of-Truth Hierarchy

Use sources in this order:

1. `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`
2. Consolidated planning MD files
3. Approved production assets (`MEDIA/IMAGES/`)
4. Current public Checkmark Audio website content, reference only
5. Archived drafts only if Bridget explicitly approves that design direction

If sources conflict, do not guess. Flag the conflict with a TODO comment and add it to the launch checklist.

## Core Business Details

| Field | Value |
| --- | --- |
| Business name | Checkmark Audio |
| Address | 5413 Lomas Blvd NE, Albuquerque, NM 87110 |
| Phone | 505-267-0558 |
| Phone CTA language | Call or Text |
| Email | CheckmarkAudio@gmail.com |
| Primary CTA | Book a Free Consultation / Book Now |
| Primary location focus | Albuquerque, New Mexico |

These details must appear consistently on the Contact page, footer, booking page, metadata, schema, Google Maps references, Google Business references, and client inquiry emails where useful.

Use this exact address format everywhere: `5413 Lomas Blvd NE, Albuquerque, NM 87110`. Do not use alternate ZIP codes, alternate street formatting, or inconsistent NAP (name, address, phone) formatting anywhere on the site.

## Core Positioning

Checkmark Audio is a professional recording studio in Albuquerque offering recording, production, mixing, mastering, and artist development services for artists who want polished, release-ready sound.

Checkmark Audio works with: vocalists, rappers, singer-songwriters, bands, podcasters, creators, students, and clients needing professional audio support.

The studio should feel professional, approachable, artist-friendly, and capable. It should not feel overly corporate, generic, cheap, cluttered, or confusing.

## Primary Website Goal

A first-time visitor must quickly understand: what Checkmark Audio does, who it is for, what services are available, what starting prices are, what the studio looks like, what the work sounds and looks like, why it can be trusted, where it is located, and how to book or contact the studio.

Every major page must move visitors toward one of: Book a Free Consultation, call, text, email, submit an inquiry form, view services and pricing, or hear/see proof of work.

## Non-Negotiables

- Build mobile-first.
- Use real Checkmark Audio photos and approved assets; no generic stock images unless explicitly approved.
- Keep the studio business as the main focus; mention Checkmark Audio School without letting it overpower the studio website.
- One consistent address, phone, email, and business name everywhere.
- One consistent pricing model across the entire website.
- Do not invent testimonials, awards, credits, client names, staff members, prices, policies, hours, or accreditation claims.
- Do not keyword-stuff headings, body copy, metadata, filenames, alt text, schema, or footer links.
- Every major page has a clear CTA; every service page has a booking or inquiry path; every page scans easily on mobile.
- No important page hidden under a vague "More" menu.
- Do not connect or migrate the domain away from Wix until the new site is approved, tested, and ready.

## Build Priority

### Phase 1: Core Launch Site

1. Home
2. Services
3. Pricing
4. Book Now
5. Studios
6. Our Work / Portfolio
7. About
8. Contact
9. FAQ
10. Policies

### Phase 2: Studio and SEO Expansion

Studio A, Studio B, then local SEO pages: Recording Studio Albuquerque, Vocal Recording Albuquerque, Mixing and Mastering Albuquerque, Music Production Albuquerque, Band Recording Albuquerque, Podcast Recording Albuquerque, Artist Photography Albuquerque, Audio Engineering School Albuquerque.

### Phase 3: Future Growth

Blog/Resources, Checkmark Live Sessions hub, case studies, engineer profile pages, student success pages, online deposits/payments, quote request flow, file upload flow, CRM integrations, client portal, student portal, workshops/events, beat store, artist development pathway.

## Technical Requirements (REVISED)

**Hosting and stack (confirmed by Bridget, 2026-07-02):** the site will migrate to GitHub. Build it as a **static HTML/CSS/JS website** suitable for GitHub-based hosting (GitHub Pages).

Implications the builder must respect:

- The current frontend is static. Inquiry forms may use EmailJS client-side, but the Cal.com booking-confirmation bridge must use a secure receiver that verifies webhook authenticity and keeps private credentials out of browser code.
- The repository root already contains `index.html`, `404.html`, `robots.txt`, and `sitemap.xml` scaffolding — extend these, do not duplicate them.
- Keep the site lightweight: no framework, CMS, build pipeline, CSS system, routing convention, analytics approach, or component library beyond plain HTML/CSS/JS, Cal.com, and EmailJS unless Bridget explicitly approves it.
- Use consistent, shared styling (one main stylesheet) and consistent naming across pages.
- Use TODO comments for missing data rather than inventing information.
- Custom domain connection (CNAME / DNS) happens only at approved migration time, per the Wix rule above.

Confirmed from repo docs (`ARCHIVE/project-system-before-simplification-2026-07-16/00_START/project-context.md`): GitHub Pages static hosting, this repository, root `index.html` as the deployable entry point, `.nojekyll` present. LocalBusiness structured data is already in the baseline `index.html`.

Outstanding technical flags:

- [ ] `CNAME` file is missing from the repo root although project docs say it exists for `CheckmarkAudio.com` — recreate at cutover time, or confirm it was intentionally removed.
- [ ] **Launch-scope conflict:** single-page first launch (migration-era decision) vs 10-page Phase 1 (this prompt). Bridget rules.
- [ ] **Design-direction conflict:** current dark-theme baseline vs DOCX light-first direction. DOCX wins by hierarchy unless Bridget says otherwise.
- [ ] Choose where the secure Cal.com webhook receiver will run. GitHub Pages can host the static site and embed, but it cannot receive or verify server-side webhooks by itself.

## Booking and Email Integration Technical Spec

**Confirmed by Bridget (updated 2026-07-22):** Checkmark Audio has an EmailJS account with ready-to-use templates. EmailJS is the approved email-template provider, and Cal.com is the approved replacement-site calendar provider.

The inquiry form and confirmed-booking email are related but separate flows:

1. A visitor who needs guidance submits the inquiry form; EmailJS sends the internal notification and client inquiry receipt.
2. A visitor who is ready to schedule uses the embedded Cal.com calendar on CheckmarkAudio.com.
3. A confirmed Cal.com booking reaches a secure, verified receiver, which maps the booking fields to the branded EmailJS booking-confirmation template.
4. Both flows provide clear failure handling and show phone 505-267-0558 and the public email as fallbacks.

### Templates (confirmed from `EMAIL/`)

Three EmailJS-ready templates already exist; the client auto-confirmation question is answered — **yes, the client receives one** (per `01_PAGES` booking flow and the existing template):

| Template file | Purpose | Suggested subject |
| --- | --- | --- |
| `service-inquiry-notification-mobile.html` | Internal studio notification (final) | `New Checkmark Audio inquiry from {{name}}` |
| `client-inquiry-received.html` | Client confirmation after inquiry | `We received your Checkmark Audio inquiry` |
| `client-booking-confirmed.html` | Client confirmation after a Cal.com session is confirmed | `Your Checkmark Audio session is confirmed` |

Inquiry template variables the form must send: `{{name}}`, `{{time}}`, `{{message}}`, `{{reply_to}}`, `{{phone}}`, `{{style}}` (style = service/project type, e.g. recording, mixing, mastering, studio rental, music education). The booking-confirmed template additionally uses `{{booking_date}}`, `{{booking_time}}`, `{{studio_address}}`, `{{booking_notes}}`.

Implementation notes from the templates README: include a hidden `time` input set by the submit handler (`form.time.value = new Date().toLocaleString()`); templates are no-logo and paste-ready into EmailJS.

**Field-mapping note (builder must respect):** the approved booking form collects more fields than the inquiry template has variables (preferred date/time, artist name, budget range, links). Until Bridget approves extra template variables, concatenate those extras into `{{message}}` so no submitted data is silently dropped. Map Service Needed → `{{style}}`, Email → `{{reply_to}}`.

Remaining integration details — **TODO, provide before build (do not guess):**

- [ ] EmailJS service ID
- [ ] EmailJS template IDs (as configured in the EmailJS dashboard) for the internal notification and the client confirmation
- [ ] EmailJS public key
- [ ] Recipient inbox for notifications (CheckmarkAudio@gmail.com or other)
- [ ] Spam protection choice. Recommendation (labeled as inference, not a source-of-truth rule): a hidden honeypot field, since it requires no external service; reCAPTCHA optional if spam becomes a problem. Bridget decides.
- [ ] Cal.com account/plan, booking link, approved event types, availability rules, embed behavior, and webhook fields.
- [ ] Secure webhook receiver hosting, authenticity verification, duplicate-event handling, retry/failure logging, and final mapping to the EmailJS booking-confirmation variables.

### Booking Form Fields (unchanged from v1)

Required: Name, Phone Number, Email, Service Needed, Preferred Date/Time, Project Description.

Optional: Artist Name, Budget Range, Links to Music, File Upload if possible, How Did You Hear About Us?, Consent to Be Contacted.

Note: file upload has no server on a static host; if EmailJS attachment limits make it impractical, replace it with a "Links to Music/Files" field and mark the change in the launch checklist. Do not silently drop it.

### Service Dropdown Options (unchanged)

Vocal Recording, Rap Recording, Singer-Songwriter Recording, Band Recording, Mixing, Mastering, Music Production, Podcast / Voice-Over, Artist Photography, EPK / Promotion, Audio Engineering School, Not Sure Yet.

### Confirmation Message (unchanged)

"Thanks for reaching out to Checkmark Audio. We'll review your project and contact you soon to help you choose the right next step."

### Booking Tracking Events (unchanged)

form_submit, click_to_call, click_to_text, click_email, click_directions, book_consultation_click, pricing_card_click, service_inquiry_click.

(Analytics installation itself remains "if approved" — see Open Decisions.)

## Homepage

Recommended hero headline: **Professional Recording, Mixing, and Mastering in Albuquerque**

Recommended subheadline: Checkmark Audio helps artists, bands, creators, and students record, produce, and finish release-ready music in a comfortable professional studio.

CTAs: primary **Book a Free Consultation**; secondary **View Services & Pricing**; third if possible **Hear Our Work**.

Brief explanation: From first idea to final master, Checkmark Audio helps artists record, produce, mix, and finish music that is ready to release.

Homepage sections: strong studio photo/video hero, headline + subheadline, primary/secondary/proof CTAs, trust strip, brief explanation, service overview cards, pricing preview, studio photo section, portfolio/audio/video preview, testimonials or proof section, engineer/team preview, Checkmark Audio School preview, contact/location section, final booking CTA at the bottom.

## Navigation

Main navigation: Home, Services, Pricing, Studios, Our Work, About, **Book Now** (visually emphasized).

School appears in: homepage preview section, About page, footer, relevant education section, dedicated School page or link. School joins top nav only if Bridget approves it.

Do not hide important service pages under "More." Mobile navigation must be clean, obvious, and easy to tap.

## Standard Page Goals

| Page | Primary Job |
| --- | --- |
| Home | Help visitors understand and trust Checkmark Audio quickly |
| Services | Help users choose the correct service |
| Pricing | Reduce uncertainty and help serious buyers inquire |
| Book Now | Convert visitors into consultations, calls, texts, emails, or forms |
| Studios | Prove the studio is real, professional, and worth booking |
| Our Work | Show proof through audio, video, photos, and credits |
| About | Build trust in Gavin, the team, mission, and local credibility |
| Contact | Make contacting the studio effortless |
| FAQ | Remove objections before booking |
| Policies | Clarify deposits, cancellations, revisions, delivery, and expectations |

## Services (unchanged from v1)

Organize into: **Recording Services** (Vocal, Rap, Singer-Songwriter, Band, Acoustic, Podcast, Voice-Over), **Production Services** (Music Production, Beat Creation, Arrangement Help, Vocal Production, Song Development), **Mixing and Mastering** (Mixing, Mastering, Editing, Vocal Tuning, Mix Prep, Full Release-Ready Package), **Artist Media Services** (photography, cover art, lyric videos, visualizers, EPK, promotional content — presented as add-ons, never overpowering core services), and **Education** (school overview, lessons, mentorship, studio skills, student pathway, admissions inquiry — present but secondary).

Service descriptions: use the approved v1 copy verbatim (see `master-build-plan-prompt.md` / the DOCX §Services). It is not repeated here to keep one canonical copy of each description.

Each service card includes: service name, short client-facing description, best for, starting price or quote language, what is included, book/inquire button. If pricing is not confirmed use "Starting at…", "Custom quote", or "Ask during your free consultation."

### Service Pricing Rule

Services route into one of these paths — do not invent per-service prices:

- Vocal Recording: **Starting at $50/hr**
- General Studio / Engineering Services: **Starting at $65/hr**
- Band Recording: **Starting at $75/hr**
- Project-Based Quote for larger or more complex projects

### Standard Service Page Template

1. Hero with service name, local keyword, short value proposition, CTA
2. Who this service is for
3. What is included
4. Pricing or quote language
5. Studio/process explanation
6. Relevant portfolio examples if available
7. FAQ section
8. Internal links to related services
9. Final CTA

No thin SEO pages; every service page must be useful to a real client.

## Pricing Page (unchanged from v1, one conflict flagged)

Use pricing cards, not paragraphs. Only these public cards unless the source of truth changes:

| Service | Public Pricing |
| --- | --- |
| Vocal Recording | Starting at $50/hr |
| General Studio / Engineering Services | Starting at $65/hr |
| Band Recording | Starting at $75/hr |

Card details and CTAs: use approved v1 copy verbatim (DOCX §Pricing).

**Project-Based Quotes:** for full productions, multi-song projects, EPs, albums, artist development, media packages, complex needs — custom quote after learning project scope. CTA: Request a Custom Quote / Book a Free Consultation. No fixed prices without approval.

**Album Production Promotional Package:** include only if clearly labeled Coming Soon / Custom Quote; may include album production support, artist/band bio documentary, live performance video. **Never publish a price for this package without Bridget's approval.**

**⚠ CONFLICT (decision item #4 below):** the Source of Truth booklet records that the current live site lists *studio rental from $30/hr*, and v1 lists "Studio Rental if approved" as a booking option — but the three-card model above has no rental tier. Per the conflict rule this must be resolved by Gavin/Bridget: keep $30/hr rental as a fourth card, fold rental into the $65/hr card, or drop rental from the public site. Do not publish any rental price until resolved.

Other pricing rules unchanged: no school or piano-lesson pricing on the main pricing page, no legacy pricing without approval, no mixing of old and new pricing, no unconfirmed rates, route anything else to Project-Based Quote / consultation / Call or Text 505-267-0558.

## Booking Page

Primary offer: **Book a Free Consultation**.

Consultation promise copy: "Meet the engineers, tour the studio, discuss your project, choose the right service path, and get pricing guidance."

Booking options: Free Consultation, Recording Session, Vocal Recording, Studio Rental *(pending decision item #4)*, Mixing Inquiry, Mastering Inquiry, Full Production Inquiry, Band Recording Inquiry, Photography Inquiry, School Admissions Call, General Contact Form.

The page includes the Cal.com embed for approved schedulable event types and the EmailJS inquiry form for consult-first or not-sure-yet visitors. See Booking and Email Integration Technical Spec above.

## Studios (unchanged from v1)

Studios overview page plus Studio A and Studio B sections/pages, with comparison table (Best For, Room Feel, Vocal Booth, Control Room, Acoustic Instrument Use, Band Use, Budget Fit, Booking CTA).

- **Studio A** — larger/premier space: spacious acoustically treated vocal booth, equipment-focused control room for recording/mixing/mastering, instrument room. Best for premium vocal sessions, full production, bands, acoustic recording, larger projects.
- **Studio B** — focused room: high-end vocal booth, strong acoustic treatment, intimate environment. Best for vocals, demos, writing sessions, rap sessions, smaller/budget-conscious projects, acoustic instruments.

Do not invent gear lists; only gear approved in the source-of-truth file. Studio starting prices are unconfirmed (decision item #6).

### Studio Comparison Table (build-ready, approved facts only)

| Feature | Studio A | Studio B |
| --- | --- | --- |
| Best For | Premium sessions, production, bands, acoustic recording | Vocals, demos, writing, rap sessions, budget sessions |
| Vocal Booth | Yes — spacious, acoustically treated | Yes — high-end booth, strong acoustic treatment |
| Control Room | Yes — equipment-focused, for recording/mixing/mastering | Focused vocal and acoustic tracking setup |
| Instrument Room | Yes | No / limited |
| Band Recording | Yes | Limited or no |
| Engineer Available | Yes | Yes |
| Starting Price | TBD (decision item #6) | TBD (decision item #6) |
| CTA | Book a Free Consultation | Book a Free Consultation |

## Team (unchanged from v1)

- **Gavin Hammond** — Owner / Head Engineer. 20+ years music industry experience; Los Angeles Film School graduate. Bio emphasizes: owner and head engineer role, recording/production/mixing/mastering experience, piano and music background, LA Film School training, artist-centered approach, commitment to Albuquerque's music community.
- **Richard Baca** — Director of Operations / Engineer. Bio uses only approved details: operations role, engineering role, session coordination, client-focused studio work; Ableton workflow, rap/R&B/pop session experience, and student support **only if approved** (decision item #7).

No other team members (Kevin, Matt, Bridget, Marz, Zram, Antoine, Ann, interns, contractors, students, associates) unless explicitly approved in the source-of-truth file. No invented staff, titles, credentials, or bios.

## About Page (approved copy — use verbatim from v1/DOCX)

Sections: Mission Statement, Albuquerque Music Community Focus, Studio Origin Story, Gavin's Experience, Why Checkmark Exists, Professional Standards, Community Vision, Education and Artist Development. Break into scannable sections/cards/pull quotes, never one wall of text. The approved paragraph copy lives in the DOCX §About and v1 — do not rewrite it.

## School Section (unchanged)

Short overview, who it's for, link to school website/page, basic program description, CTA (Learn Audio Engineering / Visit Checkmark Audio School / Explore the School / Ask About Audio Education). Studio first; school never takes over. No accreditation, licensing, outcomes, placement, tuition, certification, or regulatory claims.

## Portfolio / Our Work (unchanged)

Categories: Hip-Hop, R&B, Pop, Acoustic, Bands, Podcast/Voice-Over, Student Work, Live Sessions. Each item: artist name (if approved), project name (if approved), service performed, engineer/producer credit (if approved), audio/video embed, genre, short description, CTA ("Want this kind of sound? Book a free consultation.").

MVP rule: build so it works with only a few approved examples; mark missing assets TODO or hide sections. Never invent artists, titles, credits, testimonials, or embeds.

## Testimonials and Proof (unchanged)

Only real testimonials and proof. Approved proof assets may include (only if still accurate and approved): demonstration reel, real client testimonial, RRFC connection, Los Angeles Film School credential, Lessons.com Top Pro Awards 2024, NAMM connection, Library of Congress connection (only if clearly and truthfully tied), New Mexico Workforce Connection reference. Do not overstate proof.

## Contact Page (unchanged)

Must show: Checkmark Audio · 5413 Lomas Blvd NE, Albuquerque, NM 87110 · 505-267-0558 (Call or Text) · CheckmarkAudio@gmail.com · Free Consultation / Book Now button. Also: business hours **if confirmed**, Google Maps embed, contact form, social links, parking/access notes **if approved**, response-time expectation **if confirmed**, service-area language, final CTA. Do not invent hours, parking notes, response times, or map details.

## Footer (unchanged, one conflict flagged)

Logo, short studio description, address, phone, email, social links, main nav links, service links, school link, Privacy Policy, Terms/Policies, copyright line.

**⚠ CONFLICT (decision item #13):** v1 says use "© 2025 by Checkmark Audio" unless updated; the Source of Truth example shows "(c) 2026 Checkmark Audio. All rights reserved." Bridget picks the final line.

## Design Direction (unchanged)

Professional, modern, clean, premium, approachable, artist-friendly, Albuquerque-local, trustworthy, music/studio-specific. Mostly white/light mode, black/dark-gray text, earthy accent colors, warm neutral backgrounds, clean cards, rounded corners, real studio photos, consistent logo usage, strong typography, generous spacing, clear CTA buttons, simple structure, mobile-first.

Avoid: full dark mode, generic SaaS look, random colors, inconsistent fonts, stock images, overcrowded menus, weak CTAs, unfinished pages, hidden contact info, outdated team info, unverified pricing, text walls, school overpowering studio.

Note: Bridget approved the visual color and typography character on 2026-08-08, as documented in `SEO/BRAND_STYLE_GUIDE.md`. The listed color tokens remain working implementation values pending accessibility calibration, and exact font files remain pending license/match testing. On 2026-08-10 she confirmed the canonical logo geometry; use only the validated white, black, and gold-gradient files listed in `SEO/LOGO_ASSET_MANIFEST.md`. The generated website-mockup logo and `CMA_Logo_Black.png` are prohibited.

## SEO, Schema, Images, Internal Linking, Mobile, Performance, Functional QA, Policies, FAQ, No-Invented-Content Rule, Launch Checklist, Definition of Done

Unchanged from v1 — use the DOCX / `master-build-plan-prompt.md` sections verbatim. Summary of the binding points:

- Every page: SEO title, meta description, one H1, clean H2/H3 hierarchy, natural Albuquerque relevance, useful alt text, internal links, clean slug, fast images, mobile-friendly layout, schema where appropriate.
- Local SEO URLs per v1 list; one primary keyword each; no thin duplicates.
- Schema: LocalBusiness/Organization/WebSite on home (confirmed details only), Service/BreadcrumbList/FAQPage on service pages (FAQ schema only for visible FAQs), CreativeWork/VideoObject/MusicRecording only where accurate. No fake review schema.
- Images: real Checkmark visuals from `MEDIA/IMAGES/`; filename format `00-subject-service-location.ext`; contextual alt text, never keyword-stuffed, never the filename.
- Internal linking: every major page links to Book Now, Pricing, relevant services, Studios, Our Work, Contact; no orphan pages.
- Mobile: sticky Book Now, tap-to-call, tap-to-text (if desired), readable pricing, easy forms; contact reachable within seconds.
- Performance: compressed responsive images (WebP/AVIF where appropriate), lazy-load below-the-fold, minimal JS, no layout shift.
- Policies: **shell drafted** — 10-section structure, anchors, and internal link plan in `ARCHIVE/project-system-before-simplification-2026-07-16/01_WEBSITE/07_POLICIES/policies-master-plan.md` § Policies Page Shell Draft. **Approved language only**; unapproved sections stay hidden.
- FAQ: **draft answers written** — 13 of 15 answered from source-of-truth copy, 2 marked TODO, in `ARCHIVE/project-system-before-simplification-2026-07-16/01_WEBSITE/01_PAGES/pages-master-plan.md` § FAQ Draft Answers. Needs Bridget/Gavin approval before publishing.
- Launch: site ships only when the v1 launch checklist passes and **Bridget approves before domain migration**.

---

## Open Decisions and Missing Facts (consolidated)

Everything the builder must NOT guess, in one place. Statuses updated 2026-07-22 after the repo-wide MD review and Bridget's current booking direction.

| # | Item | Status | Owner |
| --- | --- | --- | --- |
| 1 | Hosting | **PARTIALLY ANSWERED** — GitHub Pages can host this repo's static frontend and Cal.com embed; choose a secure webhook receiver host for the Cal.com-to-EmailJS bridge. Recreate missing `CNAME` at cutover | Bridget/Codex |
| 2 | EmailJS: account + 3 ready templates confirmed, variables documented. Still need service ID, template IDs, public key, recipient inbox | partially answered | Bridget |
| 3 | Client auto-confirmation email | **ANSWERED** — yes, `client-inquiry-received.html`; needs its dashboard template ID (see #2) | — |
| 4 | $30/hr studio rental: keep as card / fold into $65 / drop. (Rental is a confirmed current service path; only the public price ruling is open) | open — pricing conflict | Gavin |
| 5 | Brand direction **RULED by Bridget (2026-07-03 and refined 2026-08-08):** dark, sleek, suave, professional, warm, editorial, and never gimmicky. Bridget approved the typography character and deep-black / warm-cream / champagne-gold / micro-red color direction documented in `SEO/BRAND_STYLE_GUIDE.md`. **Logo ruled 2026-08-10:** use only the canonical white, black, and gold-gradient files in `SEO/LOGO_ASSET_MANIFEST.md`; generated mockup logos and `CMA_Logo_Black.png` are prohibited. Still needed: exact production font-family/license selection, accessibility calibration, logo clear-space/minimum-size rules, and any separate wordmark decision. | partially answered | Bridget/Gavin |
| 6 | Studio A and Studio B starting prices, or "quote only" | open | Gavin |
| 7 | Richard Baca bio approvals: Ableton workflow, rap/R&B/pop genres, student support (nothing found in active planning files) | open | Gavin |
| 8 | Business hours (or "by appointment only") + response-time wording (not on current baseline either) | open | Gavin |
| 9 | Social links: current `index.html` shows Facebook/Instagram/YouTube as **text without URLs** — need real profile links; also school website URL + Google Business Profile link | open | Gavin |
| 10 | Hero media: production candidate exists (`MEDIA/IMAGES/00-studio-sign-hero-web.jpg`); confirm final pick. Demo reel blocked on Wix video capture (0 video files captured; workflow in `ARCHIVE/project-system-before-simplification-2026-07-16/00_START/project-context.md`) | partially answered | Bridget/Gavin |
| 11 | 2–4 approved testimonials with display names; 3+ approved portfolio items with credits. Note: baseline `index.html` has a testimonial section — verify its content is real/approved before reuse | open | Gavin |
| 12 | Policy wording approved, or approve a clearly-labeled "policies pending" placeholder | open | Gavin |
| 13 | Copyright line | **ANSWERED (pending yes)** — deployed baseline already uses `© 2026 by Checkmark Audio` | Bridget confirms |
| 14 | URL style, now folded into the **launch-scope conflict**: single-page first launch (migration-era decision, sitemap has only `/`) vs 10-page Phase 1 (this prompt). If multi-page: `/studios/studio-a` vs `/studio-a` | open — scope conflict | Bridget |
| 15 | Analytics: install GA4 or not; if yes, wire the tracking events listed above | open | Bridget |
| 16 | Calendar/scheduling tool | **RULED by Bridget (2026-07-22), superseding the July 3 form-only ruling:** the Wix replacement includes an embedded Cal.com calendar plus the existing EmailJS inquiry and branded booking-confirmation emails. Still needed: Cal.com account/plan, event types, availability, embed link, webhook receiver hosting, verified field mapping, duplicate handling, and end-to-end testing | Bridget/Codex |
| 17 | Spam protection for the form: honeypot (recommended, inference) vs reCAPTCHA vs none | open | Bridget |
| 18 | Gear highlights approved for Studio A/B pages, if any | open | Gavin |

## Final Build Rule

Build the independent Wix replacement from the source-of-truth DOCX and consolidated planning files. No archived-draft designs without explicit approval. No domain migration until the complete replacement, Cal.com booking path, EmailJS messages, and cutover are approved, tested, and ready. No unresolved conflicts published. No invented content. Build the cleanest, clearest, most conversion-focused version of Checkmark Audio possible.
