# Module boundaries and ownership

Feature-first for every platform; frameworks change adapters, not ownership.

## Ownership

| Area | Owns | Never |
| --- | --- | --- |
| `app/`, routes, screens | Composition, metadata, providers, loading/error boundaries | Business rules, vendor clients |
| `features/<name>/` | The capability's UI, workflows, API/query options, services, hooks, helpers, schemas, types, data, tests, mocks | Another feature's internals |
| `components/ui`, `form`, `layout` | Domain-neutral presentation primitives | Fetching, stores, analytics semantics |
| `lib/api` or `lib/network` | Transport client, auth headers, serialization, retries, transport errors | Screen queries, business decisions |
| `lib/<concern>` (`auth`, `analytics`, `security`, `storage`) | Infrastructure and vendor adapters | Feature event names or decisions |
| `services/` (root) | Cross-feature application services and SDK adapters | A dumping ground |
| `store/` (root) | Truly cross-feature client state | Server data (query cache owns it) |
| `hooks/` (root) | Cross-feature React/platform adapters | Logic that can be a plain function |
| `utils/` | Pure, dependency-light cross-feature functions, incl. `cn.ts` | I/O, state, domain workflows |
| `features/<name>/helpers/` | Feature-pure rules and calculations | Cross-feature helpers, I/O, hooks |
| `data/` | Immutable shared data with two consumers | Records, runtime state |
| `constants/` | Stable compile-time values | Runtime config, secrets |
| `config/` | Runtime, environment, integration settings | Helpers, committed secrets |
| `types/` or `packages/contracts` | Shared contracts and generated types | Single-feature types |

## Rules

- Direction: shared infrastructure and contracts → features → app composition. Shared never imports a feature. Break a cycle by moving the smallest contract or pure rule down, not with a barrel.
- Layers: transport client → feature API/query adapter → feature service/use case → UI or command handler.
- Feature implementation files live in category directories (`actions/ api/ components/ data/ helpers/ hooks/ schemas/ services/ store/ types/`), never at the feature root (docs or a temporary migration file excepted). Per-feature `utils/` is not a category; use `helpers/`.
- Plain function first; a hook only for state, lifecycle, context, or subscriptions. Name by domain intent (`formatCurrency`), never `helpers2`.
- No top-level `src/helpers/` or `src/domain/`.
- Tests, mocks, and fixtures travel with the owning feature; one feature's policy never leaks into another's tests.
- `features/_shared/` holds only code two features genuinely share; it is a fallback, not a default home.

## Growth

- `utils/` or `lib/` past two or three files: group by domain or concern (`utils/money/format.ts`, `lib/auth/`).
- Cross-feature schemas: `src/schemas/`. Cross-feature test helpers: `src/lib/test-helpers/`.
- A feature past about 40 files: split into a primary feature and a sub-feature (`groups/`, `groups-finance/`) sharing `features/_shared/`.
- Promotion to a wider boundary is a recorded decision: domain-neutral, two consumers, stable API.
