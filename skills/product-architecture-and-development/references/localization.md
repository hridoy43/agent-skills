# Localization

Interview: source and launch locales, regions, URL strategy, translation owner and workflow, RTL, locale-specific legal or commercial rules, and content source (files, CMS, API). Choose a mode:

- **Single-locale:** no i18n dependency; still use `Intl` and avoid layouts that block translation.
- **Localization-ready:** source locale in the translation structure, typed keys, locale-aware formatting and routing boundaries.
- **Multi-locale:** localized routes, messages, metadata, alternates, switching, RTL, translation QA, per-locale publishing.

Never ship machine-translated production copy without approval and review.

## Structure

```text
src/lib/i18n/   config.ts  types.ts  routing.ts  client.ts  server.ts  formatters.ts  direction.ts  index.ts
src/locales/<locale>/   common.json  navigation.json  <feature>.json  validation.json  index.ts
```

Runtime and integration live in `lib/i18n` (or `src/i18n` if that's the convention); messages live in `locales`—never mixed. Monorepos may share product messages in `packages/locales`; don't force web, mobile, email, and backend into one bundle when release cycles differ.

## Rules

- BCP 47 tags with a typed allowlist; prefer a prefix for every locale (`/en/...`); invalid prefixes return 404 or redirect per policy.
- Keep the user's explicit locale choice; detection may suggest, never force-redirect repeatedly. Language, country, timezone, and currency are separate.
- Set `<html lang>` and `dir`; server-render localized public content; localized title, description, canonical, Open Graph, structured data, sitemap, and reciprocal `hreflang` with `x-default`. Never canonicalize translations to the source; noindex incomplete locales.
- Semantic keys, namespaces per feature, ICU plurals/select, typed interpolation, no untrusted HTML; `Intl` formatters with explicit time zones and currencies; no assumptions about length, order, casing, or glyphs.
- RTL: logical properties (`margin-inline`, `text-start`), a tested Tailwind `rtl` variant, mirror only spatial icons.
- Include locale in query, cache, and CMS keys; define fallback for missing translations without misleading mixes; keep IDs locale-independent; version native translation bundles.

## Workflow and tests

Source locale first → key parity checks in CI → approved translation → human review of product, legal, and marketing strings → pseudo-localization and screenshots → publish only complete namespaces and SEO metadata. Document adding a locale or key and rollback. Test missing keys, interpolation, plurals, fallback, detection, persisted choice, invalid URLs, `lang`/`dir`, RTL, 200% zoom, long pseudo-strings, CJK line breaks, localized metadata and sitemap, formatting, analytics locale, and email/push templates.
