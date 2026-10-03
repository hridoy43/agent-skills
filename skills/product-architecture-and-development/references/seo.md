# SEO without content loss

Simplify presentation and phrasing without deleting meaning, evidence, or search intent. Verify framework behavior against current docs; checklists don't guarantee rankings.

- Each public page: one topic and `h1`, a visible introductory promise, logical descriptive headings, explicit entities, capabilities, and evidence, descriptive internal links, unique title, description, canonical, and social metadata; structured data only when it matches visible content.
- The public URL is a contract separate from the filesystem router: lowercase, stable, intent-aligned paths; one preferred URL per page (normalize case, trailing slash, params, locale prefix, aliases); canonicals from the normalized URL; redirect legacy URLs; readable stable slugs, never DB IDs. Record URL changes and redirects before implementing.
- Primary content is in server-rendered or static HTML—never only in canvas, SVG paths, Lottie, video, hover states, or client-only accordions.
- Remove duplicate claims, not distinct information; replace jargon; never fabricate testimonials, metrics, locations, or FAQs.
- Check status codes, canonicals, robots and sitemap, headings, link labels, alt text, image dimensions, performance, mobile layout, duplicate metadata, and that crawlers get the same HTML, CSS, JS, and images as users. Inspect deployed URLs with the platform's search diagnostics; measure impact over time.
