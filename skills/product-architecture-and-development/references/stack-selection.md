# Stack selection

Choose in this order: product constraints (users, platform, offline, SEO, realtime, data sensitivity, team, hosting) → keep a healthy existing stack → compatibility (runtime, deploy, testing, observability) → community health (recent stable releases, docs, issue response, advisories) → complexity cost (deployables, services, state layers, build tools). Versions follow the latest-stable rule in `SKILL.md`; a library whose only line is beta or RC needs user approval.

## Greenfield

- No stack given: let the agent derive frontend, backend, DB, ORM, API, auth, runtime, and addons from requirements, then scaffold with `pnpm create better-t-stack@latest` and explicit flags. It covers web, server, Expo/React Native (`native-*` frontends), and Tauri or Electrobun desktop addons. Use its Stack Builder for complex combinations and its agent plugin only if installed or approved.
- Ask only when compatible stacks differ materially in cost, compliance, portability, ownership, or unresolved platform/auth/data choices.
- Unsupported ecosystem or a user-chosen generator: that tool's official generator at its latest stable tag. Never a stale template, old tutorial command, or cached generator.
- After scaffolding: upgrade dependencies the template pinned below latest stable (unless a peer blocks it), inspect generated files, keep the lockfile, run quality gates, and record the generator command, date, resolved versions, rejected alternatives, and anything held back. A generator never decides domain boundaries.

## Defaults, not mandates

- Content/marketing web: Next.js or Astro. Interactive app: Next.js or TanStack Start.
- Mobile: Expo + React Native + Expo Router.
- Desktop: Tauri (web UI + small native core), Electrobun (Bun/TypeScript core), Electron (Node/Chromium ecosystem needed).
- TypeScript server: Hono, Fastify, or framework-native routes. Database: PostgreSQL unless access patterns justify otherwise.
- UI foundation: see [design-system-and-ui-libraries.md](design-system-and-ui-libraries.md).

## Tooling and dependencies

- Prefer the framework's official lint/format integration; Better-T-Stack's generated toolchain is fine when compatible. One formatter, one lint config.
- Keep the existing package manager and lockfile; never mix managers. New projects use pnpm; Bun only when verified for framework, tests, ORM, deploy, and native tooling. Switching managers needs a recorded migration and rollback.
- For each material dependency record release status, maintenance, license, advisories, compatibility, cost, and exit path. Named libraries are candidates to verify, not permanent picks.
- Reject a dependency when platform primitives suffice, maintenance is unclear, it duplicates a layer, or its cost exceeds the current benefit.
