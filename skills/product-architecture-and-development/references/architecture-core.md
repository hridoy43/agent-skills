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
      api/                   # requests and query options
      components/
        <major-component>/
          <major-component>.tsx
          <part>.tsx
          <major-component>.types.ts
          index.ts
      hooks/
      schemas/
      services/              # feature/domain orchestration
      types/
      utils/
      index.ts               # explicit public exports only
  components/
    ui/                      # domain-neutral primitives
    form/
    layout/
  lib/
    api/
    analytics/
    auth/
    i18n/                   # locale config/loaders/formatters when in scope
    security/
  locales/                  # locale-first, feature-split messages
  config/
  hooks/
  types/
  utils/
  styles/
    globals.css
    theme.css
    theme.ts                   # typed/code-based presentation configuration
    typography.css
    motion.css
    fonts.ts
```

Create only directories that have a current file and owner. A small feature can begin as `components/`, `types.ts`, and one API file, then grow deliberately.

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

Use a same-named directory for a major component:

```text
product-showcase/
  product-showcase.tsx       # composition and state
  product-slide.tsx          # coherent subview
  product-media.tsx
  product-dots.tsx
  product-showcase.types.ts
  index.ts                   # explicit exports
```

Split by responsibility, not line count. Keep a piece inline when extracting it would hide rather than clarify behavior.

## Public exports

Prefer:

```ts
export { ProductShowcase } from "./product-showcase";
export type { ProductShowcaseProps } from "./product-showcase.types";
```

Avoid `export *` chains across a large feature: they blur ownership, create cycles, and can harm tree shaking.

## Decision record

For a material choice, record context, decision, alternatives rejected, consequences, and revisit signal. Keep it close to the repository (`docs/architecture/` or an existing ADR location).
