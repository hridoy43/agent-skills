# Styling and components

## Proportional design-system contract

Define the smallest coherent design system before feature UI. At minimum, establish semantic color roles, typography and spacing scales, content widths and responsive rules, radii and elevation, focus and disabled states, motion and reduced-motion behavior, and ownership for primitives and composites. Add documentation, visual testing, package governance, and cross-app versioning only when the product size and team structure justify them.

The design system is a product boundary, not a collection of attractive components. New library or registry code must adopt the project's semantic tokens, accessibility rules, state conventions, and component API patterns. Do not let a template, block, or generated component become an undeclared parallel theme.

## Tailwind ownership rule

For web and other CSS-capable surfaces, write Tailwind classes in the component by default. Native projects use their chosen platform styling system unless NativeWind/Tailwind was explicitly selected. A global class is allowed only for:

- reset/base behavior;
- theme/design tokens;
- font faces and shared typography primitives;
- stable motion/keyframe primitives reused in two or more places;
- third-party overrides that cannot be colocated;
- a stable pattern with at least two real component consumers.

A real consumer is a distinct runtime component that intentionally relies on the pattern's semantic contract. Re-exports, tests, type files, and textual matches do not count. “Stable” means the pattern's purpose and API are named, documented, and unlikely to change with one feature.

Do not move a long one-off class string into global CSS. Instead split the component, use a local variant helper, or keep it visible where it is used.

## Scale ownership and arbitrary values

Use the styling framework's named scale before introducing a custom value. This applies to every visual property, including color, font family, font size, font weight, line height, letter spacing, spacing, dimensions, content width, breakpoints, radius, border width, shadow, opacity, transition duration, easing, transforms, and animation.

When the standard scale cannot express a stable brand or product role, add a semantic token to the central theme and expose a named utility such as `text-display-hero`, `max-w-reading`, `rounded-card`, `shadow-dialog`, `duration-ui`, or `ease-brand`. Do not repeat arbitrary classes such as `text-[1.07rem]`, `tracking-[-0.037em]`, `duration-[175ms]`, or literal color utilities across components.

An arbitrary value is acceptable only when all of these are true:

- it represents a measured one-off rather than a reusable design decision;
- the framework scale or current theme cannot describe it without misleading semantics;
- it is kept beside the owning component;
- a short code comment or architecture note explains the constraint when it is not self-evident.

Typical exceptions include an exact third-party embed dimension, a product-screenshot crop, a canvas coordinate, or a compatibility workaround. Audit repeated arbitrary values during review and promote stable repetitions into theme tokens.

## Theme configuration

Use semantic tokens from the first interface:

- colors: background, surface, text, muted text, border, primary, secondary, accent, success, warning, destructive, focus;
- typography: families, weights, sizes, leading, tracking;
- spacing and layout: spacing scale, content widths, breakpoints where configurable;
- shape and depth: radii, borders, shadows;
- motion: durations, easing, and reduced-motion policy.

For Tailwind, expose tokens through CSS custom properties and the Tailwind theme so components use classes such as `bg-background`, `text-muted-foreground`, and `border-border`. For shadcn/ui, configure its semantic variables and variants rather than replacing them with ad hoc hex values. For React Native/desktop-native UI, provide the equivalent typed semantic theme and hook/provider.

Do not scatter hex, RGB, HSL, or OKLCH literals through components when a semantic token fits. Create a new semantic token only when it represents a stable design role, not merely to rename a one-off value. Literal third-party brand colors, product screenshots/previews, and intentional data-visualization scales are allowed when documented; centralize them when reused.

Map typography, layout, and motion tokens into the framework just as deliberately as colors. Components should consume named utilities rather than reaching through Tailwind with raw CSS-variable arbitrary syntax when a semantic class can be exposed.

Support light/dark or additional themes only when required, but make component APIs consume semantic roles so a future theme does not require component rewrites. Verify contrast in every shipped theme.

## Global style layout

```text
styles/
  globals.css       # imports, reset, base element behavior
  theme.css         # color, spacing, radius, shadow tokens
  theme.ts          # typed/framework presentation configuration when needed
  typography.css    # font faces and shared type primitives
  motion.css        # shared keyframes and reduced-motion policy
  fonts.ts          # framework font loading when applicable
```

Use CSS custom properties as the bridge between theme tokens and Tailwind/shadcn.

Keep every code-based presentation concern in this boundary as well: font loaders, theme metadata, typed tokens, color-scheme values, component-library adapters, and style helpers. Import them directly from `styles/`; do not put them in `app/`, route files, or a general `config/` folder. Runtime/environment configuration and business settings remain in `config/`. In a monorepo, apply the same rule inside the owning app or design-system package.

Preserve cascade order during migration. In Tailwind 4, import theme/tokens before base and shared primitives, keep third-party overrides deliberate, and replace an old unlayered selector in the same slice that adds its utilities/module rule so the old cascade cannot mask missing styles.

## Near-atomic composition

- Primitives: button, input, surface, text link.
- Small composites: field, badge group, media frame.
- Feature components: product card, pricing selector, onboarding step.
- Sections/screens: compose features and content.

Do not enforce atomic labels or directories when they add navigation cost. Boundaries should reveal responsibility.

## Component directory

```text
feature-card/
  feature-card.tsx
  feature-card-media.tsx
  feature-card-actions.tsx
  feature-card.types.ts
  feature-card.test.tsx
  index.ts
```

The root file composes. Parts own focused markup. Types remain close. `index.ts` exports only what external consumers need.

## Shared or feature-local?

Move a component to shared only when it is domain-neutral, has two real consumers, and has a stable API. Similar-looking feature UI may remain separate when semantics or change cadence differ.

## Icons

Use Lucide where available. Import icons directly for tree shaking. Standardize size, stroke, color, accessible labeling, and decorative `aria-hidden`; avoid maintaining bespoke SVGs for ordinary interface metaphors.
