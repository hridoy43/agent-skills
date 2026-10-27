# Mobile projects

Start from the primary task, the user's likely state, and the first valuable outcome. Follow the platform's conventions before adding cross-platform abstraction; this applies to native iOS/Android, Expo/React Native, Flutter, KMP, and mobile web. Ask only about unresolved material choices: devices, orientation, minimum sizes; navigation, deep links, back behavior; offline, sync, and conflict rules; permissions and when to ask; store, OTA, crash reporting, privacy, release.

## Default shape

Stack choice: [stack-selection.md](stack-selection.md). Expo Router shape:

```text
app/                       # Expo Router routes only
src/
  features/<feature>/
  components/{ui,form,layout}/
  lib/{api,analytics,auth,storage}/
  styles/ or theme/
  config/
```

- Build a typed semantic theme (tokens, provider/hook, platform color mapping) before feature UI. Tailwind binding only if chosen: keep an existing one, else the one with stable support for the project's Tailwind version (Uniwind, NativeWind).
- Share tokens, contracts, schemas, query config, and domain logic across platforms; share presentation only when it is genuinely native-friendly. Prefer native controls for frequent interactions.
- Companions (install commands in `check-companions.mjs`): Expo skills; one `react-native-best-practices` skill; profiling skills; a device-control MCP for simulator QA and profiling (for example Argent); `maestro-mobile-testing` for E2E, else `find-skills` to compare frameworks. Keep E2E journey-focused and risk-based.

## Interaction and accessibility

- Primary action in the thumb zone; platform-appropriate navigation, gestures, sheets, controls, typography, and haptics ([design-motion-media.md](design-motion-media.md)).
- Respect safe areas, dynamic type, reduced motion and transparency, screen readers, contrast, focus order, and touch targets.
- Design loading, empty, error, offline, permission-denied, success, and destructive-confirm states before polishing the happy path. Search is useful on first open.
- Motion shows continuity and feedback, stays interruptible, and has a reduced-motion path.
- Headers, tab bars, sheets, modals, FABs, and safe areas: [mobile-chrome.md](mobile-chrome.md).

## Navigation

- One navigator shape per surface (drawer-, tab-, or stack-rooted with explicit modals); if shapes start mixing, rewrite instead of nesting more navigators.
- Modals use the native presentation (swipe-down dismiss, matching chrome).
- A drawer, tab, or top-tab leaf needs a stack host to show a header; header options on a hostless leaf are silently dropped. Check each route's parent layouts once.
- Deep links, free first: Universal Links and App Links through the router's linking config cover installed apps; for links that survive install, use the Android Play Install Referrer and restore the saved intent after sign-in. Suggest a hosted or self-hosted deferred-link service only when these fall short, with the user's approval; clipboard and fingerprint matching need privacy disclosure.
- Top-tab links switch tabs with the navigator's tab primitive, never push.
- Drive tab indicators from the navigator's focus index plus window width, not lagging layout measurements.

## Data, performance, release

- Decide offline expectations before persistence. TanStack Query for server state; persisted caches need freshness, invalidation, privacy, and migration rules. Secrets go in secure storage, never AsyncStorage.
- Profile before optimizing: virtualization, image sizing and caching, renders, JS/native traffic, startup, transitions, battery, memory, payloads. Test on a low/mid device and one physical device per platform.
- Lists: start with the platform list behind a feature-owned interface; adopt a specialized list only after a benchmark on real data and devices (row variability, grids, chat anchoring, live updates, recycling state resets, architecture support). Keep it swappable; never install or replace one automatically.
- Before launch: permissions requested at the related action, deep links, push, privacy disclosures, crash reporting, update strategy, store assets, staged rollout.
