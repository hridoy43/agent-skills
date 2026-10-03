# Browser routing

One route per task; escalate only for a named gap. Tool names are examples—use what the host exposes.

## Public pages

1. Host search or direct fetch for static content.
2. Host interactive or in-app browser with focused output.
3. `agent-browser` when installed: `read <url> --outline` or `--filter <term>` for text; `snapshot -i -c`, then `snapshot -s <selector>` for interaction.
4. An LLM browser-use tool only when autonomous multi-step planning is necessary.
5. Chrome DevTools MCP for console, network, runtime, hydration, or performance diagnosis—never as the default extractor.

## Signed-in pages

When the task needs login state or session cookies (accounts, dashboards, paywalls, private docs, asset downloads, web editors such as LottieFiles):

1. The user's active browser session exposed by the host, such as a connected Chrome extension or the browser the user is already signed in to.
2. `ego-browser` when installed; it runs in the user's logged-in browser.
3. Another installed tool that drives the user's existing browser profile.
4. None available: ask the user to sign in where the agent can drive the browser, or to do the step and share the result; suggest installing `ego-browser` if they want it automated.

Ask before signing in, submitting, purchasing, downloading, or saving to the account. Never export, copy, or inject cookies, tokens, or profiles into another tool. Stop at access-denied or challenge pages; do not evade them.

## Token controls

- Accessibility snapshots or focused text over full DOM; a screenshot only when layout or visual state matters—one viewport, cropped.
- Bound steps, tabs, retries, and waits; stop once the evidence is captured.
- Keep labels, warnings, form state, timestamps, and error text when compressing.
- Report the degraded route when a preferred tool is missing and fidelity suffers.
