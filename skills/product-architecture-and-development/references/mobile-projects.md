# Mobile projects

## Product and platform decisions

Start with the user's primary task, the expected emotional state, the first valuable outcome, and the screen or flow that proves it. Design for the selected platform's conventions before adding a cross-platform abstraction. These principles apply to native iOS, Android, Expo/React Native, Flutter, Kotlin Multiplatform, and mobile web; use the stack's official UI and navigation guidance for implementation details.

Clarify before implementation only when the prompt leaves a material mobile decision unresolved:

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

## Native chrome ownership

For architectural decisions generally, follow the rules in this skill. When this skill is silent on a topic, fall back to the cross-platform industry standard, then the chosen framework's current official guidance. The section that follows is the one place where the rule inverts: chrome is the rare surface where the project may need to outrun the standard primitive on purpose, in service of a feature, a design moment, a motion language, or a wow signature the product is built around. Everything else in the document is read as "skill first, standard second."

This section covers three chrome families: top chrome (status-bar through to title row), bottom chrome (home indicator through to FAB / tab bar), and overlay chrome (modals, sheets, popovers). Each one follows the same ownership rules below; the differences are called out where they exist.

One chrome owner per screen dimension. The top edge (status bar / Dynamic Island / notch / gesture bar), the bottom edge (home indicator / gesture pill / tab bar / Android navigation bar), and any overlay surface each have exactly one owner. A wrapper that absorbs the inset for the top edge cannot also delegate that absorption to a wrapper underneath. Pick an owner based on what kind of chrome the screen actually shows.

- **Native chrome present.** The platform's system header (or tab bar) absorbs the inset for that edge. The screen's content wrapper must opt out of the inset the chrome already absorbed.
- **Custom chrome present.** The custom header (or banner) is the owner. It absorbs the inset itself; the content wrapper underneath opts out.
- **No chrome.** The content wrapper absorbs the inset itself.

Chrome ownership must be declared once per dimension and must be visible in the layout file or the chrome primitive. A layout that silently applies an inset twice (or zero times) is a bug, even if the visible result looks plausible — it will drift on devices with different insets, in dark mode, and under rotation.

### Header shapes by role

The "header" the product designs is rarely a single thing; it is one of a small set of roles, each with its own industry-standard default. Before inventing a header, name the role. If the standard default fits, use it. If it does not, customize deliberately and capture the requirement.

- **Navigation header.** Standard platform bar, leading back or hamburger, centered title, trailing overflow. This is the default for almost every screen that just needs to identify itself and offer a primary or overflow action. Use the platform primitive; override a slot only when you need to.
- **Identity header.** A header that carries the screen's identity — group photo, avatar, brand mark, or the subject of the screen at large title weight. This is the first role where the project may legitimately replace the standard primitive; the chrome is doing product work, not just navigation work.
- **Instruction header.** A header-shaped surface card on an empty or onboarding screen that explains what to do here (the first thing to add, the first person to invite, the first setting to choose). Often paired with a primary action button below the explanation. The platform bar above it stays standard.
- **Form-screen header.** Leading dismiss (close or back), centered title, trailing primary action (the verb that commits the form — confirm, create, send, save, next). The platform bar stays standard; only the title and trailing action slot change. Title must remain stable while the user types.
- **Segmented-scene header.** A header above a pill-tab row that switches between sibling scenes of one parent surface. The platform bar may host the title; the segmented control usually sits directly under it. Tab switches must use the scene-switch primitive, not a generic push.
- **Hero header.** A header that exists to make the first viewport a designed moment — a photo, a gradient, a translucent surface under which the screen's hero content scrolls. This is the most expensive role to take on and the easiest to drift on; only commit to it when the design moment is the product.

### When the chrome grows: large / hero / multi-pane

Some screens need more than a navigation header. The chrome still has one owner per dimension; what changes is how the chrome participates in scroll, layout, and identity.

- **Large title.** The standard bar collapses from a tall title to a compact title as the user scrolls. The platform owns this animation; configure it on the bar (e.g. `prefersLargeTitles` / large-title header), do not rebuild the animation in JS. If the screen does not use the platform primitive, the project must own the collapse: measure the title height, drive the bar height with the scroll offset, and never let the title overlap content underneath.
- **Translucent / scroll-edge effects.** When content scrolls under a translucent chrome, configure the chrome's scroll-edge appearance (surface tint, blur, shadow, edge effect) on the platform primitive; do not rely on a screenshot of the same color and hope. On recent platform versions the OS may also apply its own scroll-edge tint; treat the OS as the source of truth and only layer custom tint where the OS leaves room.
- **Multi-pane layout.** On tablet, foldable, and desktop-class targets, the chrome may belong to a single pane (the detail pane of a split view) or to the whole window. Choose one owner and let the other panes absorb their own insets. A split view with two top chromes is usually a sign the design needs a single shared chrome or two genuinely independent surfaces.
- **Scroll-driven fade or parallax.** Drive the fade / parallax from the same scroll offset the chrome's collapse uses. A separate measurement for the fade and a separate measurement for the collapse will drift on rotation, dynamic type, and large-title changes. Prefer the platform's header-height signal over re-measuring with an on-layout callback; the platform's value is the source of truth and survives the cases the manual measurement will miss.

### Header slot conventions

For chrome specifically, the rule is: industry-standard first, customize when the project needs it. When the platform exposes a header configuration API (a native system header or a stable composition header), prefer it over hand-rolled custom headers — native headers run on the platform's UI thread, handle safe-area automatically, and animate consistently with the platform's push / pop transitions. The standard primitive is the default, not a veto on customization. Reach for a custom header — and document the requirement that drove the choice — when any of the following holds:

- **A feature the standard primitive cannot express.** A specific interaction model, state machine, or data flow that the platform's header cannot host (for example, a multi-step capture flow that has to survive app restarts and partial sync — the platform's modal chrome is fine, but the chrome that wraps the form itself is project-owned).
- **A design moment the standard chrome cannot deliver.** A hero surface where content flows under a translucent header, a custom pull-to-refresh with project-specific motion, a section whose visual identity is the product's reason for existing. These are not decorative preferences — they are the *thing the product ships*, and the standard chrome must be replaced where the design demands it.
- **A modern motion or interaction language the standard primitive has not caught up to.** The platform may have added or removed APIs; the framework may have lagged behind a platform release. A project-built chrome that runs on the same primitives the platform does (the native driver, the platform gesture stack) is the right shape — it just lives one layer above the platform until the platform catches up.
- **A wow effect that is the product's signature.** Some products earn their retention from a single chrome interaction — a tactile send, a satisfying settle, a card that lands with weight, a transition that no competitor has shipped yet. That signature is not optional decoration; it is a feature, with the same engineering rigor as any other feature. Build it on top of the standard primitive where you can, replace the standard primitive where you must, and document the replacement so the next contributor does not regress it.

On newer platform versions the chrome surface itself may be tinted by the OS (translucent material, surface tint, scroll-edge effects). Treat the platform's chrome surface as the source of truth for color and elevation; the project overrides the chrome only when its visual identity is the product, and the override reads the platform's surface as its baseline.

The cost discipline still applies — every device, OS update, accessibility tool, bug report, and future contributor has to understand the choice — but it is a discipline on the *implementation* of the customization, not a veto on the customization itself. A project-built header that owns its chrome dimension, communicates its height downstream, marks itself as an escape hatch in JSDoc, and survives rotation / dynamic type / dark mode is a defensible customization. The same header shipped undocumented, double-applying safe-area, and breaking under large-title collapse is not. The justification is the durable part; the implementation can change.

Prefer slot overrides over a full custom header when the only thing the screen needs is a back button, a single trailing control, a translucent background, or a custom title. Building a fully custom header that replaces the native one is justified when the route lives under a chrome-less navigator, or when the design demands it — but the threshold for *replacing* the native chrome is higher than the threshold for *overriding a slot* on it. For form screens, the slot that most often gets overridden is the trailing primary action; the leading dismiss and centered title stay on the platform primitive.

When configuring a custom header or a translucent / large-title / search-bar surface via a composition API:

- Place composition children (toolbar slots, title overrides, search-bar slots, header element overrides) **inside** the screen element that owns them — never as siblings. A sibling placement is silently dropped by every current platform composition API, with no warning.
- For translucent chrome, the platform no longer reserves the top space above the content; the screen is responsible for adding its own top offset. Decide explicitly whether the offset comes from the platform's header-height context or from the safe-area hook, and pick one source.
- A custom header that owns its chrome dimension must communicate its rendered height downstream to anything that places itself relative to the header — content, overlay layers, parallax surfaces. The header either passes its computed height as a prop, exposes it through a context, or reads it via a layout callback. Without this signal, content either sits under the header (a clip bug) or adds a second offset on top of the header's own (a double-pad bug). When the navigator exposes a header-height hook or context, prefer it over re-measuring the header with a layout callback; the platform's value is the source of truth and survives rotation, dynamic type, and large-title collapse.
- Custom-header components that live inside a chrome-less navigator must be marked (in JSDoc) as escape hatches, with a note naming the navigator context that justifies their existence. This keeps the next contributor from accidentally moving the component into a chrome-present route.

### Bottom chrome and overlay chrome

The top edge is not the only chrome. The same ownership rule applies to the bottom edge (home indicator, gesture pill, Android navigation bar) and to overlay chrome (modals, sheets, popovers, snackbars).

- **Bottom tab bar.** The platform's bottom tab bar is almost always the right choice for a small, fixed set of top-level destinations. It owns the bottom safe-area for that screen; content above opts out. If the screen has a custom bottom chrome (a segmented control that stays visible, a sticky action bar, a FAB column), pick one bottom owner — tab bar *or* custom chrome — and let the other side opt out.
- **Floating action button (FAB).** A FAB is overlay chrome, not a chrome owner. It sits on top of whatever bottom chrome the screen already has and does not absorb the bottom inset itself; the content wrapper underneath still respects the tab bar's inset. A FAB placed where a bottom tab bar already absorbs the inset will sit visually correct but will collide on devices with a different gesture-bar height — keep the FAB inside the safe-area-aware region defined by the bottom owner.
- **Modal screens.** Modals are chrome in their own right: they own their top inset, they own their bottom inset (sheet detents, swipe-down chrome, the home-indicator clearance when the sheet reaches its tallest detent). The content inside a modal still follows the same opt-out pattern. A modal that re-uses the parent's screen container is a bug; the modal owns its own chrome.
- **Bottom sheets and popovers.** Sheets and popovers are overlay chrome anchored to a side. They should use the platform's native sheet presentation (or the closest framework equivalent) so the user gets the swipe-to-dismiss, the detents, and the chrome that matches the rest of the app. A custom sheet is justified when the project's interaction model is the product, the same way a custom header is — and the same cost discipline applies.
- **Snackbars and toasts.** Snackbar chrome is short-lived and its own thing; it does not transfer ownership of the bottom inset. A persistent bottom bar or tab bar that is also present keeps its ownership; the snackbar floats above.

When in doubt about which chrome owns which edge on a given screen, draw the screen with every inset visible and ask: *who is absorbing this inset?* If two layers both absorb it, that is a chrome conflict, not a coincidence — pick the owner and have the other layer opt out.

A chrome primitive that two screens in different features both need promotes out of either feature into `components/layout/`. A chrome primitive that two screens inside the same feature need stays inside that feature until a second feature needs it. The promotion follows the same rule as any other shared component: domain-neutral, two real consumers, stable API, and a documented reason.

## Safe-area discipline

The chrome that owns a dimension owns the safe-area for that dimension. Content wrappers opt out of insets already absorbed by chrome. If you cannot tell which chrome owns the dimension, you are looking at a chrome conflict — pick an owner or render native chrome. The rule applies symmetrically: a tab bar that owns the bottom edge owns the home-indicator / gesture-bar inset just as a top bar owns the status-bar inset, and a content wrapper underneath opts out the same way.

Make the wrapper opt-out, not opt-in. The single content wrapper per screen should expose explicit flags for "the parent already absorbed this inset" rather than expecting the screen author to remember to pass the right inset override. Concentrate safe-area reads in one wrapper per dimension so that the platform value is read once, not duplicated. The same rule applies across the codebase: the safe-area hook is read by exactly one component per dimension per screen — never by the header, the content wrapper, and the tab bar independently. Multiple readers of the same inset drift under rotation and dynamic-type changes; the wrapper is the single source of truth.

When a screen needs to know the chrome height (for translucent headers, scroll-driven fade, parallax overlays), use the platform's header-height API if the navigator exposes one. Do not read the safe-area hook independently and recompute the height — the navigator already accounts for large-title collapse, status-bar appearance, and orientation changes that a manual recomputation will miss. The same applies at the bottom edge: if the platform exposes a tab-bar-height signal, prefer it over re-measuring.

## Navigation layout

Pick one navigator shape per surface and stay with it: drawer-rooted, tab-rooted, or stack-rooted with explicit modal presentations. Mixing the shapes within one surface is a sign that the navigation has outgrown the chosen primitive; rewrite it rather than layering more navigators.

- **Modal screens** present via the platform's native modal animation, not via a custom overlay. The user expects a swipe-down dismiss, a tap-outside-to-close, and a chrome that matches the rest of the app.
- **Direct drawer / tab leaves** that want to render a header need an intermediate stack host. Declaring header options on a direct leaf that has no stack parent is silently a no-op — the header options are dropped, not an error.
- **Top-tab links** between sibling tab scenes should switch the active tab, not push a new stack frame. Use the navigator's own tab-switch primitive rather than the generic push primitive; pushing a tab scene as if it were a separate stack screen builds a back stack the user has to unwind one tap at a time.
- **Tab indicators** should be driven by the navigator's own focus signal (a numeric, JS-side index updated synchronously) plus a live window dimension, not by an animated layout-pass measurement that may arrive stale on the new rendering architecture. Bypass built-in indicators that depend on a layout measurement when that measurement has been observed to lag.
- **Per-navigator host check.** Before wiring any header chrome on a route, confirm the route's parent chain contains a host that can render header chrome. A drawer leaf, a bottom-tab leaf, or a top-tab scene without a stack parent will silently drop header options. The check is a single grep of the parent layout files; do it once per route.

## Data and offline behavior

Define online/offline expectations before selecting persistence. TanStack Query can manage server state; persistent query caches require explicit freshness, invalidation, privacy, and migration rules. Store secrets in secure storage, not plain async storage.

## Performance

Profile before optimizing. Watch list virtualization, image sizing/caching, expensive renders, JS/native boundary traffic, startup work, navigation transitions, battery, memory, and network payloads. Test on representative low/mid-tier hardware and at least one physical device per supported platform. For long lists, use the platform's virtualized list and stable item rendering; for media, reserve dimensions and load the smallest appropriate asset. Do not choose a third-party list implementation from memory or popularity alone.

### Data-driven list selection

Treat list rendering as a replaceable implementation behind a feature-owned list interface. Start with the platform primitive, then measure representative data on supported devices before adopting a specialized implementation. Evaluate row-height variability, grids, media weight, pagination direction, chat anchoring, live updates, architecture mode, framework compatibility, native build requirements, memory, frame stability, accessibility, and item-local state behavior. Recheck maintenance, release activity, license, migration path, and the cost of reverting at decision time.

Compare currently maintained candidates—including the platform list and community implementations—using a small benchmark or existing production evidence. Recycling may require explicit state-reset discipline; non-recycling or JavaScript-first implementations may trade native integration for portability or dynamic-layout behavior. These are hypotheses to verify, not permanent rules. Keep the chosen implementation isolated so it can be replaced without changing feature callers. Do not install, update, or replace a list library automatically; preserve a healthy dependency unless measured evidence or a confirmed requirement justifies migration.

## Release

Plan permissions, deep links, push notifications, privacy disclosures, crash reporting, update strategy, store assets, and staged rollout before launch. Do not request permissions before the related user action.
