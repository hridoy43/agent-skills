---
name: product-architecture-and-development
description: Plans and builds web, mobile, desktop, backend, or multi-app products with interview-led architecture, latest-stable tooling, ownership-based structure, and verified implementation. Use when starting, scaffolding, auditing, refactoring, or implementing a product or codebase.
---

# Product Architecture and Development

## Contract

1. The user's prompt is the source of truth. Interview (one to three grouped questions) only about unresolved choices that materially change the result; never force interviews, plans, or approval gates the user did not ask for.
2. Greenfield: apply the defaults below. Existing project: inspect first, preserve healthy conventions, never silently rename, move, or delete. A requested restructure: compare current vs target, name the risks, then execute.
3. Keep a decision ledger: `confirmed`, `inferred`, `unknown/configurable`, `prohibited`, `deferred`, each with a revisit signal.
4. Named tools are candidates, not mandates. Ask before adding a material dependency. Companion skills are optional: use one if installed, otherwise suggest it; never install silently (`node scripts/check-companions.mjs`).

## Load only the reference the task needs

| Task | Reference |
| --- | --- |
| Brief, interview, build plan | [project-initiation](references/project-initiation.md) |
| Folder tree, ownership, dependency direction | [architecture-core](references/architecture-core.md), [module-boundaries](references/module-boundaries.md) |
| File and component naming, linting | [naming-and-linting](references/naming-and-linting.md) |
| Stack, generator, package choice | [stack-selection](references/stack-selection.md) |
| Web / mobile / desktop / backend | [web](references/web-projects.md), [mobile](references/mobile-projects.md), [desktop](references/desktop-projects.md), [backend](references/backend-projects.md) |
| Mobile headers, tab bars, sheets, safe areas | [mobile-chrome](references/mobile-chrome.md) |
| Tokens, Tailwind, components, icons | [styling-and-components](references/styling-and-components.md) |
| UI library or registry choice | [design-system-and-ui-libraries](references/design-system-and-ui-libraries.md) |
| Motion, Lottie, smooth scroll, 3D, media | [design-motion-media](references/design-motion-media.md) |
| Assets and global styles | [assets-and-styles](references/assets-and-styles.md) |
| API client, cache, state | [api-data-state](references/api-data-state.md) |
| Forms and validation | [forms-and-validation](references/forms-and-validation.md) |
| AI features | [ai-systems](references/ai-systems.md) |
| Analytics / third-party scripts | [analytics](references/analytics.md), [third-party-scripts](references/third-party-scripts.md) |
| Localization / SEO | [localization](references/localization.md), [seo](references/seo.md) |
| Security headers and CSP | [security-and-csp](references/security-and-csp.md) |
| Config, auth, persistence, jobs, CI, launch | [production-foundations](references/production-foundations.md) |
| Product, UX, or behavior decisions | [evidence-led-product-design](references/evidence-led-product-design.md) |
| Multi-task migration | [migration-workflow](references/migration-workflow.md) |
| Optional code graph | [graphify](references/graphify.md) |
| Validation before handoff | [quality-gates](references/quality-gates.md) |

## Defaults

- TypeScript-first; ecosystem-standard naming and tooling; one formatter and one lint config per language.
- Routes and screens stay thin. Features own their UI, actions, API, hooks, schemas, services, types, helpers, data, and tests. Shared code is domain-neutral with two real consumers. A root directory needs a second consumer or a cross-cutting policy.
- React: PascalCase component files without `.component`; standalone components are single files; never `features/<feature>/index.ts`. Details in naming-and-linting.
- Library-owned primitives stay in library directories (`components/shadcn/`); extend through project wrappers.
- `cn` lives only at `src/utils/cn.ts` (`@/utils/cn`). shadcn defaults to `@/lib/utils`: after `shadcn init`, set `components.json` `aliases.utils` to `@/utils/cn` and `aliases.ui` to `@/components/shadcn`, move the helper, delete `lib/utils.ts`, and re-check after every `shadcn add`.
- Tokens and code-based style config live in `src/styles/`; framework/build config stays at the repo root.
- Use the ecosystem-standard transport client; Axios only for REST needs, existing use, or preference; never wrap a typed RPC or generated client.
- Validate untrusted input at the server or trusted boundary.
- Package manager: keep the existing one; new JS/TS projects use pnpm (Bun only when verified or already used).
- **Latest stable only.** Install every new dependency, generator, and CLI at its latest stable release, resolved from the registry at install time (`pnpm add <pkg>@latest`, `pnpm dlx <cli>@latest`, `npm view <pkg> dist-tags.latest`), never from memory. Skip alpha/beta/rc/canary/nightly/preview unless the user asks. If latest breaks a peer, use the newest compatible stable and record why. Existing projects: list outdated packages and upgrade when requested or in scope; keep major upgrades out of unrelated changes; never downgrade.
- Greenfield with no stack given: Better-T-Stack via `pnpm create better-t-stack@latest` for supported combinations; otherwise the ecosystem's official generator at its latest stable tag. Re-check generated versions against the registry right away.

## Scripts

Run with Node from the skill directory; read-only unless noted.

- `scripts/inspect-project.mjs <project>`: stack, versions, lockfiles, conventions, `cn` location. Run first on existing projects.
- `scripts/audit-global-styles.mjs <src>`: global CSS classes by consumer count; repeated arbitrary Tailwind values.
- `scripts/scaffold-module.mjs <feature|component> <kebab-name> [--root <src>] [--apply]`: dry run unless `--apply`.
- `scripts/create-migration-plan.mjs <project>`: writes `.architecture/` plan, state, and task files.
- `scripts/check-companions.mjs`: lists installed optional companion skills.

## Verification

- No completion claim without fresh command output in the same message: tests (0 failures), lint, typecheck, build (exit 0). "Should pass" is not evidence; a subagent's report is not a diff.
- Non-trivial behavior: write the failing test first and watch it fail for the right reason. A test that passes on its first run is suspect.
- Review feedback: restate it, verify it against the code, then implement or push back with reasons; no performative agreement.
- Before handoff, run the applicable lint, typecheck, test, build, security, accessibility, and SEO checks; classify exceptions as fixed, accepted with a reason, or deferred with an owner.

## Companion routing

- `ai-assisted-product-development`: AI design exploration, feedback-to-change loops.
- `conversion-storytelling`: landing pages, pricing, onboarding narrative, proof, CTA.
- `content-marketing-and-brand-growth`: launch campaigns, social, video or thumbnail briefs.
- `global-discovery-browsing-extraction`: current web evidence and asset discovery, including signed-in pages.
- UI critique: `impeccable`, then `ui-ux-pro-max`; Expo: official Expo skills; Lottie authoring: `text-to-lottie`; video: `hyperframes`; missing capability: `find-skills`.
