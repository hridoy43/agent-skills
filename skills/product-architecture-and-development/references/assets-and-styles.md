# Assets and styles

## Global styles

Keep global CSS and code-based presentation configuration in the style-owned directory:

```text
src/styles/
  globals.css
  theme.css
  typography.css
  motion.css
  fonts.ts
  theme.ts
```

The root layout imports `src/styles/globals.css`. Do not place the global stylesheet in `app/` unless the framework requires that exact location and the project documents the exception.

## Asset ownership

Use a framework-agnostic root-level asset catalog for assets shared by multiple features:

```text
assets/
  images/
  icons/          # raw SVG/icon files
  illustrations/
  fonts/
```

Feature-only assets may live in `features/<feature>/assets/`. Do not duplicate a shared asset across features.

Use the framework's public/static-serving adapter for assets that need stable URL access. In Next.js, that adapter is root-level `public/`, so URL-served assets belong in `public/assets/`; Next.js does not automatically serve root-level `assets/`. Import source assets from root `assets/` through the repository alias when build-time optimization is needed.

Raw SVG/icon files belong in `assets/icons/`. Reusable React icon components belong in `src/components/icons/`. Generated or vendor-owned UI components remain in library-specific directories such as `src/components/shadcn/` and `src/components/magicui/`.

Do not write inline SVG markup or duplicate SVG source in application code. Store SVG files in the owned asset directory and import them through the selected framework's supported asset mechanism. Brand SVGs belong in `assets/brand/`; shared icons belong in `assets/icons/`; feature-specific SVGs may live in `features/<feature>/assets/`.

When a framework requires public URL serving, use its public adapter, such as `public/assets/brand/logo.svg` for Next.js. When build-time imports are supported and useful, import from `assets/brand/logo.svg`. Preserve accessibility through the consuming component's label, title, or decorative behavior.

Before adding an asset directory, confirm ownership, consumers, optimization behavior, accessibility text, responsive variants, and licensing/provenance.

Use stronger platform-native conventions when the project is not a web source-asset project:

- Expo/React Native: the project asset convention or `assets/`.
- Flutter: `assets/` registered in `pubspec.yaml`.
- Android: `res/` and resource qualifiers.
- iOS: asset catalogs.
- Backend: object storage or package-owned fixtures.

Do not force root `assets/`, `public/`, or `src/styles/` onto ecosystems with a stronger native convention.
