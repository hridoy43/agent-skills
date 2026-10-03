# Project initiation

A long product prompt is both requirements and direction: turn it into decisions without losing constraints, negative requirements, or uncertainty.

## Extract

1. Product truth: name, category, business model, legal status, geography, maturity.
2. Users and buyers: audiences, jobs, authority, devices, locales, access needs, exclusions.
3. Positioning and content: message, tone, proof, required and forbidden claims, sources, publish rules.
4. Scope: platforms, routes/screens, workflows, roles, states, search, notifications, offline/realtime, admin.
5. Data and integrations: source of truth, API style, auth, payments, email, files, search, AI, analytics, CMS.
6. Quality: accessibility, SEO, performance, security/CSP, privacy/consent, observability, support matrix.
7. Design: references, desired and undesired feel, tokens, UI libraries, motion, icons.
8. Delivery: timeline, budget, hosting, environments, CI/CD, migration, launch, ownership.
9. Deliverables and future scope (enable, don't build).

Greenfield: also record generator command, resolved versions, runtime, package manager, and lockfile. Classify every item with the ledger states from `SKILL.md`.

## Interview

Only for unresolved, material decisions, one to three grouped questions; skip it when the prompt already decides or says to proceed:

1. First-release must-work journey, date, and non-goals.
2. Required vs open stack, hosting, auth, data, UI, localization, analytics, deployment.
3. Approved claims, sensitive data, regions and compliance, unavailable credentials.

Ask a second round only when an answer opens a new blocking branch. If a preference creates a security, accessibility, legal, performance, or maintenance risk, state the consequence and ask.

## Decision-complete brief

What is built, for whom, and what outcome defines release? Which deployables and owners? Sources of truth for data, content, identity, config, translations? How public pages render, cache, localize, and stay indexable? How auth, offline, and realtime flows fail and recover? What is tracked or shared, under what consent? What is configurable? Which tests and launch checks prove readiness? What is out of scope?

## Build plan

1. Bootstrap and env validation. 2. `DESIGN.md`, then tokens, fonts, and theme implementing it, locale foundation, base UI. 3. Routing, layouts, providers, metadata. 4. Vertical feature slices with data boundaries. 5. Forms, auth, payments, analytics, integrations in scope. 6. Content, SEO, structured data. 7. Security headers, CSP, privacy. 8. Tests, accessibility, performance, visual QA, CI/CD, deploy, rollback. 9. Docs and launch checklist. Name assumptions; never turn future scope into current infrastructure.
