# Practical Agent Skills for Product Work

A focused collection of portable Agent Skills for designing, building, researching, and improving digital products. Maintained by [hridoy43](https://github.com/hridoy43), each skill follows the open [Agent Skills specification](https://agentskills.io/specification) and can be installed by compatible coding agents through the [skills CLI](https://skills.sh/docs/cli). The repository also retains optional Codex plugin metadata.

## Included skills

- `product-architecture-and-development` — plans and implements maintainable TypeScript-first web, mobile, desktop, API, and multi-app products.
- `conversion-storytelling` — chooses and applies truthful conversion narratives for pages, journeys, launches, onboarding, proof, and CTAs without sacrificing SEO or user intent.
- `global-discovery-browsing-extraction` — routes local-first web discovery, browsing, extraction, monitoring, and evidence validation across available tools.

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
│   ├── conversion-storytelling/
│   ├── global-discovery-browsing-extraction/
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
