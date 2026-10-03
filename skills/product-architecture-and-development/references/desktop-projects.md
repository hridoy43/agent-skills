# Desktop projects

- Tauri: web UI plus a narrow native core where bundle size and security boundaries matter. Electrobun: Bun/TypeScript main process with small bundles when its maturity is acceptable. Electron: when Node/Chromium integration or its ecosystem is central. Native: when platform integration or interaction quality outweighs reuse. With no stack given, use Better-T-Stack's Tauri or Electrobun addon. Verify plugin health first.
- Keep privileged code apart: `src/` (UI), `src-tauri/` or `electron/` (commands, OS access), `packages/contracts/` (typed command/event contracts when needed). Expose the smallest typed command surface, validate every payload at the privilege boundary, and never give the renderer broad filesystem, shell, or network access.
- Plan signing and notarization, auto-update, crash recovery, migrations, offline, tray and menus, deep links, file associations, and platform accessibility. Webviews get CSP and navigation allowlists.
- Map shared semantic tokens into the desktop UI; keep OS colors and materials behind theme adapters.
