# Stack selection

## Selection order

1. Product constraints: users, platform, offline needs, SEO, realtime, data sensitivity, team skills, hosting.
2. Existing ecosystem: preserve a healthy stack unless change has measurable value.
3. Compatibility: runtime, deployment, accessibility, testing, observability, package interoperability.
4. Community health: recent releases, maintained docs, issue responsiveness, security posture, adoption, stable migration path.
5. Complexity cost: count deployables, services, state layers, build tools, and required expertise.

Verify unstable facts against primary documentation before choosing versions or libraries.

Record for material dependencies: stable/current release status, maintenance activity, license, security advisories, framework/runtime compatibility, accessibility posture, bundle/runtime cost, migration path, and team familiarity. Treat experimental compatibility layers as an explicit accepted risk with an exit path; popularity alone is not sufficient.

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
- Marketing motion: add selected Magic UI components only for defined interactions and only after maintenance, accessibility, reduced-motion, and bundle review. Treat it as an enhancement source, not a second design system.
- Dense dashboard or admin product: evaluate Ant Design when integrated tables, forms, filters, navigation, internationalization, and enterprise interaction patterns would otherwise be rebuilt piecemeal. Adopt its token/theme layer as the primary component foundation if selected.
- Extensive multi-surface design-system product: Astryx may accelerate implementation when its component, token, theme, template, framework, and AI-agent conventions fit. Complete the Astryx due-diligence gate and an isolated spike before adoption.
- Keep generated or copied UI source owned by the app, align it to local semantic tokens, and avoid duplicate primitive layers.

## Rejection test

Reject a dependency if the product can meet the requirement simply with platform/framework primitives, if maintenance is unclear, if it duplicates an existing layer, or if its adoption cost exceeds the present benefit.
