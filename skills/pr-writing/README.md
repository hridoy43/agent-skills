# PR Writing

Draft accurate pull request, merge request, or code-review descriptions from real repository changes. Works with GitHub, GitLab, Bitbucket, Azure DevOps, and common work-tracker systems.

## Install

```bash
npx skills@latest add hridoy43/agent-skills \
  --skill pr-writing \
  --global
```

## Use it

Invoke `$pr-writing` with the repository path and review request. Add the base branch, ticket or issue link, review platform, project template, deployment context, and any screenshots when known.

The skill reads repository conventions first, analyzes the actual diff, asks only material questions, and produces reviewer-friendly summary, context, QA steps, risk, rollout, and evidence sections without inventing claims.

## Related skills

- [Product Architecture and Development](../product-architecture-and-development/README.md) — validate technical boundaries and implementation impact.
- [GitHub README and Profile Writing](../github-readme-and-profile-writing/README.md) — document public-facing project and release changes.
- [Content Marketing and Brand Growth](../content-marketing-and-brand-growth/README.md) — turn shipped work into useful launch and build-in-public content.
