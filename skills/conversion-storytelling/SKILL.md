---
name: conversion-storytelling
description: Use when shaping or redesigning conversion-focused websites, apps, landing pages, marketing sites, ecommerce/product pages, launches, funnels, onboarding, pricing, checkout, positioning, sales narratives, or CTAs, and when adapting an approved product story into campaign copy, video scripts, social creative, or thumbnail briefs. Follows the user's chosen framework and strategy, or selects an appropriate established narrative or behavior framework only when it adds value, while preserving truthful claims, proof, SEO where relevant, accessibility, and qualified, measurable outcomes.
---

# Conversion Storytelling

Build a clear path from the audience's present state to a credible next action. Treat every framework as a hypothesis, not a guarantee; user-approved facts, positioning, tone, offer, and framework take precedence over defaults.

## Decision order

1. Current user instructions and confirmed brand/product truth.
2. Safety, privacy, legal truthfulness, accessibility, and platform constraints.
3. Existing evidence, search intent, analytics, and healthy product conventions.
4. This skill's framework guidance.

Never silently replace the user's chosen framework. Explain a material risk and request a decision only when it changes truth, safety, scope, or the intended outcome.

For every public indexable surface, SEO is a release gate, not an optional tradeoff. A framework may reorganize or simplify presentation, but it must not knowingly remove crawlability, semantic meaning, distinct search intent, useful evidence, metadata, internal links, or URL continuity. If a preferred treatment conflicts, provide an SEO-safe alternative. Do not offer “accept the SEO risk” as a waiver while the surface remains public and indexable; the gate changes only when the user explicitly changes its purpose to private or intentionally non-indexable and confirms that consequence.

## Context sufficiency gate

Before selecting a framework or producing an artifact:

1. Extract the relevant context already present in the prompt, files, links, assets, repository, and prior messages.
2. Classify missing information as `blocking` when it could materially change the audience, product truth, strategy, format, safety, or intended outcome; otherwise treat it as `non-blocking`.
3. Ask one to three grouped questions only for blocking information. Do not repeat questions the user already answered.
4. When the user requests a fast draft or clearly authorizes progress, state reasonable, reversible assumptions and proceed.
5. Never assume product claims, customer evidence, brand facts, legal status, performance results, or private information.

When context is sufficient, state only material assumptions and continue without an interview.

## Workflow

### 1. Establish the audience and outcome brief

Capture or confirm only what matters to the requested surface:

- product or project, audience, awareness, intent, pain or desired progress;
- offer or value, mechanism, immediate action, durable user outcome, and business-qualified outcome;
- approved proof, objections, tone, prohibited claims, required content, and available assets;
- surface, distribution or entry context, journey stage, format, and platform constraints;
- current content, URLs or flows, organic queries when relevant, analytics baseline, and success criteria.

For websites or apps, also capture the primary task, current friction, relevant screens or routes, device/platform, accessibility, and SEO requirements. For media or campaign content, capture placement, duration or dimensions, viewer state, asset constraints, and CTA. Do not collect every field when a smaller brief is decision-complete.

### 2. Audit before changing

For an existing product, inventory the current message hierarchy, semantic content, URLs, metadata, internal links, proof, CTA paths, funnel data, and interaction behavior. Preserve what is useful or already performing until evidence supports a change.

### 3. Choose a framework only when useful

Read [framework-selection.md](references/framework-selection.md) completely. If the user selected a framework, follow it unless it creates a material truth, safety, legal, accessibility, scope, or outcome risk; explain that risk and request a decision rather than silently replacing it. If the user did not select one, recommend the best-fitting framework only when it improves the work. When no formal framework adds value, use the user's approved strategy, evidence, and healthy surface conventions without forcing one.

When a framework is useful, select one primary narrative spine per surface and explain why it fits the audience, awareness, involvement, evidence, risk, and action. Read [behavior-and-decision-design.md](references/behavior-and-decision-design.md) when the task involves incomplete action, onboarding, activation, checkout friction, high-consideration persuasion, or continuing behavior. Use at most one primary narrative spine, one optional behavior diagnostic, and one execution audit; each must solve a different problem. Do not treat a popular framework as a universal causal sequence, default every surface to StoryBrand, or force marketing prose into functional product UI.

Use this quick guide while comparing candidates:

- **StoryBrand / SB7:** complex homepages and services needing customer clarity, guide positioning, a plan, stakes, and success.
- **PAS:** already-recognized, costly problems where proportionate consequences and credible relief are supportable; never use shame or invented urgency.
- **Before-After-Bridge:** concise product, ecommerce, feature, or transformation pages where current and desired states can be shown clearly.
- **Golden Circle:** brand, mission, category, or founder positioning where “why” differentiates before “how” and “what”; usually a positioning layer, not a checkout flow.
- **AIDA:** short ads, email, campaigns, and fast transactional paths with one clear action; add proof for high-consideration decisions.
- **Hero's Journey:** founder or customer stories with an attributable protagonist and real transformation; do not make the brand the hero by default.

Also consider Star-Story-Solution, Problem-Mechanism-Proof, Four Ps, and Jobs-to-be-Done from the framework reference. When using a framework, choose one primary spine per surface; layer another only for a distinct section purpose.

### 4. Produce the message map

Define: present state, desired progress, problem, stakes, mechanism, proof, objections, plan, success, primary CTA, secondary CTA, and disqualifiers. Mark every statement as `approved`, `supported`, `needs evidence`, or `prohibited`.

### 5. Translate story into the requested surface

For websites, apps, landing pages, ecommerce, pricing, checkout, or onboarding, read [page-execution.md](references/page-execution.md) completely. Produce a scannable hierarchy before polished copy. Keep the customer/user central, make the product's role concrete, and use progressive disclosure instead of either a text wall or content deletion. Interaction and motion must clarify the story rather than decorate it.

For promo videos, YouTube, short-form video, thumbnails, social creative, or campaign adaptations, read [content-adaptation.md](references/content-adaptation.md) completely. This skill owns the approved message, proof, and CTA adaptation; campaign strategy, publishing, and media production remain companion responsibilities.

### 6. Protect truth and surface value

Read [proof-and-measurement.md](references/proof-and-measurement.md) completely. Never fabricate testimonials, metrics, customers, scarcity, urgency, guarantees, or case studies. For public indexable pages, keep search-critical meaning in visible semantic HTML and preserve distinct intent, evidence, entities, and internal links while simplifying phrasing. For other surfaces, preserve platform accessibility, approved meaning, and continuity with the destination experience.

### 7. Measure the hypothesis

Define one primary qualified outcome, supporting diagnostics, quality/guardrail metrics, baseline, audience segment, and validation method appropriate to the surface. Describe expected improvement as a hypothesis. Do not claim that a framework will increase conversion without reliable outcome data.

## Required output

Return the common outputs:

1. audience/outcome brief, assumptions, and unresolved decisions;
2. selected framework or approved strategy basis, plus material rejected alternatives only when a framework selection occurred;
3. message map and proof ledger;
4. surface-specific execution plan with hierarchy and CTA role;
5. professional-quality, accessibility, and truth checks;
6. measurement plan and implementation boundary.

For websites and apps, also return the applicable page/flow outline, interaction states, responsive direction, and SEO/content preservation map. For video, return the applicable concept, hook, beat sheet or script, scene/audio/caption direction, and CTA timing. For thumbnails or static creative, return the concept, composition, text hierarchy, small-size readability, and export constraints. For social content, return platform adaptation, copy structure, visual direction, and CTA.

## Companion boundaries

- Use `product-architecture-and-development` for website/app architecture, implementation, and technical verification.
- Use `ai-assisted-product-development` for AI-assisted exploration, feedback, decision records, and human review.
- Use `content-marketing-and-brand-growth` for campaign strategy, platform planning, publishing, and content operations.
- Use `global-discovery-browsing-extraction` for current audience, competitor, market, or search evidence.
- Use the relevant UI, image, animation, or video skill for production. This skill supplies narrative, proof, hierarchy, CTA, and measurement direction without duplicating the production workflow.
