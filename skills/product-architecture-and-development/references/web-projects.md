# Web projects

## Rendering and routes

- Server- or build-render public, search-critical content; client components only for real browser state or interaction. Stream secondary data without hiding the page's meaning.
- Routes own metadata, layout, and loading/error boundaries; features own behavior. No second component library inside `app/`.
- Route groups such as `(auth)`, `(public)`, `(dashboard)` clarify boundaries but never replace authorization.
- Next.js 16+: one `proxy.ts` (root or `src/`) for lightweight redirects, rewrites, and header shaping—not data fetching or full authorization. Static redirects go in `next.config.ts`. Check the installed version first.

- Executable scripts load only through the framework's Script component and the `components/scripts/ScriptManager.tsx` registry; raw `<script>` only for JSON-LD ([third-party-scripts.md](third-party-scripts.md)).

Naming: [naming-and-linting.md](naming-and-linting.md). Assets: [assets-and-styles.md](assets-and-styles.md). Styling: [styling-and-components.md](styling-and-components.md).

## Component libraries

- Inspect `components.json` first. Keep custom aliases in an existing project, but replace shadcn defaults: `aliases.utils` → `@/utils/cn` (never `lib/utils.ts`), `aliases.ui` → `@/components/shadcn`.
- Library-owned code: `components/shadcn/`, `components/magicui/`, etc.—create a directory only for a source actually adopted. Project wrappers: `components/ui/` or the owning feature. Don't edit library base components for product behavior.
- Layout pieces in `components/layout/`; brand pieces in `components/brand/`.
- `src/utils/` holds pure helpers; `src/lib/` holds infrastructure. Shared values in `constants/`, runtime config in `config/`, static collections in `data/`.
- Charts: Recharts, Tremor (Tailwind only), Bklit, or the primary foundation's option, chosen by complexity, accessibility, bundle cost, and token fit. Ask before installing any secondary source.

## Performance and accessibility

Optimize the actual LCP element, reserve media dimensions, self-host or subset fonts, lazy-load non-critical interactive or media sections, and animate transform/opacity. Use semantic landmarks and heading order, keyboard access, visible focus, contrast, accessible names, reduced motion, and live regions only where needed.
