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

Create only directories that have a current file and owner. A small feature can begin as `components/`, `types.ts`, and one API file, then grow deliberately. Never create `features/<feature>/index.ts`; feature public surfaces belong in owned category directories. Semantic parent directories such as `brand/`, `layout/`, `ui/`, and `icons/` remain visible even when their child component directories use PascalCase.

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

Use a direct PascalCase file when a component is standalone:

```text
components/
  CustomerForm.tsx
```

Use a same-named PascalCase directory only for a major composition with multiple cohesive child files, meaningful local state, or types shared by those children. The directory pattern is reserved for compositions with at least two of: meaningful local state shared across files, a private subcomponent with its own focused markup, or a `types.ts` shared by the children. A directory that contains one component plus one type, or one component plus a single helper, is a single file with extra steps — collapse it. Make `index.tsx` the public primary component so callers import through the directory:

```text
ProductShowcase/
  index.tsx                  # composition and state; public entry point
  ProductSlide.tsx           # coherent private subview
  ProductMedia.tsx
  ProductDots.tsx
  types.ts                  # only types shared by this composition
```

Keep a component-only type inside the component file. Split by responsibility, not line count. Keep a piece or type inline when extracting it would hide rather than clarify behavior.

Import major components through their directory. Do not import private subcomponents outside their owning directory.

Use layout ownership for navigation, headers, footers, shells, containers, sidebars, breadcrumbs, and page-layout components. Use brand ownership for logos and identity components. A component directory may use PascalCase when it represents a component and exposes `index.tsx` or `index.js`; its semantic parent directory remains framework-appropriate and ownership-oriented.

## Extension points

A feature exposes the surface other code consumes through a category public index (`actions/index.ts`, `components/index.ts`, `services/index.ts`, `schemas/index.ts`, `helpers/index.ts`). That index is the feature's extension point: callers compose through it, and a feature can grow an internal helper, a private subcomponent, or an additional endpoint without touching its consumers.

- A new category inside a feature requires the same justification as a new root directory — a real second consumer, a distinct responsibility, or a documented boundary. Ad-hoc categories accumulate.
- When two features must extend through the same seam, lift the seam to `features/_shared/` rather than letting either feature reach into the other.
- A feature's public index is its API surface. Additions are backward-compatible by default; removals are breaking and require an explicit decision.
- Replace a category index with a typed contract (a small interface, a generated client, a schema) only when the surface has crossed the threshold where typed contracts are cheaper than re-export.

## Public exports

Prefer category-level or component-directory public surfaces:

```ts
export { ProductShowcase } from "./ProductShowcase";
export type { ProductShowcaseProps } from "./ProductShowcase/types";
```

Avoid `export *` chains across a large feature: they blur ownership, create cycles, and can harm tree shaking.

## Decision record

For a material choice, record context, decision, alternatives rejected, consequences, and revisit signal. Keep it close to the repository (`docs/architecture/` or an existing ADR location).
