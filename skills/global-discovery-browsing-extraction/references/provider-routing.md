# Provider routing: Exa and Firecrawl

Use configured Exa and Firecrawl when they close a concrete evidence gap. Treat free-tier limits as a budget, not as permission to make broad or redundant calls. Do not install, configure, authenticate, or upgrade either provider without user approval.

## Cost-effective order

1. Use a local artifact, known URL, direct fetch, RSS, API, or native search when it answers the question.
2. Use one provider for the smallest sufficient operation.
3. Reuse returned URLs, IDs, or cached artifacts within the task.
4. Escalate only when the result is blocked, incomplete, dynamic, stale, or missing a material field.
5. Stop when every required field is supported or explicitly unavailable.

Do not run Exa and Firecrawl for the same purpose by default. A search result is not a reason to scrape every result, and a scraped page is not a reason to run a second semantic search.

## Exa

Use Exa first when the task starts with an open-ended research question, semantic discovery, similar pages, or current source finding. Request only the smallest result count and fields that can change the answer. Prefer primary-source domains and deduplicate URLs before reading them.

Use direct fetch or Firecrawl after Exa only when a selected result needs fuller content, dynamic rendering, structured extraction, or a citation-ready artifact. Do not use Exa for a URL the user already provided unless discovery or freshness verification is required.

## Firecrawl

Use Firecrawl scrape for a known public URL when direct fetch cannot provide reliable readable content. Use search only when native search or Exa is unavailable or insufficient. Use map before crawl, and crawl only the bounded paths needed for the question. Use interact as a last resort for clicks, pagination, forms, or visible dynamic state.

Prefer one bounded request with selected formats and fields. Avoid downloading screenshots, full HTML, links, and markdown together unless each representation is needed. Keep large raw artifacts outside the model context and extract only relevant sections.

## Free-tier and quality controls

- Track provider, operation, query/URL, result count, timestamp, and any observed quota or failure signal.
- Set a per-task call budget before starting; reserve one escalation call for a material evidence gap.
- Do not retry unchanged calls. Narrow the query, URL set, fields, or time window instead.
- Cache or reuse immutable results only when retention is appropriate; record freshness and expiry.
- Preserve source URLs, timestamps, qualifiers, headers, footnotes, and conflicts even when summarizing.
- Never trade away a material qualifier merely to reduce tokens. Compress presentation after preserving evidence.
- For private, authenticated, or sensitive content, use an authorized local browser or approved private route instead of sending data to hosted services.

## Fallbacks

If Exa is unavailable, use native search or direct source discovery. If Firecrawl is unavailable, use direct fetch, a local parser, or an authorized interactive browser. Report degraded coverage instead of silently presenting a partial result as complete.
