# Desktop projects

## Shell choice

- When no stack is specified and Better-T-Stack supports the required Tauri combination, use its current stable Tauri option.
- Use Tauri when a web UI plus a narrow native core satisfies the product and smaller bundles/security boundaries matter.
- Use Electron when Node/Chromium integration or its mature ecosystem is central.
- Use a native app when platform integration, performance, or interaction quality outweighs cross-platform reuse.

Verify current support and plugin health before deciding.

## Boundary

Keep UI and privileged operations separated:

```text
src/                         # UI/features
src-tauri/ or electron/      # privileged commands, OS integration
packages/contracts/          # typed command/event contracts when needed
```

Expose the smallest typed command surface. Validate every payload at the privilege boundary. Do not give renderer code broad filesystem, shell, or network access.

## Product concerns

Plan signing/notarization, auto-update, crash recovery, migrations, offline behavior, tray/menu behavior, deep links, file associations, and platform-specific accessibility. Use CSP and navigation allowlists in embedded webviews.

Map the shared semantic design tokens into the chosen desktop UI layer. Keep operating-system-specific colors/materials behind theme adapters rather than hardcoding them throughout feature views.
