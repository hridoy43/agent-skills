# Naming and linting

Use repository conventions when healthy. Otherwise apply these defaults.

## TypeScript and React naming

- Product components: PascalCase filename and matching exported component name, without a `.component` suffix.
- Major component directory: PascalCase, with public composition in `index.tsx`.
- Colocated component types: `types.ts`.
- Feature/shared types: domain names inside `types/`, such as `invoice.ts` or `pagination.ts`.
- Hooks: React convention, such as `useInvoice.ts`.
- Non-component modules: camelCase with role suffixes where the boundary matters: `countries.data.ts`, `createInvoice.action.ts`, `invoice.service.ts`, `invoice.api.ts`, and `customerForm.schema.ts`.
- Next.js reserved files keep framework names: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, and `route.ts`.
- Next.js 16+ uses `proxy.ts`; older installed versions may use legacy `middleware.ts`. Verify the installed version before generating either file.
- Do not require redundant `.types.ts` or `.utility.ts` suffixes. Keep shared `cn.ts` at the configured utility location.

## Ecosystem linting

Every project uses maintained, ecosystem-specific linting and formatting. Prefer the framework or library's official/recommended integration when one exists. Do not assume Airbnb rules fit every repository; add compatible rules deliberately.

Use one primary formatter and one primary lint configuration per language. Add a plugin only when it provides framework/library-specific correctness or accessibility checks. Avoid overlapping formatters, duplicate parser/plugin configurations, and rules that fight the formatter.

Better-T-Stack may provide a faster optimized toolchain. Use it when its generated configuration is compatible with the selected framework, editor, CI, test runner, and deployment. Inspect and preserve the generated scripts/configuration; do not replace official framework rules merely for speed.

For Next.js, inspect the installed version and official documentation. Current projects should use the supported ESLint CLI with `eslint-config-next`, usually `core-web-vitals` plus TypeScript rules. Add TypeScript, React Hooks, and accessibility integrations when compatible. Use the project's selected formatter only when needed; configure the ESLint formatter integration to avoid conflicts. Do not rely on legacy `next lint` behavior when the installed Next.js version has removed it.

For other languages, use the project's maintained official or ecosystem-standard toolchain, such as Ruff for Python, `golangci-lint` plus `gofmt` for Go, or RuboCop plus its formatter for Ruby. Lint, format check, typecheck where applicable, tests, and production build are release gates.
