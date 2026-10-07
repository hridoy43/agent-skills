# AI product systems

Only when AI behavior ships in the product. First define the user task, why probabilistic output is acceptable, success measures, unacceptable outcomes, human fallback, latency and cost budget, data permissions, and the non-AI baseline. Prefer a deterministic workflow when it is simpler and safer.

```text
features/<feature>/ai/{prompts,schemas,evals,tools}/  <feature>Ai.service.ts
lib/ai/{client.ts, modelPolicy.ts, errors.ts}          # provider-neutral boundary
```

Features own prompts, tools, schemas, and evals. The shared client owns provider auth, timeouts and cancellation, model policy, usage/cost/error telemetry, and safe retries. No catch-all AI service.

- Validate structured outputs and tool inputs/outputs. Tools are authorized outside the model; the model never grants itself permission. Expose tools through a typed boundary (for example MCP) with least privilege.
- Bound steps, time, rate, and spend. Treat retrieved and user content as untrusted data. Keep secrets and system prompts out of bundles and logs.
- Define refusal, fallback, escalation, and partial failure. Require human approval for irreversible, financial, security-sensitive, public, or high-impact actions; keep undo or audit trails.
- Evals: a versioned representative set (with adversarial cases) before launch, rerun when prompts, models, tools, retrieval, or policy change. Measure task success, grounding, tool/schema correctness, safety, latency, and cost. Demos are not evidence.
- Retrieval: source authority, ingestion owner, chunking and versioning, permission filtering before retrieval, freshness and deletion, citations, "not found" behavior; evaluate retrieval separately.
- Log model and version, prompt version, tool outcomes, latency, and tokens/cost with privacy-aware sampling; no raw confidential content by default; set retention and redaction.
- UX: set expectations, show progress, cite sources, allow correction, and separate suggestions from completed actions. Build chat, reasoning, tool-call, and voice UI from the AI row in [ui-sources.md](ui-sources.md) instead of from scratch.
