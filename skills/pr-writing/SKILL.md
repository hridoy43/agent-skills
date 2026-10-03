---
name: pr-writing
description: Drafts pull request and merge request descriptions from the actual diff, commits, templates, and tickets, with verification steps, risk, and rollout notes for any review platform. Use when preparing a PR, MR, or code-review description.
---

# Pull Request Writing

Help a reviewer see what changed, why, how to verify it, and what risk remains.

## Inspect first, ask last

Read the branch, base branch (don't assume `main`), commits, diff, PR template, contribution guide, CI, scripts, migrations, config, and linked metadata. Draft from verified evidence in one pass, then list only material gaps (ticket, deployment step, private link, screenshot) under `Needs confirmation`; in automated runs, proceed with labeled assumptions. Never invent tickets, test results, screenshots, metrics, approvals, deployment steps, or completed work.

Reference order: repo template and guidance → repo conventions → ticket from branch, commits, metadata, or user (Jira, Linear, GitHub Issues, YouTrack, Azure Boards, or plain links—don't assume URL formats) → neutral default. Works for GitHub, GitLab, Bitbucket, Azure DevOps, and others.

## Draft

Group changes by user-visible behavior, implementation, data/API impact, and operations. Separate facts, inferences, and open questions. Match the repo's language and template; otherwise:

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

Omit empty sections. List automated checks with the real command and result. Verification by change type:

- Bug fix: reproduce the original issue → previous result → verify the fix → regression checks.
- Feature: prerequisites → acceptance scenarios → expected outcomes → edge cases.
- UI: routes/screens, responsive and interaction states, accessibility, visual evidence.
- API/backend: inputs, outputs, authorization, validation, errors, persistence, compatibility.
- Mobile: device/OS prerequisites, flow, permissions, offline, platform differences.
- Infra/deploy: environment setup, migrations, health checks, observability, rollback.

Neutral shape when nothing better exists: `### Preconditions`, `### Scenarios` (Given / When / Then; label the first one as the original-issue repro for bug fixes), `### Edge cases and regression checks`, `### Evidence`. Never claim a scenario ran without evidence.

Add a Mermaid diagram only for state transitions, architecture, data flow, or multi-step interactions that prose can't carry.

## Check before returning

Ticket and external links, test commands, migration order, feature flags, security and privacy impact, accessibility, performance, API contracts, rollback. No secrets or customer data. Return the description first, then `Needs confirmation` (only if needed) and the evidence used.
