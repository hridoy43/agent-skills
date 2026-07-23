# Security and CSP

## Baseline

- Keep secrets server-side and validate environment variables at startup.
- Validate and authorize at every trust boundary.
- Use secure, httpOnly, sameSite cookies for browser sessions where applicable.
- Apply least privilege to API tokens, desktop bridges, storage, database roles, and CI.
- Escape output by default; sanitize intentionally supported rich HTML.
- Avoid logging secrets, tokens, raw personal data, or full sensitive payloads.
- Pin/lock dependencies and review security updates.

## Content Security Policy

Start from:

```text
default-src 'self';
base-uri 'self';
object-src 'none';
frame-ancestors 'none';
form-action 'self';
script-src 'self' 'nonce-<per-request>' 'strict-dynamic';
style-src 'self' 'nonce-<per-request>';
img-src 'self' data: blob: <approved-cdns>;
font-src 'self' <approved-font-cdns>;
connect-src 'self' <approved-apis>;
upgrade-insecure-requests;
```

Adapt to the actual framework, rendering model, and origins. Generate nonces per response for dynamic HTML when the framework supports it; use hashes or framework-supported static policies when forcing dynamic rendering would damage a deliberate static/SEO strategy. Prefer hashes/nonces over `unsafe-inline`; never use `*` as a convenience fix. If a necessary third party requires a weaker directive, document the exact source, risk, containment, and removal condition. Add only sources observed in the application.

For an existing deployed application:

1. Inventory scripts, styles, fonts, images, frames, workers, and API destinations.
2. Deploy `Content-Security-Policy-Report-Only` to a controlled reporting endpoint.
3. Fix violations and third-party assumptions.
4. Enforce the policy.
5. Add automated header checks and monitor reports.

Also consider HSTS, `X-Content-Type-Options: nosniff`, a deliberate referrer policy, permissions policy, secure cookie settings, and framework-specific CSRF protections.

## Platform boundaries

Mobile secure storage and desktop privileged commands need the same validation/least-privilege discipline as HTTP APIs. Webview navigation and bridge calls must be allowlisted and typed.
