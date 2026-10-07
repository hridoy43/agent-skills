# Design, motion, and media

Solve hierarchy, layout, type, spacing, color, contrast, and responsiveness before motion. "Modern" or "intuitive" without specifics means familiar platform patterns and the smallest testable interaction. Ecommerce: design browse, search, filter, gallery and variants, cart, checkout, confirmation, and every loading, empty, validation, and recovery state. Use `impeccable` for critique and `ui-ux-pro-max` for pattern research when installed. Case studies and UX "laws" are hypotheses to test, not rules.

## Motion ladder

Pick the lowest rung that works. Each runtime library needs a named reason and installs at latest stable.

1. CSS/Tailwind: hover, focus, reveals, transitions, marquee; CSS scroll-driven animations and View Transitions where supported, with a static fallback; CSS and SVG textures (gradients, `feTurbulence` grain).
2. SVG: diagrams, paths, indicators.
3. Lottie (dotLottie): illustrative or branded motion—see the Lottie workflow below.
4. Motion.dev (React component, layout, gesture) or GSAP (timelines, scroll choreography, SVG paths, FLIP, physics). Never both on one surface without a documented boundary.
5. Lenis: smooth scrolling on scroll-choreographed marketing pages only.
6. Shader backgrounds and effects (Shaders, Radiant, Canvas UI, React Bits, Paper Shaders, ShaderGradient): see [ui-sources.md](ui-sources.md).
7. three.js: real-time 3D or WebGL/WebGPU; React Three Fiber (`@react-three/fiber`, `@react-three/drei`) in React.
8. p5.js: generative art or creative coding, instance mode only.
9. Product video: when sequence, narration, or real interaction is the message. Use `hyperframes` when installed; Remotion only on request or to extend an existing composition.

## Guardrails

- Every rung: transform/opacity first, duration and easing tokens, interruptible, keyboard/touch-safe, `prefers-reduced-motion` path, never blocks reading, navigation, forms, or CTAs.
- Lenis: never on app UIs, forms, or long reading; keep native scrollbar, keyboard, anchors, and find-in-page; keep `respectReducedMotion` on; with GSAP ScrollTrigger use one loop (`lenis.on('scroll', ScrollTrigger.update)` + GSAP ticker). Speed overrides, snapping, or blocked native scroll count as hijacking.
- Canvas/WebGL/WebGPU (shaders, three.js, p5.js, Lottie): meaning stays in HTML; static poster first; client-only lazy load; pause offscreen and when the tab is hidden; cap device pixel ratio; dispose GPU resources on unmount; test a low-end phone.
- Carousels: labeled, controllable, paused on hover/focus. No cursor gimmicks, heavy parallax, or constant ambient motion.
- Media: explicit aspect ratios, posters, lazy loading, efficient codecs; demos make sense without autoplay or audio.

## Lottie workflow: find, edit, then author

1. Define concept, trigger or loop, duration, size, and the palette tokens to match.
2. Search existing free animations first at [LottieFiles featured free animations](https://lottiefiles.com/featured-free-animations), routing through `global-discovery-browsing-extraction` when installed (it handles signed-in sessions), otherwise the host browser, otherwise give the user the link and search terms. Shortlist two or three with preview link, creator, and license; the user picks.
3. License: free LottieFiles animations use the Lottie Simple License (commercial use and edits allowed, attribution optional, no redistribution as standalone files or competing collections). Ask before premium assets. Record source, creator, and license.
4. Edit in LottieFiles' Lottie Editor (colors, layers, text, speed, size) to match tokens; Lottie Creator for new keyframes or interactivity. Ask before signing in, saving to the user's workspace, or downloading.
5. Export dotLottie (`.lottie`: smaller, themable, state machines); Optimized Lottie JSON only when the player requires it. Save to `public/assets/lottie/` or `public/assets/<feature>/`.
6. Play with `@lottiefiles/dotlottie-web` or `@lottiefiles/dotlottie-react`, applying the canvas guardrails.
7. Author from scratch only if no edited animation fits: `text-to-lottie` when installed, otherwise suggest it or hand-author with approval.
