# Charts and data visualization

Start from the decision the chart supports, the field types (quantitative, temporal, ordinal, identifier), and the smallest mark that answers it. Prefer a number or table when it is clearer; dashboards answer a user question and lead to a next action.

## Choose one library

| Situation | Use |
| --- | --- |
| Chart-heavy or data-dense product, beyond-basic types (distribution, hierarchy, geo, Sankey, candlestick, small multiples), large data, SSR, or a non-React framework | [TanStack Charts](https://tanstack.com/charts/latest/docs/overview) (`@tanstack/charts`, MIT) |
| A few standard charts in a React project (Tailwind or not) | Recharts; in shadcn projects through its `chart` wrapper |
| Tailwind dashboard built from prebuilt KPI and chart cards | Tremor |
| Styled ready-made chart cards | [TanStack shadcn/ui collection](https://tanstack.com/charts/catalog/collections/shadcn) or registry blocks (`@evilcharts`, `@bklit`; see [ui-sources.md](ui-sources.md)) |

Keep a healthy existing chart library and migrate only for a measured need. One chart library per product unless a documented gap justifies a second.

## TanStack Charts

- Read the official docs for the task before writing code: start at `https://tanstack.com/charts/latest/llms.txt`, then the specific guide (AI Authoring, Large Data, SSR and Hydration, Themes and Styling, Accessibility). Use public exports only; never reconstruct an API from an example or import private files.
- Install `@tanstack/charts` at latest stable plus the framework peer. Author with root imports (`defineChart`, marks); render with the framework subpath (`@tanstack/charts/react`, `/vue`, `/svelte`, …).
- Authoring order: question → field types → smallest mark composition → compact scales (add `d3-scale` only when they can't express it) → where data is prepared → `ariaLabel` → verify the static scene before animation → custom behavior only at documented extension points. Never assign positional pixel ranges; the chart owns them.
- Large data: count source, prepared, and rendered rows; aggregate, sample, or window first (width-independent aggregation in app code, memoized). Switch to Canvas (`@tanstack/charts/<framework>/canvas`) only for a measured SVG bottleneck, and only for the mark that needs it.
- Theme through the `--ts-chart-*` CSS variables and inherited `currentColor`, mapped to `DESIGN.md` tokens; check light and dark.
- SSR renders deterministic SVG that the client adopts. Use the same adapter on server and client—never swap components by environment; keep interactive parts in client components.
- Validate: typecheck, deterministic tests, interaction tests, light/dark visual checks, and bundle size (compact scales should keep D3 out).

## Any library

Categorical, sequential, and diverging palettes come from tokens, not literals. Label axes and units, design loading, empty, and error states, keep charts responsive, provide keyboard and screen-reader access (an `aria-label` plus a summary or data table for complex charts), and respect reduced motion. When a data-visualization skill is installed, use it for chart form and palette decisions.
