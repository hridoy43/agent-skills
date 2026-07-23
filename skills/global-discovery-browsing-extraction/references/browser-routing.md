# Browser routing

Choose the smallest available capability that can answer the question. Start with the host's built-in web search or direct fetch when no interaction is required. Tool names are capability examples, not mandatory dependencies. Never install, configure, authenticate, or transfer session state between browser tools without approval.

## Cost-aware default order

1. Host-provided web search or direct fetch for public, mostly static information.
2. The host's available interactive browser with focused output for a small amount of visible UI state.
3. `agent-browser` for compact accessibility snapshots and atomic interactions when installed.
4. An LLM browser-use tool when autonomous multi-step planning is necessary.
5. Chrome DevTools MCP for console, network, runtime, hydration, layout, or performance diagnostics.

This is a capability order, not a requirement to install every tool. If the host's built-in route is sufficient, stop there.

## Default order by task

### Click, fill, navigate, inspect visible UI

1. The host's interactive browser with focused output, when available.
2. `agent-browser`, when available: prefer compact accessibility snapshots and focused element references.
3. An available LLM browser-use tool, when its autonomous loop is necessary.
4. Chrome DevTools MCP, when it is the only available browser route or when browser state must be inspected from Chrome.

Use one route per task unless a named evidence gap requires escalation. Do not request full DOM, repeated screenshots, or multimodal state when a focused snapshot answers the question.

### Console, network, runtime, hydration, or performance diagnosis

1. Chrome DevTools MCP when available.
2. The browser's focused console/network/diagnostic capability.
3. `agent-browser` or another browser only to reproduce the smallest failing interaction.

DevTools is a diagnostic route, not the default extraction route. Request only the relevant console entries, request, response fields, trace range, or DOM node.

### Screenshots and visual verification

Use a screenshot only when layout, visual state, responsive behavior, or a user-provided visual comparison is material. Prefer a single viewport and crop or inspect the relevant region. Do not use screenshots as a substitute for text extraction.

## Cost and token controls

- Prefer the host's built-in focused output or `agent-browser` for ordinary interaction because compact snapshots and short references usually require less context than raw DOM or repeated screenshots.
- Treat LLM browser-use tools as an escalation when autonomous multi-step planning is necessary; do not pay for a second reasoning loop when atomic actions are sufficient.
- Reuse a browser session and read only changed state.
- Bound steps, tabs, screenshots, retries, and wait time.
- Stop once the requested visible state or evidence is captured.
- Preserve material labels, warnings, form state, timestamps, and error text even when compressing output.

## Availability and fallback

At task start, use only capabilities already available to the host. If a preferred tool is missing, continue with the next suitable route and report the degraded mode when it affects fidelity. Never make a provider, MCP server, browser engine, or API key a hard prerequisite for this skill.
