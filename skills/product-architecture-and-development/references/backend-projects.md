# Backend projects

Start with a modular monolith; extract a worker or service only for an independent scaling, deployment, reliability, compliance, or team boundary, after defining its contract, data ownership, observability, local dev, and failure modes. TypeScript: Hono, Fastify, NestJS, or framework-native routes behind a thin transport layer. Other languages keep the same boundaries with idiomatic names.

```text
src/
  app/                      # bootstrap, config wiring
  modules/<module>/         # or features/
    presentation/           # handlers, serializers, route schemas
    application/            # use cases, ports, transactions
    domain/                 # entities, value objects, pure rules
    infrastructure/         # repositories, provider adapters
    jobs/                   # module-owned async handlers
    index.ts                # explicit public surface
  lib/{api,auth,config,observability,security}/
  db/{migrations,seeds}/  db/client.ts
  contracts/                # only when shared with clients
  workers/                  # process entry points only
```

Small APIs start with `app/`, one or two modules, `lib/`, and `db/`. Keep strong framework conventions and map responsibilities onto them. A pure rule two modules share moves to `lib/`.

## Boundaries

- Handlers parse, validate, authorize, call one use case, and map the result—no workflows.
- Use cases own orchestration, transactions, and idempotency. Domain code imports no HTTP, ORM, queue, vendor, or env.
- Vendor SDKs sit behind infrastructure adapters; repositories return domain shapes, not ORM models. DB rows are never a public contract; DTOs are versioned.
- Jobs call the same use cases and define retries, dedupe, timeouts, dead-letter, and observability.

## Data and API

- PostgreSQL by default; migrations are the source of truth; review destructive or locking migrations separately. Enforce invariants again in domain and DB.
- Define transactions, consistency, pagination, indexes, retention, backup, restore, and rollback before production. Cache only for a measured need, with invalidation and failure behavior.
- One API style per boundary (REST, RPC, GraphQL, events). Errors: stable codes, safe messages, field errors, correlation IDs, retryability—never stack traces, SQL, secrets, or raw upstream payloads.
- Make authn, authz, rate limits, size limits, timeouts, cancellation, idempotency, and CORS/CSRF explicit. Webhooks: verify signatures, handle duplicates.

## Operations

Least privilege for DB roles, service accounts, queues, storage, and egress. Structured logs with correlation IDs and redaction; health and readiness checks, metrics, traces, error reporting, graceful shutdown. Separate public, internal, and admin endpoints; audit admin actions. Test authorization matrices, validation, rollback, retries, migrations, and failure recovery—not just happy paths.
