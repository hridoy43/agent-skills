# SEO without content loss

Primary reference: [Google Search Central SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). Verify framework-specific behavior against current platform documentation; do not treat third-party SEO checklists as ranking guarantees.

## Principle

SEO follows useful, accessible, indexable information. Simplify presentation and phrasing without deleting the product meaning, evidence, or search intent users need.

## Page model

Each public page needs:

- one clear primary topic and `h1`;
- a concise introductory promise in visible text;
- descriptive section headings in logical order;
- relevant entities, capabilities, outcomes, and evidence in natural language;
- descriptive internal links;
- unique title, meta description, canonical URL, and social metadata;
- structured data only when it truthfully matches visible content.

## Public URL and router contract

Treat the public URL as a product and SEO contract, separate from the framework's filesystem router. An App Router folder may produce a URL, but route groups, rewrites, aliases, and dynamic segments can change that relationship. Define the preferred public URL explicitly:

- Use descriptive, stable, lowercase paths aligned with user intent (`/services`, `/products/portcue`, `/insights`).
- Keep internal route-group names and implementation folders free to change without changing public URLs.
- Give each indexable page one preferred URL. Normalize casing, trailing slashes, query parameters, locale prefixes, and aliases.
- Generate canonical metadata from the normalized public URL; redirect legacy or duplicate URLs when possible.
- Keep dynamic slugs human-readable and stable. Never expose database identifiers when a meaningful slug is available.
- For localized routes, define canonical and `hreflang` relationships per locale; do not canonicalize every translation to the source page.
- Record URL changes and redirect mappings as part of the route decision, before implementation.

## Rendering

Serve primary content in the initial server-rendered or static HTML. Do not place search-critical copy only in canvas, SVG paths, Lottie JSON, video, hover states, or client-only accordions. When an accordion contains meaningful content, keep it in semantic HTML and ensure it remains discoverable without pointer interaction.

## Content refinement

- Lead with the outcome; move detail into structured supporting text.
- Remove duplicate claims, not distinct information.
- Replace jargon with specific language.
- Use short paragraphs, lists, comparison structures, and meaningful captions.
- Keep product names, platform, audience, capability, and evidence explicit.
- Avoid fabricated testimonials, metrics, locations, or FAQ content.

## Technical checks

Verify crawlable status, canonical consistency, robots/sitemap behavior, status codes, heading structure, link labels, alt text, image dimensions, performance, mobile layout, and duplicate metadata. Preserve redirects when changing URLs.

Also verify that the crawler can access the same meaningful HTML, CSS, JavaScript, and images as a normal user, and inspect representative URLs after deployment with the platform's search diagnostics. Search impact is measured over time; do not promise ranking changes from an isolated checklist item.
