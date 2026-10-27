# Optional Graphify mapping

[Graphify](https://github.com/Graphify-Labs/graphify) builds a queryable code-and-docs graph. Opt-in only, for a named recurring need: unfamiliar or legacy repos, several deployables or languages, code plus ADRs and docs to connect, cycle or impact risk, or many sessions revisiting the system. Size alone is not a reason.

- Detect read-only first (`graphify` command, project skill or config, `graphify-out/graph.json`, repo instructions); respect existing setup and never reinstall, rebuild, or enable hooks automatically.
- Ask with: the problem it solves now, scope and exclusions, files and outputs it adds (local or team-shared), update workflow, privacy and cost (code parsing is local; docs, PDFs, and media may go to a model), and the no-Graphify alternative. "Set up the project" is not approval, and approving code parsing doesn't approve sending documents.
- After approval: install with the command in `check-companions.mjs` (never a similarly named package), then follow the `graphify` skill and the installed CLI's help. Write `.graphifyignore` first (deny-by-default for sensitive repos; exclude secrets, generated output, vendor dirs, personal data); no `--no-gitignore`, watch mode, hooks, MCP, or extras without separate approval; incremental updates only.
- Graph edges are evidence: separate extracted from inferred and verify high-impact dependencies in source before refactoring. Record scope, outputs, owner, and refresh policy. If declined, use manifests, compiler dependency output, route trees, `rg`, and ADR indexes.
