# Practical Agent Skills for Product Work — Changelog

Release history for the portable skills in `hridoy43/agent-skills`.

## Unreleased

No unreleased changes.

## v0.5.13 — 2026-07-25

- Documented inspection, migration-plan, task-resume, and task-specific invocation commands in the architecture skill README.

## v0.5.12 — 2026-07-25

- Simplified the architecture skill into a compact controller with targeted reference routing.
- Added a resumable, context-window-safe migration workflow with bounded task files and persistent state.
- Added a migration-plan generator for existing projects and implementation slices.
- Expanded project inspection to detect root framework configuration and public asset conventions.

## v0.5.9 — 2026-07-25

- Added the public `content-marketing-and-brand-growth` skill for interview-first, SEO-conscious, platform-specific campaigns and measurement.
- Added reusable profile README architecture guidance combining clear positioning, selected work, credibility, capabilities, and focused CTAs.
- Added the public `pr-writing` skill for platform-neutral, diff-based pull request and merge request descriptions.
- Changed PR drafting to inspect-first and non-blocking: generate a useful draft from repository evidence, then request only materially missing details.
- Added adaptive QA verification guidance for bug reproduction, feature acceptance, UI, API, mobile, and deployment changes.
- Added explicit visual-proof and README-anatomy guidance for screenshots, demos, terminal examples, API examples, and architecture diagrams.

## v0.5.11 — 2026-07-25

- Added semantic ownership for layout components such as navigation, headers, footers, shells, containers, and page layouts.
- Preserved `brand/`, `layout/`, `ui/`, and `icons/` parent directories while allowing PascalCase component directories underneath them.
- Added framework-agnostic brand and icon asset ownership guidance.
- Prohibited inline or duplicated SVG source in application code; SVGs must come from owned asset directories through supported framework mechanisms.

## v0.5.10 — 2026-07-25

- Added architecture lifecycle rules for greenfield defaults, existing-project preservation, and approved architecture migrations.
- Required confirmation before material existing-project architecture changes.
- Added structural and behavior verification requirements after approved migrations.
- Added explicit handling for fixed, accepted, and deferred architecture exceptions.

## v0.5.8 — 2026-07-25

- Clarified framework-agnostic root `assets/` as the shared source asset catalog.
- Clarified Next.js `public/assets/` as the public URL/static-serving adapter.
- Preserved platform-native asset conventions for Expo/React Native, Flutter, Android, iOS, and backend projects.

## v0.5.7 — 2026-07-25

- Made transport-client guidance ecosystem-standard, using Axios only when REST requirements, project conventions, or user preference justify it.
- Scoped React/Next.js naming, route groups, and web asset/style conventions to React/web projects.
- Added native asset conventions for Expo/React Native, Flutter, Android, iOS, and backend projects.
- Expanded Better-T-Stack default selection to supported web, server, Expo/React Native, and Tauri combinations.
- Added official-tooling fallback guidance for unsupported ecosystems and framework/library-specific linter and formatter selection.

## v0.5.6 — 2026-07-25

- Enforced feature-owned category directories for data, API, actions, components, hooks, schemas, services, types, and utilities.
- Added naming guidance for PascalCase React components, role-suffixed TypeScript modules, colocated `types.ts`, and Next.js reserved filenames.
- Documented `src/utils/cn.ts` as a valid shared Tailwind class helper location when configured by project aliases.
- Added shadcn, Magic UI, and other library-owned component boundaries with wrapper-first extension rules.
- Added package-manager guidance: prefer `pnpm` for new TypeScript/JavaScript projects, use Bun when repository conventions or verified compatibility justify it, and preserve lockfiles.
- Added ecosystem-specific linting and formatting guidance with version-aware Next.js ESLint configuration.

## v0.5.5 — 2026-07-25

- Strengthened the interview-first protocol: user decisions and prohibitions override defaults, and material unresolved choices require user confirmation before implementation.
- Added an explicit pause after the decision ledger so “go ahead” cannot silently resolve architecture, dependency, data, design, privacy, or deployment ambiguity.

## v0.5.4 — 2026-07-24

- Replaced package-specific mobile list recommendations with timeless, capability-based selection and benchmarking guidance.
- Added rules for architecture compatibility, dynamic layouts, recycling/state behavior, maintenance, migration, and preserving healthy existing dependencies.
- Clarified that fast-moving package names are examples to verify at implementation time, not permanent defaults.

## v0.5.3 — 2026-07-24

- Documented the single-prompt, idea-to-project workflow in the public and skill-specific READMEs.
- Added a reusable starter prompt covering interview, architecture, design system, SEO, security, analytics, testing, and implementation slices.

## v0.5.2 — 2026-07-24

- Added Google Search Central’s SEO Starter Guide as the primary SEO reference.
- Added an explicit public URL contract that separates App Router filesystem names from canonical URLs, including slugs, redirects, aliases, locale routes, and canonical metadata.
- Added crawler-parity and post-deployment search-diagnostics checks without treating SEO checklists as ranking guarantees.

## v0.5.1 — 2026-07-24

- Clarified the localization boundary: `src/lib/i18n` owns runtime behavior and `src/locales` owns translation content when the project uses a `lib/` convention.
- Preserved `src/i18n` as a valid framework-native alternative and documented the same runtime/content separation.

## v0.5.0 — 2026-07-24

- Added deep-module design guidance: small explicit interfaces, stable seams, implementation locality, and a deletion test for speculative abstractions.
- Added optional companion routing for `codebase-design`, `improve-codebase-architecture`, and `domain-modeling`.
- Added guidance for domain glossaries, `CONTEXT.md`, ADRs, and consistent domain language in medium and large products.
- Installed the three focused Matt Pocock companions globally for supported agents; strict TDD remains opt-in.

## v0.4.0 — 2026-07-24

- Added framework-agnostic mobile UX guidance for safe areas, touch interactions, adaptive layouts, offline states, permissions, accessibility, performance, and release readiness.
- Added mobile journey guidance for onboarding, progressive disclosure, trust, recovery, and meaningful completion states.
- Added optional routing for `maestro-mobile-testing` and alternative mobile E2E frameworks without adding a mandatory dependency.

## v0.3.0 — 2026-07-24

- Added backend and server architecture guidance for modular monoliths, APIs, domain/application/infrastructure layers, databases, jobs, security, observability, and service extraction.
- Added platform-neutral module ownership guidance for features, services, stores, APIs, hooks, utilities, contracts, and shared infrastructure.

## v0.2.0 — 2026-07-24

- Added cost-aware browser routing for host web search, direct fetch, focused interactive browsers, agent-browser, LLM browser-use tools, and Chrome DevTools.
- Added free-tier-aware Exa and Firecrawl provider routing with evidence-preserving fallbacks.
- Documented bounded calls, quota protection, session reuse, and escalation rules.
- Updated public installation and skill documentation for portable, non-Codex hosts.

## v0.1.0 — 2026-07-24

- Added product architecture and development guidance.
- Added conversion storytelling guidance.
- Added global discovery, browsing, and extraction guidance.
