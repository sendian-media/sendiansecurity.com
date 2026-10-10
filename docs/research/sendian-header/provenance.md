# sendiansecurity.com header — asset provenance

Header restyle (2026-10-08): larger logo + Services dropdown. Authorization: user-owned
site, owner requested the header match the production site (`https://sendiansecurity.com/`).

## Header logo

| Local path                        | Source asset (rectified)                                       | Note                                                       |
| --------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- |
| `public/images/home/logo-header.png` | crop of `public/images/home/brand-logo.png` (1080×1080 padded focal 1080×364) → resized to 864×291, quantized 256 colors | Content-only crop of the already-purchased logo asset; no new external download. Displayed `h-9` (36px) mobile / `52px` desktop (owner-adjusted 2026-10-08: reduced 20px from the initial 56/72). |

## Dropdown styling (evidence: PGS theme CSS `wp-content/litespeed/css/d7b9097a2eae027b9170fb3124283114.css` + `.../84f9fd06fec177d80f5032dd475d10c8.css`, fetched 2026-10-08)

- Menu items: DM Sans 16px, weight 500, color `#3e4a5c`, hover/active `#0078d4` (`--pgs_header_link_color_*`).
- Dropdown panel: white, `border-radius: 7px`, `box-shadow: 0 10px 50px rgb(0 0 0 / .1)`,
  `min-width: 260px`, `padding: 20px 0`, slides from `margin-top: 15px` to `0` on open.
- Items: 16px/28px, padding `5px 25px`, hover → `#005a9e` (`--pgs_submenu_link_color_hover`),
  padding-left 35px, 50px × 1px underline rule grows from the left (site-header style 4/5 rule).
- Menu order: Home, About, Services ▾, Projects, News, Contact (source primary-menu DOM).
- Submenu items map 1:1 to the seven service detail pages already built (`src/data/service-details.ts`).
- Header CTA (owner-requested, differs from source): gradient pill `linear-gradient(88deg, #2a3f5f, #427dd5)` + white arrow chip, matching the home primary buttons. Hidden below 640px.
- Local additions (not in the source): keyboard `:focus-within` open, Escape-to-close,
  touch tap-toggle, chevron rotation. Source dropdown is hover-only; the additions are
  a11y/UX equivalents and match the site's own hover timing.
