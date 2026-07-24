# Web projects

## Rendering

- Render public, search-critical content on the server or at build time.
- Use client components only for real browser state or interaction.
- Stream or defer secondary data without hiding the page's main meaning.
- Keep URLs stable, semantic, and canonical.

## Route ownership

Routes own metadata, layout composition, route-level loading/error boundaries, and feature assembly. Features own business behavior and reusable views. Do not place a second component library inside `app/`.

## Version-aware framework conventions

Inspect the installed framework version and use its current official conventions. For Next.js 16 and later, use a single `proxy.ts` at the project root or `src` level; `middleware.ts` is the deprecated convention for older versions. Proxy handles lightweight redirects, rewrites, and request/response shaping, not slow data fetching or full authorization. For simple static redirects, prefer `next.config.ts` redirects.

Use semantic route groups such as `(auth)`, `(protected)`, `(public)`, or `(dashboard)` when they clarify web routing and access boundaries. Route groups do not change the URL and do not replace authorization checks.

## Naming and component-library boundaries

Use PascalCase filenames and matching exported names for product React components. Do not add a `.component` suffix. Major components use a PascalCase directory with `index.tsx` as the public entry point. Use camelCase plus role suffixes for non-component modules: `countries.data.ts`, `createInvoice.action.ts`, `invoice.service.ts`, `invoice.api.ts`, and `customerForm.schema.ts`.

Use `types.ts` for colocated component types. In a feature or shared `types/` directory, use domain names such as `invoice.ts` and `pagination.ts`; do not require a redundant `.types.ts` suffix. Hooks use standard `useInvoice.ts` naming. Keep Next.js reserved files unchanged: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`, and version-appropriate `proxy.ts` or legacy `middleware.ts`.

Before generating shadcn or another component-library code, inspect repository configuration such as `components.json` and preserve its aliases. Keep generated/library-owned components in dedicated directories such as `components/shadcn/` or `components/magicui/`. Put project-owned wrappers in `components/ui/` or the owning feature. Do not modify base library components for product-specific behavior unless documenting a genuine upstream-level fix.

Global pure helpers belong in `src/utils/`; reserve `src/lib/` for infrastructure and adapters. Stable shared values belong in `src/constants/`, runtime or integration configuration in `src/config/`, and static shared collections in `src/data/`.

## Styling

- Tailwind utilities live with JSX.
- Components consume semantic Tailwind/theme utilities; avoid repeated literal color values in JSX.
- Theme tokens, fonts, resets, shared typography, shared keyframes, and third-party overrides live in `src/styles/`.
- Global CSS entry points live in `src/styles/`, not `src/app/`; the root layout imports `src/styles/globals.css`.
- Keep code-based visual configuration there too: `fonts.ts`, `theme.ts`, typed tokens, style-system helpers, and framework theme adapters must not live in route files or the general `config/` directory. Reserve `config/` for runtime, environment, integration, and business settings.
- CSS Modules are acceptable for component-local selectors that Tailwind cannot express clearly.
- Use shadcn/ui for larger systems requiring accessible, owned primitives; do not import its demo styling uncritically.
- For substantial reusable components in a shadcn-compatible project, inspect the official Registry Directory before creating a bespoke implementation. Review any third-party registry source before installation; never assume directory inclusion is a security or quality endorsement.
- Use one primary component foundation. Isolate any secondary library to a documented gap and map it through the same semantic theme rather than mixing competing primitive systems across the app.

## Assets and icons

Keep shared source assets in systematic global directories:

```text
src/assets/
  images/
  icons/          # raw SVG/icon assets
  illustrations/
  fonts/
```

Feature-only assets may live in `features/<feature>/assets/`. Reusable icon components belong in `src/components/icons/`; library-owned components remain in their library directories. Use `public/` only when an asset requires a stable URL or static serving. Components should import source assets through the configured alias rather than duplicating files.

## Performance

- Optimize the actual largest content element, not arbitrary assets.
- Reserve media dimensions to prevent layout shifts.
- Prefer platform fonts or self-hosted/subset fonts with appropriate display behavior.
- Lazy-load non-critical interactive or media-heavy sections.
- Keep animation on transform/opacity where possible.

## Accessibility

Use semantic landmarks and heading order, keyboard-accessible controls, visible focus, sufficient contrast, accessible names, reduced motion, and live-region behavior only where needed.
