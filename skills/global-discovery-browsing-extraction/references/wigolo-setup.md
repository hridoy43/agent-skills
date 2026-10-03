# Wigolo setup

Read only when installing or rewiring Wigolo.

Disclose before asking for approval: public beta, Node.js 20+, about 1.5 GB of browser and model downloads, state in `~/.wigolo/`, AGPL-3.0. After approval:

```bash
npx wigolo@latest init
npx wigolo@latest doctor
```

Agent wiring needs separate approval. `init --agents=<list>` (for example `claude-code,codex,cursor`) may edit agent config and the current directory's `AGENTS.md`. For MCP-only access, prefer the host's own registration:

```bash
claude mcp add wigolo -- wigolo mcp   # verify: claude mcp list
codex mcp add wigolo -- wigolo mcp    # verify: codex mcp list
```

With only `npx`, pin the latest stable version verified at setup (`npx -y wigolo@<version> mcp`). Never put API keys in commands, logs, or committed config. Enabling TLS or stealth settings, solvers, proxies, hosted readers, external LLMs, auth profiles, telemetry, or monitoring delivery needs informed approval. Review AGPL obligations before modifying or redistributing it.
