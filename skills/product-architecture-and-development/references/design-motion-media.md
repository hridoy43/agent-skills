# Design, motion, and media

## Design order

First solve content hierarchy, layout, typography, spacing, color, contrast, and responsive behavior. Then add interaction.

Use Impeccable for critique/refinement. Use UI/UX Pro Max when pattern research or design-system selection needs its database. Explain when a specialist skill materially changes the work.

## Reference research and learning

Use public examples, interactive learning sites, case studies, and courses as optional references—not as required tools or dependencies. Extract the method, not the source’s branded content or visual treatment.

- Use short, interactive exercises and immediate explanation when teaching or validating a UX concept.
- Use behavioral case studies to connect a design choice to a user motivation, product outcome, and possible unintended effect.
- Use UX psychology principles as hypotheses to test against the actual audience and flow, not as universal laws.
- Study motion through direct examples: identify the user goal, trigger, state change, continuity cue, and feedback before choosing an animation.
- For production motion, document the path from kickoff and tool choice through iteration, prototype, implementation constraints, and developer handoff. Specify states, timing, easing, interruption, reduced-motion behavior, and fallback.

Optional references include Uxcel, Growth.Design, Laws of UX, Zajno’s motion-principle examples, School of Motion, Motion Design School, and UX in Motion. They inform the workflow but never override project evidence, accessibility, platform conventions, or the user’s chosen tools.

## Intuitive UX defaults

Clean visual design means hierarchy, legibility, predictable states, and purposeful interaction—not merely decorative motion. When a brief says “modern” or “intuitive” without specifying behavior, interview first, preserve familiar platform patterns, and make the smallest testable interaction model. For ecommerce, explicitly design browse/search/filter, product discovery, gallery/variant selection, cart, checkout, confirmation, loading, empty, validation, and recovery states; keep the purchase path usable with keyboard, touch, slow networks, and reduced motion.

## Motion escalation

1. CSS/Tailwind for hover, focus, reveal, state transition, marquee, and simple scroll-linked effects.
2. SVG for diagrams, paths, indicators, and small bespoke illustrative systems.
3. Lottie when a reusable authored animation communicates a process or branded concept better than CSS/SVG.
4. Motion.dev or GSAP when a dedicated runtime is justified by interaction complexity.
5. Product video when sequence, narration, or real interaction is the message.

### Motion.dev versus GSAP

- Prefer CSS/SVG first for simple state, hover, focus, reveal, and diagram motion.
- Prefer Motion.dev for React-centric component/layout/gesture transitions where declarative APIs and a small focused surface fit the product.
- Prefer GSAP for coordinated timelines, complex scroll choreography, SVG paths, FLIP/layout sequencing, drag/physics, or framework-agnostic animation control.
- Do not install both for the same surface without a documented boundary. Review bundle/runtime cost, SSR/client boundaries, cleanup, reduced motion, keyboard/touch behavior, testing, and migration/exit cost before adoption.
- Keep animation tokens and semantic content in the project; do not let a library's demo defaults become the design system.

Use `text-to-lottie` for Lottie authoring when installed. Keep meaningful text in HTML and treat Lottie as enhancement. Load it lazily, reserve dimensions, provide a static fallback, and pause when offscreen or reduced motion is requested.

Use HyperFrames for product demos and launch videos. Use Remotion only by explicit request or when extending an existing Remotion composition is clearly cheaper.

## Interaction rules

- Motion supports comprehension, feedback, continuity, or character.
- Prefer transform and opacity; avoid layout-thrashing animation.
- Define duration/easing tokens and reuse them.
- Respect keyboard, touch, pointer, and reduced-motion users.
- Pause auto-advancing content on interaction/hover/focus where appropriate.
- Carousels require accessible labeling, deterministic controls when controls exist, and readable fallback content.
- Avoid cursor gimmicks, excessive parallax, constant ambient motion, and scroll hijacking.

## Media performance

Use responsive dimensions, appropriate codecs, posters, lazy loading, and explicit aspect ratios. A demo must remain understandable without autoplay or audio.
