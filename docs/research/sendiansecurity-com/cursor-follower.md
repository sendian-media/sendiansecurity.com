# Cursor follower — source evidence (sendiansecurity.com)

## Provenance

- Source site: https://sendiansecurity.com/ (authorized — we own this site)
- Source platform: WordPress + Elementor, theme "camtora" with Potenza framework widgets
- Observed: 2026, desktop browser, https://sendiansecurity.com/

## Source implementation (reference observation only — rewritten as vanilla Astro)

- Markup: `#pgs-cursor.pgs-cursor.pgs-cursor--style-1.pgs-cursor-blur` with
  `data-default_text="Drag"` and `data-default_icon="fas fa-arrow-right-long"`,
  containing `.cursor__circle > i`.
- Theme CSS: `wp-content/litespeed/css/c8c36d618d8ae50a7660f48234896799.css` (`pgs_cursor-css`)
- Theme JS: `wp-content/litespeed/js/c27d7f03cb03bd6737468817c1067a13.js` (`pgs_cursor-js`, jQuery)

## Observed computed styles (live, via browser inspection)

- `--pgs_cursor_border_width: 1px` / `--pgs_cursor_border_style: solid` /
  `--pgs_cursor_border_color: #000000`
- `--pgs_cursor_bg_color: rgba(255,255,255,0.3)`, `--pgs_cursor_text_color: #FFFFFF`
- `.cursor__circle`: 35px × 35px, `margin: -50%`, `border-radius: 50%`,
  transitions 0.3s `cubic-bezier(.25,1,.5,1)` on opacity/background-color/
  border-color/width/height.
- Whole page gate: `@media (hover:hover) and (pointer:fine)` — inert on touch.
- `#pgs-cursor` is `position:fixed; z-index:1046; pointer-events:none`.

## Observed behavior (from theme JS)

- Circle follows mouse with lerp easing, `speed = 0.1`, per-frame
  `diff = round(mouse - pos); pos += diff * speed;` then `translate3d(x, y, 0)`
  on the container. Initial `mouse = (-100,-100)`, `pos = (0,0)`.
- Hovering any `a:not(.cursor-style)` adds `.cursor-link` → circle fades/shrinks
  to 0×0 / opacity 0; removing hover restores it.
- Elements with `data-cursor_type` (`text` / `arrow` / `overlay`) grow the circle:
  - `text`: size `--pgs_cursor_size` (default 100px), filled
    `--pgs_cursor_bg_color`, label from `data-cursor_text` (fallback `Drag`),
    backdrop blur 10px.
  - `arrow`: same big circle with an arrow icon (default icon class from
    `data-default_icon`), backdrop blur 10px.
  - `overlay`: 48px translucent `rgb(227 222 193 / .08)` circle, no border.
- Per-element overrides via `--pgs_elwidget_cursor_*` custom properties.
- `data-cursor_type` element count on the live homepage: **0** — the visible
  behavior on the homepage is just the follower circle + link-hover shrink.

## Local substitutions

- jQuery removed; vanilla JS with the same lerp math and state machine.
- Font Awesome arrow icon replaced with an inline data-URI SVG arrow
  (no FontAwesome dependency on the local site). Only used by `data-cursor_type="arrow"`
  elements, which the live homepage does not use.
- Same id (`pgs-cursor`) and class names kept so recreated page components can
  opt into `data-cursor_type` states.

## Local integration

- Component: `src/components/ui/CursorFollower.astro`
- Included in `src/layouts/BaseLayout.astro` (site-wide; all routes use it,
  including the `sites/*` recreations).
