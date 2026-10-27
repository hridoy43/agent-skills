# Design, motion, and media

Solve hierarchy, layout, type, spacing, color, contrast, and responsiveness before motion. "Modern" or "intuitive" without specifics means familiar platform patterns and the smallest testable interaction. Ecommerce: design browse, search, filter, gallery and variants, cart, checkout, confirmation, and every loading, empty, validation, and recovery state. Use `impeccable` for critique and `ui-ux-pro-max` for pattern research. Case studies and UX "laws" are hypotheses to test, not rules.

## Design direction

- With no stated look or existing system, infer a direction from the audience, domain, trust level, content, and platform, and record it in `DESIGN.md`. A clinic booking app, a developer tool, and a game studio should not look alike.
- Offer a distinctive direction (pixel, ASCII, brutalist, and similar) with one line on why it fits; familiar patterns stay the default. A direction applies to type, color, edges, imagery, and motion together.

## Motion ladder

Pick the lowest rung that works; each runtime library needs a named reason.

1. CSS/Tailwind: hover, focus, reveals, transitions, marquee; CSS scroll-driven animations and View Transitions where supported, with a static fallback; CSS and SVG textures (gradients, `feTurbulence` grain).
2. SVG: diagrams, paths, indicators.
3. Lottie (dotLottie): illustrative or branded motion; see [lottie-workflow.md](lottie-workflow.md).
4. Motion.dev (React component, layout, gesture) or GSAP (timelines, scroll choreography, SVG paths, FLIP, physics). Never both on one surface without a documented boundary.
5. Lenis: smooth scrolling on scroll-choreographed marketing pages only.
6. Shader backgrounds and effects: see [ui-sources.md](ui-sources.md).
7. three.js: real-time 3D or WebGL/WebGPU; React Three Fiber (`@react-three/fiber`, `@react-three/drei`) in React.
8. p5.js: generative art or creative coding, instance mode only.
9. Product video: when sequence, narration, or real interaction is the message. Use `hyperframes`; Remotion only on request or to extend an existing composition, with `@snapcn` for demo shots (text reveals, device frames, terminal sessions).

## Guardrails

- Every rung: transform/opacity first, duration and easing tokens, interruptible, keyboard/touch-safe, `prefers-reduced-motion` path, never blocks reading, navigation, forms, or CTAs.
- Lenis: never on app UIs, forms, or long reading; keep native scrollbar, keyboard, anchors, and find-in-page; keep `respectReducedMotion` on; with GSAP ScrollTrigger use one loop (`lenis.on('scroll', ScrollTrigger.update)` + GSAP ticker). Speed overrides, snapping, or blocked native scroll count as hijacking.
- Canvas/WebGL/WebGPU (shaders, three.js, p5.js, Lottie): meaning stays in HTML; static poster first; client-only lazy load; pause offscreen and when the tab is hidden; cap device pixel ratio; dispose GPU resources on unmount; test a low-end phone; fall back to the static poster for reduced motion, data-saver, or weak devices.
- Glyph, point, and dither effects: draw only while something changes, read colors from theme tokens, and prefer SVG or CSS patterns over raster images for dithered edges.
- Easing: pick or build curves at [easings.dev](https://www.easings.dev) (cubic-bezier and spring presets; `/create/cubic-bezier#x1=…&y1=…&x2=…&y2=…` or `/create/spring#mass=…&stiffness=…&damping=…` gives the user a prefilled link to judge). It exports CSS (springs as `linear()` plus a duration), Motion, SwiftUI, UIKit, Core Animation, and raw values; save the pick as an easing token.
- Haptics: fire on the user's action or the async result, with visual feedback, never on load or scroll. Native: the platform API for plain taps (Core Haptics, `VibrationEffect`, `expo-haptics`, Flutter `HapticFeedback`); a preset library such as [Pulsar](https://docs.swmansion.com/pulsar/) for richer feedback (skill: `npx skills add software-mansion-labs/skills --skill pulsar-haptics`). Mobile web: a library such as `web-haptics`, which reaches iPhone Safari (skill: `npx skills add lochie/web-haptics`). Capacitor: `@capacitor/haptics`.
- Tuning: dial in springs, easing, timelines, and effect parameters live with a dev-only panel such as [DialKit](https://www.dialkit.dev), then bake the values into tokens or code and remove the bindings before shipping.
- ASCII and glyph looks, cheapest that achieves the effect: static `aria-hidden` text art, a Canvas 2D field, WebGL for large or pointer-reactive fields, or an ASCII post-processing pass for 3D or video ([ui-sources.md](ui-sources.md)). Text over a field keeps its contrast.
- Ambient motion only when the design direction calls for it; it never competes with content, and past 5 s it needs a pause control (WCAG 2.2.2). Pointer-driven effects are enhancements: nothing is lost without a pointer.
- Carousels: labeled, controllable, paused on hover/focus. No heavy parallax.
- Media: explicit aspect ratios, posters, lazy loading, efficient codecs; demos make sense without autoplay or audio.
