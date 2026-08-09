# Assets and styles

## Free asset discovery

When a project needs imagery and no approved asset exists, generate a fit-for-purpose asset first when the image-generation capability can satisfy the brief. Ask for or infer the subject, mood, aspect ratio, visual style, and required dimensions; generate only what the product actually needs and iterate against the user’s feedback.

Use a free asset library only when generation is unavailable, produces an unsuitable result, or the brief requires a real photograph, recognizable place, existing product, or other source-specific material. Offer libraries such as Pixabay, Unsplash, or Pexels as options rather than required providers.

The user may search with suggested keywords, or—when the user authorizes the agent to do the search—the agent may use a focused web search, interactive agent browser, in-app browser, or developer browser. Search narrowly, inspect candidate results, return a small set of relevant options, and let the user choose before incorporating an external asset. Do not collect a large asset set or embed source-site UI when one focused asset or a generated alternative will solve the need.

Keep third-party media as an enhancement to the product’s own content and brand system. Prefer the smallest suitable file, crop, and resolution; preserve responsive dimensions; and check that recognizable people, brands, and visual context fit the intended use before shipping.

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

For web projects, feature-specific assets belong under `public/assets/<feature>/` or the framework's equivalent global asset boundary. Do not place them in `features/<feature>/assets/` unless the framework or build pipeline explicitly requires source-local ownership. Do not duplicate a shared asset across features.

Use the framework's public/static-serving adapter for assets that need stable URL access. In Next.js, that adapter is root-level `public/`, so URL-served assets belong in `public/assets/`; Next.js does not automatically serve root-level `assets/`. Import source assets from root `assets/` through the repository alias when build-time optimization is needed.

Keep the public directory organized by responsibility. Framework- and protocol-owned files stay at the public root, while application media and static code assets go under `public/assets/`:

```text
public/
  robots.txt
  sitemap.xml
  manifest.webmanifest
  favicon.ico
  site-verification.*
  assets/
    brand/
    images/
    icons/
    illustrations/
    fonts/
```

Do not put application images, SVGs, fonts, or other reusable static assets directly beside `robots.txt` or `sitemap.xml`. Use framework-required root filenames when a convention requires them; otherwise keep public files under the most specific asset category.

Raw SVG/icon files belong in the framework-appropriate global asset boundary, such as `public/assets/icons/` for Next.js. Reusable React icon components belong in `src/components/icons/`. Generated or vendor-owned UI components remain in library-specific directories such as `src/components/shadcn/` and `src/components/magicui/`.

Do not write inline SVG markup or duplicate SVG source in application code. Store SVG files in the owned global asset directory and reference them through the selected framework's supported asset mechanism. For web projects, brand SVGs belong in `public/assets/brand/`, shared icons belong in `public/assets/icons/`, and feature-specific SVGs belong in `public/assets/<feature>/`.

When a framework requires public URL serving, use its public adapter, such as `public/assets/brand/logo.svg` for Next.js. When build-time imports are supported and useful, import from `assets/brand/logo.svg`. Preserve accessibility through the consuming component's label, title, or decorative behavior.

Before adding an asset directory, confirm ownership, consumers, optimization behavior, accessibility text, responsive variants, and licensing/provenance.

Use stronger platform-native conventions when the project is not a web source-asset project:

- Expo/React Native: the project asset convention or `assets/`.
- Flutter: `assets/` registered in `pubspec.yaml`.
- Android: `res/` and resource qualifiers.
- iOS: asset catalogs.
- Backend: object storage or package-owned fixtures.

Do not force root `assets/`, `public/`, or `src/styles/` onto ecosystems with a stronger native convention.
