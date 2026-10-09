# What each page gets

All blocks include a page entity (`@id` = page URL + `#webpage`) with `isPartOf` pointing to `/#website` and `about` and `publisher` pointing to `/#business`. Each also has a **BreadcrumbList**. The business NAP is never repeated; it lives only on the homepage.

| Page | Schema | Why / source |
|---|---|---|
| services.html | WebPage, OfferCatalog, 7 Services | The 7 services from the page's service selector (Consultation: free; Recording: from $50/hr; Production and Mixing + Mastering: from $65/hr; Live, Podcast/VO, Artist Media: no price, because the page says quote or consultation). |
| recording.html | WebPage, OfferCatalog, 3 Services | The page's 3 recording types. Vocal from $50/hr, band from $75/hr, and podcast/VO with no price. Breadcrumb: Home > Services > Recording. |
| live-recordings.html | WebPage, Service "Checkmark Live" | Project-based, custom quote, so no price. No Event schema, because the page lists no dated events. |
| studio-a.html | WebPage, Place (room inside the business), Service | Room description and best uses from the page. Band recording from $75/hr (from the page's meta description). Includes 3 page photos. |
| studio-b.html | WebPage, Place, Service | Same structure as Studio A. Vocal recording from $50/hr. Includes 3 page photos. |
| featured-artists.html | CollectionPage, ItemList of 14 MusicGroup | Only the 14 artist names on the page, each with their photo. No links, genres, or other claims added. |
| team.html | AboutPage, ItemList, 3 Person | Bridget Reinhard, Gavin Hammond, and Tony Rivera, with titles, bios (from the profile popups), and portraits. Each is linked to the business with `worksFor`. |
| community.html | CollectionPage, ImageGallery | "Checkmark Tonight" photo gallery (6 captioned photos). Linked to the Checkmark Live service. No events, because none are listed. |
| faq.html | FAQPage (replaces the existing block), Breadcrumb | Same 6 Q&A pairs, checked word for word against the visible page. |

Every image URL in these snippets was checked against the live site and returned HTTP 200.
