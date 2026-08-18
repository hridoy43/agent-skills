# Typed analytics

## Add only when useful

Create a global analytics layer when the product needs consistent events across multiple features or providers. Do not add tracking merely because infrastructure is possible.

For a multi-feature product, keep ownership in `lib/analytics/` (or the platform-equivalent shared infrastructure directory), not inside one feature. A React hook such as `use-track-event.ts` should be a thin adapter for components; it should not contain vendor setup, common-parameter policy, or business-specific state readers.

## Shape

```text
lib/analytics/
  analytics.types.ts
  event-catalog.ts
  context.ts
  track.ts
  analytics-provider.tsx
  use-track-event.ts
  index.ts
```

Use a typed catalog:

```ts
type AnalyticsEvents = {
  project_started: { source: "header" | "footer" | "pricing" };
  product_demo_viewed: { productId: string; format: "video" | "interactive" };
};

function trackEvent<Name extends keyof AnalyticsEvents>(
  name: Name,
  properties: AnalyticsEvents[Name],
): void;
```

Event names describe stable user/business outcomes. Do not encode CSS selectors, component names, or page layout into the contract.

Feature event helpers stay with the owning feature and call the shared boundary; do not call the vendor directly from a feature. A feature's analytics surface is its event names, its typed property shapes, and its triggering policy; the shared boundary owns vendor setup, common-parameter policy, and consent.

## Common context and feature parameters

Build common context once at the tracking boundary and merge it with event-specific properties. Common context may include app version, platform, locale, route, campaign attribution, anonymous/session identifiers, and consent state. Keep feature helpers separate for domain data such as checkout selection, plan, country, or product ID; read one-time state snapshots instead of subscribing a component solely to send an event.

Do not automatically send raw IP addresses, email addresses, precise location, passwords, tokens, free-form form text, or health/financial data. If a provider or legal requirement genuinely needs a field, document purpose, consent, retention, redaction, and regional restrictions before adding it.

## Rules

- Dispatch through one provider-agnostic boundary.
- Keep vendor adapters behind that boundary so replacing Firebase, AppsFlyer, Segment, PostHog, or a custom endpoint does not change feature call sites.
- Make `trackEvent` usable from non-React code; `use-track-event.ts` should only inject client context and return the stable function.
- Enforce consent before non-essential tracking.
- Make initialization lazy, browser-safe, and resilient to blocked scripts, ad blockers, offline state, and SSR.
- Never send passwords, tokens, free-form sensitive text, or unnecessary personal data.
- Define event owner, purpose, properties, trigger, and validation method.
- Prevent duplicate events from rerenders and hydration.
- Keep event names and required properties typed; reject unknown names and validate or normalize properties at the boundary.
- Keep analytics failure non-blocking.
- Avoid adding analytics vendors solely to collect the same event twice; fan out only when there is a documented product need.
- Test event creation independently of vendor delivery.
- Version breaking semantic changes instead of silently reusing a name.
