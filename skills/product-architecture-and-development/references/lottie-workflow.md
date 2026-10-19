# Lottie workflow: find, edit, then author

Read when a surface needs illustrative or branded Lottie motion; the canvas guardrails in [design-motion-media.md](design-motion-media.md) apply.

1. Define concept, trigger or loop, duration, size, and the palette tokens to match.
2. Search existing free animations first at [LottieFiles featured free animations](https://lottiefiles.com/featured-free-animations) (through `global-discovery-browsing-extraction` or the host browser; otherwise give the user the link and search terms). Shortlist two or three with preview link, creator, and license; the user picks.
3. License: free LottieFiles animations use the Lottie Simple License (commercial use and edits allowed, attribution optional, no redistribution as standalone files or competing collections). Ask before premium assets. Record source, creator, and license.
4. Edit in LottieFiles' Lottie Editor (colors, layers, text, speed, size) to match tokens; Lottie Creator for new keyframes or interactivity. Ask before signing in, saving to the user's workspace, or downloading.
5. Export dotLottie (`.lottie`: smaller, themable, state machines); Optimized Lottie JSON only when the player requires it. Save to `public/assets/lottie/` or `public/assets/<feature>/`.
6. Play with `@lottiefiles/dotlottie-web` or `@lottiefiles/dotlottie-react`.
7. Author from scratch only if no edited animation fits: `text-to-lottie`, or hand-author with approval.
