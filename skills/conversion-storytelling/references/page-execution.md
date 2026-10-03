# Page, app, and journey execution

Functional product UI keeps functional language; not every state needs marketing prose.

## Hierarchy before copy

Map messages, then give each section one job. Common order (reorder for awareness and evidence—skeptical technical buyers may need mechanism and proof first): audience and outcome → problem or progress → mechanism → short plan or first-value path → proof and risk controls → blocking objections → explicit next action → credible success state.

## Copy

- Specific meaning over slogans; one idea per section, one dominant action per decision stage.
- Short paragraphs, descriptive headings, lists, comparisons, diagrams, captions.
- Remove duplicate claims, never distinct capabilities, evidence, objections, or search intent.
- Say who it is for and, when useful, not for.
- CTA labels name the real next step (`Book a technical review`); terms stay consistent from marketing through signup, onboarding, and product.

## Content to interface

Comparison → labeled table or toggle; sequence → steps or timeline; mechanism → diagram, annotated mock, or short demo; proof → attributable evidence, screenshots, method, measured outcomes; objections → accessible, indexable accordion; action → clear CTA hierarchy with expectation-setting microcopy. Not every claim becomes a card, icon, number, or animation.

## Continuity and journeys

- Continue the entry source's promise, terms, audience, and next step; labels predict their destination.
- Keep price, terms, limits, privacy, delivery, cancellation, and risk next to the decision they affect; disclose detail progressively without hiding decision-critical facts.
- Mobile and apps: short first-run path to early value; explain each permission at the moment of request; one dominant action per screen; reassurance and recovery beside account, payment, sharing, and irreversible actions; loading, empty, offline, error, and success states say what happened and what to do next; mark real completion with restrained feedback; adapt for new, returning, and power users without changing product truth.

## Quality gate

Fits the product, audience, and task rather than a trend; coherent hierarchy, type, spacing, color, states, and terms; organization, expertise, evidence, contact, and status verifiable where trust depends on them; forms explain requirements, cost, progress, errors, recovery, and success; keyboard, touch, screen reader, contrast, zoom, reduced motion, performance, and narrow widths handled; no placeholders, filler, unsupported claims, deceptive controls, or ornamental effects competing with the task.

Motion escalates layout → CSS → SVG → Lottie → video; copy stays in HTML, heavy media lazy-loads with fallbacks and reserved space, and nothing delays reading, navigation, forms, or the CTA.

## SEO preservation map

Before rewriting an existing page, map each important section:

| Current asset | Purpose | New location | Check |
| --- | --- | --- | --- |
| Heading and copy | Topic, intent | Visible section | Same meaning and hierarchy |
| Capability/entity language | Relevance | Summary + detail | Explicit in HTML |
| Proof/case content | Trust | Proof section | Attribution kept |
| Internal link | Discovery | CTA or text link | Label and URL kept |
| Metadata/schema | Search display | Page metadata | Matches visible copy |

Primary content stays in server-rendered or static semantic HTML, never only in canvas, video, Lottie, hover, or client-only UI.

## Release boundary

Audit, propose the narrative and preservation map, and get approval before broad copy or IA changes unless the user already authorized execution. Ship high-risk SEO changes in reviewable slices with rollback.
