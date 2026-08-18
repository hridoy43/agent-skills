# Production foundations

Use this as a decision checklist, not a command to add every subsystem.

## Configuration and environments

- Centralize public product/brand configuration and validate environment variables at startup.
- Separate local, test, preview/staging, and production behavior without scattering `NODE_ENV` checks.
- Commit an example environment file containing names and documentation, never secrets.
- Define secret ownership, rotation, least privilege, and CI/deployment injection.
- Keep uncertain business values configurable rather than repeated in components.

## Identity and authorization

When accounts exist, decide identity provider, session/token model, account recovery, verification, tenancy, roles/permissions, service accounts, admin/support access, and audit needs.

Authenticate at the boundary and authorize every resource operation. Scope data queries by the authorized tenant/owner rather than fetching broadly then filtering. Add negative tests for horizontal and vertical privilege escalation.

## Persistence

Define source of truth, schema ownership, migrations, seed/fixture strategy, indexes, retention, deletion/export, backups, restore drills, data residency, encryption, and rollout compatibility.

Use expand/contract migrations for zero-downtime releases. Never couple irreversible data destruction to an ordinary app deploy. Record rollback behavior.

## Integrations

For each external provider—payments, email, SMS/push, files, search, maps, CMS, calendar, AI, CRM—record:

- owner, purpose, data sent/received, privacy basis, credential scope;
- adapter boundary and normalized error model;
- idempotency, retries/backoff, rate limits, timeout/cancellation;
- webhook signature verification, deduplication, ordering, and replay;
- sandbox/test mode, outage fallback, monitoring, and replacement path.

Do not add an integration until its user journey and failure behavior are defined.

## Background and realtime work

Use request/response first. Add a durable job queue only when work must survive request timeouts, be retried independently, or be scheduled. Define idempotency, visibility timeout, retry/dead-letter policy, concurrency, ordering, and operator recovery.

Add realtime only when freshness requires push. Define reconnect, missed-event recovery, authorization, presence semantics, and fallback polling.

## Content and publication

Choose typed files/MDX for simple developer-owned content; add a CMS only when editorial workflow, permissions, preview, localization, or publishing independence justify it. Define schemas, draft/review/publish, scheduling, preview, version history, asset ownership, broken-reference behavior, and migration path.

Never publish placeholders, drafts, unapproved translations, or invented claims as finished content.

## Observability

Define structured logs, request/correlation IDs, error monitoring, key metrics, traces when useful, privacy scrubbing, sampling, alert ownership, dashboards, service-level signals, and incident response.

Measure product outcomes separately from operational telemetry. Do not log secrets or full sensitive payloads. A monitored failure needs an owner and recovery action.

Every feature owns its log surface, its metric names, and its alert owner. A correlation identifier set at the transport boundary travels end to end so a single incident can be reconstructed from the entry point through the feature that handled the failure. The shared observability boundary owns identifiers, sampling, scrubbing, and transport; each feature owns the events that describe its own behavior.

## Feature delivery

Prefer small releases and backward-compatible changes. Add feature flags only when staged rollout, kill switches, experiments, or incomplete cross-deploy work justify their lifecycle cost. Every flag needs an owner and removal condition.

For risky releases define canary/staged rollout, health checks, migration order, rollback artifact, and responsible person.

## CI/CD and repository hygiene

CI should run format check, lint, typecheck, tests, production build, security/dependency checks, and any schema/content/locale validation. Protect the default branch and keep deployment provenance.

Document:

- local setup and commands;
- environment variables and integrations;
- architecture and decision records;
- content/translation editing;
- database migrations and rollback;
- deployment and domain/DNS steps;
- monitoring and incident response;
- launch and post-launch checklist.

## Legal and privacy truthfulness

Keep legal entity, address, registration, certifications, compliance, testimonials, metrics, partnerships, client relationships, and product claims configurable until verified. Privacy/terms copy must reflect actual data and providers and receive appropriate review before launch.
