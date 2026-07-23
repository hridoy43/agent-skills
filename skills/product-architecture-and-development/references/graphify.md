# Optional Graphify project mapping

## Principle

Graphify is an opt-in architecture aid, not a default project dependency. Use it when a persistent relationship graph will reduce repeated discovery or refactoring risk. Do not add it merely because it is available.

## Decision gate

**Usually skip Graphify when:**

- the project is a small landing page, prototype, or single-purpose app;
- one developer can understand the routes, components, and dependencies through normal inspection;
- the repository has few domains, little documentation, and a short delivery horizon;
- the graph would have no repeated query, impact-analysis, onboarding, or audit consumer.

**Evaluate Graphify when:**

- the repository is unfamiliar, legacy, or difficult to navigate;
- multiple deployables, packages, languages, schemas, or integration boundaries interact;
- code, ADRs, RFCs, PDFs, and architecture documentation must be connected;
- circular dependencies, ownership, rationale, or change impact are material risks;
- several people or agents will revisit the system across many sessions;
- a persistent, queryable map is cheaper than repeatedly rereading the corpus.

Project size alone is not sufficient. Name the concrete decision or recurring workflow the graph will support.

## Read-only detection

Before recommending setup, inspect without changing state:

- whether the `graphify` command is available;
- whether a project-scoped Graphify skill/configuration already exists;
- whether `graphify-out/graph.json` or related outputs already exist;
- whether repository instructions define Graphify ownership, exclusions, or update policy.

Respect existing configuration. Do not reinstall, overwrite, rebuild, enable hooks, or change its scope automatically.

## Required permission contract

Before installing, configuring, or scanning, tell the user:

1. the exact problem Graphify would solve now;
2. the directory and file types to process, plus exclusions;
3. the commands and project files/configuration that would be added or changed;
4. the outputs, normally under `graphify-out/`, and whether approved core outputs remain local or become team-shared artifacts;
5. the expected maintenance/update workflow;
6. the privacy and cost boundary: code AST parsing is deterministic and local, while semantic extraction for documents, PDFs, images, or media may use the active assistant/model or a configured backend;
7. the simpler no-Graphify alternative.

Then ask for explicit permission and wait. A general request to “set up the project” is not permission to install Graphify or process its corpus. Approval for local code parsing does not imply approval to send private documents or media through semantic extraction.

Suggested prompt:

> Graphify would help with **[specific recurring architecture/impact task]**. I propose configuring it project-locally for **[scope]**, excluding **[sensitive paths]**. It will create **[artifacts/config]**. Code mapping stays local; processing **[docs/media]** may use **[model/backend]** and approximately **[cost/volume estimate]**. The fallback is **[ordinary inspection/tooling]**. May I install/configure it and run this scope?

## Approved setup

After permission:

1. Prefer the isolated official package install: `uv tool install graphifyy` (the package name has two `y` characters).
2. For cross-agent project discovery, prefer project-scoped Agent Skills configuration: `graphify install --project --platform agents`. Use a host-specific project install only when the user wants that host alone.
3. Before the first scan, create or review `.graphifyignore`. For complex or sensitive projects, prefer a deny-by-default allowlist such as `*`, `!src/`, and `!src/**`, then add only other approved roots. Graphify also respects `.gitignore`; never bypass it with `--no-gitignore` without separate approval.
4. Build only the approved path and file types. Exclude secrets, credentials, generated output, vendor directories, personal data, and unapproved sensitive documents.
5. Choose an artifact policy explicitly:
   - **Local/private:** ignore all of `graphify-out/` and define retention/cleanup.
   - **Team-shared:** inspect the graph/report for sensitive data, then commit only approved core outputs; keep local cost data and optionally cache ignored. Use working Git negation patterns rather than ignoring the parent directory and attempting ineffective child exceptions.
6. After an approved graph exists, add a short project-instruction section that tells agents when to query the graph, when to verify against source, and how to refresh it after relevant changes. Do not copy commands from another project without checking the installed version's help.
7. Use incremental updates after the initial approved graph. Do not enable strict mode, watch processes, git hooks, MCP, Neo4j, optional media/office extras, or host-specific always-on plugins without separate need and permission.

If the local `graphify` skill is available, follow it for execution after approval. If it is missing, explain that capability and ask before installing it; never substitute an unaffiliated similarly named package.

## Privacy and evidence rules

- Treat graph edges as evidence with provenance, not unquestionable architecture truth.
- Separate extracted, inferred, and ambiguous relationships in decisions and reports.
- Validate high-impact dependencies against source code and authoritative documentation before refactoring.
- Do not expose proprietary code or documents to an external semantic backend without explicit authorization and an understood retention/training policy.
- Record scope, exclusions, backend, outputs, owner, creation date, and refresh/cleanup policy in the decision ledger.
- Treat `.graphifyignore`, the artifact policy, and the project instruction section as reviewable architecture configuration. Keep them minimal and owned; do not generate host-specific hooks for agents the project does not use.

## Fallback when skipped or declined

Use repository-native and deterministic tools: manifests, workspace/project references, route trees, compiler dependency output, package-manager graphs, SQL schema tools, static analysis, `rg`, ADR indexes, and a concise architecture decision record. Revisit Graphify only when repeated discovery cost or cross-boundary uncertainty becomes measurable.

## Primary source

The official [Graphify repository](https://github.com/Graphify-Labs/graphify) documents local AST parsing, optional semantic handling for docs/media, project-scoped Agent Skills installation, generated outputs, queries, and optional integrations. Recheck its current documentation before installation because commands and supported platforms can change.
