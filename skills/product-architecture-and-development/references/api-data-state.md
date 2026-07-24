# API, data, and state

## REST client baseline

Before implementing the first REST request, create one shared Axios client:

```ts
export type ApiError = {
  code: string;
  message: string;
  status?: number;
  details?: unknown;
};
```

The client owns base URL, timeout, credentials/auth attachment, safe retry policy if any, response/error normalization, and cancellation. Feature API files own endpoints and request/response schemas.

Do not add a parallel Axios client per feature. Do not put query caching inside interceptors.

## Exceptions

Do not install Axios for an offline-only app with no HTTP boundary. Do not wrap a fully typed RPC client only to satisfy a convention. Record why the alternative preserves typed errors, cancellation, authentication, and testability.

## TanStack Query

Use it for interactive client-side server state:

- Feature-owned query keys or query-option factories.
- Explicit `staleTime` based on product freshness, not a universal value.
- Invalidate or update affected keys after mutations.
- Model loading, empty, error, success, and background refresh states.
- Cancel obsolete requests when navigation or input changes.
- Prefetch only likely next interactions.

For API-heavy products, make caching part of the first vertical slice rather than a later optimization. Define freshness by resource, invalidate or update affected queries after mutations, and expose background-refresh state without replacing usable cached content.

## Error handling boundary

Use two layers:

- **Global transport/application layer:** the Axios client normalizes status, error codes, request IDs/correlation IDs, cancellation, auth expiry, offline/network failures, and safe retry policy. A provider-level error reporter and application error surface may observe these failures without rendering duplicate notifications.
- **Feature layer:** endpoint/query owners map known errors to recovery actions, field errors, empty states, permissions, and retry UI. Never show raw server messages or sensitive details by default.

Keep error reporting non-blocking, redact payloads, avoid retry storms, and test duplicate suppression, cancellation, auth expiry, offline recovery, and background-refresh failure.

Use framework-native server caching for server-rendered reads. Hydrate only when client interaction needs the same data.

## State classification

1. URL state: filters, pagination, shareable view state.
2. Server state: API-backed data; use query/cache tools.
3. Form state: keep within form boundary.
4. Local UI state: component/reducer.
5. Cross-tree client state: add a small store only when context/local composition is insufficient.

## Client-store decision rule

State classification comes before choosing a library. Do not put server data, URL state, form state, or ordinary component UI state into a global store.

For React web, mobile, or desktop projects, prefer **Zustand** when a small cross-tree client store is justified. Keep stores typed, feature-owned, narrowly scoped, independently testable, and explicit about persistence. Reserve an app-level `stores/` directory for genuinely global concerns such as auth metadata, theme, locale, or cross-feature preferences; keep checkout, filters, dialogs, and workflow state under their owning feature when possible.

For large teams, complex state transitions, strict event/debugging requirements, or an existing ecosystem, evaluate Redux Toolkit or a state-machine approach instead. For non-React projects, choose the platform's smallest actively maintained equivalent after checking its current conventions. Do not install a state library solely to satisfy this document.

When a store is added, document: why local state or context is insufficient, whether it is persisted, its reset behavior on logout/navigation, its hydration strategy, and the tests covering selectors and transitions.

## Validation and types

Generate or share types from the source of truth where possible. Validate untrusted payloads at network, storage, environment, and user-input boundaries. Keep transport DTOs separate from domain models when their lifecycles differ.
