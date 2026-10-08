# sendiansecurity.com /about-us/ — asset provenance

Source page: https://sendiansecurity.com/about-us/
Fetched: 2026-10-08 (`/tmp/about-source.html`, HTML evidence only)
Authorization: user-owned site; reproduction approved by the site owner.

All assets are hosted on `https://sendiansecurity.com` (authorized) and stored at `public/images/about/`. File sizes were compared with the live originals (byte-identical for pre-existing assets).

| Local path                                             | Source URL                                                                                              | Dimensions | Notes |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ---------- | ----- |
| `about-main.png`                                       | `wp-content/uploads/2026/02/about-us-page-1.png`                                                        | 1024×1536  | Intro section image (also the page OG image) |
| `about-secondary.jpeg`                                 | `wp-content/uploads/elementor/thumbs/about-2-rj9zkpr68huottonzznr2xl81ng1wl0up27u9ilmtw.jpeg`            | 850×930    | Vision/Mission section image (Elementor resized thumb; used as-is, full original not referenced in markup) |
| `camera-future.png`                                    | `wp-content/uploads/2025/09/camera-future.png`                                                          | 688×713    | Capability framework center image (slideInUp) |
| `icon-cctv.svg`                                        | `wp-content/uploads/2026/02/cctv-icon-2.svg`                                                            | 60×60      | Capability card icon (wobble-skew hover) |
| `icon-database.svg`                                    | `wp-content/uploads/2026/02/databse.svg`                                                                | 60×60      | Capability card icon |
| `icon-parking.svg`                                     | `wp-content/uploads/2026/02/parking.svg`                                                                | 60×60      | Capability card icon |
| `icon-network.svg`                                     | `wp-content/uploads/2026/02/netork-icon-1.svg`                                                          | 60×60      | Capability card icon |
| `icon-home-smart.svg`                                  | `wp-content/uploads/2026/02/home-smart.svg`                                                             | 60×60      | Capability card icon |
| `icon-projector.svg`                                   | `wp-content/uploads/2026/02/projector.svg`                                                              | 60×60      | Capability card icon |
| `icon-vision.svg`                                      | Inline SVG in source markup (`input id="a"` eye, gradient stroke)                                        | 24×24      | Extracted from the source's "Our Vision" icon-box |
| `icon-mission.svg`                                     | Inline SVG in source markup (bullseye, `grad1` gradient fill)                                            | 200×200    | Extracted from the source's "Our Mission" icon-box |

## Substitutions

- Hero banner: source uses the theme's shared page-header image (`pageheader-bgtype--image`); local page reuses the shared local `/images/home/hero.webp` banner + navy overlay, matching the other recreated pages (Services, Contact, News).
- Fonts: unchanged (global DM Sans / Wix Madefor Display, loaded locally from the shared setup).
- Source's hidden offcanvas panel ("About camtora", portfolio thumbnails, search box) is intentionally omitted — demo content invisible on the live page.

## SHA-256 checksums

Recorded for the pre-existing assets in `docs/research/sendian-about/` — verify with:

```sh
shasum -a 256 public/images/about/*
```
