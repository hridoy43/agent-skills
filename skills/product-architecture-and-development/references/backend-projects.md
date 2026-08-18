# Backend and server projects

## Default recommendation

Start with a modular monolith unless independent scaling, deployment, ownership, or isolation is a current requirement. A well-bounded backend can later extract a worker or service without beginning with distributed-system cost.

Choose the runtime and framework from deployment constraints and team familiarity. For TypeScript servers, evaluate Hono, Fastify, NestJS, or framework-native routes; preserve a thin transport layer and keep business rules independent of the chosen HTTP framework. For Python, Go, Java, or another backend stack, apply the same boundaries with idiomatic equivalents rather than copying TypeScript filenames.

## Feature-oriented backend shape

```text
src/
  app/                       # composition root, server bootstrap, config wiring
  modules/                   # or features/; bounded business capabilities
    <module>/
      presentation/         # HTTP/RPC handlers, serializers, route schemas
      application/           # use cases, commands, queries, ports
      domain/                # entities, value objects, policies, pure rules
      infrastructure/        # repositories, provider adapters, persistence wiring
      jobs/                  # module-owned async handlers when needed
      module.types.ts
      index.ts               # explicit public surface
  lib/
    api/                     # shared client/server transport helpers
    auth/
    config/
    observability/
    security/
  db/
    migrations/
    seeds/
    client.ts
  contracts/                 # only when shared with clients or other apps
  workers/                   # process entry points, not business logic dumping grounds
  tests/
```

For a small API, begin with `app/`, one or two modules, `lib/`, and `db/`. Do not create every directory until a real owner and consumer exist. If the existing framework has a strong convention (for example, route handlers or package-specific modules), keep that convention and map the responsibilities rather than forcing this exact tree.

Cross-module pure helpers belong in `lib/`, not duplicated inside each module's own helpers. A pure rule that two modules genuinely share promotes to `lib/`; a pure rule that one module uses stays in that module. Promotion is a deliberate decision with a recorded reason, the same as on the frontend.

## Boundary rules

- Transport handlers parse and validate input, authorize the operation, call an application use case, and map the result to a response. They do not contain business workflows.
- Application use cases coordinate domain rules and ports. They define transaction boundaries and idempotency expectations.
- Domain code contains deterministic rules and should not import HTTP, ORM, queues, vendors, or environment variables.
- Infrastructure implements ports for databases, caches, queues, email, storage, payments, and external APIs. Keep vendor SDKs behind adapters.
- Repositories expose domain-shaped operations; do not leak ORM models through every layer.
- DTOs/contracts are versioned at the API boundary. Never expose database rows as an accidental public contract.
- Background jobs call the same application use cases as HTTP/RPC entry points and must define retries, deduplication, timeouts, dead-letter handling, and observability.

## Data and persistence

- Prefer PostgreSQL for relational product data unless access patterns justify another model.
- Use migrations as the source of truth; review destructive or locking migrations separately.
- Validate input at the boundary and enforce invariants again in the domain/database where possible.
- Define transaction, consistency, pagination, indexing, retention, backup, restore, and rollback behavior before production.
- Keep secrets and connection strings out of source control; validate configuration at startup.
- Use cache only for a measured read or latency need, with ownership, invalidation, freshness, and failure behavior documented.

## API contract and errors

- Choose REST, RPC, GraphQL, or event contracts based on consumer needs; do not add multiple styles without a boundary.
- Generate or share typed contracts when clients need them, but keep server domain types independent from transport DTOs.
- Normalize errors into stable codes, safe public messages, field errors, correlation IDs, and retryability. Never expose stack traces, SQL, provider secrets, or raw upstream payloads.
- Make authentication, authorization, rate limits, request size limits, timeouts, cancellation, idempotency, and CORS/CSRF behavior explicit.
- Treat webhooks and retried commands as duplicate-prone; verify signatures and make handlers idempotent.

## Security and operations

- Apply least privilege to database roles, service accounts, queues, storage, and outbound network access.
- Log structured events with request/correlation IDs, latency, outcome, and safe identifiers; redact secrets and personal data.
- Add health/readiness checks, metrics, traces, error reporting, and graceful shutdown appropriate to the deployment.
- Separate public, internal, and administrative endpoints. Protect administrative actions with explicit authorization and audit records.
- Test authorization matrices, validation, transaction rollback, retry behavior, migration safety, and failure recovery—not only happy-path handlers.

## When to split services

Extract a service or worker only when a bounded module has an independent scaling profile, deployment cadence, reliability boundary, compliance boundary, or team ownership. Define the contract, data ownership, observability, local development story, and failure mode before extraction. Do not split a CRUD API into microservices to solve an unmeasured organization problem.

## Backend acceptance checklist

- Module boundaries and dependency direction are documented.
- Input, auth, authorization, error, and idempotency behavior are tested.
- Migrations, backups, retention, and rollback are defined.
- Async work has retry and dead-letter behavior.
- Secrets, logs, CSP/CORS/CSRF, rate limits, and outbound access are reviewed.
- API contracts and status/error semantics are stable enough for clients.
- Observability can answer who/what/when/where/why without exposing sensitive data.
