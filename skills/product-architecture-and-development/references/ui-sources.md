# Components, shaders, and textures

Read when the project needs a component, block, effect, shader, or texture the primary foundation lacks. Every pick passes the adoption gate in [design-system-and-ui-libraries.md](design-system-and-ui-libraries.md). The registry commands and namespaces below are for shadcn projects (installs land in `components/ui/`); other foundations use their own equivalent (`shadcn-vue`, `shadcn-svelte`, the foundation's ecosystem, or the package index). Framework-agnostic sources (Shaders, Radiant, Canvas UI, TanStack Charts, three.js) fit any stack. Licenses can differ per item. When a proven prebuilt component fits, adapt it to the project's tokens instead of building from scratch.

## Discover cheapest first

1. **Registry CLI (no browsing):** pick namespaces from the official index (`https://ui.shadcn.com/r/registries.json`, 400+) or the table below, then `npx shadcn@latest search @<namespace> -q "<term>" -t ui --limit 5`; `npx shadcn@latest view @<namespace>/<item>` shows source before `add`; `docs <item>` gives usage. Use the shadcn MCP instead when installed.
2. **Machine-readable indexes:** 21st.dev exposes `llms.txt`, `openapi.json`, and `/.well-known/skills/index.json`.
3. **Visual galleries** only when the look decides the choice (through `global-discovery-browsing-extraction` or the host browser; otherwise send the user links and search terms).

Shortlist two or three with preview link, license, dependencies, and rough bundle/GPU cost; the user picks.

## MCP for component libraries

- One shadcn MCP server covers every shadcn-compatible registry. If it is missing and the project will keep adding registry components, propose `npx shadcn@latest mcp init --client <claude|cursor|vscode|codex|opencode>`, restart the client, and verify. Add any registry missing from the index under `components.json` `registries` (`"@<name>": "https://<host>/r/{name}.json"`).
- Never add a library-specific MCP for a library that is a shadcn registry; duplicate servers only add tool definitions to context.
- Non-shadcn libraries: add their own free, official MCP only for repeated use when the CLI, `llms.txt`, or docs fall short (for example `npx shaders@latest install-mcp`).
- Every MCP: project scope, free tier unless approved, no keys in committed config. For a one-off component, the CLI is cheaper.

## Start by category

| Need | Registry namespaces and sites |
| --- | --- |
| Functional components | Maps `@mapcn` (MapLibre), `@shadcn-map`; data tables `@tablecn` (TanStack Table), `@data-table-filters`; rich text `@plate`, `@editorcn` (Tiptap); uploads `@better-upload`; forms `@formcn` |
| Page blocks, sections, templates | `@shadcnblocks`, `@shadcn-space`, `@shadcn-studio`, `@tailark`, `@ui-layouts`, `@shadcnuikit` (dashboards) |
| AI chat and agent UI | `@ai-elements`, `@assistant-ui`, [ElevenLabs UI](https://ui.elevenlabs.io) for voice and audio agents (`npx @elevenlabs/cli@latest components add <name>`), [Vercel Chatbot](https://chatbot.ai-sdk.dev/docs) as a full reference app |
| Text animation | `@react-bits`, `@animate-ui`, `@motion-primitives`, `@magicui`, `@text-ui`; packages when the project's UI libraries lack a fit: `torph` (text morphing), NumberFlow (`@number-flow/*`, animated numbers), GSAP ScrambleText (scramble/decode) |
| ASCII and dither | `ascii-reveal` (loading and reveal), postprocessing `ASCIIEffect` (3D, video), [Ascii-Motion](https://ascii-motion.app) (author, convert, export), [play.core](https://github.com/ertdfgcvb/play.core) (generative) |
| Motion and interaction | `@animate-ui`, `@motion-primitives`, `@magicui`, `@aceternity`, `@kokonutui`, `@skiper-ui`, `@paceui-gsap` (GSAP) |
| Charts (library choice in [charts.md](charts.md)) | TanStack Charts shadcn/ui collection, shadcn `chart` (Recharts), `@evilcharts`, `@bklit`, `@axicharts`, `@plotcn` |
| 3D | `@threecn` (React Three Fiber + drei, theme-token aware), [three.js examples](https://threejs.org/examples/), [Three UI](https://threeui.com/ui-elements) |
| Shaders and backgrounds | `@canvas-ui`, `@react-bits`, `@awwwardedui`, `@23rd`, [Shaders](https://github.com/shader-effects-inc/shaders) (agent docs `shaders.com/llms.txt`), [Radiant](https://github.com/pbakaus/radiant) (zero-dependency HTML in an `iframe`, tuned via `postMessage`), [Paper Shaders](https://github.com/paper-design/shaders), [ShaderGradient](https://shadergradient.co), [Figma community shaders](https://www.figma.com/community/shaders?resource_type=shaders) |
| Textures and HDRIs (CC0) | [Poly Haven](https://polyhaven.com), [ambientCG](https://ambientcg.com) |
| Character and illustrative animation | Interactive: [Rive](https://rive.app) (`.riv` export needs a paid plan). Free authoring: Glaxnimate (Lottie, SVG, Rive export), Synfig (bones), Krita, OpenToonz, Blender Grease Pencil (frame-by-frame); stick figures: StykAnimate. 3D clips: Quaternius (CC0, glTF). Spine runtimes need a Spine license, websites included. Lottie: [lottie-workflow.md](lottie-workflow.md) |
| Non-web outputs | Email `@emailcn` (React Email, MJML, JSX Email); PDF `@pdfcn`; Open Graph images `@ogimagecn` (Satori); terminal UI `@termcn` (Ink, OpenTUI) |

Paid or restricted: React Bits and Canvas UI add Commons Clause (no reselling the library); 21st.dev limits free daily copies; block registries, Aceternity, Kokonut, and Skiper mix free and paid items; Three UI source needs Pro; Shaders Pro presets, sections, and rendering are paid and never redistributed; Figma shaders may need a paid plan.

## Textures, cheapest first

1. CSS gradients, blend modes, `backdrop-filter`, and SVG `feTurbulence` grain—no dependency.
2. Small tiled AVIF/WebP images from CC0 sources in `public/assets/textures/`.
3. Shader backgrounds or effects only when motion or interactivity is the point.

## Shader rules

The canvas guardrails in [design-motion-media.md](design-motion-media.md) apply, plus:

- Decorative only: text never lives inside the canvas, and contrast must hold over every frame.
- Fallback chain: WebGPU → WebGL → static poster image for reduced motion, low power, or no GPU support.
- Prefer one shader context per viewport; several WebGL contexts are expensive and browsers cap them.
- Map colors and speeds to design tokens instead of preset literals.
- Shadertoy-derived code defaults to CC BY-NC-SA 3.0 (non-commercial) unless its author states otherwise; check before shipping ports of it.
