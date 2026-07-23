# Browser routing

Choose the smallest available browser capability that can answer the question. Tool names are capability examples, not mandatory dependencies. Never install, configure, authenticate, or transfer session state between browser tools without approval.

## Default order by task

### Click, fill, navigate, inspect visible UI

1. `agent-browser`, when available: prefer compact accessibility snapshots and focused element references.
2. An available LLM browser-use tool, when it is already configured and its autonomous loop is necessary.
3. The host's interactive browser with focused output.
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

- Prefer `agent-browser` for ordinary interaction because compact snapshots and short references usually require less context than raw DOM or repeated screenshots.
- Treat LLM browser-use tools as an escalation when autonomous multi-step planning is necessary; do not pay for a second reasoning loop when atomic actions are sufficient.
- Reuse a browser session and read only changed state.
- Bound steps, tabs, screenshots, retries, and wait time.
- Stop once the requested visible state or evidence is captured.
- Preserve material labels, warnings, form state, timestamps, and error text even when compressing output.

## Availability and fallback

At task start, use only capabilities already available to the host. If a preferred tool is missing, continue with the next suitable route and report the degraded mode when it affects fidelity. Never make a provider, MCP server, browser engine, or API key a hard prerequisite for this skill.
