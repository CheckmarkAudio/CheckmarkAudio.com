# Structured data (JSON-LD) for Checkmark Audio inner pages

Each `*.html.snippet` file has one ready-to-paste `<script type="application/ld+json">` block for the page with the same name.

## How to paste

1. Open the page in the repo (for example `studio-a.html`).
2. Find `</head>`.
3. Paste the whole contents of the matching snippet file (for example `studio-a.html.snippet`) on the line just above `</head>`.
4. Save, commit, and deploy.

You don't need to edit anything. All URLs, names, prices, and the address come from the live site.

## Rules

- **One block per page.** Don't paste a snippet into more than one page.
- **Don't touch `index.html`.** The homepage already has the WebSite and ProfessionalService (business) block. These snippets point to it by ID (`https://www.checkmarkaudio.com/#website` and `#business`). They don't repeat the name, phone, or address, so all the business info stays in one place.
- **FAQ is a replacement, not an addition.** `faq.html` already has a FAQPage block in its `<head>`. Delete that existing `<script type="application/ld+json"> ... </script>` and paste `faq.html.snippet` in its place. It has the same 6 questions and answers, word for word, plus the page and breadcrumb info. Having two FAQPage blocks on one page would be a duplicate.
- **Keep it in sync.** If you change a price, a service, a team member, an artist, or an FAQ answer on a page, change it in that page's block too. Google penalizes structured data that doesn't match what's on the page.

## After deploying

1. Test a few URLs at https://search.google.com/test/rich-results and https://validator.schema.org/.
2. In Search Console, use URL Inspection, then Request Indexing for the pages you changed.

Note: Google now shows FAQ rich results only for government and health sites, so the FAQ block won't create dropdowns in Google results. It still helps Bing and AI search tools understand the page, and it's worth keeping.
