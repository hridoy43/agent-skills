# Mobile chrome and safe areas

Read when a screen adds or changes a header, tab bar, sheet, modal, FAB, translucent or large-title chrome, or safe-area handling. Default to the platform primitive; chrome is the one surface where a project may deliberately outrun it for a feature, design moment, or signature interaction.

## One owner per edge

Top (status bar, notch, Dynamic Island), bottom (home indicator, gesture bar, tab bar, Android nav bar), and each overlay have exactly one inset owner:

- Native chrome present: it absorbs the inset; the content wrapper opts out.
- Custom chrome present: it absorbs the inset; the content wrapper opts out.
- No chrome: the content wrapper absorbs it.

Declare the owner once, visibly, in the layout file or chrome primitive. A double or missing inset is a bug even if it looks right, because it drifts across devices, rotation, and dark mode. Ask "who absorbs this inset?"—two answers means a conflict.

## Safe-area discipline

One wrapper per screen reads the safe-area hook per edge; headers, content, and tab bars never read it independently. The wrapper is opt-out (flags like "parent absorbed top"), not opt-in. For chrome height (translucent headers, fades, parallax), use the navigator's header-height or tab-bar-height signal, never a recomputed safe-area value or `onLayout` measurement.

## Header roles

Name the role before designing; use the standard default when it fits.

- **Navigation:** platform bar, leading back or menu, title, trailing overflow. The default.
- **Identity:** avatar, photo, brand, or large subject title; may replace the primitive.
- **Instruction:** an explainer card on empty or onboarding screens; platform bar stays standard.
- **Form:** leading dismiss, stable title, trailing commit action (save, send, next); override only the trailing slot.
- **Segmented:** title plus a pill-tab row switching sibling scenes with the tab primitive, not push.
- **Hero:** a designed first viewport with content under translucent chrome; costliest—commit only when the moment is the product.

## Large, translucent, and multi-pane chrome

- Large titles: configure the platform collapse (`prefersLargeTitles` or the navigator option); if you build your own, drive bar height from scroll offset and never overlap content.
- Translucent and scroll-edge effects: configure them on the primitive; the OS surface is the source of truth for tint and elevation.
- Translucent chrome doesn't reserve top space: pick one offset source (header-height context or safe-area hook).
- Fades and parallax use the same scroll offset as the collapse.
- Split views: one chrome owner per pane or window; two top chromes usually means a design problem.

## Customizing

Prefer a slot override (back button, one trailing control, background, title) over replacing the header. Replace it only for: an interaction the primitive cannot host, a design moment that is the product, a motion language the platform hasn't caught up to, or a signature effect that drives retention. Build it on the same native primitives (native driver, platform gestures) and record the requirement. A custom header must:

- own its inset and pass its height downstream (prop, context, or the navigator's height signal) so content neither clips nor double-pads;
- survive rotation, dynamic type, dark mode, and large-title collapse;
- carry a JSDoc escape-hatch note naming the chrome-less navigator that justifies it.

Composition children (toolbar slots, title and search overrides) go inside the screen element that owns them; siblings are silently dropped.

## Bottom and overlay chrome

- Tab bar: the default for a small fixed set of destinations; it owns the bottom inset. With a custom sticky bar or segmented control, pick one bottom owner.
- FAB: overlay, never an inset owner; keep it inside the bottom owner's safe region.
- Modals own their top and bottom insets (detents, home-indicator clearance) and never reuse the parent container.
- Sheets and popovers: native presentation for swipe-dismiss and detents; custom only when the interaction is the product.
- Snackbars and toasts float above and never take ownership.

A chrome primitive used by two features moves to `components/layout/`; used by one feature, it stays there.
