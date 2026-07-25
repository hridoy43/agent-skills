# Product Architecture and Development

Use this skill to plan, scaffold, refactor, or implement maintainable TypeScript-first web, mobile, desktop, API, or multi-app products.

## Use it from the first idea

This skill is designed to work as a single starting prompt. It does not require a complete product specification. Give it the idea, users, outcome, platform, known workflows, content, constraints, and preferences you have. User decisions always take precedence. The skill must interview for unresolved architecture decisions, wait for the user's answers or confirmation of its inferred defaults, and only then plan or implement:

- a confirmed/inferred/unknown decision ledger and MVP boundary;
- the stack, deployment shape, route/screen model, and ownership-based folder architecture;
- the theme-configurable design-system and reusable component strategy;
- data, API, auth, cache, error, persistence, analytics, CSP, and observability boundaries;
- SEO, canonical URL, localization, accessibility, performance, and content-preservation requirements;
- testing and release gates, implementation slices, and explicitly deferred scope.

Starter prompt:

```text
$product-architecture-and-development

Build [product] for [users] so they can [outcome].
Platform/deployment: [web, mobile, desktop, API, or multi-app].
Known requirements: [workflows, content, integrations, auth, data].
Preferences: [stack, UI, design, localization, analytics, hosting].
Constraints: [MVP scope, timeline, privacy, compliance, budget].
Interview me about decisions that could change the architecture. Then propose the architecture, folder tree, design system, SEO/security/analytics plan, tests, and vertical implementation slices before coding.
```

For an existing codebase, provide its absolute path and ask the skill to inspect its conventions first. For a new idea, the skill should avoid speculative folders and dependencies until the first vertical slice justifies them.

## Useful commands for existing projects

Run these from the skill directory or use absolute paths:

```bash
# Inspect the project and print detected conventions
node scripts/inspect-project.mjs /absolute/path/to/project

# Create a resumable migration plan and task files
node scripts/create-migration-plan.mjs /absolute/path/to/project

# Inspect the generated plan
less /absolute/path/to/project/.architecture/migration-plan.md
cat /absolute/path/to/project/.architecture/state.json
```

Then ask the agent to work one task at a time:

```text
Use $product-architecture-and-development.
Inspect /absolute/path/to/project.
Read its .architecture/migration-plan.md and state.json.
Work only on the first incomplete task.
Do not modify files outside that task.
Run the task validation and update state before continuing.
```

For a specific task, name its task file and scope:

```text
Use $product-architecture-and-development.
Read /absolute/path/to/project/.architecture/tasks/003-global-assets-and-svg-ownership.md.
Complete only this task, validate it, and record the result in state.json.
```

After context loss, resume with:

```text
Use $product-architecture-and-development.
Read the project audit, migration plan, and state.json.
Resume from the first incomplete task. Do not repeat completed tasks.
```

## Required before use

- A supported agent with Agent Skills enabled.
- The product brief, target users, platform, MVP boundary, deployment constraints, and any existing repository.
- The user's decisions about data, authentication, integrations, design direction, localization, privacy, analytics, and preferred tools—or permission to infer defaults after interviewing them.

The skill itself requires no runtime package or API key. It inspects the project's existing stack before recommending dependencies.

## Install and invoke

Install this skill directly from the public repository:

```bash
npx skills@latest add hridoy43/agent-skills \
  --skill product-architecture-and-development \
  --global
```

Then invoke `$product-architecture-and-development` on a compatible Agent Skills host. Include the repository path when refining an existing project.

## Optional companion skills

Install only when the task needs them:

- `impeccable` first for UI critique and visual refinement; `ui-ux-pro-max` for deeper design-system research.
- `conversion-storytelling` for marketing, ecommerce, onboarding, positioning, proof, and CTA narratives.
- `text-to-lottie` for purposeful Lottie authoring.
- `hyperframes` for product-demo videos; use Remotion when requested or already present.
- Official Expo/React Native skills for native apps.
- `graphify` only for large, unfamiliar, cross-language, or long-lived codebases. Ask permission before installing, configuring, or scanning.
- `find-skills` when a required capability is missing.

All companion skills are optional. Install only the ones the project or current task actually needs.

## Related skills

- [Conversion Storytelling](../conversion-storytelling/README.md) — conversion-focused page and product narratives.
- [Global Discovery, Browsing & Extraction](../global-discovery-browsing-extraction/README.md) — current research and evidence collection.
- [Repository overview](../../README.md) — collection installation, compatibility, and release guidance.

## Conditional project dependencies

The chosen stack determines these. Add them only when justified:

- Tailwind CSS for small web projects.
- shadcn/ui, Magic UI, or a reviewed community shadcn registry for larger web projects.
- Ant Design for dashboard/admin-heavy applications when its interaction model fits.
- Axios (or the platform-equivalent client) plus TanStack Query or an equivalent cache for API-heavy applications.
- Zustand for justified cross-tree client state in React projects; evaluate Redux Toolkit, state machines, or platform-native equivalents when project complexity or framework needs require them.
- Motion.dev, GSAP, CSS, or SVG animation according to the motion complexity—not all by default.

## Core architectural guarantees

- TypeScript-first, theme-configurable tokens, reusable near-atomic components, explicit folder ownership, centralized scripts, CSP, analytics, SEO, accessibility, and testable API error recovery.
- Tailwind classes stay in components; global CSS is reserved for tokens, resets, fonts, shared primitives, and repeated patterns.
- Font and theme configuration belongs in `src/styles/` or the equivalent style-owned directory.
- Every public indexable surface keeps semantic content and crawlability while improving interaction.

Invoke it as `$product-architecture-and-development` on a compatible Agent Skills host. Codex users may also use `$wahid:product-architecture-and-development` when the optional plugin is installed.
