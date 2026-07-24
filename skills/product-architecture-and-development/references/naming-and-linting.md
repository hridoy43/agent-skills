# Naming and linting

Use repository conventions when healthy. Otherwise apply these defaults.

## TypeScript and React naming

- Product components: PascalCase filename and matching exported component name.
- Major component directory: PascalCase, with public composition in `index.tsx`.
- Colocated component types: `types.ts`.
- Feature/shared types: domain names inside `types/`, such as `invoice.ts` or `pagination.ts`.
- Hooks: React convention, such as `useInvoice.ts`.
- Non-component modules: kebab-case with role suffixes where the boundary matters: `countries.data.ts`, `create-invoice.action.ts`, `invoice.service.ts`, `invoice.api.ts`, and `invoice.schema.ts`.
- Next.js reserved files keep framework names: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, and `route.ts`.
- Do not require redundant `.types.ts` or `.utility.ts` suffixes. Keep shared `cn.ts` at the configured utility location.

## Ecosystem linting

Every project uses maintained, ecosystem-specific linting and formatting. Do not assume Airbnb rules fit every repository; add compatible rules deliberately.

For Next.js, inspect the installed version and official documentation. Current projects should use the ESLint CLI with supported `eslint-config-next` configuration, usually `core-web-vitals` plus TypeScript rules. Do not rely on legacy `next lint` behavior when the installed Next.js version has removed it.

For other languages, use the project's maintained standard toolchain, such as Ruff for Python, `golangci-lint` for Go, or RuboCop for Ruby. Lint, format, typecheck where applicable, tests, and production build are release gates.
