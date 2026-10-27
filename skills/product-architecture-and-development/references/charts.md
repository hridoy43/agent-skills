# Charts and data visualization

Start from the decision the chart supports, the field types (quantitative, temporal, ordinal, identifier), and the smallest mark that answers it. Prefer a number or table when it is clearer; dashboards answer a user question and lead to a next action.

## Choose one library

| Situation | Use |
| --- | --- |
| Chart-heavy or data-dense product, beyond-basic types (distribution, hierarchy, geo, Sankey, candlestick, small multiples), large data, SSR, or a non-React framework | [TanStack Charts](https://tanstack.com/charts/latest/docs/overview) (`@tanstack/charts`, MIT) |
| A few standard charts in a React project (Tailwind or not) | Recharts; in shadcn projects through its `chart` wrapper |
| Styled ready-made chart cards | [TanStack shadcn/ui collection](https://tanstack.com/charts/catalog/collections/shadcn) or registry blocks (`@evilcharts`, `@bklit`; see [ui-sources.md](ui-sources.md)) |

Keep a healthy existing chart library and migrate only for a measured need. One chart library per product unless a documented gap justifies a second.

## TanStack Charts

- Before writing code, read `https://tanstack.com/charts/latest/llms.txt` and the guide for the task (AI authoring, large data, SSR, themes, accessibility); use public exports only, never private files or APIs reconstructed from examples.
- Authoring order: question → field types → smallest mark composition → data preparation → `ariaLabel` → verify the static scene before animation. The chart owns positional ranges.
- Large data: aggregate, sample, or window before rendering; Canvas only for a measured SVG bottleneck, on the mark that needs it.
- Theme through its CSS variables mapped to `DESIGN.md` tokens and check light and dark; SSR uses the same adapter on server and client.

## Any library

Categorical, sequential, and diverging palettes come from tokens, not literals. Label axes and units, design loading, empty, and error states, keep charts responsive, provide keyboard and screen-reader access (an `aria-label` plus a summary or data table for complex charts), and respect reduced motion. When a data-visualization skill is installed, use it for chart form and palette decisions.
