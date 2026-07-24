# Conversion Storytelling

Use this skill to turn a truthful product, service, ecommerce, or marketing brief into a clear customer journey and a measurable next action.

## Required before use

- A supported agent with Agent Skills enabled.
- The user's product/offer, audience, desired action, approved claims, and constraints.
- Existing page copy and URLs when revising an existing surface.

No runtime package, API key, analytics account, or browser tool is required for the core workflow.

## Install and invoke

```bash
npx skills@latest add hridoy43/agent-skills \
  --skill conversion-storytelling \
  --global
```

Then invoke `$conversion-storytelling` on a compatible Agent Skills host. Provide the product, audience, desired action, approved claims, and existing copy when available.

## Optional companion skills

Install only when the task needs them:

- `product-architecture-and-development` for implementation, SEO, component architecture, analytics, and technical validation.
- `impeccable` or `ui-ux-pro-max` for visual and interaction design.
- `global-discovery-browsing-extraction` for current competitor, market, or search-intent research.

These companions are optional. The skill works independently for messaging and content planning.

## Related skills

- [Product Architecture and Development](../product-architecture-and-development/README.md) — implementation, semantic structure, SEO, analytics, and technical validation.
- [Global Discovery, Browsing & Extraction](../global-discovery-browsing-extraction/README.md) — current market and search-intent evidence.
- [Repository overview](../../README.md) — collection installation and compatibility.

## What it covers

- StoryBrand/SB7, PAS, Before-After-Bridge, Golden Circle, AIDA, Hero's Journey, and supporting frameworks.
- Message maps, proof ledgers, CTA hierarchy, objections, and measurement plans.
- SEO-safe content simplification and semantic page structure.

## What it does not do automatically

- It does not invent claims, testimonials, urgency, metrics, or customer evidence.
- It does not replace the user's chosen positioning or framework silently.
- It does not install tools or publish changes without authorization.

Invoke it as `$conversion-storytelling` on a compatible Agent Skills host. Codex users may also use `$wahid:conversion-storytelling` when the optional plugin is installed.
