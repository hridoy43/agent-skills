# Provider routing: Exa and Firecrawl

Optional accelerators for configured hosts. Use only when free or local routes (local artifact, direct fetch, RSS, API, host search) cannot close the gap. Never install, configure, or upgrade them without approval. Do not run both for the same purpose.

- **Exa:** open-ended or semantic discovery, similar pages, current-source finding. Request the smallest result count and fields; prefer primary domains; dedupe URLs. Skip for a URL the user already gave unless discovery or freshness matters.
- **Firecrawl:** `scrape` a known URL when direct fetch fails; `map` before `crawl`, and crawl only bounded paths; `interact` as a last resort for clicks, pagination, or forms. Request one representation, not screenshot + HTML + links + markdown together.

Budget: set a per-task call budget and reserve one escalation; never retry an unchanged call—narrow the query, URLs, fields, or time window. Track provider, operation, target, result count, and quota signals. Private or signed-in content uses the user's browser session, never a hosted provider. If a provider is unavailable, fall back to direct fetch, a local parser, or the browser and report degraded coverage.
