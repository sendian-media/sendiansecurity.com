# Sendian Security homepage recreation evidence

- **Authorized source:** `https://sendiansecurity.com/`
- **Approved local route:** `/`
- **Scope:** homepage copy, branding, locally stored authorized assets, section-entry motion, hero animation, statistics counters, and an enhanced services carousel.
- **Local-only constraint:** no deployment, tunnels, uploads, form submission, analytics, or outbound social/WhatsApp/email activation from the recreated homepage.

## Source observations

The reference was inspected at 1440px and 375px wide. It has a sticky navigation header; a three-image hero with a dark overlay, staged copy/HUD entrance, three-second slide rotation and Ken Burns zoom; About, Services, statistics, foundations, portfolio, and news sections; and fade-up section/card entrances.

The reference services section uses a finite autoplay carousel. The approved local enhancement changes this to indefinitely wrapping autoplay with visible previous/next arrow controls, pause on hover or focus, keyboard-operable native buttons, and reduced-motion suppression of automatic movement.

## Authorized asset mapping

All runtime homepage assets are local under `public/sites/sendiansecurity-com/`.

| Local directory | Authorized source media |
| --- | --- |
| `images/hero-slide-*.webp` | Homepage hero slideshow (`3.webp`, `5.webp`, `4.webp`) |
| `home/about/about-siss.png` | `SISS-About-us-image-1` |
| `home/services/*` | CCTV, infrastructure/data centre, parking/mobility, and communication/network service cards |
| `home/trust/*` | MOI, ISO, Cisco, and operational-capability marks |
| `home/projects/*` | Eight portfolio images shown on the source homepage |
| `home/news/*` | Qatar Finland School, Kreeq Sports Club, and Cisco news images |

DM Sans (400, 500, 700) and Wix Madefor Display (400–800) are stored locally in `public/sites/sendiansecurity-com/fonts/` for the local-only preview. They were retrieved from the fonts’ Google Fonts distribution URLs under the user’s authorization to reuse source assets.

## Intentional local substitutions

- Social, email, and WhatsApp controls are non-navigating labeled stubs when the homepage uses `localOnly` mode.
- Source external URLs are represented only by existing internal routes where included in this working copy.
- No production JavaScript, analytics, form, chat, or third-party embed was copied or activated.
