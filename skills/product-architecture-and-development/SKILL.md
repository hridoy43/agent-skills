---
name: product-architecture-and-development
description: Plans, scaffolds, refactors, and implements maintainable TypeScript-first software products. Use when working on web, mobile, desktop, API, or multi-app architecture; especially when folder ownership, reusable components, design systems, Tailwind or shadcn styling, UI-library selection, API caching/errors, ecommerce UX, third-party scripts, SEO, CSP, analytics, Motion.dev, GSAP, animation, product demos, future scope, or codebase cleanliness must be decided before coding.
---

# Product Architecture and Development

Design the smallest production architecture that meets the current product need and leaves clean extension points. Prefer explicit boundaries and ordinary code over speculative abstractions.

## Non-negotiable outcomes

- Use TypeScript for application and shared-library code unless the host platform makes it impractical.
- Interview the user before planning or implementation, even when the initial brief is detailed. Confirm the few preferences that materially shape the product and treat the answers as architecture constraints.
- Treat SEO as non-negotiable for every public indexable surface. Preserve crawlability, semantic content, distinct search intent, useful evidence, metadata, internal links, URLs, and redirects while improving readability and interaction.
- Keep routes, features, shared UI, infrastructure, types, and styles in clearly owned locations.
- Build large UI from focused pieces in a same-named directory with an explicit `index.ts` public surface.
- Make every interface theme-configurable. Define semantic color, typography, spacing, radius, shadow, and motion tokens once, map them through the platform framework, and consume theme utilities instead of scattering custom values.
- Establish a proportional design-system contract before feature UI: semantic tokens, typography, layout, responsive behavior, component states, accessibility, motion, and ownership. A small site needs a small contract; a multi-product platform may need a governed package and documentation.
- Prefer the framework's standard scales for font size, weight, leading, tracking, spacing, dimensions, breakpoints, radii, shadows, durations, and easing. Add a named theme token for a recurring or brand-specific value; use an arbitrary utility only for a measured, documented one-off that should not become part of the design system.
- Keep code-based presentation configuration beside style assets. Place files such as `fonts.ts`, `theme.ts`, typed tokens, and style-system helpers in `src/styles/` or the equivalent package-owned `styles/` directory, not in routes or general runtime/business configuration.
- Keep Tailwind utilities in components. Promote a style to global scope only when it is a token, reset, font, shared motion primitive, third-party override, or a stable pattern used by at least two consumers.
- Use maintained, community-supported tools after checking compatibility and current status.
- Add complexity only in response to a present requirement or measured constraint.
- Treat clean visual hierarchy and intuitive interaction as product requirements. For underspecified ecommerce work, preserve familiar browse, search/filter, product-detail, cart, checkout, loading, empty, and error patterns before adding novelty.
- Keep changes small, reviewable, accessible, responsive, secure, and testable.
- Prefer deep modules: put meaningful behavior behind a small, explicit interface. Before adding an abstraction, apply the deletion test: if removing it would not simplify callers or protect a real seam, do not add it.
- Treat the public interface as the primary test surface. Keep implementation details local, and make error modes, invariants, ordering, configuration, and performance expectations part of the interface contract.
- For medium or large products, maintain a domain glossary in `CONTEXT.md` (or an equivalent project-owned location) and record material architectural decisions in `docs/adr/`. Use the repository's language consistently in code, tests, docs, and product copy.

## Decision precedence

When guidance conflicts, follow this order:

1. The user's explicit current instructions and confirmed preferences.
2. Safety, privacy, legal truthfulness, and platform constraints.
3. Healthy conventions in the existing repository.
4. This skill's non-negotiable outcomes.
5. Current primary platform documentation.
6. Companion-skill recommendations and general defaults.

User interaction is part of the implementation contract: explicit user decisions, constraints, and prohibitions always win over defaults. When a prompt leaves a material choice open—or two user preferences conflict—pause and interview the user before installing packages, changing architecture, writing code, or running a migration. Do not interpret “go ahead” as permission to silently choose an unresolved stack, data, design, privacy, or dependency decision.

Do not let a companion skill silently override an explicit requirement such as the Axios REST boundary or the user's chosen platform. Surface material conflicts and recommend the safest resolution.

The required project interview is the one deliberate exception to the ordering above: invoking this skill means the user has requested preference capture before implementation, even if an embedded brief says to proceed autonomously.

For a public indexable surface, SEO is a release gate rather than an optional preference. A user may change positioning, content, or audience, but if a requested treatment would create preventable search loss, explain the conflict and implement an SEO-safe alternative. Do not offer “accept the SEO risk” as a waiver while the surface remains public and indexable. The gate changes only when the user explicitly changes the surface's purpose to private or intentionally non-indexable and confirms that consequence.

## Companion skills

Run `node scripts/check-companions.mjs` from this skill directory when the task could benefit from specialist guidance.

- For UI design, use `impeccable` first. Use `ui-ux-pro-max` for deeper design-system or pattern research.
- For landing pages, marketing sites, product narratives, funnels, onboarding conversion, positioning, proof, or CTAs, use `conversion-storytelling`. It owns narrative selection and conversion measurement; this skill retains technical architecture and implementation ownership. User-approved audience, offer, tone, claims, and framework override companion defaults.
- For unfamiliar legacy systems, large multi-app/code-and-doc repositories, cross-language dependency analysis, or long-lived multi-agent work, evaluate `graphify` using [graphify.md](references/graphify.md). Skip it for a small landing page or easily inspected app unless the user explicitly requests it. Never install, configure, scan, or enable Graphify without project-specific permission.
- For architecture audits or refactor planning, use an installed `improve-codebase-architecture` companion when available. Explore organically for shallow modules, leaky interfaces, duplicated orchestration, and untested seams; propose a small number of alternatives before changing code. Keep this optional because the core workflow already includes lightweight inspection.
- For domain-heavy products, use an installed `domain-modeling` companion when available. Create or update the domain glossary and ADRs only when the model is changing; do not add documentation ceremony to a small site.
- For strict behavior-first implementation, use an installed `tdd` companion when available and appropriate. Otherwise apply the core vertical-slice testing rules in this skill. Do not impose strict TDD on prototypes, static marketing pages, or repositories whose existing test strategy would be disrupted.
- For purposeful Lottie work, use `text-to-lottie`; otherwise ask the user to install it or use CSS/SVG motion.
- For product-demo video, use `hyperframes`. Use Remotion only when the user requests it or an existing Remotion project makes it the lower-cost path.
- For Expo or React Native, use the relevant official Expo and native performance/data skills first. Use Code-with-Beto skills only for a specific applicable workflow.
- For mobile E2E testing, use an installed `maestro-mobile-testing` skill when it fits an Expo/React Native or cross-platform flow. Otherwise use `find-skills` to evaluate Maestro, Detox, Appium, XCTest, Espresso, Flutter integration tests, or the project's existing test framework. Do not install a testing companion silently.
- For missing capabilities, use `find-skills`, tell the user what you found, and ask before installing anything.
- If an Andrej Karpathy coding-guidelines skill is installed, apply it before implementation. Otherwise apply the fallback rules in [architecture-core.md](references/architecture-core.md): simple code, explicit assumptions, tight scope, evidence before abstraction.

Never install a companion skill or package without the user's approval.

## Workflow

### 1. Parse the brief and interview the user

Read [project-initiation.md](references/project-initiation.md) and [module-boundaries.md](references/module-boundaries.md). Convert the initial prompt into a structured brief: product truth, users, outcomes, routes/screens, content, workflows, integrations, constraints, preferences, prohibited claims, configurable unknowns, quality targets, deliverables, and launch conditions.

Then run a required interview before writing a plan or code. Ask one round of one to three high-impact questions, combining related choices. Always cover any unresolved decision among product/MVP scope, platform and deployment, data/auth/integrations, design/content, localization/regions, privacy/compliance, analytics, timeline, or preferred tools. When the brief appears complete, present the inferred defaults and MVP cutoff and ask the user to confirm or change them rather than skipping the interview. Wait for the answers before continuing; use a second focused round only if a new material ambiguity appears.

Restate the resulting goal, users, platforms, constraints, acceptance criteria, preferences, and known future scope. Maintain a decision ledger containing `confirmed`, `inferred`, `unknown/configurable`, `prohibited`, and `deferred` items. Do not begin implementation until the user has had a chance to correct the ledger. Never invent missing business facts, claims, credentials, metrics, legal status, compliance, or content.

Inspect before proposing:

```bash
node scripts/inspect-project.mjs /absolute/path/to/project
```

For an existing project, also read its `AGENTS.md`, package manifests, routes, source tree, build configuration, test configuration, style entry points, API layer, and deployment/security configuration. Preserve conventions unless there is concrete evidence to change them.

### 2. Inspect and classify size and deployment shape

Choose one:

- **Small single app:** one deployable, a small team, limited domains. Use a feature-oriented `src/` tree and Tailwind as the base styling approach.
- **Growing single app:** several domains or teams, but one deployable. Keep one app and enforce feature boundaries before introducing a monorepo.
- **Multi-app product:** two or more real deployables sharing contracts or domain logic. Use a monorepo with app-specific UI packages and shared contracts/configuration.

For an existing repository, assess whether a persistent code-and-document relationship graph has a present consumer. Read [graphify.md](references/graphify.md) when relationships are difficult to inspect directly or will be queried repeatedly. If Graphify is justified but not configured, present the benefit, scope, generated artifacts, privacy/token implications, and simpler fallback, then wait for permission before any installation, configuration, or corpus processing.

Read [stack-selection.md](references/stack-selection.md), [localization.md](references/localization.md), and the applicable platform guide: [web-projects.md](references/web-projects.md), [mobile-projects.md](references/mobile-projects.md), [desktop-projects.md](references/desktop-projects.md), or [backend-projects.md](references/backend-projects.md). Use Better-T-Stack as a compatibility/scaffolding aid, not as a substitute for product reasoning.

### 3. Write the architecture decision before code

Record:

1. Chosen stack and why it fits the product.
2. Deployment units and runtime boundaries.
3. Folder tree with ownership rules.
4. Data flow, API boundary, cache strategy, and error model.
5. SEO/rendering plan where applicable.
6. Security/CSP and analytics plan.
7. Identity, persistence, integrations, observability, environments, deployment, and operations when applicable.
8. Testing, accessibility, performance, and release gates.
9. Localization/region strategy and content ownership.
10. Design-system scope, primary UI foundation, registry/template due diligence, and ownership or exit path.
11. Explicitly deferred capabilities.

Use [architecture-core.md](references/architecture-core.md) as the default. Do not create empty architectural folders “for later.”

### 4. Design feature and component boundaries

Read [styling-and-components.md](references/styling-and-components.md) and [design-system-and-ui-libraries.md](references/design-system-and-ui-libraries.md).

- Routes/layouts compose features; they do not own business logic.
- Features own their UI, API functions, hooks, schemas, services, types, and tests.
- Shared code must be domain-neutral and have at least two real consumers.
- A major component lives in a same-named directory, delegates coherent sections to smaller files, and exports an explicit surface from `index.ts`.
- Prefer direct imports inside a feature. Avoid wildcard barrel chains.
- Use Lucide icons when available; centralize icon sizing/stroke conventions without wrapping every icon.
- Choose one primary UI foundation. Add a secondary component or motion source only for a specific gap, with an explicit token boundary and no duplicate primitive layer.
- Before building a substantial reusable web component in a shadcn-compatible project, inspect the official shadcn Registry Directory for a suitable maintained registry item. Review third-party source, dependencies, accessibility, compatibility, styling side effects, license, and ownership before proposing installation.
- Before adopting any UI framework or registry, inspect its official quick start, AI-agent guidance when available, token/theming system, themes, templates/blocks, compatibility, and migration path. Ask before installing packages or registry code.

Use the dry-run scaffold only after the boundary is agreed:

```bash
node scripts/scaffold-module.mjs feature billing --root /absolute/path/to/src
node scripts/scaffold-module.mjs feature billing --root /absolute/path/to/src --apply
```

### 5. Define data and server-state behavior

Read [api-data-state.md](references/api-data-state.md).

- Before the first REST integration on web, mobile, or desktop, create one Axios-based client with base URL, timeout, typed normalized errors, auth interception, and cancellation support.
- Do not add Axios to an offline-only product or wrap a fully typed RPC client redundantly; document the exception.
- Use TanStack Query for interactive client-side server state, with feature-owned query keys and explicit stale/cache/invalidation behavior.
- For API-heavy products, configure server-state caching from the first vertical slice. Normalize transport errors globally, map status/errors to consistent application feedback, keep feature-specific recovery local, and add correlation/observability without exposing sensitive payloads.
- Prefer framework server caching for server-rendered data.
- Validate untrusted boundaries with schemas.
- Keep local UI state local. Add a global client store only for demonstrated cross-tree client state.

Read [production-foundations.md](references/production-foundations.md) for any greenfield product or material platform expansion. If AI behavior is part of the product rather than just the development workflow, also read [ai-systems.md](references/ai-systems.md).

For architecture work, use the deep-module vocabulary consistently: module, interface, implementation, seam, adapter, depth, leverage, and locality. Prefer the highest stable seam that callers and tests can use. A second adapter is evidence that a seam may be real; a speculative seam is not a reason to create a port-and-adapter layer.

### 6. Plan content, SEO, security, and telemetry

Read all applicable references:

- [seo.md](references/seo.md)
- [security-and-csp.md](references/security-and-csp.md)
- [analytics.md](references/analytics.md)
- [third-party-scripts.md](references/third-party-scripts.md) when external scripts, embeds, SDKs, pixels, widgets, or consent-gated vendors are in scope.

Keep core content as semantic HTML and available in the initial server/static response. Interaction may reveal details, but must not be the only place search-critical meaning exists.

Roll out CSP in report-only mode first when changing an existing production site. Add nonce/hash-based strict policies where the framework supports them; never “fix” CSP with broad `unsafe-inline` or `*` sources.

Create a typed event catalog and a single tracking function/hook only when analytics is in scope. Events describe user outcomes, not DOM implementation details. Consent and privacy constraints apply before dispatch.

When a public surface must convert, use `conversion-storytelling` after the product brief is decision-complete. Preserve the approved conversion brief and proof ledger alongside the SEO/content preservation plan; never let a framework invent business facts or erase distinct search intent.

### 7. Add visual character deliberately

Read [design-motion-media.md](references/design-motion-media.md).

Use this escalation order:

1. Layout, typography, contrast, spacing, and content hierarchy.
2. CSS/Tailwind transitions and transforms.
3. SVG for explanatory diagrams or lightweight bespoke motion.
4. Lottie for a meaningful reusable narrative animation.
5. Motion.dev or GSAP when the interaction genuinely needs a dedicated runtime.
6. Video for a product story that benefits from time and demonstration.

Every animation must support comprehension, feedback, orientation, or brand character. Respect `prefers-reduced-motion`, keep SEO content outside animation assets, and avoid interaction that blocks navigation or reading.

### 8. Implement in vertical slices

Build the smallest end-to-end slice first: route/screen → feature UI → data boundary → state/error/loading behavior → tests. Keep infrastructure close to the first consumer and extract only after the boundary is proven.

For an existing project, make one boundary change at a time. Preserve DOM semantics, URLs, metadata, behavior, and visual output unless the user approved a redesign.

### 9. Validate before handoff

Read [quality-gates.md](references/quality-gates.md). At minimum run the repository's format, lint, typecheck, unit/integration tests, and production build. Add platform checks where applicable.

Audit global CSS with:

```bash
node scripts/audit-global-styles.mjs /absolute/path/to/project/src
```

Treat the report as evidence, not an automatic deletion list. Dynamic class names and third-party selectors require inspection.

Finish with:

- The architecture and folder tree actually used.
- Key decisions and deferred scope.
- Files changed and why.
- Validation commands and results.
- Migration or rollback notes.
- Any specialist skill or dependency the user should consider installing.

## Reference routing

Load only what the task needs, but read each selected reference completely:

- Rich brief parsing, mandatory interview, and decision ledger: [project-initiation.md](references/project-initiation.md)
- Core boundaries and folder trees: [architecture-core.md](references/architecture-core.md)
- Stack choice and community-support checks: [stack-selection.md](references/stack-selection.md)
- Web rendering and framework shape: [web-projects.md](references/web-projects.md)
- Expo/React Native shape: [mobile-projects.md](references/mobile-projects.md)
- Desktop shell/core split: [desktop-projects.md](references/desktop-projects.md)
- Backend/server modules, data, jobs, contracts, and operations: [backend-projects.md](references/backend-projects.md)
- API, Axios, TanStack Query, state: [api-data-state.md](references/api-data-state.md)
- Auth, persistence, integrations, environments, observability, CI/CD, and operations: [production-foundations.md](references/production-foundations.md)
- AI provider boundaries, evaluation, safety, cost, and human review: [ai-systems.md](references/ai-systems.md)
- Near-atomic UI and Tailwind ownership: [styling-and-components.md](references/styling-and-components.md)
- Proportional design systems, shadcn Directory review, Magic UI, Ant Design, Astryx, and library adoption gates: [design-system-and-ui-libraries.md](references/design-system-and-ui-libraries.md)
- Locales, routing, RTL, localized SEO, and translation QA: [localization.md](references/localization.md)
- Search-friendly content: [seo.md](references/seo.md)
- Conversion-focused narrative, proof, CTA, and measurement: companion skill `conversion-storytelling`
- Optional Graphify decision, permission, privacy, and project configuration: [graphify.md](references/graphify.md)
- CSP and application security: [security-and-csp.md](references/security-and-csp.md)
- Typed analytics: [analytics.md](references/analytics.md)
- Centralized third-party scripts, consent, loading, and vendor ownership: [third-party-scripts.md](references/third-party-scripts.md)
- Interaction, SVG, Lottie, product video: [design-motion-media.md](references/design-motion-media.md)
- Tests, performance, accessibility, release gates: [quality-gates.md](references/quality-gates.md)
