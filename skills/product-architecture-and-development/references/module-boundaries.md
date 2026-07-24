# Module boundaries and ownership

Use feature-based organization where behavior belongs to a user or business capability. Use shared modules only when they have multiple real consumers and no feature-specific policy. This applies to web, mobile, desktop, backend, and multi-app repositories; the framework changes the adapters, not the ownership rules.

## Ownership map

| Area | Owns | Does not own |
| --- | --- | --- |
| `app/`, routes, screens | URL/navigation composition, metadata, providers, loading/error boundaries | Business rules, vendor clients, large feature implementations |
| `features/<name>/` | Feature UI, workflows, schemas, types, feature API/query options, feature services, feature hooks, feature utilities | Cross-feature infrastructure or another feature's internals |
| `components/ui`, `components/form`, `components/layout` | Domain-neutral reusable presentation and interaction primitives | Product-specific fetching, stores, analytics semantics |
| `lib/api` or `lib/network` | Axios/fetch client, auth headers, serialization, retry policy, transport errors | Screen-specific queries and business decisions |
| `features/<name>/api` | Endpoint functions, query keys/options, mutation adapters, response mapping for that feature | Creating a second HTTP client |
| `lib/services` or `services/` | Cross-feature application services, external SDK adapters, queues, storage, notifications | A dumping ground for every function |
| `features/<name>/services` | Feature/domain orchestration that combines APIs, state, and rules | Generic formatting or transport setup |
| `lib/store` or `store/` | Truly cross-feature client state and store configuration | Server data that belongs in query/cache state |
| `features/<name>/store` | Feature-local UI/workflow state | Global state without a real cross-feature consumer |
| `hooks/` | Cross-feature React/Expo adapters, lifecycle, platform context, or shared UI behavior | Business logic that can be a plain function |
| `features/<name>/hooks` | Feature-specific reactive behavior and feature API bindings | Generic hooks used by unrelated features |
| `lib/analytics`, `lib/auth`, `lib/security` | Provider boundaries and shared infrastructure policy | Feature event names or screen-specific decisions |
| `utils/` | Small pure, dependency-light cross-feature functions | API calls, mutable state, hidden side effects, or domain workflows |
| `data/` | Shared immutable, domain-neutral data with multiple real consumers | Database records, runtime server state, feature-only data |
| `constants/` | Stable compile-time values shared across features | Runtime configuration, environment secrets, database records |
| `config/` | Runtime, environment, integration, and app configuration | Pure helpers, domain workflows, secrets committed to source |
| `types/` or `packages/contracts` | Shared external contracts, schemas, generated types, and cross-app types | Types used by only one feature |

## Dependency direction

```text
platform adapters / shared infrastructure / contracts
                    ↓
          feature modules and domain rules
                    ↓
       routes, screens, and app composition
```

- Shared code never imports a feature.
- A feature imports shared code and its own internals.
- Features do not reach into another feature's private files; import a category public surface or move behavior to a neutral shared boundary. Feature roots do not require `index.ts`.
- Route/screen files compose; they should not become a second service or component directory.
- If a dependency direction would create a cycle, move the smallest shared contract or pure rule downward rather than adding a barrel export that hides the cycle.

## API, service, and cache separation

Keep these layers distinct:

```text
transport client → feature API/query adapter → feature service/use case → UI or command handler
```

- The transport client owns base URL, auth, headers, cancellation, serialization, and normalized transport errors.
- The feature API owns endpoint paths, query keys, request/response schemas, and cache invalidation for that feature.
- A service/use case owns orchestration and business decisions; it is useful when multiple entry points share a workflow.
- The UI owns presentation state and user intent, not raw HTTP details.
- TanStack Query or the platform-equivalent cache owns server state. Do not duplicate query data in a global store without a documented reason.

## Store rules

Before adding a store, classify the state:

1. URL/search state → router/query parameters.
2. Server state → query cache.
3. Form state → form controller/local state.
4. Ephemeral view state → component or feature-local state.
5. Cross-feature client state → a typed global store with explicit persistence and reset rules.

Persist only what must survive restart. Define hydration, migration, logout reset, privacy, and offline behavior before persistence.

## Hooks and utilities

- Prefer a plain function for deterministic logic, formatting, validation, mapping, or calculations.
- Use a hook only when the code needs reactive state, lifecycle, context, subscriptions, or a platform hook.
- Keep hooks stable and side-effect boundaries explicit; do not trigger network calls merely because a hook was imported.
- Name utilities by domain intent (`formatCurrency`, `buildCheckoutParams`), not vague buckets such as `helpers2`. Shared pure utilities belong in `src/utils/`; `lib/` is for infrastructure and adapters such as auth, database, API, and security.
- When a utility grows state, I/O, or orchestration, move it to the owning API, service, or adapter boundary.

## Feature directory enforcement

Feature-root implementation files are not the default. Place code in owned category directories:

```text
features/<feature>/
  data/          # feature-owned static data
  api/           # endpoint/query adapters
  actions/       # commands or server actions
  components/   # feature UI
  hooks/         # feature reactive behavior
  schemas/       # validation schemas
  services/      # feature/domain orchestration
  types/         # feature types
  utils/         # feature-pure utilities
  # no feature-root index required
```

Feature roots may contain documentation or a temporary migration file. Do not use root-level `index.ts`, `actions.ts`, `service.ts`, `utils.ts`, or component implementations by default.

Category directories may expose intentional public surfaces:

```text
features/<feature>/actions/index.ts
features/<feature>/components/index.ts
features/<feature>/schemas/index.ts
features/<feature>/services/index.ts
```

The major component exception is `features/<feature>/components/<MajorComponent>/index.tsx`, which exports the primary component through its directory.

Use `src/data/` only for immutable, domain-neutral data with multiple real consumers. Keep feature-only data in `features/<feature>/data/`. Database access belongs in the database adapter; runtime server data belongs in API/query/cache layers.

The shared Tailwind class helper may live at `src/utils/cn.ts` when project aliases and component tooling use `@/utils`. It is a shared UI utility, not business logic. Do not force shadcn's default `lib/utils` location onto a repository with a coherent `utils` alias.

Library-owned components stay isolated:

```text
src/components/shadcn/       # shadcn-owned primitives
src/components/magicui/      # Magic UI-owned components
src/components/<library>/    # other library-owned components
src/components/ui/           # project-owned wrappers/primitives
```

Do not modify library-owned base components for product behavior. Extend them through wrappers, composition, variants, or props. Feature-specific wrappers belong in the owning feature.

## Platform mapping

- Web: routes compose feature components; server/client boundaries stay explicit.
- Mobile: screens compose features; native permissions, storage, and platform APIs stay behind `lib` adapters.
- Desktop: renderer features call a typed command/service boundary; privileged filesystem and OS operations stay outside the UI.
- Backend: transport/controllers compose application services; domain rules remain independent of HTTP or database adapters.
- Multi-app: share contracts, domain rules, tokens, and infrastructure packages only where ownership and release cadence justify it.

## Growth rule

Start with the smallest owned boundary. Introduce a root directory only after a second consumer or a genuine cross-cutting policy appears. When a feature becomes large, split it into same-named category subdirectories with explicit category public indexes rather than moving files into generic global buckets.
