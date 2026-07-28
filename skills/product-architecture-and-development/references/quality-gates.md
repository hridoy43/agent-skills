# Quality gates

## Before implementation

- Goal and acceptance criteria are testable.
- Architecture decision names present needs and deferred scope.
- Folder ownership and dependency direction are clear.
- Greenfield architecture defaults are confirmed before implementation; existing-project migrations are user-approved.
- Explicit user preferences and healthy existing conventions are preserved unless an approved architecture decision changes them.
- External packages and versions are verified from primary sources.
- Material library and registry choices have a documented requirement, compatibility check, design-system fit, and user approval when they add dependencies or generated source.
- Migration and rollback are understood for risky changes.

## Code gates

- Format and lint pass.
- Formatter and linter are the framework/library-recommended or explicitly verified Better-T-Stack-compatible tools.
- One primary formatter and one primary lint configuration exist per language; no conflicting formatter rules or duplicate plugin/parser setup.
- Typecheck passes with no new suppressions.
- Unit tests cover domain behavior and utilities.
- Integration tests cover data/state boundaries.
- Critical user journeys have end-to-end coverage where practical.
- Production build succeeds.
- Feature implementation files live in their owned category directories; feature roots contain no misplaced `actions.ts`, `service.ts`, `utils.ts`, or component implementations.
- Standalone components are direct PascalCase files; major component directories expose their primary component through `index.tsx` only when their composition justifies a directory, and callers do not import private subcomponents.
- Component filenames match exported PascalCase component names.
- Component filenames do not use `.component` suffix.
- Feature roots do not contain `features/<feature>/index.ts`; category-level indexes and major component `index.tsx` files expose intentional surfaces.
- Shared code does not import feature internals.
- Utilities remain pure unless their owning API, service, or adapter boundary is explicit.
- Pure global helpers live in `src/utils/`, not infrastructure-oriented `src/lib/`.
- `constants/`, `config/`, `data/`, `lib/`, and `utils/` have distinct ownership.
- Global CSS lives in `src/styles/`.
- Shared images, raw SVGs, illustrations, fonts, and reusable icon components follow root `assets/` and platform-native asset ownership rules.
- Layout components remain under layout ownership; brand components remain under brand ownership.
- Component directories use PascalCase only when they represent components; semantic parent directories remain ownership-oriented.
- No inline SVG markup or duplicated SVG source exists in application code.
- SVG and other assets have explicit source/public ownership and use the selected framework's supported loading mechanism.
- Framework conventions match the installed version; deprecated conventions require documented compatibility reasoning.
- Library-owned base components remain separate from project-owned wrappers and feature components.
- Secondary component or chart sources do not duplicate the primary foundation without a documented gap.
- Static `data/` files are not used as database, API, cache, or runtime state boundaries.
- Error, loading, empty, offline, and permission states are exercised.

## Experience gates

- Keyboard navigation, focus order, labels, contrast, zoom, and reduced motion are checked.
- Responsive layouts are reviewed at representative small, medium, and large widths.
- Core Web Vitals or platform performance is measured on a production build.
- SEO metadata, semantic HTML, canonical behavior, redirects, sitemap, and initial HTML content are checked for public web pages.
- Animations and media have fallbacks and do not block content.
- Components use framework scale utilities or named theme tokens; repeated arbitrary values and scattered literal visual values are rejected unless a measured exception is documented.

For visual changes, define the routes, viewport sizes, interaction states, reduced-motion mode, browser, and pixel-difference threshold before capture. Investigate differences rather than automatically accepting or regenerating baselines.

## Security and operations

- CSP and applicable security headers are tested. For production HTTPS web deployments, verify HSTS behavior and confirm that `includeSubDomains` or preload is enabled only when explicitly approved and safe.
- Secrets and logs are reviewed.
- Auth/authz and trust boundaries have negative tests.
- Analytics respects consent and avoids sensitive data.
- Error reporting, rollback, migrations, and release ownership are defined.

## Refactor safety

For behavior-preserving refactors, capture a baseline before editing. Compare DOM semantics, screenshots at key widths, accessibility checks, build output, and tests after each slice. Do not mix broad visual redesign with architectural extraction unless the user approved both.

For architecture migrations, classify each finding as fixed, accepted with a reason, or deferred with an owner and follow-up. Do not report architecture as complete while unclassified findings remain.
