# Wigolo Setup

Read only when installing, wiring, or changing Wigolo configuration.

## Installation Consent

Review current upstream requirements. Disclose that Wigolo currently requires Node.js 20+, can download roughly 1.5 GB of browser/model assets, stores state under `~/.wigolo/`, and is AGPL-3.0-only. Obtain explicit approval after disclosure.

After approval:

```bash
npx wigolo init
npx wigolo doctor
```

Use `--no-warmup` only to defer assets. Never put API keys in commands, logs, skills, or committed configuration.

## Codex Wiring

Engine installation and Codex wiring need separate approval. Wigolo's `--agents=codex` or `setup mcp --agents=codex` may change Codex configuration and add an instructions block to the current directory's `AGENTS.md`. For MCP-only access, prefer narrow native registration:

```bash
codex mcp add wigolo -- wigolo mcp
```

If only `npx` is available, pin the verified version and disclose that startup may restore a missing cached package:

```bash
codex mcp add wigolo -- npx -y wigolo@<verified-version> mcp
```

Verify with `codex mcp list`.

## Configuration Gate

Enabling TLS/stealth, a solver, proxy, hosted reader, external LLM, authentication profile, telemetry, or monitoring delivery changes privacy, behavior, or spend. Explain the effect and obtain approval first. Review AGPL obligations before modifying, embedding, or redistributing Wigolo.
