# Practical Agent Skills for Product Work — Changelog

Release history for the portable skills in `hridoy43/agent-skills`.

## Unreleased

Changes that have landed on `main` but are not included in a tagged release.

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
