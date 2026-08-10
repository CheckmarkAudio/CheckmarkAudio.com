# Checkmark Audio Website Design Guide

## 1. Purpose

This guide controls recreation of this specific draft website concept in design tools, image generators, and production code. It captures what is locked, what may vary, and what must be omitted. It does not replace the repository's active Source of Truth checklist or the active root website.

The intended impression is:

> A high-end recording studio with editorial polish, cinematic warmth, visible craft, and authentic community credibility.

The experience should feel premium without becoming cold, luxurious without looking generic, and community-forward without becoming busy or casual.

## 2. Visual source of truth

### Primary design

`checkmark-homepage-primary-in-their-own-words-bright-v13.png`

Use this for the current hero composition, lighting level, review hierarchy, spacing, and overall page balance.

### Palette and composition references

- `checkmark-primary-color-authority-2026-07-26.png` — definitive color character
- `checkmark-primary-exact-layout-palette-source.png` — original approved structure and proportions
- `checkmark-homepage-primary-why-artists-equal-reviews-v12.png` — preserved alternate review heading

When a generated result conflicts with this written guide, follow the locked rules below and use the primary design as the visual reference.

## 3. Brand character

### Core traits

- Refined
- Cinematic
- Warm
- Artist-first
- Confident
- Crafted
- Human
- Community-rooted

### Balance to maintain

- Premium polish + authentic studio culture
- Editorial fashion typography + practical booking clarity
- Deep blacks + visible warm light
- Strong brand presence + artist-centered imagery
- Social proof + minimal copy

### Avoid

- Generic luxury real-estate styling
- Corporate technology aesthetics
- Neon nightclub colors
- Oversaturated yellow gold
- Excessive gradients, glows, or sparkles
- Busy collage layouts
- Wordy service descriptions
- Artificial stock-photo smiles or staged corporate poses
- Decorative elements that compete with artists and reviews

## 4. Color system

The reference images—not isolated hex codes—are the final color authority. The following tokens are implementation starting points and should be visually calibrated against the primary design.

| Token | Suggested value | Use |
|---|---:|---|
| Studio Black | `#080909` | Main background |
| Soft Black | `#11110F` | Panels and subtle depth |
| Champagne Gold | `#D2AA70` | Large title, solid booking buttons, logo |
| Bright Champagne | `#DDB978` | Icons, stars, dividers, outlined controls |
| Warm Cream | `#F0E1CF` | Social-proof panel |
| Cream Highlight | `#F7ECDE` | Gentle panel variation and text contrast |
| Ink | `#171511` | Text on cream and gold |
| Accent Red | `#D62E24` | Tiny punctuation, arrows, eyebrow labels |

### Distribution

- Dark neutrals: approximately 47%
- Light neutrals: approximately 35%
- Champagne-gold family: approximately 17%
- Red: a micro-accent only, substantially below the gold presence

### Color rules

- Gold must read as muted champagne or warm honey—not lemon, neon yellow, or orange.
- The large `CHECKMARK AUDIO` title and booking buttons use the same champagne family.
- Secondary gold must be bright enough to remain legible on black but should not become more saturated than the booking buttons.
- Red connects small moments: the tagline period, a small arrow, and review eyebrow copy.
- Do not use red as a large button fill in the current direction.
- Preserve deep blacks while revealing enough studio and clothing detail to avoid a dim or crushed result.

## 5. Typography

Use font categories and visual characteristics rather than blindly substituting unrelated fonts.

### A. Brand display — `CHECKMARK AUDIO`

- Highest typographic priority and largest text on the page
- High-contrast modern editorial Roman serif
- Thin hairlines, elegant curves, tall proportions, restrained flourishes
- Two lines: `CHECKMARK` / `AUDIO`
- Champagne gold
- Large but never overlaps the singer or microphone

Suggested production candidates to test:

- Cormorant Garamond Light
- Bodoni Moda
- DM Serif Display
- Instrument Serif
- Editorial New or Canela if licensed

The final choice should resemble the approved artwork rather than defaulting to a generic Times-style serif.

### B. Tagline — `YOUR SOUND, FULLY REALIZED.`

- Smaller expressive italic Roman serif
- Curved and graceful, but not script or cursive
- Champagne gold with a tiny red final period
- No explanatory subheading beneath it

### C. Navigation, buttons, labels, names, and feature titles

- Tall condensed sans serif
- Uppercase
- Moderate tracking
- Clear and architectural

Suggested candidates:

- Oswald
- Bebas Neue
- Barlow Condensed
- Archivo Narrow

### D. Review quotations

- Warm editorial Roman serif
- More expressive and human than the navigation font
- Graceful curves, readable contrast, comfortable line height
- Equal size and importance across all three reviews

### Type rules

- Do not use one font family for every role.
- Do not make all headings condensed sans serif.
- Do not introduce literal cursive or decorative wedding-style calligraphy.
- Avoid tiny body copy and unnecessary subtext.
- Maintain generous line height and short readable measures.

## 6. Homepage anatomy

### Header

- Reserved official-logo position at upper left. The logo visible in generated mockups is incorrect and must be replaced with an explicitly approved real Checkmark Audio asset.
- Centered navigation: Services, Our Work, About, Studio, Reviews, Resources, Contact
- Solid champagne-gold `BOOK A FREE CONSULTATION` button at upper right
- Dark transparent or integrated background; no bulky navigation container

### Hero

- Wide desktop composition with approximately half text and half artist photography
- Left: oversized two-line `CHECKMARK AUDIO`
- Below: `YOUR SOUND, FULLY REALIZED.`
- Primary action: solid champagne-gold `BOOK A FREE CONSULTATION`
- Secondary action: black/transparent `HEAR OUR WORK` with bright-champagne outline and a tiny red arrow
- Right: authentic singer actively performing into a professional condenser microphone while wearing headphones
- Photography should feel intimate, cinematic, and real—not like a generic stock portrait

### Lighting

- Warm practical studio lights and amber bokeh
- Visible singer rim light and facial highlights
- Microphone grille and hardware should catch warm highlights
- Preserve detail in black clothing and studio equipment
- Keep nighttime mood and deep blacks
- Do not make the image muddy, underexposed, daylight-bright, gray, or washed out

### Social proof

Social proof is the primary homepage content directly beneath the hero.

Current heading:

- Eyebrow: `BUILT ON TRUST` in restrained red
- Main heading: `IN THEIR OWN WORDS.`

Approved alternate heading:

- `WHY ARTISTS COME BACK.`

Layout:

- One warm-cream panel
- Three equal-width, equal-height review columns in one horizontal row
- No reviewer photographs, avatars, initials, or image placeholders
- Thin champagne vertical separators
- Each review has exactly five champagne stars, one concise quote, a thin rule, name, and role
- Review quotations use the warm editorial serif
- No decorative star row beneath the section title
- Give all three reviews equal visual importance

### Feature row

Keep four simple gold line icons and titles:

1. `WORLD-CLASS EQUIPMENT`
2. `EXPERIENCED ENGINEERS`
3. `CREATIVE ENVIRONMENT`
4. `ARTIST COMMUNITY`

Do not place descriptive text beneath these titles.

## 7. Copy system

### Approved homepage copy

- Brand: `CHECKMARK AUDIO`
- Tagline: `YOUR SOUND, FULLY REALIZED.`
- Primary CTA: `BOOK A FREE CONSULTATION`
- Secondary CTA: `HEAR OUR WORK`
- Review eyebrow: `BUILT ON TRUST`
- Current review heading: `IN THEIR OWN WORDS.`
- Approved alternate review heading: `WHY ARTISTS COME BACK.`

### Approved phrases for other pages

- `COME WITH AN IDEA. LEAVE WITH A RECORD.`
- `CAPTURE IT RIGHT.`
- `FROM FIRST TAKE TO FINAL MASTER.`
- `YOUR VISION. OUR CRAFT.`

Use these across different pages or section openings; do not stack them all on the homepage.

### Copy discipline

- Lead with short, memorable statements.
- Let imagery, music samples, and real reviews establish authenticity.
- Remove generic marketing filler.
- Service buttons should be labels only: Recording, Mixing, Mastering, Production.
- Do not add explanatory subtext beneath service or feature buttons unless a later content decision explicitly requires it.

### Testimonial integrity

The mockup names and quotations are visual placeholders unless separately verified as real Checkmark Audio testimonials. Before publishing:

- Replace them with approved customer quotations.
- Confirm names, roles, spelling, and permission to publish.
- Do not invent reviews, ratings, or client identities.

## 8. Imagery direction

### Use

- Real Checkmark Audio studio photography whenever available
- Singers and musicians actively creating
- Close or medium views that make the artist the clear subject
- Professional microphones, headphones, consoles, instruments, and live-room details
- Natural concentration, performance, collaboration, and emotion
- Diverse artists shown with dignity and authenticity
- Warm cinematic grading that matches the approved palette

### Avoid

- Empty luxury interiors as the main story
- Engineers' backs dominating the hero
- Generic stock-photo musicians
- Overly polished AI skin, distorted equipment, or impossible microphone setups
- Crowded montages
- Colorful lighting that introduces blue, purple, green, or neon competition
- Images that make the studio feel exclusive, intimidating, or impersonal

## 9. Components

### Primary button

- Solid champagne-gold fill
- Near-black uppercase condensed label
- Subtle tonal texture or gentle gold variation is acceptable
- Minimal corner radius; refined rather than pill-shaped
- Clear hover: slightly brighter champagne, small lift, or subtle sheen

### Secondary button

- Black or transparent fill
- Bright-champagne border and text sampled from the booking-button family
- Tiny red arrow may be used as the micro-accent
- Must not turn saturated yellow

### Review panel

- Warm cream field with very subtle paper-like texture
- Thin champagne rules
- Near-black quote text
- No heavy drop shadow, glassmorphism, or floating card clutter

### Icons

- Fine-line gold icons
- Consistent stroke width and optical size
- No filled cartoon icons

## 10. Motion and interaction guidance

- Keep motion restrained and cinematic.
- Use slow image reveals, subtle opacity transitions, or gentle vertical movement.
- Buttons may lift 1–2 px and brighten slightly on hover.
- Review transitions, if used, should not hide all three reviews on desktop.
- Respect `prefers-reduced-motion`.
- Never use bouncing CTAs, aggressive parallax, sparkling gold animation, or autoplay audio.

## 11. Responsive behavior

### Desktop

- Maintain the wide split hero and three equal review columns.
- Keep the large brand title dominant without covering the singer.

### Tablet

- Reduce title scale while preserving the two-line lockup.
- Keep singer and microphone visible.
- Reviews may remain three compact columns or become a horizontally scrollable group.

### Mobile

- Stack brand copy, actions, and artist image deliberately.
- Keep `CHECKMARK AUDIO` large but avoid awkward clipping.
- Stack review columns vertically; preserve five stars on each.
- Feature row becomes a two-column grid or single compact list.
- Do not restore descriptive subtext to fill space.

## 12. Accessibility and production requirements

- Maintain WCAG AA contrast for navigation, body copy, buttons, and reviews.
- Provide descriptive alt text for studio and artist images.
- Keep keyboard focus clearly visible using champagne or cream outlines.
- Never communicate state through red alone.
- Use semantic headings and real text rather than baking final copy into images.
- Optimize hero imagery with responsive formats and art direction.
- Do not autoplay music; provide explicit play controls and visible track information.

## 13. Explicit keep / omit checklist

### Keep

- Canonical logo placement using only `MEDIA/IMAGES/checkmark-audio-logo-official-white-transparent.png`, `checkmark-audio-logo-official-black-transparent.png`, or `checkmark-audio-logo-official-gold-gradient-transparent.png`; never use or trace the generated mockup logo or `CMA_Logo_Black.png`
- Oversized `CHECKMARK AUDIO` as the largest text
- High-contrast editorial serif title
- Expressive italic tagline
- Singer-focused cinematic hero
- Solid champagne-gold booking buttons
- Tiny red punctuation and arrow accents
- Warm cream review panel immediately below the hero
- Three equal photo-free reviews
- Five stars on each individual review
- Minimal feature row with four icons and titles
- Short copy and generous negative space

### Omit

- Reviewer portraits in the current direction
- Decorative five-star row under the review title
- Descriptive subtext under feature titles
- Descriptive subtext under Recording, Mixing, Mastering, or Production controls
- Red button fills
- Bright lemon-yellow gold
- Large red areas
- Cursive display fonts
- Generic filler paragraphs
- Busy service-card grids above social proof
- Excessive gradients, glows, shadows, and glass effects
- Invented testimonials in production

## 14. Reusable master prompt for another AI

Copy and customize the following prompt when asking an AI to reproduce or extend the design:

```text
Create a polished, production-ready Checkmark Audio website based on the supplied primary reference image and this design guide.

Brand goal:
A high-end recording studio with editorial polish, cinematic warmth, visible craft, and authentic community credibility. Premium but human; luxurious but not generic; community-forward but not busy.

Locked hero:
- Deep black wide hero with warm cinematic studio lighting.
- Official Checkmark Audio logo at upper left, but only when a separately supplied logo file has been explicitly approved. The logo visible in generated mockups is incorrect and must not be used, traced, or recreated. If no approved logo is supplied, use a text-only CHECKMARK AUDIO placeholder.
- Navigation across the top and a solid champagne-gold “BOOK A FREE CONSULTATION” button at upper right.
- Huge two-line “CHECKMARK AUDIO” on the left in a high-contrast modern editorial Roman serif. It must be the largest text.
- Under it, “YOUR SOUND, FULLY REALIZED.” in an expressive italic Roman serif, not cursive, with a tiny red final period.
- Solid champagne-gold primary booking button and black/transparent “HEAR OUR WORK” secondary button with bright-champagne outline and a tiny red arrow.
- On the right, an authentic singer actively performing into a professional condenser microphone while wearing headphones.
- Brighten warm practical lights, singer rim light, face, microphone hardware, and background studio detail while preserving deep blacks and nighttime mood.

Locked social proof:
- Place social proof immediately below the hero in one warm-cream panel.
- Red eyebrow: “BUILT ON TRUST”.
- Heading: “IN THEIR OWN WORDS.”
- Do not add a decorative star row beneath the heading.
- Display exactly three equal-width, photo-free review columns.
- Each review contains exactly five champagne-gold stars, one concise approved quote in a warm expressive editorial serif, a thin champagne rule, reviewer name, and role.
- Do not invent testimonials; use verified supplied content or clearly labeled placeholders.

Locked feature row:
- Four fine-line gold icons with titles only: WORLD-CLASS EQUIPMENT, EXPERIENCED ENGINEERS, CREATIVE ENVIRONMENT, ARTIST COMMUNITY.
- No descriptive text beneath these titles.

Palette:
- Deep studio black, soft black, warm cream, muted champagne gold, brighter champagne for thin accents, and tiny red micro-accents.
- Gold must never become lemon yellow, neon, or orange.
- Red is limited to tiny punctuation, arrow, or eyebrow details; never use it as a large button fill.

Typography:
- Editorial high-contrast Roman serif for the brand title.
- Graceful italic Roman serif for the tagline.
- Tall condensed uppercase sans serif for navigation, buttons, labels, names, and feature titles.
- Warm editorial serif for quotations.
- No literal cursive, generic Times styling, or one-font-for-everything treatment.

Copy discipline:
- Use minimal copy and short statements.
- Do not add generic marketing paragraphs.
- Do not add descriptive subtext under service buttons or feature titles.

Avoid:
Generic luxury-real-estate styling, stock-photo energy, reviewer portraits, crowded collages, glassmorphism, excessive gradients or sparkles, dim crushed blacks, washed-out gray lighting, large red areas, bright yellow gold, invented reviews, and autoplay audio.

Preserve the supplied reference's proportions, visual hierarchy, palette character, and spacing unless the requested task explicitly changes one of those items.
```

## 15. AI output acceptance checklist

Reject or revise an AI result if any answer is “no”:

- Is `CHECKMARK AUDIO` the largest text?
- Does the title use refined champagne gold rather than cream or bright yellow?
- Is the singer the clear photographic subject?
- Are the studio lights warm and visible without washing out the black background?
- Are both booking actions gold rather than red?
- Is red restricted to micro-accents?
- Is social proof immediately below the hero?
- Are the three reviews equal-width and photo-free?
- Does each review have exactly five stars?
- Is there no extra star row beneath the review heading?
- Is the quote type warmer and more expressive than the navigation type?
- Are all feature and service descriptions omitted where specified?
- Does the page feel premium, warm, authentic, and uncluttered?
- Are all published reviews verified?
