# Quality gates

Run what applies to the project and scope; classify exceptions as fixed, accepted with a reason, or deferred with an owner.

## Before implementation

Testable acceptance criteria; clear ownership and dependency direction; user preferences and healthy conventions preserved; new dependencies at latest stable with resolved versions recorded; material library choices have a requirement, compatibility check, and design-system fit; risky changes have migration and rollback.

## Code

- Format, lint, typecheck (no new suppressions), unit, integration, critical-journey E2E, production build.
- One formatter and one lint config per language, official or verified-compatible.
- Structure follows [naming-and-linting.md](naming-and-linting.md) and [module-boundaries.md](module-boundaries.md): no feature-root implementation files or `features/<f>/index.ts`; no private subcomponent imports; shared code imports no feature; `cn` only at `src/utils/cn.ts` with no `lib/utils.ts`.
- Assets and global CSS follow [assets-and-styles.md](assets-and-styles.md); no inline or duplicated SVG markup.
- Framework conventions match the installed version; library primitives stay separate from wrappers; no secondary UI source without a documented gap; `data/` never acts as a database or runtime state.
- No raw executable `<script>` tags; scripts load through the framework Script component registry.
- Loading, empty, error, offline, and permission states are exercised.

## Experience

`DESIGN.md` and theme tokens agree; keyboard, focus, labels, contrast, zoom, reduced motion; small/medium/large widths; Core Web Vitals or platform performance on a production build; public pages pass [seo.md](seo.md) checks; media and animation have fallbacks; tokens or scale utilities instead of repeated arbitrary values. Visual checks fix routes, viewports, states, reduced motion, browser, and diff threshold before capture; investigate diffs instead of re-baselining.

## Security and operations

CSP and headers tested (HSTS rules in [security-and-csp.md](security-and-csp.md)); secrets and logs reviewed; negative auth tests; consent-aware analytics; error reporting, rollback, migrations, and release owner defined. Each feature owns its logs, metrics, and alert owner; correlation IDs flow end to end; debug switches never ship; each feature has a runbook entry (responder, checks, rollback).

## Refactors

Capture a baseline (DOM semantics, screenshots at key widths, accessibility, build output, tests) and compare after each slice. Don't mix visual redesign with structural extraction unless both were approved.
