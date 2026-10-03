# Security and CSP

- Secrets server-side; validate env at startup; authorize at every trust boundary; secure, httpOnly, sameSite session cookies; least privilege for tokens, desktop bridges, storage, DB roles, and CI; escape output and sanitize supported rich HTML; never log secrets or sensitive payloads; lock dependencies and review advisories.

## CSP baseline

```text
default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self';
script-src 'self' 'nonce-<per-request>' 'strict-dynamic'; style-src 'self' 'nonce-<per-request>';
img-src 'self' data: blob: <approved-cdns>; font-src 'self' <approved-font-cdns>;
connect-src 'self' <approved-apis>; upgrade-insecure-requests;
```

Per-response nonces for dynamic HTML; hashes or static policies when forcing dynamic rendering would hurt a deliberate static/SEO strategy. Never `unsafe-inline` when nonces or hashes work, never `*`. A weaker directive for a required vendor records source, risk, containment, and removal condition. Add only observed origins.

Existing deployed app: inventory scripts, styles, fonts, images, frames, workers, and API origins → deploy `Content-Security-Policy-Report-Only` to a controlled endpoint → fix violations → enforce → automate header checks and monitor reports.

## Headers

HSTS only after the domain and all affected subdomains are HTTPS-ready; `includeSubDomains` and preload are explicit, hard-to-reverse decisions; never on local or intentionally HTTP environments. Also test `X-Content-Type-Options: nosniff`, Referrer-Policy, Permissions-Policy, cookie flags, and framework CSRF protection.

Mobile secure storage, desktop privileged commands, webview navigation, and bridge calls get the same validation, allowlists, and least privilege as HTTP APIs.
