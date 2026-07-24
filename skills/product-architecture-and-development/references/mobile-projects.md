# Mobile projects

## Product and platform decisions

Start with the user's primary task, the expected emotional state, the first valuable outcome, and the screen or flow that proves it. Design for the selected platform's conventions before adding a cross-platform abstraction. These principles apply to native iOS, Android, Expo/React Native, Flutter, Kotlin Multiplatform, and mobile web; use the stack's official UI and navigation guidance for implementation details.

Confirm before implementation:

- phone, tablet, foldable, orientation, and minimum supported sizes;
- navigation model, deep links, back behavior, keyboard, system bars, safe areas, and accessibility settings;
- online, offline, reconnecting, stale, sync, conflict, and retry expectations;
- permissions, notifications, biometrics, camera/location/media, and the moment each permission is requested;
- app-store, OTA/update, crash reporting, privacy disclosure, and release constraints.

## Default shape

When no stack is specified and Better-T-Stack supports the required mobile combination, use its current stable Expo/React Native option. Otherwise prefer Expo + React Native + Expo Router unless native-only capabilities or an existing native codebase justify another approach.

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

For mobile E2E, prefer an installed `maestro-mobile-testing` companion when its YAML flows, semantic selectors, cross-platform coverage, and CI integration fit the project. If it is unavailable, use `find-skills` to compare the existing framework with Detox, Appium, XCTest, Espresso, Flutter integration tests, or another platform-native option. Keep E2E flows risk-based and journey-focused; do not add a testing framework only because it is popular.

Create a typed semantic theme (`tokens`, provider/hook, platform color mapping) before feature UI. Components consume roles rather than raw color constants. Use NativeWind only when selected during the interview; otherwise use the platform's native styling approach with the same token ownership.

## UI boundaries

Share tokens, contracts, schemas, query configuration, and domain behavior across platforms. Share presentation components only when the implementation is genuinely native-friendly. Prefer native controls and platform conventions for high-frequency interactions.

## Interaction and accessibility

- Keep the primary action reachable in the thumb zone without making important secondary actions impossible to find.
- Use platform-appropriate navigation, gestures, sheets, dialogs, controls, icons, typography, and haptics.
- Respect safe areas, dynamic type/text scaling, reduced motion, reduced transparency, screen readers, contrast, focus order, and minimum touch targets.
- Prefer direct visibility for high-value content; use progressive disclosure for detail, not to hide required task information.
- Design loading, empty, error, offline, permission-denied, success, and destructive-confirmation states before polishing the happy path.
- Make search useful on first open with recent, suggested, or explanatory content when the product supports search.
- Use motion for state continuity and feedback; keep it interruptible and nonessential, with a reduced-motion path.

## Data and offline behavior

Define online/offline expectations before selecting persistence. TanStack Query can manage server state; persistent query caches require explicit freshness, invalidation, privacy, and migration rules. Store secrets in secure storage, not plain async storage.

## Performance

Profile before optimizing. Watch list virtualization, image sizing/caching, expensive renders, JS/native boundary traffic, startup work, navigation transitions, battery, memory, and network payloads. Test on representative low/mid-tier hardware and at least one physical device per supported platform. For long lists, use the platform's virtualized list and stable item rendering; for media, reserve dimensions and load the smallest appropriate asset. Do not choose a third-party list implementation from memory or popularity alone.

### Data-driven list selection

Treat list rendering as a replaceable implementation behind a feature-owned list interface. Start with the platform primitive, then measure representative data on supported devices before adopting a specialized implementation. Evaluate row-height variability, grids, media weight, pagination direction, chat anchoring, live updates, architecture mode, framework compatibility, native build requirements, memory, frame stability, accessibility, and item-local state behavior. Recheck maintenance, release activity, license, migration path, and the cost of reverting at decision time.

Compare currently maintained candidates—including the platform list and community implementations—using a small benchmark or existing production evidence. Recycling may require explicit state-reset discipline; non-recycling or JavaScript-first implementations may trade native integration for portability or dynamic-layout behavior. These are hypotheses to verify, not permanent rules. Keep the chosen implementation isolated so it can be replaced without changing feature callers. Do not install, update, or replace a list library automatically; preserve a healthy dependency unless measured evidence or a confirmed requirement justifies migration.

## Release

Plan permissions, deep links, push notifications, privacy disclosures, crash reporting, update strategy, store assets, and staged rollout before launch. Do not request permissions before the related user action.
