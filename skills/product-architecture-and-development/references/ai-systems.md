# AI product systems

Use only when AI behavior is part of the shipped product.

## Start with the product decision

Define the user task, why probabilistic behavior is acceptable, measurable success, unacceptable outcomes, human fallback, latency/cost budget, data permissions, and non-AI baseline. Do not add an agent where a deterministic workflow is simpler and safer.

## Boundary

```text
features/<feature>/
  ai/
    prompts/
    schemas/
    evals/
    tools/
    <feature>-ai.service.ts
lib/ai/
  client.ts                    # provider-neutral request boundary
  model-policy.ts
  errors.ts
```

Feature code owns task prompts, tools, schemas, and evals. The shared AI client owns provider authentication, timeout/cancellation, model selection policy, normalized usage/cost/error telemetry, and safe retries. Avoid a generic “AI service” containing every product task.

## Reliability and safety

- Validate structured outputs and tool inputs/outputs.
- Authorize tools separately from the model; the model never grants itself permission.
- Apply least privilege, bounded steps, timeouts, rate limits, and spend limits.
- Treat retrieved/user content as untrusted data, not instructions.
- Keep secrets and hidden system policy out of client bundles and logs.
- Define refusal, fallback, escalation, and partial-failure behavior.
- Require human approval before irreversible, financial, security-sensitive, public, or high-impact actions.
- Provide undo/audit trails where practical.

## Evaluation

Create a versioned representative evaluation set before launch. Measure task success, groundedness/accuracy, schema/tool correctness, safety failures, latency, and cost. Include adversarial and edge cases.

Run evals when prompts, models, tools, retrieval, or policies change. Separate offline evaluation, staging review, and production outcome monitoring. Never treat a few demos as evidence of reliability.

## Retrieval and knowledge

Define source authority, ingestion ownership, chunk/version strategy, permissions filtering before retrieval, freshness/deletion, citations, and “not found” behavior. Evaluate retrieval separately from generation.

## Observability and privacy

Record model/provider/version, prompt template version, tool outcomes, latency, token/cost totals, and error class with privacy-aware sampling. Do not log raw confidential content by default. Establish retention and redaction policy.

## UX

Set expectations about uncertainty and processing. Show progress for long tasks, cite sources when claims depend on them, make corrections possible, preserve user control, and distinguish suggestions from completed actions. AI animation or conversational chrome must not substitute for a clear task flow.
