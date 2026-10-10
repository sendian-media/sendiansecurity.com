# sendiansecurity.com /services/ and /services/security-solutions/ — asset provenance

Source pages (fetched 2026-10-08, HTML + linked LiteSpeed CSS bundles as evidence only):
- https://sendiansecurity.com/services/
- https://sendiansecurity.com/services/security-solutions/

Authorization: user-owned site; reproduction approved by the site owner.
Local routes: `/services` (recreated in place) and `/services/<slug>` detail pages (`src/pages/services/[slug].astro`).
All assets live at `public/images/services/`; SHA-256 checksums in `asset-checksums.txt`.

## Services index card backgrounds (set via Elementor external CSS `elementor-1120` rules)

| Local path                        | Source URL                                                | Dimensions   |
| --------------------------------- | --------------------------------------------------------- | ------------ |
| `security-solutions.png`          | `wp-content/uploads/2026/02/6.png`                        | 1920×1080    |
| `infrastructure-solutions.png`    | `wp-content/uploads/2026/02/9.png`                        | 1920×1080    |
| `parking-systems.jpeg`            | `wp-content/uploads/2026/02/video-service.jpeg`           | 1408×768     |
| `communication-solutions.png`     | `wp-content/uploads/2026/02/8.png`                        | 1920×1080    |
| `automation-solutions.jpeg`       | `wp-content/uploads/2026/02/ip-camera.jpeg`               | 1408×768     |
| `audio-visual-solutions.jpeg`     | `wp-content/uploads/2026/02/inspection-service.jpeg`      | 1408×768     |
| `other-solutions.png`             | `wp-content/uploads/2026/02/5-1.png`                      | 1920×1080    |
| `services-banner.jpg`             | `wp-content/uploads/2025/10/services-single05.jpg`        | 1400×650     |

Card→image mapping derived from Elementor container `data-id` order in the source DOM cross-referenced with the page CSS bundle (element IDs `d634c84`, `96277f6`, `3d15038`, `f4a6493`, `ac0cde4`, `f556944`, `4dc9e8c`).

Earlier detail-page assets already present in this directory (downloaded in a prior pass) are retained: `detail-*.jpeg/png/webp`, `av.jpeg`, `cctv.jpeg`, `networking.jpeg`, `parking.jpeg`, `communication.jpeg`.

## Security-solutions detail page images (accordion contents)

| Local path                    | Source URL                                     | Dimensions |
| ----------------------------- | ---------------------------------------------- | ---------- |
| `detail-siss-service.jpeg`    | `wp-content/uploads/2026/02/siss-service.jpeg` | 1408×768   |
| `detail-inspection.jpeg`      | `wp-content/uploads/2026/02/inspection-service.jpeg` | 1408×768 |
| `detail-ip-camera.jpeg`       | `wp-content/uploads/2026/02/ip-camera.jpeg`    | 1408×768   |
| `detail-video-service.jpeg`   | `wp-content/uploads/2026/02/video-service1.jpeg` | 1408×768 |
| `detail-data-center.jpeg`     | `wp-content/uploads/2026/02/data-center.jpeg`  | 1408×768   |
| `detail-access-control.jpeg`  | `wp-content/uploads/2026/02/accesscontroll.jpeg` | 1408×768 |
| `detail-cyber-security.jpeg`  | `wp-content/uploads/2026/02/cyber-security.jpeg` | 1408×768 |

## Remaining six detail pages (cloned 2026-10-08)

Sources: `/services/infrastructure-solutions/`, `/services/parking-systems/`, `/services/automation-solutions/`, `/services/communication-solutions/`, `/services/audio-visual-solutions/`, `/services/other-solutions/`

Accordion content images (all byte-identical to the live originals; previously downloaded):

| Local path | Source file | Used on |
| --- | --- | --- |
| `detail-nas.jpeg` | `2026/02/nas.jpeg` | Infrastructure — Structured Cabling items |
| `detail-datacenter.jpeg` | `2026/02/datacenter.jpeg` | Infrastructure — Data Center items |
| `detail-nas-1.jpeg` | `2026/02/Nas-1.jpeg` | Infrastructure — Storage Solution items |
| `detail-parking-2.jpeg` | `2026/02/parking-2.jpeg` | Parking — Parking Management items |
| `detail-parking.jpeg` | `2026/02/parking.jpeg` | Parking — Parking Guidance items |
| `detail-lpr-camera.jpeg` | `2026/02/video-service.jpeg` (86 KB) | Parking — LPR Solutions items |
| `detail-automation.png` | `2026/02/automation.png` | Automation items |
| `detail-unified.png` | `2026/02/unified.png` | Communication — Unified Communication |
| `detail-network.png` | `2026/02/network.png` | Communication — Enterprise Network |
| `detail-speakers.jpeg` | `2026/02/speakers.jpeg` | Audio-Visual — Audio Visual Systems |
| `detail-wall-video.jpeg` | `2026/02/wall-video.jpeg` | Audio-Visual — Video Solutions |
| `detail-others.jpeg` | `2026/02/others.jpeg` | Other — AMC |
| `detail-other-2.jpeg` | `2026/02/other-2.jpeg` | Other — Intercom System |
| `detail-others-3.png` | `2026/02/others-3.png` | Other — Smart WiFi |
| `detail-others-4.webp` | `2026/02/others-4.webp` | Other — Cloud Solutions |

### Substitutions & disclosures (six detail pages)

- Items whose source content contains no image reuse their category's representative image (source items beyond the first in each accordion have no images).
- The source's second intro paragraph ("Our security portfolio spans both physical and digital security infrastructure…") is duplicated across several source pages — reproduced as-is.
- Source quirk kept: "…maintaining pedestrian flowideal for embassies…" (missing space) appears in the security page's Bollard text.
- Category titles render 48px Wix Madefor Display with the source's `pgs-text-gradient` navy→blue gradient; source entrance animations (heading fadeInUp, category block fadeInUp d200/d300/d400) replicated.

## Substitutions & disclosures

- Services hero: source banner `services-single05.jpg` (the source's `pageheader-bgtype--image` for this page) with a navy overlay approximating the theme overlay — confirmed against the live page screenshot.
- Source quirks reproduced as-is (source authoring defects, kept for content fidelity): ANPR Systems item duplicates the Video Management System text and image; Biometric Access Systems content contains an image-alt-style description rather than a normal sentence; source card images for items 2–5 of the Access accordion are absent on the live page, the local page reuses `detail-access-control.jpeg` for visual completeness.
- Home-page buttons/animations (gradient pills, wobble hover, fade-up, counters) propagate to these pages through shared components/global styles.
- Source entrance animations on this page: heading fadeInUp d100, card containers fadeInUp alternating d200/d400, counters 0→value over 2000ms — replicated with scoped classes/`IntersectionObserver`, disabled under reduced motion.
