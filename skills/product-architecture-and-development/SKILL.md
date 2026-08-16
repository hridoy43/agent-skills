---
name: product-architecture-and-development
description: Use when starting, scaffolding, auditing, refactoring, or implementing a web, mobile, desktop, backend, or multi-app product; provides interview-led architecture guidance, current ecosystem tooling, ownership-based structure, and an optional resumable implementation workflow.
---

# Product Architecture and Development

Use this skill as the project’s architecture controller. It works from a project idea or an existing repository, preserves explicit user decisions, and loads only the detailed reference needed for the current decision or task.

## Operating contract

1. Use the user's prompt as the source of truth. Interview the user about unresolved choices that could materially change the requested result, but do not impose an interview, confirmation, or pause when the user's prompt already provides clear instructions to proceed.
2. For greenfield work, apply confirmed or inferred architecture defaults. For existing work, inspect first and preserve healthy conventions unless the user requests a change. Never silently rename, move, delete, or reorganize an existing project.
3. If the user requests an architectural change, compare current and target structures, identify material risks, and execute the requested change. Do not require a separate confirmation step when the user's instruction is clear.
4. User instructions, preferences, and platform constraints outrank every skill default. Execute the user's requested scope and workflow; do not force interviews, migration plans, bounded tasks, approval gates, or other process requirements that the user did not request.
5. Keep a decision ledger: `confirmed`, `inferred`, `unknown/configurable`, `prohibited`, and `deferred`.
6. Prefer official ecosystem conventions and maintained industry standards. Named tools are candidates, not mandates; recommend and ask before adding material dependencies.

## First routing decision

Read only the applicable references:

- Project brief: [project-initiation.md](references/project-initiation.md)
- Production foundations: [production-foundations.md](references/production-foundations.md)
- Boundaries: [module-boundaries.md](references/module-boundaries.md) and [architecture-core.md](references/architecture-core.md)
- Web: [web-projects.md](references/web-projects.md)
- Mobile: [mobile-projects.md](references/mobile-projects.md)
- Desktop: [desktop-projects.md](references/desktop-projects.md)
- Backend: [backend-projects.md](references/backend-projects.md)
- Stack choice: [stack-selection.md](references/stack-selection.md)
- Styling/UI: [styling-and-components.md](references/styling-and-components.md) and [design-system-and-ui-libraries.md](references/design-system-and-ui-libraries.md)
- Design, motion, and media: [design-motion-media.md](references/design-motion-media.md)
- Data/API: [api-data-state.md](references/api-data-state.md)
- AI systems: [ai-systems.md](references/ai-systems.md)
- Forms/validation: [forms-and-validation.md](references/forms-and-validation.md)
- Analytics: [analytics.md](references/analytics.md)
- Localization: [localization.md](references/localization.md)
- SEO: [seo.md](references/seo.md)
- Third-party scripts: [third-party-scripts.md](references/third-party-scripts.md)
- Product decisions: [evidence-led-product-design.md](references/evidence-led-product-design.md)
- Assets/styles: [assets-and-styles.md](references/assets-and-styles.md)
- Security: [security-and-csp.md](references/security-and-csp.md)
- Naming/linting: [naming-and-linting.md](references/naming-and-linting.md)
- Optional project graph: [graphify.md](references/graphify.md)
- Validation: [quality-gates.md](references/quality-gates.md)

Load specialist skills only when the task needs them. Prefer official ecosystem guidance; do not install a companion skill or package without approval. Use the companion check only when the task benefits from it.

## Architecture defaults

- TypeScript-first where practical; use the ecosystem’s standard naming and tooling.
- Keep routes/screens thin. Features own domain UI, actions, API functions, hooks, schemas, services, types, data, utilities, and tests.
- Shared code must be domain-neutral and have at least two real consumers.
- Use explicit category directories. Prevent feature-root implementation-file sprawl.
- React product components use matching PascalCase filenames and exported names, without a `.component` suffix. A single component stays a direct file such as `components/CustomerForm.tsx`; use a same-named PascalCase directory with `index.tsx` only for a major composition with multiple cohesive child files, state, or shared local types. Never create `features/<feature>/index.ts`; public surfaces belong in owned category directories such as `actions/`, `components/`, `helpers/`, `schemas/`, or `services/`, or inside a major component directory.
- Keep a component-only type in the component file. Use a colocated `types.ts` only when types are shared by children of the same major component; move types shared across components or features to the appropriate domain/shared `types/` boundary.
- Use semantic suffixes such as `.data.ts`, `.action.ts`, `.service.ts`, `.api.ts`, and `.schema.ts` where useful. In TypeScript React projects, prefer camelCase names such as `createCustomer.action.ts` and colocated `types.ts`.
- Keep library-owned primitives in library-specific directories. Extend them with project-owned wrappers; do not modify base components for product behavior.
- Preserve a healthy existing icon system. For a new project without an icon preference, evaluate the ecosystem-standard maintained option; Lucide is a common React/web candidate, not a mandatory dependency. Prefer direct imports; create custom SVG assets only for brand, product-specific, or genuinely unavailable icons. Library-generated SVG output is allowed; manually authored or duplicated SVG markup is not.
- Keep design tokens and code-based style configuration in the style-owned directory. Keep framework/build configuration at the repository root unless the framework explicitly requires another location.
- Keep assets in the framework-appropriate global or package-owned asset location. Never duplicate SVG source or write raw SVG markup in application code when an asset/import mechanism is available.
- Use the framework/ecosystem-standard transport client. Use Axios only for REST requirements, existing conventions, or explicit preference; never wrap a typed RPC/generated client redundantly.
- Validate every untrusted form submission at the server or trusted boundary; add client validation for immediate feedback when the platform supports it. Preserve the user’s validator preference and existing convention. For TypeScript, use Zod only as the fallback default when no framework-standard validator applies; choose another maintained validator when compatibility, bundle size, performance, generated contracts, or ecosystem conventions justify it. Keep schemas feature-owned, share them between form and server action when safe, normalize field/form errors, and test invalid, boundary, and cross-field cases.
- Use evidence-led product design for meaningful product, UX, and behavior decisions across web, mobile, desktop, backend workflows, and multi-app products. Define the outcome and hypothesis, inspect the complete flow, separate observation from inference, choose proportionate evidence, define success and guardrail metrics, consider accessibility/trust/privacy/unintended harm, and validate before broad implementation. Read [evidence-led-product-design.md](references/evidence-led-product-design.md) when the task involves user behavior, onboarding, retention, conversion, monetization, dashboards, or major interaction changes.
- Use official or officially recommended linting/formatting when available. Otherwise use a maintained compatible tool. Use one formatter and lint path per language.
- For production web deployments, enable HSTS only after confirming complete HTTPS coverage for the domain and its subdomains. Treat `includeSubDomains` and browser preload as explicit deployment decisions, not defaults. Review security headers with the applicable platform guidance.
- Prefer the existing package manager. For new JS/TS projects prefer pnpm; use Bun only with verified compatibility or an existing Bun convention.

## Greenfield stack selection

When no stack is specified, choose a compatible current Better-T-Stack configuration for supported web, server, Expo/React Native, or Tauri projects. Ask only when materially different choices require the user’s decision. For unsupported ecosystems, use the official current stable generator. Never use stale, beta, or canary scaffolds without approval. Verify generated versions and conventions immediately.

## Existing-project workflow

Run:

```bash
node scripts/inspect-project.mjs /absolute/path/to/project
```

Use [migration-workflow.md](references/migration-workflow.md) when it helps execute the work, but do not require it or impose its sequencing rules when the user's prompt requests a different workflow.

When using a task-based migration plan, define each task's files in scope, exclusions, required changes, validation, and completion condition. Keep task boundaries coherent and resume from the current repository state after context loss. These planning rules do not limit work outside that workflow.

When the requested work includes user-visible behavior, run the relevant test before claiming that behavior is complete. Report verification with the completion claim when practical. Tests written after the code and tests that pass on the first run provide weaker evidence. Follow the Verification contract when it applies to the project.

## Verification contract

For task-based work, run the smallest relevant checks after each task. Before handoff, run the structural, lint, typecheck, test, build, and security/accessibility/SEO checks that apply to the project and requested scope. Classify relevant exceptions as fixed, accepted with a reason, or deferred with an owner and follow-up. Use [quality-gates.md](references/quality-gates.md) when applicable.

### Verification before completion (Iron Law)

**No completion claims without fresh evidence in the same message.** If the task did not run a verification command in the same response, the agent cannot claim it passed. Run the command, read the output, count failures, then state the result with evidence.

| Claim | Requires | Not sufficient |
|-------|----------|----------------|
| Tests pass | Test command output, 0 failures | "Should pass now" / previous run |
| Linter clean | Linter output, 0 errors | Partial check, extrapolation |
| Build succeeds | Build command, exit 0 | Linter passing, logs look good |
| Bug fixed | Test for the original symptom passes | Code changed, assumed fixed |
| Agent completed | Visible diff in the worktree | "Agent reported success" |

Red flags: "should", "probably", "seems to", or any wording implying success before the verification command ran in the same message.

### Tests as proof

For non-trivial behavior, the test precedes the code. Write the failing test first, watch it fail, write the minimal code to make it pass, refactor. A test that passes on the first run is a warning sign, not a victory; it usually means the test was written after the code and was shaped to match.

When changing an existing test or behavior, name the production change that would make the test fail, write the test, verify it fails for the right reason, then fix the production code.

### Code review reception

When receiving review feedback, verify before implementing. Restate the requirement in the agent's own words. Check the codebase reality. Push back with technical reasoning if the suggestion is wrong for this stack. Never perform agreement ("Great point!"), never say "Thanks", never implement without verification.

The response pattern:
1. Read the feedback completely.
2. Restate the requirement.
3. Verify against the codebase.
4. Evaluate: technically correct for this project?
5. Respond with a technical acknowledgment or a reasoned pushback.
6. Implement one item at a time, testing each.

## Scope

This skill owns architecture, boundaries, structure, tooling choices, implementation slices, and verification. Task-specific skills own their specialist technique after this skill routes to them. Do not load every reference or companion skill when one targeted reference is sufficient. For AI-assisted design collaboration, task-scoped context, disposable exploration tools, or feedback-to-agent workflows, route to `ai-assisted-product-development`.

When the task involves landing pages, marketing copy, pricing, sales narratives, public product pages, or conversion-focused onboarding, route narrative, proof, CTA, SEO, and conversion measurement to `conversion-storytelling`; this skill owns architecture, product-flow implications, implementation boundaries, and technical verification. Do not duplicate that skill’s narrative frameworks.

When the task involves product-launch campaigns, social content, video or thumbnail briefs, publishing, repurposing, or channel performance, route content strategy and format adaptation to `content-marketing-and-brand-growth`. Use `conversion-storytelling` as an additional specialist only when the work needs a conversion narrative, proof ledger, objection handling, or destination CTA strategy. Functional UI copy and routine interaction implementation do not require either companion by default.
