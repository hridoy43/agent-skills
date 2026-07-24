---
name: pr-writing
description: Use when preparing pull requests, merge requests, or code-review descriptions from repository changes - creates accurate, reviewable summaries with ticket context, testing evidence, risk, rollout, and platform-neutral links
---

# Pull Request Writing

Write a review document from the actual branch changes, repository conventions, and user's approved context. A pull request should help a reviewer understand what changed, why it changed, how to verify it, and what risk remains.

## Interview before drafting

Ask only questions that change the output: review platform, base branch, work-tracker system, ticket reference, repository template, audience, deployment process, screenshots, and known risks. Detect what can be verified locally first. Never invent a ticket, test result, screenshot, metric, approval, deployment step, or completed work.

## Resolve project context

Use this order for references:

1. Repository-provided pull-request template and contribution guidance.
2. Team or platform conventions found in the repository.
3. Ticket or issue reference from the branch, commits, linked metadata, or user input.
4. A neutral default when no convention or ticket exists.

Support GitHub, GitLab, Bitbucket, Azure DevOps, and equivalent review systems. Support Jira, Linear, GitHub Issues, YouTrack, Azure Boards, and plain links without assuming a URL format. Treat a ticket as optional unless the project requires one.

## Analyze before writing

- Identify the base branch explicitly; do not assume `main` when the repository says otherwise.
- Inspect the diff, changed files, commits, tests, migrations, configuration, and generated artifacts.
- Group changes by user-visible behavior, technical implementation, data/API impact, and operational impact.
- Separate verified facts, inferred context, and unresolved questions.
- Match the repository's language and template while keeping the result concise.

## Default structure

Use the repository template when present. Otherwise use:

```md
## Summary

## Why this change

## What changed

## How to verify

## Risks and follow-up

## Deployment, migration, or rollback notes

## Related ticket or external context

## Screenshots or recordings
```

Include numbered manual QA steps when behavior changes. Mention automated checks with their actual command and result. Add screenshots or recordings only when available and relevant. Omit empty sections rather than filling them with placeholders.

## Diagrams and evidence

Use a Mermaid diagram only when state transitions, architecture, data flow, or a multi-step interaction is genuinely difficult to explain in prose. Keep it inside the summary or context section. Do not add diagrams for simple copy, styling, or isolated refactors.

## Quality and safety checks

Before returning the draft, verify ticket and external links, test commands, migration order, feature flags, security/privacy impact, accessibility, performance, API contracts, and rollback implications when applicable. Mark unknowns clearly and request missing evidence instead of guessing. Do not expose secrets or private customer data in the review description.

## Output contract

Return the proposed PR description, a short list of unresolved inputs, and the evidence used. Preserve user wording where appropriate, but prioritize the repository's required format and accurate review context.
