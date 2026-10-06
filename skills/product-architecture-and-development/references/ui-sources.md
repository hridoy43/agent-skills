# Components, shaders, and textures

Read when a design needs a component, block, effect, shader, or texture the primary foundation lacks. Every pick passes the adoption gate in [design-system-and-ui-libraries.md](design-system-and-ui-libraries.md), installs at latest stable into `components/ui/` (shadcn default), and needs the user's approval. Licenses are per source and sometimes per item—check before shipping. When a proven prebuilt component fits, adapt it to the project's tokens instead of building from scratch.

## Discover cheapest first

1. **Registry CLI (no browsing):** pick namespaces from the official index of installable registries (`https://ui.shadcn.com/r/registries.json`, 400+) or the category table below, then `npx shadcn@latest search @<namespace> -q "<term>" -t ui --limit 5` lists one-line matches; `npx shadcn@latest view @<namespace>/<item>` shows the source of a shortlisted item before `add`; `docs <item>` gives usage. With the shadcn MCP installed, use it instead (see below).
2. **Machine-readable indexes:** 21st.dev exposes `llms.txt`, `openapi.json`, and `/.well-known/skills/index.json`.
3. **Visual galleries** only when the look decides the choice: browse through `global-discovery-browsing-extraction` when installed (it handles signed-in sessions for paid tiers), otherwise the host browser, otherwise send the user links and search terms.

Shortlist two or three with preview link, license, dependencies, and rough bundle/GPU cost; the user picks.

## MCP for component libraries

- One shadcn MCP server covers every shadcn-compatible registry (Canvas UI, Magic UI, React Bits, 21st.dev, and the rest of the index). If it is missing and the project will keep adding registry components, propose `npx shadcn@latest mcp init --client <claude|cursor|vscode|codex|opencode>` (writes project config such as `.mcp.json`), restart the client, and verify (`/mcp` or `claude mcp list`). Add any registry missing from the index under `components.json` `registries` (`"@<name>": "https://<host>/r/{name}.json"`).
- Never add a library-specific MCP for a library that is a shadcn registry; duplicate servers only add tool definitions to context.
- Non-shadcn libraries: add their own free, official MCP only when the project will use the library repeatedly and the CLI, `llms.txt`, or docs fall short.
- Every MCP: ask first, project scope, latest stable, free tier unless the user approves otherwise, no keys in committed config. For a one-off component, the CLI is cheaper than a new server.

## Start by category

| Need | Registry namespaces and sites |
| --- | --- |
| Text animation | `@react-bits`, `@animate-ui`, `@motion-primitives`, `@magicui`, `@text-ui` |
| Motion and interaction | `@animate-ui`, `@motion-primitives`, `@magicui`, `@aceternity`, `@skiper-ui`, `@paceui-gsap` (GSAP) |
| Charts (library choice in [charts.md](charts.md)) | TanStack Charts shadcn/ui collection, shadcn `chart` (Recharts), `@evilcharts`, `@bklit`, `@axicharts`, `@plotcn` |
| 3D | `@threecn` (React Three Fiber + drei, theme-token aware), three.js examples, Three UI |
| Shaders and backgrounds | `@canvas-ui`, `@react-bits`, `@awwwardedui`, Radiant, Paper Shaders, ShaderGradient |

## Sources

| Source | Offers | Install | License / cost |
| --- | --- | --- | --- |
| [shadcn Registry Directory](https://ui.shadcn.com/docs/directory) | Index of community registries | `shadcn search` | Per registry |
| [Magic UI](https://magicui.design) | Marketing motion, backgrounds, text effects | `@magicui/<item>` | MIT |
| [React Bits](https://reactbits.dev) | Animated components and backgrounds | `@react-bits/<Name>-TS-TW` | MIT + Commons Clause: commercial use allowed, no reselling the library |
| [Canvas UI](https://canvasui.dev/components) | HTML-in-canvas shader effects: glass, liquid, ripple, ASCII, 3D objects (React, Vue, Svelte, Solid, Preact) | `@canvas-ui/<name>-react` (`-webgpu` variant) | MIT + Commons Clause |
| [21st.dev](https://21st.dev/community/components) | Community shadcn components | shadcn command per component | Free tier limits daily copies; license per author |
| [Aceternity UI](https://ui.aceternity.com), [Kokonut UI](https://kokonutui.com), [Skiper UI](https://skiper-ui.com/components) | Marketing motion components | shadcn CLI or copy | Free plus paid tiers (Skiper Premium is a one-time purchase); check terms per item |
| [Radiant](https://github.com/pbakaus/radiant) | 94 Canvas 2D/WebGL shaders, zero dependencies | Self-contained HTML in an `iframe`, tuned via `postMessage` | MIT |
| [Paper Shaders](https://github.com/paper-design/shaders) | Shader components and backgrounds | `@paper-design/shaders-react` | Apache-2.0; pre-1.0 API |
| [ShaderGradient](https://shadergradient.co) | Animated 3D gradients | `@shadergradient/react` | MIT |
| [Shaders](https://shaders.com/docs) | WebGPU shader components and visual editor | `shaders` | Free only for personal or evaluation use; production needs a paid plan; no redistribution |
| [three.js examples](https://threejs.org/examples/) | Reference 3D and shader implementations | Read and adapt | MIT |
| [Three UI](https://threeui.com/ui-elements) | 3D, shader, chart, and motion UI elements (three.js, Canvas, WebGL) | Site | Free to browse; source and commercial use need Pro (yearly or lifetime) |
| [Figma community shaders](https://www.figma.com/community/shaders?resource_type=shaders) | WGSL shaders; HTML/React export via code viewer or Figma MCP | Figma | Per resource; may need a paid Figma plan; use a Figma shader skill when installed |
| [Poly Haven](https://polyhaven.com), [ambientCG](https://ambientcg.com) | PBR textures and HDRIs for 3D | Download | CC0 |

## Textures, cheapest first

1. CSS gradients, blend modes, `backdrop-filter`, and SVG `feTurbulence` grain—no dependency.
2. Small tiled AVIF/WebP images from CC0 sources in `public/assets/textures/`.
3. Shader backgrounds or effects only when motion or interactivity is the point.

## Shader rules

The canvas guardrails in [design-motion-media.md](design-motion-media.md) apply, plus:

- Decorative only: text never lives inside the canvas, and contrast must hold over every frame.
- Fallback chain: WebGPU → WebGL → static poster image for reduced motion, low power, or no GPU support.
- Prefer one shader context per viewport; several WebGL contexts are expensive and browsers cap them.
- Map colors and speeds to design tokens instead of preset literals; never redistribute paid presets.
- Shadertoy-derived code defaults to CC BY-NC-SA 3.0 (non-commercial) unless its author states otherwise; check before shipping ports of it.
