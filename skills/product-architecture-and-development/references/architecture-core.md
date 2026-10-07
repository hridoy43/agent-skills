# Architecture core

The trees below are the TypeScript web mapping; other stacks apply the ownership rules in their own conventions. Create only directories that have a current file and owner. Naming: [naming-and-linting.md](naming-and-linting.md). Ownership rules: [module-boundaries.md](module-boundaries.md).

## Single app

```text
src/
  app/                  # routes, layouts, providers, composition
  features/<feature>/
    actions/  api/  components/  data/  helpers/  hooks/  schemas/  services/  types/
  components/
    brand/              # logos, identity
    layout/             # shell, nav, header, footer, containers
    shadcn/             # library-owned primitives (one dir per adopted library)
    ui/                 # project-owned wrappers and primitives
    icons/  form/
  lib/                  # infrastructure adapters: api, analytics, auth, i18n, security
  locales/              # messages, locale-first
  config/  constants/  data/  hooks/  types/
  utils/
    cn.ts
  styles/               # globals.css, theme.css, theme.ts, typography.css, motion.css, fonts.ts
```

Assets live outside `src/`: root `assets/` for build-time imports, `public/assets/` for URL-served web files ([assets-and-styles.md](assets-and-styles.md)). Start small: a new feature may be one `components/` file plus one API file.

## Multi-app

Only when two or more real deployables share contracts or domain logic:

```text
apps/      web/ native/ desktop/ server/ docs/
packages/  config/ contracts/ api-client/ analytics/ auth/ db/ ui-web/ ui-native/
```

Share contracts, schemas, domain rules, tokens, and tooling—not every presentation component across web and native.

## Extension points and exports

- A feature's category index is its public API: additions are backward-compatible, removals are breaking decisions.
- A new feature category needs the same justification as a new root directory.
- Two features extending one seam: lift it to `features/_shared/`, never reach into each other.
- Callers import a major component through its directory, never its private parts.
- Avoid `export *` chains; they hide ownership, create cycles, and hurt tree shaking.

## Decision records

For a material choice record context, decision, rejected alternatives, consequences, and revisit signal in `docs/architecture/` or the existing ADR location.
