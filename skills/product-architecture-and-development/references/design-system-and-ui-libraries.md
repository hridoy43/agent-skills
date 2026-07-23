# Design systems and UI-library selection

## Principle

Every interface needs a coherent design system, but its depth must match the product. A one-page launch site may need tokens plus a handful of accessible primitives. A multi-app platform may need a versioned design-system package, documentation, visual regression coverage, and a migration policy. Do not confuse more dependencies with a stronger design system.

The user's confirmed preference takes precedence. For an existing repository, preserve a healthy established component foundation unless changing it has measurable value.

## Minimum contract

Before feature UI, define or identify:

- semantic color roles and verified contrast;
- typography, spacing, content-width, breakpoint, radius, border, shadow, and z-index scales;
- motion durations/easing plus `prefers-reduced-motion` behavior;
- primitive states: default, hover, focus-visible, active, selected, loading, disabled, success, warning, and error where applicable;
- responsive layout and density rules;
- icon, media, data-visualization, and empty/loading/error conventions;
- component ownership, public APIs, tests, documentation, and deprecation policy proportional to project size.

Record the chosen primary UI foundation and where its tokens, adapters, and generated source live. Prefer one component foundation across a surface.

## Library and registry evaluation gate

Before adopting a UI library, template, block, registry item, or unfamiliar design system:

1. Confirm the actual component inventory and user flows; do not choose from screenshots alone.
2. Read the current official quick start and AI-agent guide when one exists.
3. Inspect official tokens/theming, available themes, templates/blocks, component APIs, accessibility guidance, responsive behavior, and internationalization support.
4. Verify framework/runtime, SSR/RSC, Tailwind/CSS-layer, TypeScript, browser, and existing-library compatibility.
5. Review package and source provenance, license, maintenance, release activity, security advisories, transitive dependencies, install scripts, bundle/runtime cost, and migration or exit path.
6. Compare the candidate against the project's visual direction and semantic tokens. Reject a candidate that requires maintaining a parallel theme for ordinary UI.
7. For a material dependency, inspect an isolated spike before broad adoption. Record the decision and rollback path.
8. Ask the user before installing any package, CLI, registry item, generated files, or agent integration.

Prefer current primary documentation over remembered APIs. If official documentation is incomplete or the compatibility boundary cannot be verified, do not adopt the library yet.

## Decision guide

### Tailwind CSS

Use Tailwind as the default styling foundation for small web projects and highly bespoke marketing work. Keep utilities with components and expose semantic theme tokens as named utilities. Add accessible primitives only when a real interaction requires them.

### shadcn/ui and the Registry Directory

Use shadcn/ui for growing product surfaces when owned source, composability, and theme control matter. Before creating a substantial reusable component or complex block in a shadcn-compatible project, search the official [Registry Directory](https://ui.shadcn.com/docs/directory) for a relevant community registry.

Directory discovery is mandatory for a meaningful reusable gap, not for every wrapper, `<div>`, native component, or trivial piece of page markup. When the decision is material, compare two or three plausible candidates and inspect their source before proposing one. Directory inclusion is discovery, not endorsement: community registries are third-party maintained.

Evaluate each proposed item for:

- semantic HTML, keyboard behavior, focus, screen-reader labeling, contrast, and reduced motion;
- TypeScript quality, API clarity, error/empty/loading states, and responsive behavior;
- dependency overlap, install scripts, bundle cost, client/server boundary, Tailwind version, CSS globals/layers, and token compatibility;
- license, provenance, maintenance, test coverage, and upgrade or removal cost.

Install only the selected component or block, not an entire registry by default. Keep the copied source local, review the diff and lockfile, adapt it to project tokens, and add tests. Ask for user permission before the CLI or package manager changes the project.

### Magic UI

Magic UI is best used as a selective marketing and motion enhancement source. Its official documentation describes copy-paste components, blocks, and templates oriented toward landing pages and user-facing marketing. Use a component only when it improves comprehension, feedback, orientation, demonstration, or purposeful brand character.

Do not use Magic UI as a second primitive foundation beside shadcn or Ant Design. Review animation cost, reduced-motion behavior, accessibility, mobile behavior, dependency footprint, and token alignment. Remove ornamental effects that compete with content or conversion.

### Ant Design

Evaluate Ant Design for dashboard- and admin-heavy React products with dense tables, forms, filters, navigation, internationalization, and enterprise workflows. It can be more maintainable than assembling a large enterprise interaction system from unrelated primitives.

If selected, use Ant Design as the primary component foundation for that surface and configure its Design Tokens and component tokens through a central theme adapter. Review modular imports/tree shaking, SSR, accessibility, responsive density, motion, bundle cost, framework compatibility, and brand divergence. Do not interleave shadcn and Ant primitives for equivalent controls without an isolated boundary and documented reason.

### Astryx

Astryx is a candidate for products whose breadth justifies an extensive, token-driven design system and whose AI agents can benefit from structured component guidance. It is not the default for a small landing page.

Before adopting Astryx, review its current official:

- [token reference](https://astryx.atmeta.com/docs/tokens), including color, spacing, type, shape, elevation, and motion;
- [themes](https://astryx.atmeta.com/themes) and how the project owns or overrides a theme;
- [templates](https://astryx.atmeta.com/templates) and component inventory against real product flows;
- [Getting Started / Quick Start with AI](https://astryx.atmeta.com/docs/getting-started) and [Working with AI](https://astryx.atmeta.com/docs/working-with-ai);
- styling-library interoperability, CSS cascade layers, browser/framework support, internationalization, migration guide, license, package maturity, and release history.

If approved, initialize its version-matched agent documentation and read the generated files before writing Astryx code. Use its documented template → skeleton → component workflow rather than guessing props or composing raw substitutes. Prefer token-efficient dense documentation output when supported. Begin with an isolated representative screen and validate ownership, theming, bundle/runtime cost, accessibility, and exit cost before scaling.

## Themes, templates, blocks, and AI guides

The Astryx gate generalizes to every UI framework: inspect the official theme model and templates/blocks before inventing a parallel system, and read any official AI quick-start, agent rules, `llms.txt`, MCP, skill, or CLI guidance before agent-generated implementation. Treat generated agent files as project instructions, review them for conflicts, and never let them override the user's requirements, repository `AGENTS.md`, security policy, or this skill's decision precedence.

Templates are references, not architecture. Extract the useful layout and state patterns, preserve semantic content and SEO, replace demo data and styling, and keep only what the product needs.

## Avoid library soup

- Select one primary primitive/component foundation per surface.
- Add a secondary source only for a named gap that the foundation cannot reasonably cover.
- Audit overlap before installation and avoid parallel buttons, dialogs, forms, tables, or theme providers.
- Route all adopted UI through the same semantic theme, accessibility, icon, motion, analytics, and testing conventions.
- Start with the smallest component slice and keep removal possible.

Speed is measured by maintainable product delivery, not by how many component catalogs were installed.
