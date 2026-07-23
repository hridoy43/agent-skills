# Product Architecture and Development

Use this skill to plan, scaffold, refactor, or implement maintainable TypeScript-first web, mobile, desktop, API, or multi-app products.

## Required before use

- A supported agent with Agent Skills enabled.
- The product brief, target users, platform, MVP boundary, deployment constraints, and any existing repository.
- The user's decisions about data, authentication, integrations, design direction, localization, privacy, analytics, and preferred tools—or permission to infer defaults after interviewing them.

The skill itself requires no runtime package or API key. It inspects the project's existing stack before recommending dependencies.

## Optional companion skills

Install only when the task needs them:

- `impeccable` first for UI critique and visual refinement; `ui-ux-pro-max` for deeper design-system research.
- `conversion-storytelling` for marketing, ecommerce, onboarding, positioning, proof, and CTA narratives.
- `text-to-lottie` for purposeful Lottie authoring.
- `hyperframes` for product-demo videos; use Remotion when requested or already present.
- Official Expo/React Native skills for native apps.
- `graphify` only for large, unfamiliar, cross-language, or long-lived codebases. Ask permission before installing, configuring, or scanning.
- `find-skills` when a required capability is missing.

## Conditional project dependencies

The chosen stack determines these. Add them only when justified:

- Tailwind CSS for small web projects.
- shadcn/ui, Magic UI, or a reviewed community shadcn registry for larger web projects.
- Ant Design for dashboard/admin-heavy applications when its interaction model fits.
- Axios (or the platform-equivalent client) plus TanStack Query or an equivalent cache for API-heavy applications.
- Motion.dev, GSAP, CSS, or SVG animation according to the motion complexity—not all by default.

## Core architectural guarantees

- TypeScript-first, theme-configurable tokens, reusable near-atomic components, explicit folder ownership, centralized scripts, CSP, analytics, SEO, accessibility, and testable API error recovery.
- Tailwind classes stay in components; global CSS is reserved for tokens, resets, fonts, shared primitives, and repeated patterns.
- Font and theme configuration belongs in `src/styles/` or the equivalent style-owned directory.
- Every public indexable surface keeps semantic content and crawlability while improving interaction.

Invoke it as `$product-architecture-and-development` or `$wahid:product-architecture-and-development` when installed as the Wahid Codex plugin.
