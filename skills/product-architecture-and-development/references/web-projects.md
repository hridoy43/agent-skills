# Web projects

## Rendering and routes

- Server- or build-render public, search-critical content; client components only for real browser state or interaction. Stream secondary data without hiding the page's meaning.
- Routes own metadata, layout, and loading/error boundaries; features own behavior. No second component library inside `app/`.
- Route groups such as `(auth)`, `(public)`, `(dashboard)` clarify boundaries but never replace authorization.
- Next.js 16+: one `proxy.ts` (root or `src/`) for lightweight redirects, rewrites, and header shaping—not data fetching or full authorization. Static redirects go in `next.config.ts`. Check the installed version first.
Naming: [naming-and-linting.md](naming-and-linting.md). Assets: [assets-and-styles.md](assets-and-styles.md). Styling: [styling-and-components.md](styling-and-components.md). Scripts: [third-party-scripts.md](third-party-scripts.md).

## Component libraries

- Inspect `components.json` first; aliases and library directories follow the `SKILL.md` defaults, one directory per adopted source (`components/magicui/`). Project wrappers live in `components/ui/` or the owning feature; never edit library base components for product behavior.
- Charts: [charts.md](charts.md).

## Performance and accessibility

Optimize the actual LCP element, reserve media dimensions, self-host or subset fonts, lazy-load non-critical interactive or media sections, and animate transform/opacity. Use semantic landmarks and heading order, keyboard access, visible focus, contrast, accessible names, reduced motion, and live regions only where needed.
