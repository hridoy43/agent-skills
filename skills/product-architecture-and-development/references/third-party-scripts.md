# Third-party scripts and external integrations

## Central ownership

Manage external scripts, SDKs, pixels, embeds, widgets, chat tools, payment helpers, experimentation tools, and analytics through one project-owned integration boundary. Do not scatter raw `<script>` tags, vendor initialization, consent checks, or provider-specific calls across routes and components.

```text
lib/integrations/
  vendors.ts             # typed vendor metadata and ownership
  load-third-party.ts    # deduplicated, lifecycle-aware loader
  consent.ts             # consent categories and current state
  providers/             # vendor adapters, one per provider
  index.ts               # public integration boundary
```

Adapt the location to the framework, but keep the responsibilities centralized and explicit.

## Required vendor record

Record each vendor's purpose, owner, data category, consent category, load trigger, destination/origins, CSP directives, privacy/retention risk, fallback, environment enablement, and removal condition. Keep secrets and provider keys in validated server-side or environment configuration; never hardcode them in UI.

## Loading rules

- Load only after the required consent category, unless the vendor is strictly necessary for the requested product function.
- Lazy-load non-critical vendors after interaction or idle time; reserve dimensions for embeds and avoid layout shifts.
- Deduplicate loading across route transitions and React hydration; support teardown where the vendor allows it.
- Keep vendor adapters provider-agnostic to the feature and expose typed outcome events through the central analytics boundary.
- Isolate untrusted frames/widgets with allowlists, sandboxing, postMessage validation, and least privilege.
- Test consent denied/granted, navigation, duplicate mounts, SSR/client boundaries, ad blockers, script failure, and CSP report-only/enforced modes.

Third-party scripts never outrank SEO, accessibility, performance, security, or user consent. If a vendor requires broad CSP exceptions or uncontrolled data collection, document the risk and seek an explicit product decision before adoption.
