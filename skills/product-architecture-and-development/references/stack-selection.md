# Stack selection

## Selection order

1. Product constraints: users, platform, offline needs, SEO, realtime, data sensitivity, team skills, hosting.
2. Existing ecosystem: preserve a healthy stack unless change has measurable value.
3. Compatibility: runtime, deployment, accessibility, testing, observability, package interoperability.
4. Community health: recent releases, maintained docs, issue responsiveness, security posture, adoption, stable migration path.
5. Complexity cost: count deployables, services, state layers, build tools, and required expertise.

Verify unstable facts against primary documentation before choosing versions or libraries.

## Greenfield stack and generator selection

When the user does not specify a stack for a greenfield project, use Better-T-Stack's official current stable command to choose a compatible supported combination. This includes supported web, server, Expo/React Native, and Tauri combinations. Product requirements still control the choice; inspect generated output before accepting it.

If the requested ecosystem is not supported by Better-T-Stack, use that ecosystem's official current stable generator. If the user explicitly selects another framework or generator, use that tool's official current stable command/tag. Never use a stale template, old tutorial command, or cached generator without documenting why. Do not use beta, release-candidate, or canary tags unless the user explicitly requests them.

Immediately after scaffolding, verify framework versions, runtime, package manager, lockfile, and framework file conventions against current primary documentation. Record selected versions, generator command/tag, date, compatibility checks, and intentional deviations. For existing projects, preserve a healthy installed stack unless upgrade is explicitly in scope.

### Better-T-Stack decision protocol

If the user does not specify a stack, the agent chooses a compatible Better-T-Stack configuration from the confirmed requirements. The agent should derive frontend, backend, database, ORM, API, auth, runtime, and addons rather than asking the user to select every flag.

Ask the user to choose only when:

- multiple compatible stacks have materially different tradeoffs;
- platform, deployment, database, auth, runtime, or other architecture preference remains unresolved;
- the choice affects cost, compliance, portability, or long-term ownership;
- Better-T-Stack cannot confidently select a compatible combination.

Use Better-T-Stack's official current documentation, CLI, Stack Builder, and AI-agent workflow as appropriate: [Better-T-Stack Quick Start](https://www.better-t-stack.dev/docs). Prefer the official `@latest` CLI with explicit flags for reproducible scaffolding. Use the Stack Builder for complex interactive combinations. Use the AI-agent plugin only when already available or explicitly approved for installation.

After selection, explain the chosen stack and rejected alternatives, inspect generated files and versions, preserve the selected lockfile, and run the repository quality gates. If Better-T-Stack does not support the requested ecosystem, use that ecosystem's official current stable generator.

## Tooling selection

Use the framework or library's official/recommended linter and formatter integration when available. Better-T-Stack's generated tooling may be preferred for speed and optimized developer feedback when it remains compatible with the selected stack. Verify parser support, editor integration, CI commands, test runner integration, and formatting/linting overlap before accepting it.

Choose one primary formatter per language and one primary lint configuration. Keep framework-specific correctness rules, accessibility rules, and type-aware rules when compatible. Do not install multiple competing formatters or silently replace official framework lint rules with a faster but incomplete tool.

## Package manager

Use the repository's existing package manager and lockfile. Never mix package managers or regenerate a lockfile casually.

For new TypeScript/JavaScript projects, prefer `pnpm` as default because it provides deterministic lockfiles, workspace support, and broad ecosystem compatibility. Choose `bun` when the repository already uses Bun, Bun runtime/tooling is an explicit requirement, or compatibility has been verified for the framework, test runner, ORM, deployment target, and native tooling.

If an existing project has `bun.lockb`/`bun.lock`, `pnpm-lock.yaml`, `yarn.lock`, or `package-lock.json`, preserve that manager unless a confirmed migration decision exists. Record compatibility checks, lockfile transition, CI changes, and rollback path before changing it.

Record for material dependencies: stable/current release status, maintenance activity, license, security advisories, framework/runtime compatibility, accessibility posture, bundle/runtime cost, migration path, and team familiarity. Treat experimental compatibility layers as an explicit accepted risk with an exit path; popularity alone is not sufficient.

For fast-moving ecosystems, write capability and verification criteria instead of timeless package rankings. Named libraries are examples to investigate against current primary documentation, not permanent dependencies. Recheck release status, architecture support, peer versions, native build requirements, and known limitations at implementation time. Never update an installed package merely because a newer package exists.

## Defaults, not mandates

- **Content/marketing web:** Next.js or Astro depending on dynamic application needs; server/static HTML for primary content.
- **Interactive web app:** Next.js or TanStack Start when its ecosystem and deployment fit.
- **Mobile:** Expo + React Native + Expo Router for most cross-platform products.
- **Desktop:** Tauri when a web UI plus native core is sufficient and bundle/security matter; Electron when Node/Chromium APIs or its ecosystem are required.
- **TypeScript server:** Hono, Fastify, or framework-native routes depending on runtime and deployment.
- **Database:** PostgreSQL by default for relational product data; use another model only when access patterns justify it.

Use Better-T-Stack to check compatible scaffolding combinations or create a greenfield baseline. Inspect its generated output before accepting it. Do not let a generator decide domain boundaries.

## UI libraries

Read [design-system-and-ui-libraries.md](design-system-and-ui-libraries.md) before selecting or adding a UI foundation.

- Small app or focused marketing surface: Tailwind CSS as the base; add focused accessible primitives only when needed.
- Growing product web app: Tailwind + shadcn/ui is the normal starting point when source ownership and customization matter.
- Marketing motion: evaluate selected registry components, such as Magic UI, Kokonut UI, or Aceternity UI, only for defined interactions and after maintenance, accessibility, reduced-motion, bundle, and design-system review. Treat any registry as an enhancement source, not a second design system, and ask before adoption.
- Dense dashboard or admin product: evaluate Ant Design when integrated tables, forms, filters, navigation, internationalization, and enterprise interaction patterns would otherwise be rebuilt piecemeal. Adopt its token/theme layer as the primary component foundation if selected.
- Extensive multi-surface design-system product: Astryx may accelerate implementation when its component, token, theme, template, framework, and AI-agent conventions fit. Complete the Astryx due-diligence gate and an isolated spike before adoption.
- Keep generated or copied UI source owned by the app, align it to local semantic tokens, and avoid duplicate primitive layers.

## Rejection test

Reject a dependency if the product can meet the requirement simply with platform/framework primitives, if maintenance is unclear, if it duplicates an existing layer, or if its adoption cost exceeds the present benefit.
