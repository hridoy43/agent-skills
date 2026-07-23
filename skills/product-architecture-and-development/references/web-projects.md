# Web projects

## Rendering

- Render public, search-critical content on the server or at build time.
- Use client components only for real browser state or interaction.
- Stream or defer secondary data without hiding the page's main meaning.
- Keep URLs stable, semantic, and canonical.

## Route ownership

Routes own metadata, layout composition, route-level loading/error boundaries, and feature assembly. Features own business behavior and reusable views. Do not place a second component library inside `app/`.

## Styling

- Tailwind utilities live with JSX.
- Components consume semantic Tailwind/theme utilities; avoid repeated literal color values in JSX.
- Theme tokens, fonts, resets, shared typography, shared keyframes, and third-party overrides live in `src/styles/`.
- Keep code-based visual configuration there too: `fonts.ts`, `theme.ts`, typed tokens, style-system helpers, and framework theme adapters must not live in route files or the general `config/` directory. Reserve `config/` for runtime, environment, integration, and business settings.
- CSS Modules are acceptable for component-local selectors that Tailwind cannot express clearly.
- Use shadcn/ui for larger systems requiring accessible, owned primitives; do not import its demo styling uncritically.
- For substantial reusable components in a shadcn-compatible project, inspect the official Registry Directory before creating a bespoke implementation. Review any third-party registry source before installation; never assume directory inclusion is a security or quality endorsement.
- Use one primary component foundation. Isolate any secondary library to a documented gap and map it through the same semantic theme rather than mixing competing primitive systems across the app.

## Performance

- Optimize the actual largest content element, not arbitrary assets.
- Reserve media dimensions to prevent layout shifts.
- Prefer platform fonts or self-hosted/subset fonts with appropriate display behavior.
- Lazy-load non-critical interactive or media-heavy sections.
- Keep animation on transform/opacity where possible.

## Accessibility

Use semantic landmarks and heading order, keyboard-accessible controls, visible focus, sufficient contrast, accessible names, reduced motion, and live-region behavior only where needed.
