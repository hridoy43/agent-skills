# Project initiation and interview

## Purpose

A long product prompt is both requirements input and implementation direction. Convert it into decisions without losing constraints, negative requirements, or uncertain facts. Ask questions only when missing information blocks the requested work.

## Brief extraction matrix

Read the entire prompt and attachments. Extract:

1. **Product truth:** name, category, business model, legal/formation status, ownership, geography, current maturity.
2. **Users and buyers:** primary/secondary audiences, jobs, authority, access needs, devices, locales, and exclusions.
3. **Positioning and content:** primary message, tone, proof, required claims, forbidden claims, content sources, draft/publish rules.
4. **Product scope:** platforms, routes/screens, workflows, roles, states, search/filter, notifications, offline/realtime, admin needs.
5. **Data and integrations:** source of truth, REST/RPC/GraphQL, auth, payments, email, files, search, AI, analytics, CMS, third parties.
6. **Quality constraints:** accessibility, SEO, performance, security/CSP, privacy/consent, observability, browser/device support.
7. **Design preferences:** references, desired/undesired feeling, brand tokens, UI libraries, motion/media, icon system.
8. **Delivery:** timeline, budget constraints, deployment, environments, CI/CD, migration, launch process, ownership.
9. **Deliverables:** routes, component system, docs, tests, environment example, seed content/data, runbooks, checklists.
10. **Future scope:** capabilities to make possible but not implement now.

For greenfield projects, also record the stack source: selected stack, generator, official command/tag, framework versions, runtime, package manager, lockfile, and any intentional deviation from current stable releases. When no stack is specified, the agent chooses a compatible Better-T-Stack configuration from confirmed requirements and asks the user only when materially different choices require a decision.

Classify every item:

- `confirmed`: explicitly provided.
- `inferred`: reasonable but needs confirmation.
- `unknown/configurable`: must be centralized as configuration or placeholder.
- `prohibited`: never implement or claim.
- `deferred`: intentionally outside the first release, with an extension point if needed.

## Architecture interview

Ask one to three grouped questions about unresolved decisions with material architectural impact. Skip the interview when the user's prompt already resolves those decisions or explicitly instructs the agent to proceed without pausing; do not repeat facts already supplied.

At minimum, confirm:

1. **Outcome and cutoff:** What is the first release's must-work user journey, launch date, and explicit non-goals?
2. **Preferences and constraints:** Which stack, hosting, auth, data, UI, localization, analytics, or deployment choices are required versus open to recommendation?
3. **Authority and risk:** Which business claims/content are approved, what data is sensitive, which regions/compliance constraints apply, and which credentials remain unavailable?

For an apparently complete brief, present inferred architecture defaults when useful. A prompt such as “proceed autonomously” or an explicit implementation request takes precedence over the interview and permits the agent to apply reasonable defaults and proceed.

## Architecture lifecycle

### Greenfield

After clarification when needed, apply the skill's architecture pattern when the user has not specified a conflicting preference. Use the selected stack's current conventions and verify the generated structure.

### Existing project

Inspect the current architecture before proposing changes. Preserve explicit user preferences and healthy existing conventions. Report structural differences as proposed migrations; do not silently rewrite files or directories.

### Explicit architecture change

When the user asks to restructure or update architecture, compare the current and target structures, identify behavior and import risks, and execute the requested change. Use small slices when helpful, but do not require them when the user's requested scope calls for a broader implementation.

Every deviation must be classified as fixed, accepted with a reason, or deferred with an owner and follow-up.

Ask a second round only when an answer introduces a new material branch that genuinely blocks the requested work. Avoid interrogating the user about implementation details the skill can decide safely; use the user's stated preferences and reasonable defaults.

## Preference record

When useful, publish a compact decision ledger alongside implementation planning; do not wait for confirmation when the user's requested action is already clear:

```text
Confirmed preferences
- TypeScript-first
- Expo for mobile
- Tailwind for the small web app

Recommended defaults accepted
- One deployable
- PostgreSQL

Configurable/unknown
- Production domain
- Email provider credentials

Prohibited
- Fabricated testimonials or metrics

Deferred
- Team accounts and billing
```

User preferences are constraints. If a preference creates a security, accessibility, legal, performance, or maintenance risk, explain the concrete consequence and ask for a decision; do not ignore it.

## Decision-complete project brief

Before code, the brief should answer:

- What is being built, for whom, and what measurable outcome defines release?
- What deployables exist, and who owns each boundary?
- What is the source of truth for data, content, identity, configuration, and translations?
- How do public pages render, cache, localize, and remain indexable?
- How do authenticated/offline/realtime flows fail and recover?
- What is collected, tracked, logged, or sent to third parties, under what consent?
- What is configurable rather than hardcoded?
- What tests and launch checks prove readiness?
- What is intentionally not being built?

## Build-plan output

Produce an ordered plan that includes:

1. Repository/bootstrap and environment validation.
2. Tokens, fonts, configurable theme, the locale/market foundation appropriate to the chosen localization mode, and base UI.
3. Routing/layout/providers and metadata.
4. Vertical feature slices and data boundaries.
5. Forms/auth/payments/analytics or other integrations when in scope.
6. Content/SEO/structured data and publication rules.
7. Security headers/CSP/privacy controls.
8. Tests, accessibility, performance, visual QA, CI/CD, deployment, migration, and rollback.
9. Documentation, content editing, configuration, and launch checklist.

The plan must name assumptions and prerequisites. It must not silently turn future scope into current infrastructure.
