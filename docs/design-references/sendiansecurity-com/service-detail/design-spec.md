# Source design spec — sendiansecurity.com/services/security-solutions/

Evidence: `source-live.html` + `source-live-2.html` (raw captures, both consistent),
34 LSCSS bundles in `css/`, **computed-style probes from the LIVE DOM** (rendered, current),
and live screenshots `source-*-1440*.png` captured at 1280x633 CSS viewport.
Page = Elementor page 14693. All token values below were READ BACK from the rendered page
unless marked "(static)" for HTML-only facts. This spec supersedes any contradiction; earlier
stale assumptions (typo rendering, all-closed initial state, #333 content color) are corrected.

## Pages states

- **Initial load**: FIRST accordion item of EACH of the 3 categories is OPEN (`.elementor-active`,
  aria-expanded="true") — probed after location.reload() with zero clicks. Other 13 items closed.
- Click behavior: accordion (one open per group as standard; internally consistent with wrong-open
  visual? verify — treated as "opening closes previous in same category").

## Global tokens (computed from live DOM)

| Token | Value |
|---|---|
| `.pgs-text-gradient` (eyebrow AND category h4, computed) | `linear-gradient(216deg, rgb(28,46,74) 15%, rgb(66,125,213) 72%)` → `2015deg`-note: **216deg, #1c2e4a 15% → #427dd5 72%** with background-clip:text, transparent fill. Renders "CCTV" blue / "Surveillance" dark (blue at bottom-left, dark at top-right of the block box). |
| Accent | `#427DD5` |
| Secondary / headings | `#1A2547` |
| Body text (kit) | DM Sans 18px/30px, color `#8F91AB` |
| Body text mobile | 16px/28px @767 |

## Page-header (hero band)

- `.page-header` — margin **0 30px**, border-radius **20px**, overflow hidden, **height 480px desktop / 300px mobile**.
- BG image `services-single05.jpg` (= public/images/services/services-banner.jpg, byte-identical verified), cover, **left top**, no-repeat, overlay `rgba(26,37,71,0.86)`.
- H1 `entry-title` "Security Solutions" — white, left-aligned (kit typography `8db8bd1`: Wix Madefor Display 700, 68px/78px → 48px @1400 → 42px/52px @1024 → 36px/46px @767).
- Breadcrumb strip INSIDE the band bottom — height **55px**, bg `#F7F7FA`, link color `#EB3437`, current text `#2C3A55`, separator "/" (grey).

## Intro section

- Container `e-con-boxed`, max-width **1430px**, padding-top **100px** (→80px @1400 →70px @1024/767), padding-x 15px.
- H2 "Comprehensive " + gradient span " Security Ecosystem" (note leading space inside gradient span) — kit typography `43eed44`: Wix Madefor Display 700 capitalize **52px/62px** → 48px/58px @1400 → 40px/50px @1024 → 28px/38px @767, color #1A2547.
- Paragraphs (2) — DM Sans 18px/30px, color #8F91AB. `<hr class="bg-subtle h-px border-0">` after.

## Category section rows (CCTV / Access Control Solutions / Cyber Security Solutions)

Row flex, padding-block **80px** (70px @1024 → 60px @60), max-width 1430px, padding-x 15px.
- **Left column 41.666%** (pl 15px / pr 65px), inner wrapper `position: sticky; top: 0; z-index: 1020`.
- **Right column 58.333%** (px 15px, gap 10px).
- @1024: both columns 100% wide, left blurb `padding-left: 50px` intermediate (0 @767).

Left column contents (top→bottom):
1. **Eyebrow pill** — wrapper border 1px solid (light gray), border-radius pill, padding **7px 19px**, white bg. Text: raw `// Securty Services  ` (LIVE DOM textContent — typo 'Securty' + trailing spaces kept), rendered `text-transform: uppercase`, font **Wix Madefor Display 600 16px**, letter-spacing **2.3px**, gradient text (216deg #1c2e4a→#427dd5, clip text). @1024: 14px / lh17 / ls 1px. Margin-bottom ~20px (30px @1400).
2. **Category h4 heading** — Wix Madefor Display 700, **48px**, `text-transform: capitalize`, gradient text (same 216deg token), inline `padding-top: 30px` + `margin-bottom: 16px` inside widgetlh 1.4em nominal → visible h≈68. (40px @1024, 34px @767 — verify visually.)
3. **Blurb** — DM Sans 16px lh 1.7, color #333-ish (soft gray-blue in screenshot ≈ #616A78; keep #333 per siss CSS then verify), padding-left 10px (0 @767), then `<hr>`.

## Accordion (all 3 groups identical)

- Item: border 0, **radius 20px**, **margin-bottom 15px** (`+` gap; also item margin-bottom 15px in style-pgs-3).
- Title (closed): bg **#F0F0F3**, padding **25px 30px**, radius 20px, color #364556.
- Title (open): bg transparent + `background-image: linear-gradient(90deg, #3E4A5C 0%, #427DD5 100%)`, **color #FFF** (icon too).
- Title font (COMPUTED): **Wix Madefor Display 700 / 24px / lh 30px / text-transform: capitalize** — this is what renders "MOI-SSD Design And Approval" from stored text "MOI-SSD Design and Approval". STORE DATA TEXT AS "…and Approval"; CSS capitalizes.
- Icon: chevron, icon-right (order 2), closed = chevron-down, open = chevron-up (two SVGs swapped via `.elementor-active`). Fill #364556 closed / #FFF open.
- Content (COMPUTED, text-only items): **DM Sans 18px / 30px / color #8F91AB / padding 30px 20px 10px**; @1024: 16px/28px; @767: padding 20px 20px 0 15px.
- Content for items with images: `siss-image`/`siss-text` kerning strips — text portion keeps **16px/1.7** and near-black `#333`; image right-aligned.
- Content border: none (top border from `--pgs_accordion_border_color #0000001A` but border-width:0 kill).

## siss-two-column (inside image items)

`display:flex; align-items:flex-start; gap:24px; flex-wrap:wrap`.
`.siss-text{flex:1 1 300px;font-size:16px;line-height:1.7;color:#333;min-width:0}`
`.siss-image{flex:0 0 300px;text-align:right;order:2}` img `border-radius:8px;object-fit:cover;display:block;margin-left:auto` rendered 300x169.
@768: column; image first (order:-1), centered, mb 20px; text full width.

## Image-only-in-8-items map

Items WITH image (8): MOI-SSD Design and Approval, MOI-SSD Inspection Approval and Certification, IP Cameras, Video Management System, ANPR Systems (same local file `detail-video-service.jpeg`, alt "Video Management Systems"), Storage System, Integrated Access Control Systems, Network Security Design & Implementation.
Items WITHOUT image (8): Automated Turnstiles, Biometric Access Systems, Bollard System, Road Blockers, Data Security, Email Security, Mobile and End Point Security, Governance & Risk Compliance.

## Copy text (verbatim live, transcribed)

- Eyebrow raw: `// Securty Services  ` (typo intentional; rendered uppercase).
- Category names: `CCTV Surveillance`, `Access Control Solutions `, `Cyber Security Solutions` (trimmed).
- SubService titles (trimmed of stray leading/trailing spaces in DOM): as in src/data/service-details.ts today.
- Descriptions: 13/16 verbatim match local today; live quirks preserved locally:
  - Biometric Access Systems: alt-text-style string, NO trailing period.
  - Bollard System: "…pedestrian flowideal for embassies…" (missing space — as live).
  - ANPR Systems: duplicate of Video Management System description (as live).
  - All accordion descriptions within image-bearing items sit as raw `<p>` wrappers.
- Intro paragraphs (2): as local today (verbatim match, verified).
- Intro heading: "Comprehensive" + gradient span " Security Ecosystem" (leading space inside span; render via markup pattern `<span class="pgs-text-gradient">&nbsp;Security Ecosystem</span>`? — verify visual).

## Offcanvas sidepanel (elementor-12841 "About camtora" etc.) — EXCLUDED (hidden panel).

## Fonts

DM Sans 400/500/700 + Wix Madefor Display 400–800 — all already local TTFs in
`/sites/sendiansecurity-com/fonts/`, wired in `src/styles/global.css`. No new fonts.
