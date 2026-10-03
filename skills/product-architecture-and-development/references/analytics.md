# Typed analytics

Add a shared layer only when several features or providers need consistent events.

```text
lib/analytics/
  types.ts  eventCatalog.ts  context.ts  track.ts  AnalyticsProvider.tsx  useTrackEvent.ts  index.ts
```

```ts
type AnalyticsEvents = {
  project_started: { source: "header" | "footer" | "pricing" };
  product_demo_viewed: { productId: string; format: "video" | "interactive" };
};
function trackEvent<Name extends keyof AnalyticsEvents>(name: Name, properties: AnalyticsEvents[Name]): void;
```

- Events name stable user or business outcomes, never selectors, component names, or layout. Version breaking semantic changes.
- One provider-agnostic boundary owns vendor setup, common context (app version, platform, locale, route, campaign, anonymous IDs, consent), and consent enforcement. Features own event names, typed properties, and triggers, and call the boundary—never a vendor. `trackEvent` works outside React; `useTrackEvent` only injects context.
- Read one-time state snapshots for event data; don't subscribe components just to track.
- Never send passwords, tokens, raw IPs, emails, precise location, free-form text, or health/financial data; document purpose, consent, retention, and region before any sensitive field.
- Lazy, SSR-safe init; resilient to blockers and offline; non-blocking failures; no duplicate events from rerenders or hydration; no second vendor for the same event without a product need.
- Test event creation separately from delivery.
