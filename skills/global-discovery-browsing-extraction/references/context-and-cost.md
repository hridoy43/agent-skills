# Context, completeness, and cost

## Current or high-risk claims

Capture requested, final, and canonical URL; retrieval time with timezone; locale, currency, auth, consent, variant, and experiment state when they affect the page; visible update date separately from structured-data dates and HTTP headers. Inspect backing API or structured data only when the claim is high-risk, the rendered value is ambiguous, or the two disagree.

For pricing, enumerate only states that change the claim (region, currency, interval, tax, seats, plan, renewal, linked terms), exercise the relevant controls, and keep billed total plus effective unit price. Never call cached content current; revalidate when freshness could change the conclusion.

## Reading ladder

1. Fresh cache hit only when it meets the freshness need; otherwise live.
2. Locate with a compact outline, snapshot, sitemap, headings, or schema.
3. Read the relevant section in paragraph-aligned chunks with its heading path, qualifiers, table headers, units, legends, footnotes, and linked terms.
4. Expand accordions, tabs, pagination, carousels, and lazy regions; reconcile visible counts with announced totals.
5. Use rendered or network inspection when static HTML is a shell or values are client-generated.
6. Full page or crawl only when focused expansion cannot prove completeness.

Keep an evidence ledger (claim, locator, state, timestamp, gap). Completeness outranks compression: continue in bounded chunks instead of truncating. Never fetch DOM, screenshot, network log, and body for the same question unless each closes a different gap. Never use `npx` as an availability probe.

## Verification depth

- Stable, low-risk fact: one authoritative source.
- Current pricing, policy, release, or compatibility: live primary source plus every state affecting the value.
- Contested, financial, legal, medical, security, or costly decision: independent primary sources; disclose conflicts.
- Opinion: sample relevant perspectives; label inference; no prevalence claims from anecdotes.

## Degraded results

After bounded retries, report routes tried, what was blocked, the last verified state and time, how the gap limits the conclusion, and the smallest next action. Never fill a gap with a guess or stale cache.
