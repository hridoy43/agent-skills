# Practical Agent Skills for Product Work

A portable collection of practical Agent Skills for planning, designing, building, researching, documenting, reviewing, and promoting digital products. Each skill is framework-aware where useful, tool-agnostic where possible, interview-first, SEO-conscious, and designed to preserve user decisions before implementation. Maintained by [hridoy43](https://github.com/hridoy43), the collection follows the open [Agent Skills specification](https://agentskills.io/specification) and installs through the [skills CLI](https://skills.sh/docs/cli).

Use one skill for a focused task or combine them for a complete product workflow—from the first idea and architecture through implementation, review, launch, and public learning.

## Included skills

- [`product-architecture-and-development`](skills/product-architecture-and-development/README.md) — plans and implements maintainable TypeScript-first web, mobile, desktop, API, and multi-app products.
- [`ai-assisted-product-development`](skills/ai-assisted-product-development/SKILL.md) — structures context, bounded exploration, human review, and safe feedback-to-change workflows for AI-assisted product work.
- [`conversion-storytelling`](skills/conversion-storytelling/README.md) — chooses and applies truthful product narratives for websites, apps, journeys, onboarding, proof, and CTAs, with conditional adaptation to media briefs.
- [`global-discovery-browsing-extraction`](skills/global-discovery-browsing-extraction/README.md) — routes local-first web discovery, browsing, extraction, monitoring, and evidence validation across available tools.
- [`github-readme-and-profile-writing`](skills/github-readme-and-profile-writing/README.md) — creates discoverable, credible READMEs for projects, skills, organizations, and personal profiles.
- [`content-marketing-and-brand-growth`](skills/content-marketing-and-brand-growth/README.md) — plans trust-first campaigns and platform-aware video, thumbnail, social, and launch content briefs.
- [`pr-writing`](skills/pr-writing/README.md) — drafts evidence-based pull request and merge request descriptions across review platforms.

Every skill exposes its workflow through `SKILL.md`; public README files provide installation, usage, companion, and promotion guidance where present. Use an individual skill page for a focused capability and this repository for the complete collection.

## Recommended bundles

- **Build a product:** `product-architecture-and-development` + optional `ai-assisted-product-development` for the AI collaboration loop + optional `conversion-storytelling` for customer-facing narratives.
- **Research before building:** `global-discovery-browsing-extraction` + `product-architecture-and-development`.
- **Improve a marketing surface:** `conversion-storytelling` + optional `global-discovery-browsing-extraction` for current evidence.
- **Create launch or media content:** `content-marketing-and-brand-growth` + optional `conversion-storytelling` for narrative/proof + the relevant media-production skill.
- **Publish a README:** `github-readme-and-profile-writing` + optional `product-architecture-and-development` for technical accuracy.
- **Promote a project:** `github-readme-and-profile-writing` + `content-marketing-and-brand-growth` + optional `conversion-storytelling`.
- **Prepare a review:** `pr-writing` + optional `product-architecture-and-development` for technical validation.

Companion skills are never required by default. Install them only when the task needs their capability.

## Start a project from one prompt

Use `product-architecture-and-development` at the beginning of a project—even when the input is only an idea. Give the skill the product goal, intended users, platform, desired outcome, known content, constraints, and any preferences you already have. It will interview for unresolved decisions before implementation, inspect an existing codebase when present, and produce a practical architecture rather than jumping straight into files.

```text
$product-architecture-and-development

Build [product] for [users] so they can [outcome].
Platform/deployment: [web, mobile, desktop, API, or multi-app].
Known requirements: [workflows, content, integrations, auth, data].
Preferences: [stack, UI, design, localization, analytics, hosting].
Constraints: [MVP scope, timeline, privacy, compliance, budget].
Please interview me about anything that would change the architecture, then propose the folder structure, design system, data/API boundaries, SEO/security/analytics plan, testing strategy, and implementation slices before coding.
```

For an existing repository, include its path and ask the skill to preserve working conventions unless evidence supports a change. The skill keeps SEO, accessibility, security, maintainability, and future scope in the decision record instead of treating them as afterthoughts.

## Install from a public repository

This collection is published at [`hridoy43/agent-skills`](https://github.com/hridoy43/agent-skills):

```bash
# Inspect available skills
npx skills@latest add hridoy43/agent-skills --list

# Install the collection and choose target agents interactively
npx skills@latest add hridoy43/agent-skills --skill '*'

# Install one skill globally for a specific agent
npx skills@latest add hridoy43/agent-skills \
  --skill product-architecture-and-development \
  --global --agent codex

# Intentionally install every skill globally for every supported agent
npx skills@latest add hridoy43/agent-skills \
  --skill '*' --agent '*' --global --yes
```

The same source can target other supported agents, for example `claude-code`, `cursor`, `gemini-cli`, `github-copilot`, `cline`, or `opencode`. The all-agent command is intentionally broad; prefer selecting the agents a person actually uses.

The installer may use a canonical copy with agent-specific symlinks, avoiding stale duplicate installations. Review skill instructions and scripts before installing third-party updates.

Update skills installed through this route with:

```bash
npx skills@latest update
```

## Invocation

With a generic Agent Skills installation, invoke the skill name supported by the host agent:

```text
$product-architecture-and-development
$conversion-storytelling
$global-discovery-browsing-extraction
```

When installed through the Codex plugin, the namespace remains:

```text
$wahid:product-architecture-and-development
$wahid:conversion-storytelling
$wahid:global-discovery-browsing-extraction
```

The skill can also activate implicitly when a request matches its description.

## Structure

```text
agent-skills/
├── .codex-plugin/plugin.json
├── skills/
│   ├── ai-assisted-product-development/
│   ├── content-marketing-and-brand-growth/
│   ├── conversion-storytelling/
│   ├── global-discovery-browsing-extraction/
│   ├── github-readme-and-profile-writing/
│   ├── pr-writing/
│   └── product-architecture-and-development/
├── skills.sh.json
└── README.md
```

Add future authored skills as independent directories under `skills/`. Every skill keeps its own `SKILL.md`, references, scripts, assets, and agent metadata.

## Compatibility

The portable contract is the Agent Skills specification: `skills/<name>/SKILL.md` with optional `scripts/`, `references/`, and `assets/`. Host-specific metadata such as `.codex-plugin/` and `agents/openai.yaml` is optional and may be ignored by other agents.

This does not guarantee identical behavior in every AI product. A host must support Agent Skills and expose the capabilities a selected workflow needs. Skills degrade to available capabilities and must not silently install missing tools.

## License

This collection is released under the [MIT License](LICENSE). Individual skills may add extra notices for referenced tools or third-party material.

## Releases and updates

Use Git tags for release versions (for example, `v0.1.0`) and keep user-visible changes in `CHANGELOG.md`. The `skills` CLI can update installed skills from the repository:

```bash
npx skills@latest update
```

Codex users who install the optional plugin should start a new task after updating the plugin cache so the refreshed skill instructions are loaded.
