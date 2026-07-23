# Context, Completeness, and Cost

Use this contract whenever output size, freshness, dynamic content, or tool cost could affect the answer.

## Evidence Contract

Before retrieval, define the decision or question, required freshness, material fields, acceptable uncertainty, authorized network or monetary spend, and output shape. A result is complete when every material field is supported, contradicted, or explicitly marked inaccessible or unknown.

For current or real-time claims, capture:

- requested URL, final URL, canonical URL, and retrieval timestamp with timezone;
- locale, country, currency, authentication state, cookie or consent state, billing interval, selected variant, and experiment or feature-flag state when they affect the page;
- visible publication or update date separately from JSON-LD dates, HTTP freshness headers, and retrieval time;
- rendered values and the backing API or structured data when the claim is high-risk or the two could disagree.

For pricing, enumerate only states that can change the requested claim: locale/region, currency, billing interval, tax, quantity or seat minimum, authenticated discount, plan, renewal period, and linked terms. Exercise relevant visible controls and preserve billed total plus effective unit price. Inspect request parameters or backing responses only when the claim is high-risk, the rendered value is ambiguous, or the UI and structured data disagree.

Never describe cached content as current merely because it was retrieved quickly. Bypass or revalidate stale cache when freshness could change the conclusion.

## Adaptive Reading Ladder

1. Use already-known tool availability. Probe only the selected route when its health is unknown; never inventory every tool by default.
2. Use a fresh cache hit when it satisfies the freshness contract. Otherwise retrieve live content.
3. Start with a compact outline, accessibility snapshot, sitemap, headings, result manifest, metadata, or structured extraction to locate relevant material.
4. Read the full relevant section in paragraph-aligned chunks. Preserve its heading path, adjacent qualifiers, table headers, units, legends, footnotes, disclosure text, and linked terms needed to interpret it.
5. Expand relevant accordions, `details` elements, tabs, pagination, carousels, “show more” controls, and lazy-loaded regions. Reconcile visible item counts against announced totals or navigation so collapsed content is not mistaken for absence.
6. Use rendered or network inspection when static content is a shell, values are client-generated, the user asks for current state, or the DOM and backing response may differ.
7. Retrieve a full page or broader crawl only when focused expansion cannot establish completeness.
8. Keep an evidence ledger: claim, locator or source span, source state, timestamp, and remaining gap. Stop when all material gaps are closed or explicitly degraded.

Use a soft output target, not a hard completeness cap. Start compact to save tokens, then expand around evidence. If relevant content exceeds the target, continue in bounded chunks, synthesize without duplicating excerpts, and retain citations. Completeness outranks compression.

## Capability-Driven Sequence

Do not call a fixed ladder of every tool. Choose the smallest capable sequence:

- **Direct web open/fetch:** default for a first-time known URL and one/few facts. Escalate to Agent Browser only for rendering, interaction, or visible state; begin with `read --filter`, `read --outline`, `--max-output`, or `snapshot -i -c`, then narrow with `snapshot -s <selector>` or `snapshot -i -d`.
- **Wigolo:** select for known reuse, repeated cadence, several URLs sharing a schema, multi-page traversal, similarity, diff, or watch. Prefer deterministic `search`/`fetch`/`extract`/`diff`, focused sections, result/fetch/output limits, schema extraction, and map-before-crawl. Do not make a blind cache call for a first-time URL, and do not use `research`/`agent` merely to duplicate host synthesis.
- **Chrome DevTools:** runtime, console, network, request payload, performance, or hydration debugging. It is diagnostic tooling, not the default content fetcher.
- **Other discovery or extraction services:** use only for a named coverage, scale, or structure gap and only when their spend/privacy gate is satisfied.

If a preferred tool is absent, skip it and continue. If it is uniquely helpful, explain why, disclose installation/configuration effects, and ask for approval. Never use `npx` as an availability probe.

Avoid duplicate envelopes: batch independent searches or reads when the tool supports it, reuse the active browser state, request only changed regions after a toggle, and keep an evidence ledger instead of re-reading prior output. Never fetch a full DOM, screenshot, network log, and extracted body for the same question unless each artifact closes a different gap.

Privacy restrictions override cost routing. A zero-charge network tool is still external network activity; “free” never means private.

## Cross-Checking

Match verification effort to consequence:

- Stable, low-risk fact: one authoritative source may be enough.
- Current pricing, availability, policy, release, or compatibility: verify the live primary source and all state that affects the value; inspect rendered or backing data when needed.
- Contested, comparative, financial, legal, medical, security, or high-cost decision: use independent primary evidence and disclose conflicts.
- Opinion or sentiment: sample multiple relevant perspectives and label inference; do not convert anecdotes into prevalence claims.

## Degraded Results

After bounded retries, report the attempted routes, the unavailable or blocked material, the last verified state and timestamp, how the gap limits the conclusion, and the smallest next action that would close it. Never fill a missing field with a guess or silently substitute stale cache.
