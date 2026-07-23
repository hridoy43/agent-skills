# Page and journey execution

## Build the hierarchy before copy

Start with a message map, then define section jobs. A common order is:

1. identify the audience and valuable outcome;
2. name the relevant problem or desired progress;
3. explain the product/service mechanism;
4. show a short plan or first-value path;
5. present proof and risk controls;
6. answer decision-blocking objections;
7. make the next action explicit;
8. reinforce the credible success state.

Change the order when awareness or evidence calls for it. A familiar product may lead with differentiation; a skeptical technical buyer may need mechanism and proof earlier.

## Copy rules

- Lead with specific meaning, not slogans that could describe any company.
- Keep one primary idea per section and one dominant action per decision stage.
- Prefer short paragraphs, descriptive headings, lists, comparisons, diagrams, and captions.
- Remove duplicate claims, not distinct capabilities, evidence, objections, or search intent.
- State who the offer is for and, when useful, who it is not for.
- Make CTA labels describe the actual next step: `Start a trial`, `Book a technical review`, or `See the workflow`.
- Keep terms consistent between marketing, signup, onboarding, and product UI.

## Content-to-interface map

Use interface elements according to narrative purpose:

- **comparison:** side-by-side table or toggle with visible labels;
- **sequence:** steps, timeline, or lightweight animated path;
- **mechanism:** diagram, annotated product mock, or short demo;
- **proof:** attributable case evidence, screenshots, methodology, or measured outcomes;
- **objections:** semantic accordion with accessible, indexable content;
- **action:** clear CTA hierarchy and expectation-setting microcopy.

Do not turn every claim into a card, icon, number, or animation. Visual rhythm needs quiet space and hierarchy.

## Interaction and motion

Escalate only as needed:

1. layout, typography, spacing, contrast;
2. CSS/Tailwind state transitions and reveals;
3. SVG diagrams or path animation;
4. Lottie for a reusable process or branded explanation;
5. product video for real sequence and demonstration.

Keep meaningful copy in HTML. Treat SVG/Lottie/video as enhancement, provide fallbacks, reserve dimensions, lazy-load heavy media, and respect reduced motion. Never delay reading, navigation, form completion, or CTA access for an animation.

## SEO/content preservation map

Before an existing-page rewrite, record for every important section:

| Current asset | Search/user purpose | New location | Preservation check |
| --- | --- | --- | --- |
| heading and supporting copy | primary topic/intent | visible section | same meaning and hierarchy |
| capability/entity language | relevance and clarity | summary + detail | explicit in HTML |
| proof/case content | trust and experience | proof section | attribution retained |
| internal link | discovery and navigation | relevant CTA or text link | descriptive label and URL retained |
| metadata/schema | search presentation | page metadata | truthful and consistent with visible copy |

Use server-rendered or static semantic HTML for primary content. Do not move search-critical meaning exclusively into canvas, video, Lottie JSON, hover states, or client-only UI. Structured data must describe visible, current content.

Google recommends [people-first, reliable content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) and notes that server-side or pre-rendering remains valuable for users and crawlers in its [JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

## Existing-page release boundary

Audit first, propose the narrative and preservation map, then obtain approval before broad copy or information-architecture changes unless the user already gave explicit execution authority. Roll out high-risk SEO changes in reviewable slices with a rollback path.
