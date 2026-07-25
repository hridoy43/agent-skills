# Architecture core

## Reasoning defaults

- Solve the stated problem before generalizing.
- Make assumptions visible and verify risky ones.
- Prefer a boring, well-supported dependency over custom infrastructure.
- Do not add a service, queue, cache, store, package, or abstraction without a current consumer.
- Choose names that express domain intent.
- Keep public surfaces small and dependencies flowing inward.
- Measure before optimizing; profile before rewriting.
- Refactor only the boundary needed for the next safe change.

## Single-app default

Read [Module boundaries and ownership](module-boundaries.md) before creating or moving `store`, `services`, `api`, `hooks`, `types`, or `utils`. Root directories are shared infrastructure boundaries, not filing cabinets; feature-owned behavior stays inside its feature.

```text
src/
  app/                       # routes, layouts, providers, composition
  features/
    <feature>/
      data/
      api/                   # requests and query options
      actions/               # commands and server actions
      components/
        <MajorComponent>/
          index.tsx          # public primary component
          <Part>.tsx          # private coherent subcomponent
          types.ts            # local component types
      hooks/
      schemas/
      services/              # feature/domain orchestration
      types/
      utils/
  components/
    brand/                  # brand identity components
    layout/                 # shell, navigation, header, footer, container, page layout
    shadcn/                  # shadcn-owned primitives
    magicui/                 # Magic UI-owned components
    ui/                      # project-owned wrappers/primitives
    icons/                   # project-owned reusable icon components
    form/
  lib/
    api/
    analytics/
    auth/
    i18n/                   # locale config/loaders/formatters when in scope
    security/
  locales/                  # locale-first, feature-split messages
  config/
  constants/
  data/
  hooks/
  types/
  utils/
    cn.ts                    # shared Tailwind class composition helper
  styles/
    globals.css
    theme.css
    theme.ts                   # typed/code-based presentation configuration
    typography.css
    motion.css
    fonts.ts
  assets/
    brand/
    images/
    icons/
    illustrations/
    fonts/
```

Create only directories that have a current file and owner. A small feature can begin as `components/`, `types.ts`, and one API file, then grow deliberately. Do not create a feature-root `index.ts` by default. Semantic parent directories such as `brand/`, `layout/`, `ui/`, and `icons/` remain visible even when their child component directories use PascalCase.

## Dependency direction

```text
shared primitives/config/contracts -> features -> app composition
```

- `app` may import features and shared code.
- A feature may import shared code.
- Shared code never imports a feature.
- Features do not reach into another feature's internals. Import the explicit public surface or move truly shared domain behavior to a neutral package.

## Multi-app default

Use only when two or more real deployables share contracts or domain logic.

```text
apps/
  web/
  native/
  desktop/
  server/
  docs/
packages/
  config/
  contracts/
  api-client/
  analytics/
  auth/
  db/
  ui-web/
  ui-native/
```

Share contracts, schemas, domain rules, tokens, and tooling. Do not force web and native to share every presentation component.

## Near-atomic component rule

Use a same-named PascalCase directory for a major component. Make `index.tsx` the public primary component so callers import through the directory:

```text
ProductShowcase/
  index.tsx                  # composition and state; public entry point
  ProductSlide.tsx           # coherent private subview
  ProductMedia.tsx
  ProductDots.tsx
  types.ts
```

Split by responsibility, not line count. Keep a piece inline when extracting it would hide rather than clarify behavior.

Import major components through their directory. Do not import private subcomponents outside their owning directory.

Use layout ownership for navigation, headers, footers, shells, containers, sidebars, breadcrumbs, and page-layout components. Use brand ownership for logos and identity components. A component directory may use PascalCase when it represents a component and exposes `index.tsx` or `index.js`; its semantic parent directory remains framework-appropriate and ownership-oriented.

## Public exports

Prefer category-level or component-directory public surfaces:

```ts
export { ProductShowcase } from "./ProductShowcase";
export type { ProductShowcaseProps } from "./ProductShowcase/types";
```

Avoid `export *` chains across a large feature: they blur ownership, create cycles, and can harm tree shaking.

## Decision record

For a material choice, record context, decision, alternatives rejected, consequences, and revisit signal. Keep it close to the repository (`docs/architecture/` or an existing ADR location).
