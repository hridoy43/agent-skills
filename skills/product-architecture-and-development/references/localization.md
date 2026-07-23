# Localization and internationalization

## Decide during the interview

Ask for source locale, launch locales, target regions, URL strategy, translation owner/workflow, RTL needs, locale-specific legal/commercial rules, and whether content comes from files, CMS, or APIs.

Choose one:

- **Single-locale:** no i18n dependency; still use `Intl` for dates/numbers and avoid layout assumptions that block future translation.
- **Localization-ready:** one source locale in the translation structure, typed keys, and locale-aware formatting/routing boundaries; add target locales later.
- **Multi-locale:** localized routing, messages, metadata, alternates, locale switching/detection, RTL, translation QA, and per-locale content publication.

Do not generate machine-translated production copy without user approval and review.

## Default locale-first structure

Use feature-split files within each locale, following the maintainable pattern proven in Truely:

```text
src/
  i18n/
    config.ts                 # source/target locales and fallback policy
    locale.types.ts
    routing.ts                # localized path helpers and validation
    client.ts                 # client hooks/provider boundary
    server.ts                 # server loader/translation boundary
    formatters.ts             # dates, numbers, currency, units, lists
    direction.ts              # LTR/RTL mapping
    index.ts
  locales/
    en/
      common.json
      navigation.json
      auth.json
      home.json
      <feature>.json
      validation.json
      index.ts                # explicit namespace assembly
    ar/
      common.json
      navigation.json
      auth.json
      home.json
      <feature>.json
      validation.json
      index.ts
```

For a large monorepo, shared product messages may live in `packages/locales`, while app-only messages stay in the app. Do not force mobile, web, transactional email, and backend error messages into one bundle when their release cycles differ.

## Routing and locale choice

- Use valid BCP 47 locale tags and a typed allowlist.
- Prefer a stable locale segment such as `/en/...` for all locales when international SEO and operational consistency matter; using an unprefixed source locale is acceptable if canonical/redirect rules are explicit.
- Validate locale params and return a real 404 or permanent redirect for invalid prefixes according to policy.
- Preserve the user's explicit locale choice. Browser/device detection may recommend a locale; do not repeatedly force-redirect.
- Separate language from country/currency. `en`, `en-GB`, country, timezone, and billing currency are different concepts.
- Keep route slugs stable unless translated slug mapping, redirects, and canonical behavior are designed deliberately.

## Rendering and SEO

- Set `<html lang>` and `dir` on web; set accessibility language for native content where pronunciation matters.
- Server-render localized public content.
- Generate localized title/description, canonical URL, Open Graph values, structured data, sitemap entries, and reciprocal `hreflang` alternates including `x-default` where appropriate.
- Do not canonicalize every translation to the source page.
- Exclude incomplete/draft locale pages from indexing until their content is approved.
- Localize meaningful alt text, labels, validation, empty/error states, consent text, and emails—not only visible headings.

## Message design

- Use stable semantic keys, not full English sentences as keys.
- Split namespaces by product feature/page so bundles and ownership remain clear.
- Use ICU/plural/select support instead of string concatenation.
- Interpolate typed variables and never inject untrusted HTML into translations.
- Keep rich text structural and limited; components own links/emphasis where possible.
- Use `Intl.DateTimeFormat`, `NumberFormat`, `RelativeTimeFormat`, `ListFormat`, and explicit time zones/currencies.
- Never assume translated text length, word order, casing, line breaking, or Latin glyph coverage.

## RTL and responsive design

- Prefer logical properties (`inline-start`, `margin-inline`, `text-start`) over left/right.
- Add a tested RTL variant (for example a Tailwind custom variant based on `[dir="rtl"]`) when Tailwind is used.
- Mirror directional navigation icons only when meaning is spatial; do not mirror media controls, checkmarks, or brand marks blindly.
- Test Arabic/Hebrew layouts, mixed-direction input, numbers, phone/email fields, tables, charts, and product imagery.

## Data, APIs, and caching

- Include locale in query keys, cache keys, CMS requests, and server prefetch when the response is localized.
- Define fallback behavior for missing CMS/API translations; do not silently mix locales in a way that misleads users.
- Keep stable identifiers locale-independent.
- Treat localized user-generated content separately from interface translation.
- Version downloaded/native translation bundles and define rollback behavior.

## Translation workflow

1. Source locale changes first.
2. Schema/key extraction and parity checks run in CI.
3. Translation is generated/imported through the approved provider.
4. A human reviews product, legal, marketing, and high-risk strings.
5. Screenshots and pseudo-localization expose overflow/truncation.
6. Locale is published only when required namespaces and SEO metadata are complete.

Document how to add a locale, add a namespace/key, run localization, review changes, and publish/rollback it.

## Validation

Test missing/extra keys, interpolation types, plural branches, fallback, locale detection, persisted choice, invalid locale URLs, `lang`/`dir`, RTL, 200% zoom/dynamic type, long pseudo-locale strings, CJK fonts/line breaks, localized metadata/canonicals/alternates/sitemap, date/number/currency/timezone output, analytics locale dimension, and translated email/push templates.
