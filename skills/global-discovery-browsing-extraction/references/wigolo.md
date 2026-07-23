# Wigolo Integration

Wigolo is an optional local-first web-intelligence companion. This reference covers runtime selection; setup is documented separately and should load only when required.

## Capability Gate

Use Wigolo only when its MCP tools are exposed or the user approved a bounded CLI workflow. Engine health is not agent wiring. Do not use `npx` to probe availability.

If absent or unhealthy, use the main routing table instead of making the task depend on Wigolo.

## Tool Routing

### Economic Gate

Do not use Wigolo for a first-time single known URL when a focused direct or Agent Browser read can answer the question. Select Wigolo when a cache is known or likely to be reused, a run repeats, several URLs share an extraction shape, navigation spans multiple pages, or the task needs similarity, a historical baseline, diff, or watch. A local/free tool still has orchestration, output-token, latency, compute, and storage cost.

Use deterministic tools and let the host synthesize once. Prefer `search`, `fetch`, `extract`, and `diff`; use Wigolo `research`, `agent`, or answer synthesis only when they replace—not duplicate—host work and their provider/budget is verified. Do not automatically chain `cache`, `search`, `fetch`, and `extract`. Each call must close a named gap.

Wigolo's fetch router is already the maintained home for request-scoped escalation. Its default route is plain HTTP. The global TLS-impersonation tier defaults to `off` and becomes active only when configured or when an upstream-curated domain rule opts in; browser rendering is entered for explicit JavaScript/auth/actions or evidence such as an SPA shell, challenge, or repeated failure. Do not describe all three tiers as unconditional defaults. Do not reimplement TLS fingerprints, redirect/SSRF guards, challenge classification, per-domain learning, shared deadlines, or browser fallback in the host skill.

Agent Browser is not Wigolo's internal headless browser. Use Agent Browser for login, MFA, durable sessions, rich navigation, visual inspection, or UI testing. Wigolo browser actions are for bounded pre-extraction actions, not login or auth transfer. Chrome DevTools remains diagnostic.

Challenge detection is not permission to evade access controls. Do not solve CAPTCHAs, rotate identities, or enable TLS/stealth modes to defeat an explicit denial. Treat `blocked_by_challenge` as an honest terminal result. Enabling `WIGOLO_TLS_TIER`, `WIGOLO_STEALTH`, a solver, proxy, or hosted reader is a configuration and privacy change that requires informed approval.

| Tool | Use when |
| --- | --- |
| `cache` | Previously seen material may answer the question or prevent repeat network work. |
| `search` | You need public-web discovery and do not have a source URL. |
| `fetch` | You have a URL and need clean content, metadata, or a focused section. |
| `crawl` | You need multiple related pages from one site; scope depth and page count first. |
| `extract` | You need tables, metadata, JSON-LD, selectors, or a defined schema. |
| `find_similar` | A strong source or concept should seed related discovery. |
| `research` | A question needs decomposition and multi-source evidence. |
| `agent` | A bounded gathering task needs multi-step planning and optional structured output. |
| `diff` | You need an explicit comparison between cached, live, URL, or supplied versions. |
| `watch` | You need a stored change-check definition. Jobs are lazy; they do not guarantee timed execution without a scheduler. |

Core deterministic tools work without an API key. Under zero-charge or unknown-provider constraints, allow only `cache`, non-synthesizing `search`, `fetch`, `crawl`, `extract`, `find_similar`, `diff`, and `watch`. Do not call `research`, `agent`, or answer synthesis until the provider is verified local/free or the user authorizes spend. Privacy overrides this allowlist.

## Runtime Checks

- Use cache only when its freshness satisfies the task.
- Start with sections, schemas, bounded results/fetches, and `max_tokens_out`/`max_content_chars`; expand when qualifiers are missing.
- Check `fetch_method`, `content_completeness`, cache status, final URL, and engine warnings. `partial` or `shell` requires expansion or escalation.
- Respect robots, rate limits, auth boundaries, retention, and network-privacy requirements.

Upstream source: <https://github.com/KnockOutEZ/wigolo>
