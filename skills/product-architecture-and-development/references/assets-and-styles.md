# Assets and styles

## Asset locations

| Asset | Location |
| --- | --- |
| Build-time imports shared by features | root `assets/{images,icons,illustrations,fonts}/` |
| URL-served web files | `public/assets/{brand,images,icons,illustrations,fonts,lottie,textures}/` |
| Feature-specific web files | `public/assets/<feature>/` (not `features/<feature>/assets/` unless the build requires it) |
| Framework/protocol files | `public/` root: `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, favicons, verification files |
| Reusable icon components | `src/components/icons/` |
| Global CSS and style config | `src/styles/` |

Next.js serves only `public/`, so URL assets go in `public/assets/`. Native stacks keep their conventions: Expo `assets/`, Flutter `assets/` in `pubspec.yaml`, Android `res/`, iOS asset catalogs, backend object storage. Never put SVG markup in code or duplicate a shared asset. Before adding an asset directory, confirm owner, consumers, optimization, alt text, responsive variants, and license.

## Finding imagery

1. Generate a fit-for-purpose image first when image generation is available (subject, mood, aspect ratio, style, size).
2. Use a free library (Pixabay, Unsplash, Pexels) when generation is unavailable or a real photo, place, or product is required. Search through `global-discovery-browsing-extraction` when installed, otherwise the host browser or suggested keywords for the user; return a small shortlist and let the user choose.
3. Use the smallest suitable file and crop; check people, brands, and context fit the use; record source and license.
