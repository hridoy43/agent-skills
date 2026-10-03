# Third-party scripts

All scripts, SDKs, pixels, embeds, widgets, chat, payment helpers, and experiment tools go through one boundary—no raw `<script>` tags or vendor init scattered across routes.

```text
lib/integrations/
  vendors.ts  loadThirdParty.ts  consent.ts  providers/  index.ts
```

Record per vendor: purpose, owner, data and consent category, load trigger, origins and CSP directives, privacy and retention risk, fallback, environments, and removal condition. Keys live in validated config, never in UI code.

- Load after consent unless strictly necessary; lazy-load non-critical vendors after interaction or idle; reserve embed dimensions.
- Deduplicate across navigation and hydration; tear down when possible; isolate untrusted frames with sandboxing and validated `postMessage`.
- Test consent granted/denied, navigation, duplicate mounts, SSR, ad blockers, script failure, and CSP report-only vs enforced.
- Scripts never outrank SEO, accessibility, performance, security, or consent; broad CSP exceptions need an explicit product decision.
