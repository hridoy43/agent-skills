# Evidence-Led Product Design

Use this reference for product, UX, and behavior decisions on any platform. It is a decision discipline, not a mobile-only UI pattern and not a replacement for specialist storytelling, research, or design skills.

## Decision loop

1. Define the user, problem, desired behavior, product outcome, and constraints.
2. State the design or product hypothesis before choosing an implementation.
3. Select proportionate evidence: analytics, user research, usability testing, domain research, benchmark studies, support data, or a small experiment.
4. Analyze the complete journey and surrounding states, not only a screen: entry, progression, success, loading, empty, error, recovery, and return use.
5. Label claims as `observed`, `supported`, `inferred`, `hypothesis`, or `unknown`.
6. Define a primary outcome, supporting diagnostics, guardrail metrics, baseline, audience segment, and validation method.
7. Check accessibility, trust, privacy, safety, dark-pattern risk, and unintended incentives.
8. Implement the smallest useful slice, validate it, and record what changed or remains uncertain.

## Apply by product area

- Onboarding: optimize value clarity, relevance, trust, and first meaningful success—not screen count alone.
- Monetization and checkout: evaluate timing, context, uncertainty, recovery, and the full lifecycle—not only the paywall or payment screen.
- Gamification and notifications: connect mechanics to meaningful user value; never add points, badges, streaks, leaderboards, or urgency by default.
- Dashboards: optimize decision quality and next action; charts must answer a user question, not merely fill space.
- Forms and workflows: minimize unnecessary effort while preserving information needed for understanding, safety, and correct decisions.
- Motion and progressive disclosure: reveal complexity when it improves comprehension; never hide required information or let animation compete with the task.

## Evidence boundaries

Popular products, videos, articles, UI galleries, and named frameworks are inspiration or hypotheses—not proof that a pattern will work here. Preserve source links, sample scope, date, method, and limitations. Do not generalize a single case study or creator claim into a default rule.

Use established frameworks such as Google HEART, behavior-design models, usability heuristics, or domain research when relevant, but adapt them to the product and user. Prefer direct product evidence when available.

## Specialist routing

For landing pages, marketing sites, pricing, sales narratives, public product pages, or conversion-focused onboarding, load `conversion-storytelling`. It owns narrative spine, proof ledger, CTA roles, SEO preservation, and conversion measurement. This reference owns the product hypothesis, flow implications, technical boundary, and validation handoff.

For visual critique or interaction polish, route to the relevant UI/UX specialist. For domain-sensitive behavior, use domain research or requirements clarification. Do not load every specialist for a routine implementation.

## Required decision record

```text
Outcome:
Owning feature:
User/segment:
Hypothesis:
Evidence and provenance:
Observed vs inferred:
Flow/states in scope:
Primary metric:
Guardrails:
Accessibility/trust/privacy risks:
Smallest validation:
Decision and follow-up:
```
