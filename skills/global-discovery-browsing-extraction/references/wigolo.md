# Wigolo

Optional local-first web-intelligence MCP server ([upstream](https://github.com/KnockOutEZ/wigolo)). Use it only when its MCP tools are exposed or the user approved a bounded CLI workflow; otherwise use the main routes. Do not probe with `npx`.

## When it pays off

Use it for reused sources, repeated runs, several URLs sharing an extraction schema, multi-page traversal, similarity, diffs, or watches. Skip it for a first-time single URL that a direct fetch or browser read answers.

| Tool | Use when |
| --- | --- |
| `cache` | Previously fetched material may answer the question |
| `search` | Discovery without a source URL |
| `fetch` | Clean content or a focused section from a URL |
| `crawl` | Several related pages; set depth and page limits first |
| `extract` | Tables, metadata, JSON-LD, selectors, or a schema |
| `find_similar` | Seed related discovery from a strong source |
| `diff` | Compare cached, live, or supplied versions |
| `watch` | Store a change check; it needs a scheduler to run on time |
| `research`, `agent` | Only when they replace host synthesis and their LLM provider is verified free/local or spend is approved |

Do not chain `cache`→`search`→`fetch`→`extract` automatically. Start with sections, schemas, and `max_tokens_out`/`max_content_chars`; check `fetch_method`, `content_completeness`, cache status, and warnings—`partial` or `shell` needs expansion.

## Fetch tiers

Default is plain HTTP; check the installed `WIGOLO_TLS_TIER` default rather than assuming it, and expect browser rendering only for JS, auth, actions, SPA shells, or challenges. `blocked_by_challenge` is a terminal result: never enable TLS impersonation, stealth, solvers, or proxies to defeat a denial without informed approval. Wigolo's browser actions are pre-extraction steps, not login; signed-in work follows [browser-routing.md](browser-routing.md).
