# Optional Graphify mapping

Graphify ([official repo](https://github.com/Graphify-Labs/graphify)) builds a queryable code-and-docs graph. Opt-in only, for a named recurring need: unfamiliar or legacy repos, several deployables or languages, code plus ADRs and docs to connect, cycle or impact risk, or many sessions revisiting the system. Skip it for small or short-lived projects. Size alone is not a reason.

## Detect read-only first

Check for the `graphify` command, a project Graphify skill or config, existing `graphify-out/graph.json`, and repo instructions about it. Respect existing setup; never reinstall, rebuild, or enable hooks automatically.

## Ask with this contract

State the problem it solves now, scope and exclusions, commands and files it adds, outputs (`graphify-out/`) and whether they're local or shared, update workflow, privacy and cost (code AST parsing is local; docs, PDFs, and media may go to a model), and the no-Graphify alternative. Wait for explicit approval; "set up the project" is not approval, and approving code parsing doesn't approve sending documents.

## After approval

1. Install the latest stable package: `uv tool install graphifyy` (two `y`s); the CLI is `graphify`.
2. Prefer project-scoped skills: `graphify install --project --platform agents`.
3. Create or review `.graphifyignore` first (deny-by-default for sensitive repos: `*`, `!src/`, `!src/**`); never use `--no-gitignore` without approval. Exclude secrets, generated output, vendor dirs, and personal data.
4. Choose artifacts: local (ignore `graphify-out/`, set cleanup) or team-shared (review for sensitive data, commit only approved core outputs with working Git negation patterns).
5. Add a short project-instruction note on when to query, when to verify against source, and how to refresh. Check the installed version's help instead of copying commands.
6. Incremental updates only; no watch mode, git hooks, MCP, Neo4j, media extras, or always-on plugins without separate approval.

If the `graphify` skill is installed, follow it after approval; otherwise suggest it and never substitute a similarly named package. Graph edges are evidence with provenance: separate extracted from inferred, and verify high-impact dependencies in source before refactoring. Record scope, backend, outputs, owner, date, and refresh policy. If declined, use manifests, compiler dependency output, route trees, `rg`, schema tools, and ADR indexes.
