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

Use systematic global directories for assets shared by multiple features:

```text
src/assets/
  images/
  icons/          # raw SVG/icon files
  illustrations/
  fonts/
```

Feature-only assets may live in `features/<feature>/assets/`. Do not duplicate a shared asset across features.

Use `public/` only for assets that need stable URL access, direct static serving, robots files, favicons, or externally referenced metadata. Import source assets from `src/assets/` through the repository alias.

Raw SVG/icon files belong in `src/assets/icons/`. Reusable React icon components belong in `src/components/icons/`. Generated or vendor-owned UI components remain in library-specific directories such as `src/components/shadcn/` and `src/components/magicui/`.

Before adding an asset directory, confirm ownership, consumers, optimization behavior, accessibility text, responsive variants, and licensing/provenance.

Use stronger platform-native conventions when the project is not a web source-asset project:

- Expo/React Native: the project asset convention or `assets/`.
- Flutter: `assets/` registered in `pubspec.yaml`.
- Android: `res/` and resource qualifiers.
- iOS: asset catalogs.
- Backend: object storage or package-owned fixtures.

Do not force `src/assets/` or `src/styles/` onto ecosystems with a stronger native convention.
