# Quality gates

## Before implementation

- Goal and acceptance criteria are testable.
- Architecture decision names present needs and deferred scope.
- Folder ownership and dependency direction are clear.
- External packages and versions are verified from primary sources.
- Migration and rollback are understood for risky changes.

## Code gates

- Format and lint pass.
- Typecheck passes with no new suppressions.
- Unit tests cover domain behavior and utilities.
- Integration tests cover data/state boundaries.
- Critical user journeys have end-to-end coverage where practical.
- Production build succeeds.
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

- CSP/security headers are tested.
- Secrets and logs are reviewed.
- Auth/authz and trust boundaries have negative tests.
- Analytics respects consent and avoids sensitive data.
- Error reporting, rollback, migrations, and release ownership are defined.

## Refactor safety

For behavior-preserving refactors, capture a baseline before editing. Compare DOM semantics, screenshots at key widths, accessibility checks, build output, and tests after each slice. Do not mix broad visual redesign with architectural extraction unless the user approved both.
