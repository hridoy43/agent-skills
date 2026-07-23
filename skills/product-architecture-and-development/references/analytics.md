# Typed analytics

## Add only when useful

Create a global analytics layer when the product needs consistent events across multiple features or providers. Do not add tracking merely because infrastructure is possible.

## Shape

```text
lib/analytics/
  analytics.types.ts
  event-catalog.ts
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

## Rules

- Dispatch through one provider-agnostic boundary.
- Enforce consent before non-essential tracking.
- Never send passwords, tokens, free-form sensitive text, or unnecessary personal data.
- Define event owner, purpose, properties, trigger, and validation method.
- Prevent duplicate events from rerenders and hydration.
- Keep analytics failure non-blocking.
- Test event creation independently of vendor delivery.
- Version breaking semantic changes instead of silently reusing a name.
