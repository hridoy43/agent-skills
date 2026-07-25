---
name: product-architecture-and-development
description: Use when starting, scaffolding, auditing, refactoring, or implementing a web, mobile, desktop, backend, or multi-app product; provides an interview-first architecture, current ecosystem tooling, ownership-based structure, and resumable implementation workflow.
---

# Product Architecture and Development

Use this skill as the project’s architecture controller. It works from a project idea or an existing repository, preserves explicit user decisions, and loads only the detailed reference needed for the current decision or task.

## Operating contract

1. Interview the user about unresolved choices that could change product scope, platform, deployment, data/auth, integrations, design, localization, privacy, analytics, or tooling. Present inferred defaults and an MVP boundary; wait for confirmation before implementation.
2. For greenfield work, apply the confirmed architecture defaults. For existing work, inspect first and preserve healthy conventions. Never silently rename, move, delete, or reorganize an existing project.
3. If the user requests architectural change, compare current and target structures, list material migrations, ask for confirmation, then execute approved migrations incrementally.
4. User preferences and platform constraints outrank defaults. “Enforce” means applying confirmed or approved rules, never blind rewriting.
5. Keep a decision ledger: `confirmed`, `inferred`, `unknown/configurable`, `prohibited`, and `deferred`.

## First routing decision

Read only the applicable references:

- Project brief: [project-initiation.md](references/project-initiation.md)
- Boundaries: [module-boundaries.md](references/module-boundaries.md) and [architecture-core.md](references/architecture-core.md)
- Web: [web-projects.md](references/web-projects.md)
- Mobile: [mobile-projects.md](references/mobile-projects.md)
- Desktop: [desktop-projects.md](references/desktop-projects.md)
- Backend: [backend-projects.md](references/backend-projects.md)
- Stack choice: [stack-selection.md](references/stack-selection.md)
- Styling/UI: [styling-and-components.md](references/styling-and-components.md) and [design-system-and-ui-libraries.md](references/design-system-and-ui-libraries.md)
- Data/API: [api-data-state.md](references/api-data-state.md)
- Forms/validation: [forms-and-validation.md](references/forms-and-validation.md)
- Assets/styles: [assets-and-styles.md](references/assets-and-styles.md)
- Validation: [quality-gates.md](references/quality-gates.md)

Load specialist skills only when the task needs them. Prefer official ecosystem guidance; do not install a companion skill or package without approval. Use the companion check only when the task benefits from it.

## Architecture defaults

- TypeScript-first where practical; use the ecosystem’s standard naming and tooling.
- Keep routes/screens thin. Features own domain UI, actions, API functions, hooks, schemas, services, types, data, utilities, and tests.
- Shared code must be domain-neutral and have at least two real consumers.
- Use explicit category directories. Prevent feature-root implementation-file sprawl.
- React product components use matching PascalCase names and `PascalCase/index.tsx`. Never create `features/<feature>/index.ts`; public surfaces belong in owned category directories such as `actions/`, `components/`, `helpers/`, `schemas/`, or `services/`, or inside a major component directory.
- Use semantic suffixes such as `.data.ts`, `.action.ts`, `.service.ts`, `.api.ts`, and `.schema.ts` where useful. In TypeScript React projects, prefer camelCase names such as `createCustomer.action.ts` and colocated `types.ts`.
- Keep library-owned primitives in library-specific directories. Extend them with project-owned wrappers; do not modify base components for product behavior.
- For supported ecosystems, install and use Lucide by default when the user and existing project do not specify another icon system. Prefer direct imports; create custom SVG assets only for brand, product-specific, or genuinely unavailable icons. Library-generated SVG output is allowed; manually authored or duplicated SVG markup is not.
- Keep design tokens and code-based style configuration in the style-owned directory. Keep framework/build configuration at the repository root unless the framework explicitly requires another location.
- Keep assets in the framework-appropriate global or package-owned asset location. Never duplicate SVG source or write raw SVG markup in application code when an asset/import mechanism is available.
- Use the framework/ecosystem-standard transport client. Use Axios only for REST requirements, existing conventions, or explicit preference; never wrap a typed RPC/generated client redundantly.
- Validate every untrusted form submission at the server or trusted boundary; add client validation for immediate feedback when the platform supports it. Preserve the user’s validator preference and existing convention. For TypeScript, use Zod only as the fallback default when no framework-standard validator applies; choose another maintained validator when compatibility, bundle size, performance, generated contracts, or ecosystem conventions justify it. Keep schemas feature-owned, share them between form and server action when safe, normalize field/form errors, and test invalid, boundary, and cross-field cases.
- Use official or officially recommended linting/formatting when available. Otherwise use a maintained compatible tool. Use one formatter and lint path per language.
- Prefer the existing package manager. For new JS/TS projects prefer pnpm; use Bun only with verified compatibility or an existing Bun convention.

## Greenfield stack selection

When no stack is specified, choose a compatible current Better-T-Stack configuration for supported web, server, Expo/React Native, or Tauri projects. Ask only when materially different choices require the user’s decision. For unsupported ecosystems, use the official current stable generator. Never use stale, beta, or canary scaffolds without approval. Verify generated versions and conventions immediately.

## Existing-project workflow

Run:

```bash
node scripts/inspect-project.mjs /absolute/path/to/project
```

Then create a persistent migration plan and execute one bounded task at a time. Read [migration-workflow.md](references/migration-workflow.md). Do not attempt a whole-project rewrite in one context window.

Each task must define its files in scope, exclusions, required changes, validation, and completion condition. Limit tasks to one architectural concern and roughly three to eight files. After editing, run the task’s checks, record the result, and resume from the first incomplete task after context loss.

## Verification contract

After each task, run the smallest relevant checks. Before handoff, run structural verification, lint, typecheck, tests, build, and relevant security/accessibility/SEO checks. Classify every exception as fixed, accepted with a reason, or deferred with an owner and follow-up. Use [quality-gates.md](references/quality-gates.md).

## Scope

This skill owns architecture, boundaries, structure, tooling choices, implementation slices, and verification. Task-specific skills own their specialist technique after this skill routes to them. Do not load every reference or companion skill when one targeted reference is sufficient.
