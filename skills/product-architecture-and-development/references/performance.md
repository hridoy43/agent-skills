# Performance

Ask of every resource and task: does it need to happen now? Check feature support by Baseline status: widely available freely, newly available with a fallback, otherwise enhancement only. Native and desktop apply the same principles to startup, lists, images, and the UI thread.

- Measure first: one hypothesis, one change, re-measure, keep or revert. Field data (CrUX or RUM with `web-vitals` attribution) over lab scores; LCP, INP, CLS at p75 against current thresholds, on a production build and a mid-range phone. Budgets (JS size, vitals) fail CI.
- Render content and SEO-critical UI on the server (static, streaming, server components); ship JS only for interactive parts.
- Only the real LCP resource gets high priority: discoverable in HTML, never lazy. Other media lazy, sized via `srcset`/`sizes` or the image pipeline, modern formats. `preconnect` only critical origins; preload only critical fonts.
- Navigation: Speculation Rules prefetch/prerender as an enhancement; stay bfcache-eligible (no `unload`, no needless `no-store`).
- INP: split long tasks and yield in handlers (`scheduler.yield()` with fallback); paint feedback before slow work; heavy compute in a Worker; diagnose with Long Animation Frames; never interleave layout reads and writes.
- Load on intent: overlays, galleries, editors, maps, and widgets via dynamic import; third parties after load or idle, immediately on early user intent; embeds behind a static facade. Long offscreen sections: `content-visibility: auto` with `contain-intrinsic-size`. No decorative animation during hydration.
- Layout stability: reserve space (`aspect-ratio`, dimensions); skeletons match final geometry and are plain CSS; metric-adjusted fallback fonts; server and first client render agree; never insert content above what the user is reading.
- Caching: hashed assets `immutable`, HTML revalidated; a service worker only for offline or install needs.
- Respect `Save-Data` and reduced motion; weak devices get static fallbacks.
