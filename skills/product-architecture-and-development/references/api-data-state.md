# API, data, and state

## Transport

Pick the framework-standard client before the first integration; Axios only for REST needs, existing use, or preference. No client for offline-only apps; never wrap a typed RPC or generated client. One shared client owns base URL, timeout, auth, credentials, safe retries, cancellation, and error normalization:

```ts
export type ApiError = { code: string; message: string; status?: number; details?: unknown };
```

Feature API files own endpoints and schemas. No per-feature clients; no caching inside interceptors.

## Errors

- Global layer: normalize status, codes, correlation IDs, cancellation, auth expiry, offline, and retries; report non-blockingly without duplicate notifications.
- Feature layer: map known errors to recovery actions, field errors, empty or permission states, and retry UI; never show raw server messages.
- Test duplicate suppression, cancellation, auth expiry, offline recovery, and background-refresh failure; avoid retry storms.

## Server state

TanStack Query (or the platform equivalent) for interactive server state: feature-owned query keys or option factories, `staleTime` per resource freshness, invalidate or update after mutations, model loading/empty/error/background-refresh, cancel stale requests, prefetch only likely next steps. API-heavy products build caching into the first slice. Server-rendered reads use framework caching; hydrate only what the client needs.

## Client state

Classify first: URL state → router; server state → query cache; form state → form; local UI → component or reducer; cross-tree client state → a small store only when context won't do.

- React: Zustand for a justified store—typed, feature-owned, narrow. App-level `stores/` only for auth metadata, theme, locale, or cross-feature preferences. Redux Toolkit or a state machine for large teams, complex transitions, or strict event debugging.
- Document why local state is not enough, persistence (only what must survive restart), hydration, migration, logout reset, privacy, and tests.
- Server data enters a store only when two features write the same canonical state.

Generate or share types from the source of truth; validate payloads at network, storage, env, and input boundaries; keep DTOs apart from domain models when lifecycles differ. Forms: [forms-and-validation.md](forms-and-validation.md).
