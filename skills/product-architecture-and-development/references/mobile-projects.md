# Mobile projects

## Default shape

Prefer Expo + React Native + Expo Router unless native-only capabilities or an existing native codebase justify another approach.

```text
app/                         # Expo Router routes only
src/
  features/<feature>/
  components/{ui,form,layout}/
  lib/{api,analytics,auth,storage}/
  styles/ or theme/
  config/
```

Use official Expo skills for routing, native UI, modules, deployment, updates, and upgrades. Use native profiling and React Native best-practice skills for performance work. Apply a Code-with-Beto skill only when its exact workflow fits.

Create a typed semantic theme (`tokens`, provider/hook, platform color mapping) before feature UI. Components consume roles rather than raw color constants. Use NativeWind only when selected during the interview; otherwise use the platform's native styling approach with the same token ownership.

## UI boundaries

Share tokens, contracts, schemas, query configuration, and domain behavior across platforms. Share presentation components only when the implementation is genuinely native-friendly. Prefer native controls and platform conventions for high-frequency interactions.

## Data and offline behavior

Define online/offline expectations before selecting persistence. TanStack Query can manage server state; persistent query caches require explicit freshness, invalidation, privacy, and migration rules. Store secrets in secure storage, not plain async storage.

## Performance

Profile before optimizing. Watch list virtualization, image sizing/caching, expensive renders, JS/native boundary traffic, startup work, and navigation transitions. Test on representative low/mid-tier hardware.

## Release

Plan permissions, deep links, push notifications, privacy disclosures, crash reporting, update strategy, store assets, and staged rollout before launch. Do not request permissions before the related user action.
