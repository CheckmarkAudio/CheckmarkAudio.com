# CheckmarkAudio.com SEO Website Master Implementation Plan

> Repository note (2026-07-30): This Markdown file is a convenience mirror of the SEO Master Plan DOCX, not a separate authority. Use it through `DOCUMENT_MAP.md`. Current confirmed decisions about the separate school website, read-only public calendar, shared Supabase accounts, approved pricing, root website files, and `MEDIA/` override outdated passages below.

**Scope:** CheckmarkAudio.com only  
**Purpose:** Ground-up SEO, website, conversion, and client-portal implementation handoff  
**Source:** Gavin’s finalized Checkmark Audio SEO conversations and the supplied SEO/website planning documents  
**Implementation principle:** Build the invisible foundation first, then the public website, then expansion features.

> Checkmark Audio should become the clearest, most credible, most useful, and most locally relevant digital representation of a real Albuquerque recording and music-production business.

# 1. Mandate, Source Boundary, and Non-Negotiable Rules

This document is the controlling implementation handoff for the CheckmarkAudio.com rebuild. It compiles the finalized strategy into a single order of operations so a human team or AI coder can execute it without reconstructing the plan from old conversations.

## 1.1 What this plan applies to

- The public CheckmarkAudio.com website
- Its search-engine and AI-search visibility
- Local Albuquerque visibility
- Service, studio, team, proof, pricing, and booking content
- A public client-portal landing page
- Private client-portal functions
- File, content, media, and governance rules needed to maintain the site

It does **not** apply to Dashboard-V3 or any unrelated repository.

## 1.2 Strategy in one sentence

> Create one technically sound, highly useful, evidence-backed page for every service people genuinely search for, connect those pages into a coherent Albuquerque business entity, and lead every page toward a measurable business action.

## 1.3 Rules that override convenience

- Never invent business facts, services, prices, credentials, team members, reviews, equipment, partnerships, or results.
- Never publish a service page until the service is confirmed and the page can provide distinct value.
- Never create thin location pages, doorway pages, or trivial keyword-variation pages.
- Never expose private client information to search engines.
- Never use robots.txt as the only privacy control.
- Never publish fabricated reviews or false review markup.
- Never buy bulk links or use link schemes.
- Never migrate URLs without an approved redirect map.
- Never treat traffic alone as success. Measure qualified actions.
- Never let optional features delay the technical foundation and high-intent service pages.

## 1.4 Confirmed business facts for implementation

These facts appeared in the finalized material and must still be verified immediately before publication:

| Field | Working fact |
|---|---|
| Business name | Checkmark Audio |
| Website | CheckmarkAudio.com |
| City | Albuquerque, New Mexico |
| Address | 5413 Lomas Blvd NE, Albuquerque, NM 87110 |
| Phone | 505-267-0558 |
| Confirmed team references | Gavin Hammond and Richard Baca |
| Working vocal rate | $50 per hour |
| Working general studio rate | $65 per hour |
| Working band rate | $75 per hour |
| Custom work | Quote required |

## 1.5 Source-of-truth rule

Create one authoritative business-facts file. Public copy, metadata, structured data, Google Business Profile information, contact blocks, pricing, and portal messaging must agree with it.

When a fact is uncertain:

1. Mark it `NEEDS APPROVAL`.
2. Do not publish it.
3. Assign the decision to Gavin or the named business owner.
4. Update the source-of-truth file first.
5. Propagate the approved fact everywhere else.

# 2. Mandatory Backend-First Construction Order

The site must be built in this order. Visual page construction begins only after the required foundation for that page exists.

## Phase A — Governance and inventory

1. Create the source-of-truth, project-state, implementation-order, open-decisions, and acceptance-gates files.
2. Inventory current URLs, titles, headings, copy, forms, media, backlinks, analytics, and indexed pages.
3. Confirm services, prices, studios, team, address, phone, hours, consultation process, and portal requirements.
4. Create the page-intent map and URL/redirect map.
5. Record content and media permissions.

## Phase B — Technical SEO foundation

1. Confirm the production domain and preferred URL format.
2. Implement HTTPS and one canonical host.
3. Define indexable and non-indexable route classes.
4. Implement canonical tags.
5. Create robots.txt and XML sitemap behavior.
6. Implement redirect rules.
7. Establish metadata and structured-data components.
8. Establish page templates and heading rules.
9. Establish analytics events and consent handling.
10. Establish performance, accessibility, and security budgets.

## Phase C — Content and conversion foundation

1. Approve positioning and homepage brief.
2. Approve service hierarchy and individual service briefs.
3. Approve pricing presentation.
4. Catalog reviews, client quotes, sound samples, photographs, videos, and credits.
5. Define the consultation form and calendar workflow.
6. Define the public portal proposition and private portal boundaries.

## Phase D — Public website construction

1. Build shared header, navigation, footer, contact, CTA, and form components.
2. Build the homepage.
3. Build high-intent service pages.
4. Build studios, work/samples, pricing, team, contact, FAQ, and portal landing pages.
5. Add internal links, metadata, schema, media, proof, and conversion tracking.
6. Test mobile, accessibility, speed, forms, calendars, and all links.

## Phase E — Portal and commerce

1. Build secure client authentication and authorization.
2. Build private portal functions.
3. Connect portal booking, history, and document access.
4. Build merch only when products, ownership, fulfillment, and maintenance are ready.

## Phase F — Launch and improvement

1. Pass every acceptance gate.
2. Publish redirects and sitemap with the launch.
3. Validate Search Console, analytics, forms, schema, and private-route protections.
4. Monitor indexing, rankings, conversions, errors, and user behavior.
5. Improve pages using measured evidence.

# 3. Flat File Organization and AI-Coder Read Order

Human-facing planning, SEO, content, and media must remain easy to find. Technical nesting is permitted only where an existing framework, security boundary, deployment system, commerce system, or client portal requires it.

## 3.1 Folder rule

> Keep human-facing folders flat. Permit technical nesting only where the existing framework, security boundary, deployment system, or client portal requires it.

Do not flatten framework files if doing so would break routing, imports, deployment, access control, code generation, or maintainability.

## 3.2 Approved easy-navigation layout

```text
CheckmarkAudio.com/
├── AGENTS.md
├── README.md
├── package.json
├── START_HERE/
│   ├── 00_READ_FIRST.md
│   ├── 01_PROJECT_STATE.md
│   ├── 02_IMPLEMENTATION_ORDER.md
│   ├── 03_OPEN_DECISIONS.md
│   ├── 04_ACCEPTANCE_GATES.md
│   └── CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx
├── SEO/
│   ├── SEO_RULES.md
│   ├── SEO_TIER_SYSTEM.md
│   ├── PAGE_INTENT_MAP.md
│   ├── URL_AND_REDIRECT_MAP.md
│   ├── METADATA_TRACKER.md
│   ├── INTERNAL_LINKING_PLAN.md
│   ├── STRUCTURED_DATA_PLAN.md
│   ├── LOCAL_SEO_PLAN.md
│   ├── AI_VISIBILITY_RULES.md
│   ├── BACKLINK_TRACKER.md
│   ├── ANALYTICS_EVENTS.md
│   └── PAGE_SEO_CHECKLIST.md
├── CONTENT/
│   ├── BUSINESS_FACTS.md
│   ├── APPROVED_SERVICES.md
│   ├── APPROVED_PRICING.md
│   ├── HOMEPAGE_BRIEF.md
│   ├── SERVICE_PAGE_BRIEFS.md
│   ├── TEAM_BIOS.md
│   ├── REVIEWS_AND_QUOTES.md
│   ├── SOUND_SAMPLE_CATALOG.md
│   ├── MEDIA_PERMISSIONS.md
│   ├── VOICE_AND_TONE.md
│   └── VISUAL_SYSTEM.md
├── SITE/
│   ├── home.html
│   ├── services.html
│   ├── recording-studio-albuquerque.html
│   ├── vocal-recording-albuquerque.html
│   ├── mixing-services.html
│   ├── mastering-services.html
│   ├── band-recording-albuquerque.html
│   ├── studios.html
│   ├── studio-a.html
│   ├── studio-b.html
│   ├── our-work.html
│   ├── pricing.html
│   ├── about.html
│   ├── contact.html
│   ├── book-free-consultation.html
│   ├── merch.html
│   ├── client-portal.html
│   ├── faq.html
│   ├── policies.html
│   ├── privacy.html
│   ├── terms.html
│   ├── site.css
│   └── site.js
├── PORTAL/
│   ├── PORTAL_REQUIREMENTS.md
│   ├── PORTAL_SECURITY.md
│   ├── PORTAL_INDEXING_RULES.md
│   ├── CLIENT_SIGNUP_JOURNEY.md
│   └── technical portal files as required
├── BRAND/
│   └── approved logos and brand graphics, stored flat
├── PHOTOS/
│   └── approved photographs, stored flat
├── AUDIO/
│   └── approved audio samples, stored flat
├── VIDEO/
│   └── approved videos and thumbnails, stored flat
└── ARCHIVE/
    ├── README.md
    └── dated retired files
```

`SITE/` is a planning model, not an instruction to fight the framework. If the actual site requires `src/routes`, `app`, `components`, `public`, server functions, or protected API folders, preserve that technical structure and maintain the flat human-facing documentation beside it.

## 3.3 Media naming examples

- `checkmark-audio-logo-gold.svg`
- `studio-a-control-room-wide.webp`
- `studio-b-vocal-booth-microphone.webp`
- `gavin-hammond-headshot.webp`
- `richard-baca-headshot.webp`
- `vocal-before-sample-01.mp3`
- `vocal-after-sample-01.mp3`
- `checkmark-audio-demo-reel-2026.mp4`
- `checkmark-audio-demo-reel-thumbnail.webp`

## 3.4 Required AI-coder reading order

Before changing SEO-sensitive code or content, an AI coder must read:

1. `AGENTS.md`
2. `START_HERE/00_READ_FIRST.md`
3. `START_HERE/01_PROJECT_STATE.md`
4. `START_HERE/02_IMPLEMENTATION_ORDER.md`
5. `START_HERE/03_OPEN_DECISIONS.md`
6. `SEO/SEO_RULES.md`
7. `SEO/PAGE_INTENT_MAP.md`
8. `CONTENT/BUSINESS_FACTS.md`
9. `CONTENT/APPROVED_SERVICES.md`
10. `CONTENT/APPROVED_PRICING.md`
11. The brief for the page being changed

Every handoff must state:

- What changed
- Which facts and approvals were used
- Which routes and files were affected
- Which checks were run
- Which questions remain open
- Whether indexing, redirects, schema, tracking, or portal security changed

# 4. Seven-Tier SEO Operating System

Every page and major change is reviewed in this order.

## Tier 1 — Technical SEO

- Crawlability and indexability
- HTTPS and canonical host
- Canonical URL
- Redirect behavior
- XML sitemap
- Robots.txt
- Status codes
- Broken links and media paths
- Mobile usability
- Performance
- Metadata
- Structured data
- Working calls, forms, calendars, and portal links

## Tier 2 — Page intent

Every page has:

- One principal audience
- One main subject or service
- One primary search intent
- One main conversion goal
- One authoritative URL

## Tier 3 — Local SEO

- Accurate name, address, phone, hours, URL, and service facts
- Natural Albuquerque and New Mexico relevance
- Real studio and team evidence
- Google Business Profile alignment
- Local projects, citations, reviews, partnerships, and coverage

## Tier 4 — Content quality

The page explains:

- Who the service is for
- What problem it solves
- What happens
- What is included
- What the client prepares
- What affects price
- What the client receives
- What results are realistic
- Common questions
- The next action

## Tier 5 — Metadata and page structure

- Unique title
- Useful meta description
- One clear H1
- Logical H2/H3 hierarchy
- Descriptive URL
- Natural language matching intent

## Tier 6 — Image and media SEO

- Authentic and permission-cleared
- Correctly sized and compressed
- Descriptively named
- Accurate alt text when appropriate
- Captions, credits, transcript, or surrounding context when useful
- No keyword stuffing

## Tier 7 — Conversion

- Clear primary CTA
- Appropriate secondary CTA
- Fast, understandable form
- Phone and contact paths
- Trust and proof near the decision
- Tracked success action

# 5. Technical SEO, Indexing, Security, and Performance

## 5.1 Canonical and URL rules

- Use one preferred HTTPS host.
- Pick a trailing-slash convention and apply it consistently.
- Use lowercase, human-readable, hyphenated URLs.
- Avoid dates, file extensions, tracking strings, and unnecessary folders in public URLs.
- Use self-referencing canonicals on indexable pages.
- Do not canonicalize distinct services to a generic page.
- Redirect each retired URL directly to its closest replacement.
- Avoid redirect chains and loops.

## 5.2 Indexing classes

| Route class | Indexing rule |
|---|---|
| Homepage, services, studios, work, pricing, about, contact | Indexable when complete |
| Public client-portal landing page | Indexable when it contains useful public information |
| Login, authenticated dashboard, history, documents, profile | Authenticated and non-indexable |
| Thank-you and internal search pages | Usually noindex |
| Staging, previews, test routes | Access-restricted and non-indexable |
| Duplicate filters or tracking variants | Canonicalized or blocked from indexation as appropriate |

Private data requires authentication and authorization. `noindex` is a search directive, not security.

## 5.3 Sitemap and robots

- Include only canonical, indexable, production URLs in the XML sitemap.
- Exclude private portal routes, login states, thank-you pages, previews, and duplicate variants.
- Keep sitemap timestamps honest.
- Reference the sitemap in robots.txt.
- Do not block a page in robots.txt when search engines need to crawl its `noindex` directive.
- Do not use robots.txt to protect confidential information.

## 5.4 Status and error behavior

- Valid pages return `200`.
- Permanent moves return `301` or `308`.
- Removed pages without replacements return a real `404` or `410`.
- Custom error pages help users return to Services, Our Work, Contact, or Booking.
- Never return a branded `200` page for a missing URL.

## 5.5 Performance budgets

Target good Core Web Vitals and real-device usability:

- LCP: 2.5 seconds or better at the 75th percentile
- INP: 200 milliseconds or better
- CLS: 0.1 or better
- Compress and properly size images.
- Use modern formats when supported.
- Reserve media dimensions to prevent layout shifts.
- Lazy-load below-the-fold images, video, maps, calendars, and nonessential embeds.
- Do not autoplay audio.
- Avoid an autoplaying full-resolution hero video.
- Load only required font weights and preferably self-host them.
- Keep third-party scripts minimal.

## 5.6 Accessibility requirements

- Semantic landmarks and headings
- Keyboard-operable navigation, menus, forms, media, and portal
- Visible focus states
- Sufficient text and control contrast
- Descriptive labels and error messages
- Appropriate alt text; decorative images use empty alt
- Captions and transcripts for meaningful video/audio where feasible
- Touch targets large enough for mobile users
- Reduced-motion support
- No critical instruction communicated through color alone

## 5.7 Security requirements

- HTTPS everywhere
- Secure sessions and cookies
- Server-side authorization for every private resource
- Rate limits and abuse protection
- Safe password or approved identity-provider flow
- CSRF and injection protections appropriate to the stack
- Private file access through authorized, expiring delivery mechanisms
- Least-privilege staff access
- Audit logging for sensitive portal actions
- Backups and recovery procedure
- No secret keys in public code

# 6. Metadata, Structured Data, Internal Linking, and AI Clarity

## 6.1 Metadata rules

Create a tracker with one row per indexable URL:

| Field | Requirement |
|---|---|
| URL | Final canonical URL |
| Intent | One primary intent |
| Title | Unique, accurate, concise |
| Meta description | Useful promise and differentiator; no stuffing |
| H1 | Clear page subject |
| Primary CTA | One measurable next action |
| Canonical | Self-referencing unless approved otherwise |
| Indexing | Index or noindex |
| Schema | Valid type supported by visible content |
| Owner | Person responsible for accuracy |
| Status | Draft, review, approved, published |

Titles and descriptions should be written for humans. City and service terms belong where natural; they do not need to appear in every field.

## 6.2 Structured-data plan

Use structured data only when it accurately represents visible content:

- `Organization` and appropriate local-business information
- `WebSite`
- `BreadcrumbList`
- `Service` where useful and truthful
- `Person` for approved team profiles
- `VideoObject`, `Clip`, or `SeekToAction` for qualifying video
- `Product` and offer data for active merch products

Do not add fabricated aggregate ratings, false review markup, unsupported prices, or invisible FAQ content. Validate markup and monitor Search Console, but do not promise rich results.

## 6.3 Internal-linking rules

- Homepage links to every priority service.
- Services hub links to individual service pages.
- Service pages link to relevant studios, work samples, pricing, FAQ, and consultation.
- Studios link to services appropriate to each room.
- Work/sample pages link to the services used.
- Team profiles link to relevant services and proof.
- Educational articles link to the primary service they support.
- Use descriptive, natural anchor text.
- Keep important pages reachable through ordinary crawlable links.
- Do not use navigation labels like “click here” when a descriptive label fits.

## 6.4 AI visibility

AI systems benefit from the same clarity that supports traditional search:

- Consistent business facts
- Clear service definitions
- Named experts
- Specific local context
- Strong page structure
- Direct answers to real questions
- Original examples and evidence
- Independent reviews, credits, links, and mentions
- Valid structured data

Do not create a separate layer of vague “AI SEO” copy. Make Checkmark Audio unambiguous, verifiable, and useful.

# 7. Research Basis and Recommendation Standard

The layout recommendations in this plan are based on search-engine guidance, usability research, accessibility, and conversion principles. They are not claims that a particular color or section position directly increases rankings.

## 7.1 Primary research basis

- Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central, developer SEO guide: https://developers.google.com/search/docs/fundamentals/get-started-developers
- Google Search Central, sitelinks: https://developers.google.com/search/docs/appearance/sitelinks
- Google Search Central, crawlable links: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Google Search Central, video SEO: https://developers.google.com/search/docs/appearance/video
- Google Search Central, indexing control: https://developers.google.com/search/docs/crawling-indexing/control-what-you-share
- Google Search Central, AI features and website optimization: https://developers.google.com/search/docs/fundamentals/ai-features
- Google Business Profile, local ranking: https://support.google.com/business/answer/7091
- Baymard Institute, account sign-in flows: https://baymard.com/blog/account-sign-in-flows

## 7.2 What research supports

- Clear information architecture helps people and crawlers understand the site.
- Crawlable descriptive links help discovery and comprehension.
- Important services should have dedicated useful pages.
- Navigation should reflect user tasks and business priorities.
- Proof should appear close to claims and decisions.
- Heavy embeds should not block initial page performance.
- Video needs contextual text, stable pages, and accurate metadata.
- Sign-in and account recovery should be obvious and predictable.
- Private pages must be access-controlled rather than merely hidden from search.

## 7.3 What research does not prove

- A particular homepage section order is a direct Google ranking factor.
- Gold, black, or any brand color creates rankings.
- A fixed number of pages guarantees success.
- More schema guarantees rich results.
- More words, reviews, or backlinks automatically outrank competitors.

# 8. Recommended Site Architecture and Navigation

## 8.1 Recommended launch architecture

The launch should contain approximately 16 authoritative public pages, with additional pages added only when services and proof justify them.

1. Home
2. Services
3. Recording Studio Albuquerque
4. Vocal Recording Albuquerque
5. Mixing Services
6. Mastering Services
7. Band Recording Albuquerque
8. Studios
9. Studio A
10. Studio B
11. Our Work / Sound Samples
12. Pricing
13. About / Team
14. Contact / Free Consultation
15. Merch
16. Client Portal landing / sign-in

Add music production, podcast recording, voice-over recording, team-member profiles, FAQs, and legal/policy pages when confirmed and complete.

## 8.2 Recommended desktop navigation order

1. Logo / Home
2. Services
3. Studios
4. Our Work
5. Pricing
6. About
7. Merch
8. Contact
9. Client Portal
10. **Book a Free Consultation** as the primary visual CTA

Place team information under About rather than crowding the top navigation. If Merch is not active, maintained, and valuable, move it to a secondary menu or footer until ready.

## 8.3 Recommended mobile navigation

Visible controls:

- Logo
- Portal
- Book
- Menu

The menu contains Services, Studios, Our Work, Pricing, About, Merch, Contact, and other secondary pages.

## 8.4 Navigation behavior

- Keep labels plain and predictable.
- Use crawlable links.
- Show the current location.
- Make phone/contact information easy to reach.
- Keep consultation visually primary.
- Keep portal access easy to find but visually secondary to new-client conversion.
- Avoid large menus until enough content exists to justify them.

# 9. Recommended Homepage Order

This order balances clarity, proof, service discovery, media performance, and conversion.

1. **Utility/contact strip** — phone, location, hours or consultation cue when approved
2. **Main navigation** — logo, page links, portal, consultation CTA
3. **Hero/title** — Checkmark Audio, a service-and-location H1, convincing one-line statement, consultation CTA, sound-sample CTA
4. **Compact social-proof strip** — review rating context, three or four short excerpts, or high-impact trust signals
5. **High-intent service buttons** — direct links to separate authoritative service pages
6. **Sound samples preview** — demo reel with chapters/timestamps and selected before/after samples
7. **Studio A and Studio B** — purpose, differentiator, photos, and links to full pages
8. **Expanded reputation section** — three or four approved reviews plus one impactful client quote
9. **Meet the team** — approved team members and links to profiles
10. **Photo gallery** — curated, optimized, permission-cleared imagery
11. **Free consultation calendar and form** — clear expectation, minimal fields, booking component
12. **Local contact and footer** — complete business information, portal, legal pages, secondary navigation

## 9.1 Hero recommendation

The business name should be prominent, but the main H1 should clearly state service and location. Working example:

> Professional Recording, Mixing & Mastering in Albuquerque

Working supporting line:

> Record with an experienced team in purpose-built studios and leave with a clear path toward release-ready sound.

Both require brand and factual approval before publication.

## 9.2 Why services precede the full sound section

A short proof strip belongs immediately after the hero. The service buttons should then appear before the heavier media section because:

- High-intent visitors can identify their path quickly.
- Search engines receive clear crawlable links to core services early.
- The page does not force every visitor to load or navigate media before finding a service.
- The full sound section can be lazy-loaded without hiding the core offer.

This is the one meaningful refinement to the originally proposed sequence.

# 10. Approved Planned Homepage Order

The owner-approved homepage plan is:

1. Top bar with logo, contact information, and page links
2. Title showing the business name
3. Bold, convincing one-line statement
4. Social proof with three or four reviews and one impactful client quote
5. “Hear Our Samples” section with a demo video, time markers, and before/after sound samples
6. High-intent service buttons leading to separate service pages
7. Studio A
8. Studio B
9. Meet Our Team with links to team-member pages
10. Photo Gallery
11. Calendar and free-consultation form
12. Booking and consultation shortcuts integrated throughout
13. Pricing, Merch, and Client Portal access in the top navigation

## 10.1 Approved implementation reconciliation

Use the recommended order in Chapter 9 unless the owner explicitly chooses the exact order above at final wireframe approval. Both preserve all requested sections. The recommended version moves concise service links before the heavy sound-demo section while keeping social proof directly below the hero.

## 10.2 Booking integration

- Hero: primary consultation button
- Service cards: “Learn About [Service]” plus consultation path
- Studios: “Ask Which Studio Fits Your Project”
- Sound samples: “Want Results Like This? Book a Free Consultation”
- Pricing: “Get a Project Recommendation”
- Team: “Talk With the Studio”
- Bottom: full form and calendar
- Dedicated URL: `/book-free-consultation/`

All buttons must lead to the same authoritative booking workflow while preserving service context when possible.

# 11. Page Ownership and High-Intent Service Strategy

## 11.1 One authoritative page per intent

Each important page must have one page brief:

- Page name
- Canonical URL
- Primary audience
- Primary intent
- Main service or topic
- Local relevance
- Evidence available
- Questions answered
- Primary CTA
- Related internal links
- Owner and approval status

## 11.2 Priority service pages

### Recording Studio Albuquerque

Primary audience: artists and clients seeking a professional Albuquerque recording studio.  
Primary CTA: book a free consultation or request a session recommendation.  
Evidence: studio rooms, team, process, work samples, reviews, location.

### Vocal Recording Albuquerque

Primary audience: singers, rappers, spoken-word artists, and vocal clients.  
Primary CTA: discuss a vocal session.  
Evidence: booth, vocal chain only if approved, before/after examples, editing/tuning process, vocal reviews.

### Mixing Services

Primary audience: local and remote clients with recorded material.  
Primary CTA: request a mix consultation or quote.  
Evidence: before/after examples, delivery requirements, revision policy, credits, outcomes.

### Mastering Services

Primary audience: clients preparing completed mixes for release.  
Primary CTA: request mastering guidance or a quote.  
Evidence: process, deliverables, format guidance, approved examples.

### Band Recording Albuquerque

Primary audience: bands and live-instrument projects.  
Primary CTA: plan a band session.  
Evidence: room, session workflow, preparation, setup, approved project examples.

## 11.3 Conditional service pages

Publish only after confirmation and sufficient original material:

- Music Production Albuquerque
- Podcast Recording Albuquerque
- Voice-over Recording Albuquerque
- Remote Mixing
- Editing, tuning, or production specialties
- Piano lessons
- Violin lessons
- Audio-engineering education

## 11.4 Standard service-page structure

1. Unique title and meta description
2. Direct H1
3. Audience-and-outcome opening
4. CTA near the top
5. Who the service is for
6. Process
7. What is included
8. What the client should prepare
9. Real proof and work examples
10. Pricing or honest price factors
11. FAQs
12. Related services and studio links
13. Final consultation or quote CTA

# 12. Pricing, Services, and Location of Decisions

## 12.1 Pricing strategy

Pricing should reduce uncertainty without promising a rate that does not fit the project.

Use:

- Confirmed hourly rates where the service is truly hourly
- “Starting at” only when the starting point is real and representative
- Clear quote factors
- What is and is not included
- A consultation route for complex work

Working rates from the source material:

- Vocal recording: $50/hour
- General studio work: $65/hour
- Band recording: $75/hour
- Custom production, editing, mixing, mastering, or packages: approved quote

Confirm all rates, minimums, deposits, cancellation rules, revisions, and deliverables before publication.

## 12.2 Pricing placement

- A dedicated Pricing page owns full public pricing.
- Service pages show the most relevant approved guidance.
- Homepage may show “View Pricing” but should not become a dense rate sheet.
- Forms should capture enough context to recommend the correct service.
- Portal repeat-booking prices must match public and internal approved terms.

## 12.3 Local information placement

Use the full consistent business information on:

- Contact page
- Footer
- Structured data
- Google Business Profile
- Approved directory/citation profiles
- Booking confirmation and portal support where appropriate

Use natural Albuquerque references on the homepage, service pages, studios, team, contact, and local resources. Do not force the city into every sentence, filename, or heading.

# 13. Social Proof, Sound Samples, Studios, Team, and Gallery

## 13.1 Review standards

Use only genuine, permission-appropriate reviews. Keep original meaning and attribution. Never rewrite a review into a stronger claim.

Homepage proof:

- Three or four concise reviews
- One impactful client quote
- Service and outcome context
- Link to a fuller proof or work section when available

## 13.2 Review collection

Ask after:

- A successful session
- Delivery of completed work
- A clear client compliment
- A milestone
- A successfully resolved problem

Do not script keyword-stuffed review language. A natural prompt may ask the client to mention what service they received and what stood out.

## 13.3 Sound samples

Use a two-level system:

- Homepage: lightweight preview
- Our Work page: full organized catalog

Each sample should record:

- Approved title
- Client/project attribution
- Service used
- Contributors and credits
- Permission status
- Before/after relationship
- Short explanation of what changed
- Related service URL
- Audio/video file and thumbnail

## 13.4 Demo video

- Provide visible time markers or chapters.
- Add a concise text summary and, when useful, a transcript.
- Use a stable thumbnail.
- Do not autoplay sound.
- Lazy-load the player.
- Keep the video page and metadata stable.
- Use valid `VideoObject`, `Clip`, or `SeekToAction` data only when supported.

## 13.5 Studio A and Studio B

Each studio page should explain:

- Best-fit sessions
- Room purpose and experience
- Approved equipment information
- Capacity only if confirmed
- Authentic photographs
- Relevant sound samples
- Related services
- Consultation CTA

Avoid unsupported “best,” “largest,” or “state-of-the-art” claims.

## 13.6 Team

Create profiles only for approved team members. Each profile should contain:

- Real name and role
- Accurate biography
- Specialties
- Approved credits and experience
- Authentic portrait
- Related services and work
- Contact/consultation path

## 13.7 Gallery

- Curate rather than dump every image.
- Compress and resize each image.
- Use descriptive filenames.
- Use alt text that describes the image’s purpose in context.
- Mark decorative images with empty alt text.
- Confirm client and staff permissions.
- Do not let the gallery delay or destabilize initial page load.

# 14. Consultation Calendar and Conversion System

## 14.1 One authoritative consultation workflow

Create a dedicated `/book-free-consultation/` page and reuse the same form/calendar component on the homepage or link to its anchored version.

## 14.2 Form design

Ask only what is needed:

- Name
- Email
- Phone if operationally required
- Service or project type
- Brief project description
- Preferred contact or consultation time
- Consent and privacy acknowledgement where required

Avoid asking first-time visitors for a full production questionnaire.

## 14.3 Calendar behavior

- Lazy-load the calendar.
- Provide a fallback contact method.
- Explain what the consultation includes and how long it takes.
- Confirm time zone.
- Prevent double booking.
- Send confirmation and reminder messages.
- Preserve the originating service so staff understands the lead.

## 14.4 Conversion events

Track at minimum:

- `consultation_cta_click`
- `consultation_form_start`
- `consultation_form_submit`
- `calendar_open`
- `consultation_booked`
- `phone_click`
- `email_click`
- `pricing_view`
- `sound_sample_play`
- `service_page_view`

Do not send private project descriptions or sensitive portal data to analytics.

# 15. Client Portal Strategy

The portal is a retention and customer-experience system. Its private content does not directly rank because it should not be indexed.

## 15.1 Public portal landing page

Create an indexable `/client-portal/` page that:

- Explains who the portal is for
- Explains benefits
- Provides sign-in
- Provides account-access help
- Directs new clients to a free consultation
- Avoids exposing private information

Working benefit statement:

> Book faster. View your session history. Keep important studio documents in one place.

## 15.2 Private portal functions

- Dashboard
- Book Session
- Session History
- Documents
- Profile
- Support

Future functions may include payments, file delivery, messaging, and project status after security and operational requirements are defined.

## 15.3 Portal search rules

- Require authentication.
- Enforce server-side authorization for every record and file.
- Exclude private routes from the sitemap.
- Send `noindex` on private application routes as defense in depth.
- Do not publish private data in page source, metadata, logs, analytics, or previews.
- Do not rely on obscured URLs.
- Never use public share links for confidential documents unless explicitly time-limited and authorized.

## 15.4 Portal placement

- Desktop header: top-right, easy to find, secondary to the consultation CTA
- Mobile header: visible Portal shortcut
- Footer: Client Portal and access help
- Homepage: optional returning-client card or short mention
- Booking and delivery emails: sign-in link

## 15.5 Natural adoption path

Promote portal enrollment:

- After the first successful session
- In booking confirmation
- In final-delivery communication
- In follow-up and invoice communication
- On the public portal page
- During a repeat-booking conversation

Do not force account creation before a person understands the service. New prospects should use consultation; established clients should sign in or request access.

## 15.6 Portal conversion tracking

- `portal_landing_view`
- `portal_sign_in_click`
- `portal_access_request`
- `portal_signup_complete`
- `portal_repeat_booking_start`
- `portal_repeat_booking_complete`
- Privacy-safe document-view/download events when operationally necessary

## 15.7 Authentication usability

- Preserve the intended destination after sign-in.
- Make password reset and access recovery obvious.
- Explain whether an account already exists.
- Avoid duplicate-account creation.
- Use clear error messages.
- Provide human support.

# 16. Local SEO, Google Business Profile, Reviews, and Citations

## 16.1 Business-information consistency

Keep name, address, phone, URL, hours, categories, services, and booking information aligned across:

- Website
- Google Business Profile
- Bing
- Yelp and legitimate local directories
- Social profiles
- Booking pages
- Merch and portal contact areas
- Industry and community listings

## 16.2 Google Business Profile

- Use the most accurate primary category.
- Add only applicable secondary categories.
- Complete services and descriptions.
- Maintain accurate hours and special hours.
- Use the correct website and consultation links.
- Upload real exterior, interior, studio, team, session, and education photos when permitted.
- Respond professionally to legitimate reviews.
- Monitor questions, edits, duplicates, and suspension risks.

## 16.3 Local proof

Publish:

- Real Albuquerque studio photographs
- Location and arrival information
- Local projects and collaborations
- Named staff
- Local reviews
- Community participation
- Accurate contact details

Local relevance should be demonstrated, not mechanically repeated.

## 16.4 Citations

A citation may mention the business without a clickable link. Maintain only legitimate, useful profiles. Correct duplicates and inconsistent information. Do not submit to hundreds of irrelevant directories.

# 17. Backlinks and Digital Authority

Backlinks are part of the complete strategy, but not its center. The technical foundation, service pages, local proof, conversion system, and useful original content come first.

## 17.1 Link priorities

- Artists and clients crediting real work
- Albuquerque musicians and collaborators
- Venues and event organizations
- Educational and community relationships
- Local media and music publications
- Legitimate business and industry organizations
- Vendor case studies or studio profiles

## 17.2 Linkable assets

- Albuquerque music resource guide
- Vocal-session preparation checklist
- Band-recording preparation guide
- Stem-delivery guide
- Podcast-recording checklist
- Original local music research
- Checkmark Tonight artist pages
- Educational diagrams, worksheets, and studio resources

## 17.3 Evaluation rubric

Evaluate:

- Relevance
- Legitimacy
- Context
- Referral value
- Real relationship

Third-party authority scores are estimates, not Google metrics.

## 17.4 Prohibited practices

- Bulk backlink packages
- Paid followed links intended to manipulate rankings
- Private blog networks
- Comment and forum-profile spam
- Automated directory submissions
- Hidden links
- Excessive reciprocal exchanges
- Keyword-stuffed required anchors
- Low-quality guest posts created only for links
- Fake local sites
- Expired domains used to manufacture authority
- Undisclosed incentives specifically for ranking links

## 17.5 Backlink tracker

Record:

- Organization
- Contact
- Relationship
- Opportunity
- Destination page
- Date contacted
- Status
- Published link
- Follow-up
- Notes

# 18. Content Authority and Editorial System

Do not publish large quantities of generic blogs while core pages remain incomplete.

## 18.1 Correct sequence

1. Fix technical issues.
2. Clarify homepage positioning.
3. Complete high-intent service pages.
4. Complete studios, team, pricing, contact, and booking.
5. Add proof, reviews, examples, and local facts.
6. Strengthen internal links.
7. Publish supporting content clusters.

## 18.2 Content clusters

### Vocal production

- Preparing for a vocal session
- Comping and editing
- Tuning expectations
- Doubles and harmonies
- Recording rap vocals
- Mixing vocals over a two-track beat

### Band recording

- Preparing a band for the studio
- Live tracking versus overdubbing
- Drum and instrument preparation
- Session planning and budgeting

### Mixing and mastering

- Mixing versus mastering
- Preparing stems
- Revision expectations
- Remote mixing workflow
- Mastering for release

### Education

- Signal flow
- Ear training
- Microphone technique
- Production workflow
- Piano and violin education only when those offers are confirmed

## 18.3 Editorial quality gate

Every article must:

- Answer a real customer question
- Support a legitimate primary page
- Contain original professional insight
- Use accurate named expertise
- Include useful internal links
- Have a clear next action
- Be reviewed by a knowledgeable person

# 19. Backburner Opportunities and Separate-Site Decisions

These items remain outside the critical launch path:

- Expanded Checkmark School of Audio information
- Dedicated school website
- Piano and violin lesson expansion
- Photography services
- Dedicated photography website
- Artist media services
- Checkmark Tonight / live sessions
- Beat store
- Workshops and events
- Student portal
- Client payments
- Secure file delivery
- Client messaging
- Project dashboards
- Expanded educational resources

## 19.1 Separate-site decision test

Use a separate website only when the offering has:

- A distinct audience and conversion path
- Enough unique content to sustain the site
- Clear brand and operational ownership
- Resources to maintain security, content, analytics, and local information
- A legitimate relationship and linking strategy with Checkmark Audio

Photography may fit a separate website if its buyers, portfolio, pricing, lead process, and brand experience differ materially from recording clients. Otherwise, keep it as a limited secondary service until demand and content justify separation.

Education may deserve a separate site when it becomes a sufficiently independent school brand. Until then, use focused pages without allowing education to obscure the studio’s primary commercial intent.

# 20. Visual System and Scannable Brand Experience

Visual design affects trust, comprehension, accessibility, and conversion. It is not a direct ranking shortcut.

## 20.1 Approved palette

| Role | Color |
|---|---|
| Warm page background | `#FAF8F3` |
| White surface | `#FFFFFF` |
| Near-black text | `#171717` |
| Charcoal secondary text | `#3D3D3D` |
| Deep gold text/accent | `#986400` |
| Decorative gold | `#D2A33B` |
| Warm sand section | `#EEE5D4` |
| Optional rust accent | `#9A3F22` |

Use deep gold for text only when contrast passes. Decorative gold is for lines, icons, borders, and large non-text treatments unless testing confirms accessibility.

## 20.2 Typography

Preferred pairing:

- Headings: Fraunces
- Body and interface: Inter, Source Sans 3, or Manrope

A single high-quality variable sans font is acceptable when it improves speed and consistency.

## 20.3 Section rhythm

Suggested homepage rhythm:

- White or warm-white hero
- Cream proof strip
- White service section
- Dark-charcoal sound section
- White studio section
- Sand review section
- White team/gallery section
- Dark booking/footer zone

This creates orientation without abandoning brand consistency.

## 20.4 Interaction rules

- Large, consistent buttons
- One dominant CTA style
- Clear secondary links
- Restrained animation
- No autoplay audio
- No essential text embedded only in images
- Strong hover and keyboard focus states
- Comfortable line length and spacing
- Cards used only when they improve scanning
- Mobile-first layout and testing

# 21. Build Phases, Acceptance Gates, and Ownership

## Phase 0 — Facts and decisions

- [ ] Business facts approved
- [ ] Services approved
- [ ] Prices and policies approved
- [ ] Studios and team approved
- [ ] Reviews and permissions cataloged
- [ ] Portal scope and data ownership approved

## Phase 1 — SEO and technical foundation

- [ ] URL and redirect map approved
- [ ] Page-intent map approved
- [ ] Canonical/indexing system implemented
- [ ] Sitemap and robots behavior implemented
- [ ] Metadata and schema system implemented
- [ ] Analytics events documented
- [ ] Accessibility, performance, and security budgets documented

## Phase 2 — Shared website system

- [ ] Header and navigation
- [ ] Footer and consistent business information
- [ ] Service, studio, team, proof, media, and CTA components
- [ ] Consultation form and calendar component
- [ ] Responsive layout
- [ ] Error and thank-you states

## Phase 3 — Priority content

- [ ] Homepage
- [ ] Services hub
- [ ] Recording Studio Albuquerque
- [ ] Vocal Recording Albuquerque
- [ ] Mixing
- [ ] Mastering
- [ ] Band Recording
- [ ] Studios, Studio A, Studio B
- [ ] Our Work
- [ ] Pricing
- [ ] About/Team
- [ ] Contact/Consultation
- [ ] Public Client Portal

## Phase 4 — Portal

- [ ] Authentication and recovery
- [ ] Authorization and private data isolation
- [ ] Dashboard
- [ ] Repeat booking
- [ ] Session history
- [ ] Documents
- [ ] Profile/support
- [ ] Private-route indexing tests
- [ ] Security and privacy review

## Phase 5 — Launch

- [ ] Complete crawl
- [ ] No broken internal links
- [ ] No unintended indexable routes
- [ ] Redirects tested
- [ ] Canonicals tested
- [ ] Sitemap tested
- [ ] Metadata reviewed
- [ ] Schema validated
- [ ] Forms, calendar, phone, email, merch, and portal tested
- [ ] Mobile and keyboard tests passed
- [ ] Performance tested
- [ ] Analytics verified
- [ ] Search Console verified
- [ ] Backup and rollback ready

## 21.1 Roles

- **Gavin/business owner:** final authority over facts, services, pricing, claims, major positioning, and publication
- **Project lead:** manages sequence, decisions, assignments, and source-of-truth updates
- **SEO/content lead:** page intent, metadata, internal links, local SEO, editorial quality, and reporting
- **Engineer/teacher subject expert:** verifies technical service or educational accuracy
- **Developer:** routing, implementation, performance, redirects, forms, analytics, security, and testing
- **Media owner:** permissions, filenames, compression, captions, credits, and catalog
- **AI coder/assistant:** audits, drafts, implementation, testing, and documentation within approved facts; never final factual authority

# 22. Measurement, Reporting, and Ongoing Improvement

## 22.1 Primary outcomes

- Qualified consultation bookings
- Studio booking inquiries
- Mixing and mastering quote requests
- Calls and emails
- Portal access requests and repeat bookings
- Google Business Profile actions
- Merch transactions if active
- Education inquiries if active

## 22.2 Search and experience indicators

- Organic clicks and impressions by page and query
- Rankings for high-value local service searches
- Google Business Profile discovery and actions
- Conversion rate by landing page
- Form start-to-completion rate
- Sound-sample engagement
- Core Web Vitals
- Index coverage
- Crawl errors
- Broken links
- Review velocity and themes
- Legitimate referring domains and referral traffic

## 22.3 Reporting rhythm

### Weekly after launch

- Forms, booking, portal, and phone-path health
- Search Console errors
- Indexing anomalies
- Broken links
- Performance regressions

### Monthly

- Qualified conversions by source and landing page
- Query and page movement
- Google Business Profile activity
- Content and proof gaps
- Portal adoption and repeat booking
- Backlink/citation changes
- Priority improvements

### Quarterly

- Full technical crawl
- Business-information audit
- Content accuracy review
- Pricing and service review
- Structured-data validation
- Media permission and performance audit
- Backlink and citation audit
- Backburner decision review

## 22.4 Decision rule

Do not celebrate a traffic increase without checking business quality. Prefer improvements that produce qualified consultations, bookings, repeat-client use, and stronger local trust.

# 23. First Codex Assignment

The first implementation task in the CheckmarkAudio.com repository should be:

1. Read the repository without changing it.
2. Identify the framework, routing, deployment, existing technical nesting, and portal/security boundaries.
3. Inventory all current URLs, metadata, headings, forms, media, schema, analytics, and indexed/private routes.
4. Compare the repository to this plan.
5. Create or update the flat human-facing `START_HERE`, `SEO`, `CONTENT`, `BRAND`, `PHOTOS`, `AUDIO`, and `VIDEO` folders without breaking framework conventions.
6. Produce the business-facts sheet, page-intent map, URL/redirect map, open-decisions list, and acceptance gates.
7. Stop before public copy, pricing, redirects, or destructive migration changes that require business approval.
8. Present the audit and the exact Phase 1 implementation sequence for approval.

## Final north-star

> Build a technically reliable, locally authoritative, evidence-rich CheckmarkAudio.com that helps prospective clients understand the right service, hear the quality, trust the people and rooms, book a free consultation, and return through a secure client portal.
