---
name: pr-writing
description: Use when preparing pull requests, merge requests, or code-review descriptions from repository changes - creates accurate, reviewable summaries with ticket context, testing evidence, risk, rollout, and platform-neutral links
---

# Pull Request Writing

Write a review document from the actual branch changes, repository conventions, and user's approved context. A pull request should help a reviewer understand what changed, why it changed, how to verify it, and what risk remains.

## Inspect first, ask last

Do not make the workflow pause for a questionnaire. Inspect the repository, branch, commits, diff, templates, CI, scripts, deployment files, and linked metadata first. Generate the best generic draft from verified evidence in one prompt. Ask a follow-up only after the draft when a missing fact materially changes correctness, such as an unknown ticket, non-obvious deployment requirement, private link, or unavailable screenshot.

If the skill is running inside an automated agent, continue with detected or clearly labelled assumptions. Never invent a ticket, test result, screenshot, metric, approval, deployment step, or completed work. Put unresolved inputs in a short `Needs confirmation` section instead of blocking the entire draft.

## Resolve project context

Use this order for references:

1. Repository-provided pull-request template and contribution guidance.
2. Team or platform conventions found in the repository.
3. Ticket or issue reference from the branch, commits, linked metadata, or user input.
4. A neutral default when no convention or ticket exists.

Do not require the user to identify the review platform, tracker, base branch, or deployment process when the repository makes them discoverable. If they are not discoverable, use neutral wording and flag the gap after drafting.

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

Choose the verification shape from the change type instead of forcing one company-specific template:

- **Bug fix:** reproduce the original issue → record the previous result → verify the fix → run regression checks.
- **New feature:** state prerequisites → describe acceptance scenarios → verify expected outcomes → cover edge cases.
- **UI change:** verify routes or screens, responsive states, accessibility, interaction states, and visual evidence.
- **API or backend change:** verify inputs, outputs, authorization, validation, errors, persistence, and compatibility.
- **Mobile change:** verify device or OS prerequisites, the user flow, permissions, offline behavior, and platform differences.
- **Deployment or infrastructure change:** verify environment setup, migrations, health checks, observability, and rollback.

Use this neutral shape when the repository has no stronger convention:

```md
## Verification

### Preconditions

### Scenarios
1. Given ...
2. When ...
3. Then ...

### Edge cases and regression checks

### Evidence
```

For bug fixes, label the first scenario as reproducing the original issue. For other changes, use acceptance scenarios. Do not claim a scenario was run unless the evidence exists.

## Diagrams and evidence

Use a Mermaid diagram only when state transitions, architecture, data flow, or a multi-step interaction is genuinely difficult to explain in prose. Keep it inside the summary or context section. Do not add diagrams for simple copy, styling, or isolated refactors.

## Quality and safety checks

Before returning the draft, verify ticket and external links, test commands, migration order, feature flags, security/privacy impact, accessibility, performance, API contracts, and rollback implications when applicable. Mark unknowns clearly and request missing evidence instead of guessing. Do not expose secrets or private customer data in the review description.

## Output contract

Return the PR description first, followed by a short `Needs confirmation` list only when necessary and the evidence used. Preserve user wording where appropriate, but prioritize the repository's required format and accurate review context.
