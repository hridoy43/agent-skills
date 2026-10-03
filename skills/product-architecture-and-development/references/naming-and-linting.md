# Naming and linting

Owner of naming rules; other references link here. Healthy repository conventions win.

## TypeScript and React

React-only rules; other ecosystems use their own standard naming.

- Components: PascalCase file matching the export, no `.component` suffix. Standalone = single file (`CustomerForm.tsx`).
- Major composition only (at least two of: shared local state, private subcomponents, children-shared types): `CustomerForm/index.tsx` plus parts and an optional `types.ts`. One component plus one type or helper is a single file.
- Types: component-only types stay in the component file; children-shared types in that directory's `types.ts`; feature or shared types in `types/` with domain names (`invoice.ts`). No `.types.ts` or `.utility.ts` suffixes.
- Hooks: `useInvoice.ts`.
- Other modules: camelCase with a role suffix where the boundary matters: `countries.data.ts`, `createInvoice.action.ts`, `invoice.service.ts`, `invoice.api.ts`, `customerForm.schema.ts`.
- Public surfaces: category indexes (`components/index.ts`, `actions/index.ts`) or a major component's `index.tsx`; never `features/<feature>/index.ts`.
- Next.js reserved files keep framework names (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`). Next.js 16+ uses `proxy.ts`; `middleware.ts` only on older installed versions.
- `cn` helper: `src/utils/cn.ts`.

## Linting

Use the framework's official or recommended lint and format integration; one formatter and one lint config per language; plugins only for framework, correctness, or accessibility rules; no rules that fight the formatter. Better-T-Stack's generated toolchain (Biome, Oxlint, Ultracite) is fine when compatible with editor, CI, and tests—don't drop official framework rules for speed.

- Next.js: ESLint CLI with `eslint-config-next` (`core-web-vitals` + TypeScript); `next lint` no longer exists in current versions.
- Python: Ruff. Go: `gofmt` + `golangci-lint`. Ruby: RuboCop.

Lint, format check, typecheck, tests, and production build are release gates.
