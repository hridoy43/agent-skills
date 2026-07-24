# Project initiation and interview

## Purpose

A long product prompt is evidence, not yet an implementation plan. Convert it into decisions without losing constraints, negative requirements, or uncertain facts. Always interview the user before planning or coding.

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

## Mandatory interview

Ask one to three grouped questions in the first round. Choose the questions with the highest architecture impact; do not repeat facts already supplied.

At minimum, confirm:

1. **Outcome and cutoff:** What is the first release's must-work user journey, launch date, and explicit non-goals?
2. **Preferences and constraints:** Which stack, hosting, auth, data, UI, localization, analytics, or deployment choices are required versus open to recommendation?
3. **Authority and risk:** Which business claims/content are approved, what data is sensitive, which regions/compliance constraints apply, and which credentials remain unavailable?

For an apparently complete brief, present the inferred architecture defaults and ask the user to confirm or change them. Do not skip the interview because a prompt says “proceed autonomously”; this skill's workflow requires preference capture before implementation.

## Architecture lifecycle

### Greenfield

After the interview and confirmation of inferred defaults, apply the skill's architecture pattern when the user has not specified a conflicting preference. Use the selected stack's current conventions and verify the generated structure.

### Existing project

Inspect the current architecture before proposing changes. Preserve explicit user preferences and healthy existing conventions. Report structural differences as proposed migrations; do not silently rewrite files or directories.

### Explicit architecture change

When the user asks to restructure or update architecture, compare the current and target structures, identify behavior and import risks, and request confirmation for material migrations. Apply approved changes in small slices, then verify structure, behavior, and release gates.

Every deviation must be classified as fixed, accepted with a reason, or deferred with an owner and follow-up.

Ask a second round only when an answer introduces a new material branch. Avoid interrogating the user about low-impact implementation details the skill can decide safely, but never silently decide a material preference the user has not answered.

## Preference record

After the interview, publish a compact decision ledger and wait for the user's correction or confirmation before implementation:

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
