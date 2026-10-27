---
name: product-architecture-and-development
description: Plans and builds web, mobile, desktop, backend, or multi-app products with interview-led architecture, latest-stable tooling, ownership-based structure, UI and design systems, and verified implementation. Use when starting, scaffolding, auditing, refactoring, or implementing a product or codebase.
---

# Product Architecture and Development

## Contract

1. The user's prompt is the source of truth. Interview (one to three grouped questions) only about unresolved choices that materially change the result; never force interviews, plans, or approval gates the user did not ask for. Defaults and guardrails here yield to an explicit request: do it and note any real cost in one line; security, data safety, and accessibility fallbacks still apply.
2. Greenfield: apply the defaults below. Existing project: inspect first, preserve healthy conventions, never silently rename, move, or delete. A requested restructure: compare current vs target, name the risks, then execute.
3. Keep a decision ledger: `confirmed`, `inferred`, `unknown/configurable`, `prohibited`, `deferred`, each with a revisit signal.
4. Named tools are candidates; never stop at them. For each material choice, check the current landscape on the web (`global-discovery-browsing-extraction` when installed) and pick the best maintained fit for the stack and task; verify before use. Never add a deprecated, archived, or stale package when a maintained, more performant standard exists; in existing projects, flag such dependencies and propose the migration. Prefer free and open-source; suggest a paid option only when clearly better or nothing free fits, and use it after the user approves. Ask before adding a material dependency. Companion skills are optional: use one if installed, otherwise suggest it with its install command; never install silently (`node scripts/check-companions.mjs`). A library's free official MCP only for repeated use (see `ui-sources`).
5. The architecture is framework-agnostic. Trees, file names, and tools in the references are its TypeScript/React mapping; any other framework, language, or platform keeps the ownership rules below in that ecosystem's official conventions—never the React tree.

## References: load only what the task needs (`references/<name>.md`)

- Plan: `project-initiation` (brief, interview, build plan), `stack-selection` (stack, generator, package manager, dependencies), `evidence-led-product-design` (product and UX decisions), `migration-workflow`, `graphify` (optional code graph)
- Structure: `architecture-core`, `module-boundaries`, `naming-and-linting`
- Platform: `web-projects`, `mobile-projects`, `mobile-chrome` (headers, tab bars, sheets, safe areas), `desktop-projects`, `backend-projects`
- UI: `styling-and-components` (tokens, Tailwind, components, icons), `design-system-and-ui-libraries` (library choice), `ui-sources` (components, blocks, shaders, textures), `design-motion-media` (motion, 3D, media, haptics, ASCII), `lottie-workflow`, `charts`, `assets-and-styles`
- Data and features: `api-data-state` (client, cache, state), `forms-and-validation`, `ai-systems`, `analytics`, `third-party-scripts`, `localization`, `seo`
- Ship: `security-and-csp`, `production-foundations` (config, auth, persistence, jobs, CI, launch), `quality-gates` (before handoff)

## Defaults

- TypeScript-first; ecosystem-standard naming and tooling. Greenfield stack, generator (Better-T-Stack first), and package manager (pnpm): `stack-selection`.
- Routes and screens stay thin. Features own their UI, actions, API, hooks, schemas, services, types, helpers, data, and tests. Shared code is domain-neutral with two real consumers. A root directory needs a second consumer or a cross-cutting policy.
- Before hand-building a non-trivial component (map, data table, rich-text editor, upload, chat, effect, page block), adapt a maintained one from the project's component ecosystem (`ui-sources`).
- Library-owned primitives stay in library directories (`components/shadcn/`); extend through project wrappers.
- `cn` lives only at `src/utils/cn.ts` (`@/utils/cn`). shadcn defaults to `@/lib/utils`: after `shadcn init`, set `components.json` `aliases.utils` to `@/utils/cn` and `aliases.ui` to `@/components/shadcn`, move the helper, delete `lib/utils.ts`, and re-check after every `shadcn add`.
- Projects with UI get a root `DESIGN.md` before feature UI: the design source of truth agents read before UI work (direction inferred from context when unstated: `design-motion-media`). Token and theme files in `src/styles/` implement it and change with it (`styling-and-components`); framework/build config stays at the repo root.
- Validate untrusted input at the server or trusted boundary.
- **Latest stable only.** Install every new dependency, generator, and CLI at its latest stable release, resolved from the registry at install time (`pnpm add <pkg>@latest`, `pnpm dlx <cli>@latest`, `npm view <pkg> dist-tags.latest`), never from memory. Skip alpha/beta/rc/canary/nightly/preview. If latest breaks a peer, use the newest compatible stable and record why. Existing projects: upgrade when requested or in scope, keep majors out of unrelated changes, never downgrade.

## Scripts

Run with Node from the skill directory; read-only unless noted.

- `scripts/inspect-project.mjs <project>`: stack, versions, lockfiles, conventions, `cn` location. Run first on existing projects.
- `scripts/audit-global-styles.mjs <src>`: global CSS classes by consumer count; repeated arbitrary Tailwind values.
- `scripts/scaffold-module.mjs <feature|component> <kebab-name> [--root <src>] [--apply]`: dry run unless `--apply`.
- `scripts/create-migration-plan.mjs <project>`: writes `.architecture/` plan, state, and task files.
- `scripts/check-companions.mjs`: lists optional companion skills with install commands.

## Verification

- No completion claim without fresh command output in the same message: tests (0 failures), lint, typecheck, build (exit 0). "Should pass" is not evidence; a subagent's report is not a diff.
- Non-trivial behavior: write the failing test first and watch it fail for the right reason. A test that passes on its first run is suspect.
- Review feedback: restate it, verify it against the code, then implement or push back with reasons; no performative agreement.

## Companion routing

- `ai-assisted-product-development`: AI design exploration, feedback-to-change loops.
- `conversion-storytelling`: landing pages, pricing, onboarding narrative, proof, CTA.
- `content-marketing-and-brand-growth`: launch campaigns, social, video or thumbnail briefs.
- `global-discovery-browsing-extraction`: current web evidence and asset discovery, including signed-in pages.
- UI critique: `impeccable`, then `ui-ux-pro-max`; video: `hyperframes`; missing capability: `find-skills`.
