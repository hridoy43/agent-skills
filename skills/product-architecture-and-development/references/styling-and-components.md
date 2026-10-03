# Styling and components

## Design-system contract

Before feature UI, define the smallest coherent system: semantic color roles, type and spacing scales, content widths and breakpoints, radii and elevation, focus and disabled states, motion with reduced-motion behavior, and primitive vs composite ownership. Add docs, visual tests, and versioning only when team size justifies them. New library or registry code adopts project tokens, accessibility rules, and API patterns; no template becomes a parallel theme.

## Tailwind ownership

Classes live in the component. Native apps use their platform styling unless a Tailwind binding (Uniwind or NativeWind) was chosen. Global CSS only for: reset/base, tokens, font faces and type primitives, keyframes reused twice, uncolocatable third-party overrides, or a documented pattern with two real component consumers (re-exports, tests, and text matches don't count). Never move a long one-off class string to global CSS—split the component or use a local variant helper.

A repeated utility with one semantic role becomes a named theme token, not a global class (a token carries a role; a class carries a value).

## Scales and arbitrary values

Use the framework scale for every visual property. When it can't express a stable brand role, add a semantic token with a named utility (`text-display-hero`, `max-w-reading`, `rounded-card`, `shadow-dialog`, `duration-ui`, `ease-brand`). An arbitrary value (`text-[1.07rem]`) is allowed only for a measured one-off kept beside its component, with a comment when not obvious—an embed size, screenshot crop, canvas coordinate, or compatibility workaround. Promote repeats during review (`scripts/audit-global-styles.mjs`).

## Theme

- Colors: background, surface, text, muted, border, primary, secondary, accent, success, warning, destructive, focus. Map typography, spacing, shape, and motion tokens just as deliberately.
- Tailwind/shadcn: CSS custom properties exposed as theme utilities (`bg-background`, `text-muted-foreground`); configure shadcn's variables, not ad hoc hex. Native: a typed theme with provider/hook.
- No raw hex/RGB/HSL/OKLCH in components when a token fits; documented exceptions: third-party brand colors, screenshots, data-viz scales.
- Components consume roles so a future theme needs no rewrite; verify contrast in every shipped theme.
- Files: `src/styles/{globals.css, theme.css, theme.ts, typography.css, motion.css, fonts.ts}`; the root layout imports `src/styles/globals.css`. Font loaders, typed tokens, and library theme adapters live here, never in `app/` or `config/`.
- Tailwind 4 migrations: import tokens before base and primitives; replace an old unlayered selector in the same slice that adds its utilities.

## Components

Primitives → small composites → feature components → sections/screens; don't enforce atomic directory names. Shared only when domain-neutral, two real consumers, stable API; similar-looking feature UI may stay separate. Directory form only for major compositions:

```text
FeatureCard/
  index.tsx              # composes; the only public entry
  FeatureCardMedia.tsx
  FeatureCardActions.tsx
  types.ts               # only types shared by these children
  FeatureCard.test.tsx
```

## Icons

Keep a healthy existing icon library. With none chosen, propose Lucide (or the ecosystem standard) and ask before installing. Direct imports; standardize size, stroke, color, labels, and decorative `aria-hidden`. Custom SVG only for brand or genuinely missing icons, stored as asset files—library-rendered SVG is fine, hand-written or duplicated SVG markup in code is not.
