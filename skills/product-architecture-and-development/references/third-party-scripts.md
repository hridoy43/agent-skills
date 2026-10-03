# Third-party scripts

Load executable scripts only through the framework's script primitive and one registry—never raw `<script>` tags or vendor snippets pasted into layouts or pages.

- **Next.js:** `next/script`; for Google Tag Manager, Analytics, Maps, and YouTube use `@next/third-parties/google` (official but documented as experimental—confirm with the user; skip a separate GA tag when GTM already loads it).
- **Other frameworks:** their documented script API (for example Nuxt's `useScript`); a hand-written loader only when the framework has none.
- **Exception:** JSON-LD is data, not code—render a native `<script type="application/ld+json">` in the page or layout and escape `<` as `<`.

```text
src/config/scripts.ts          # typed registry: id, src or inline, strategy, consent category, environments
src/components/scripts/
  ScriptManager.tsx            # mounted once in the root layout; renders the registry
  types.ts                     # ScriptEntry derived from the framework's ScriptProps
src/lib/integrations/          # consent state and vendor JS APIs (event senders, SDK wrappers)
```

## Next.js rules

- Strategy: `beforeInteractive` only for consent managers and bot detectors, rendered in the root layout on the server (never behind a client mount gate); `afterInteractive` (default) for tag managers and analytics; `lazyOnload` for chat and social widgets; no `worker` (experimental, Pages Router only).
- Inline entries need a unique `id`. `onLoad`, `onReady`, and `onError` work only in Client Components (`onReady` reruns on remount; `beforeInteractive` supports neither `onLoad` nor `onError`)—keep `ScriptManager` a Server Component and render callback entries through a small client child.
- CSP nonce: generate it per request in `proxy.ts`, read it on the server with `(await headers()).get('x-nonce')`, and pass it as `nonce` to `Script` and `@next/third-parties` components. Don't expose it through a DOM-readable meta tag. Nonces force dynamic rendering (no static, ISR, or PPR); for static pages use hashes or SRI instead ([security-and-csp.md](security-and-csp.md)).

## Every vendor

Record purpose, owner, data and consent category, load trigger, origins and CSP directives, privacy and retention risk, fallback, environments, and removal condition in its registry entry. Keys live in validated config, never in UI code.

- Load after consent unless strictly necessary; lazy-load non-critical vendors; reserve embed dimensions.
- Let the framework deduplicate across navigation; tear down when possible; isolate untrusted frames with sandboxing and validated `postMessage`.
- Test consent granted/denied, navigation, duplicate mounts, SSR, ad blockers, script failure, and CSP report-only vs enforced.
- Scripts never outrank SEO, accessibility, performance, security, or consent; broad CSP exceptions need an explicit product decision.
