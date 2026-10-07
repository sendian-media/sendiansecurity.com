# Sendian news-page asset provenance

## Authorization and scope

- Source: `https://sendiansecurity.com/news/`
- Authorization: user confirmed site ownership/permission in this session (same authorization basis as the contact page recreation).
- Destination: new local `/news` route.
- Runtime boundary: local-only page shell; article cards link to the original source articles (out of scope for cloning) — disclosed as external links, opening in the same tab.

## Downloaded assets

| Source URL | Local path | Type and dimensions | SHA-256 | Use |
| --- | --- | --- | --- | --- |
| `https://sendiansecurity.com/wp-content/uploads/2026/02/4-2-1024x576.png` | `public/sites/sendian-news/images/news-school-cctv.png` | PNG, 1024×576 | `93fa116d22e517deea3b722cc13d266733837f13c1b758918596909ae59bab15` | School CCTV article thumbnail |
| `https://sendiansecurity.com/wp-content/uploads/2026/02/2-1-1024x576.png` | `public/sites/sendian-news/images/news-kreeq-cctv.png` | PNG, 1024×576 | `fb11d0ebda837124852c275cc27b1632c90562089d47b8f4b1b3c1e4593c1600` | Kreeq Sports Club article thumbnail |
| `https://sendiansecurity.com/wp-content/uploads/2025/09/cisco.jpeg` | `public/sites/sendian-news/images/news-cisco-partner.jpeg` | JPEG, 1080×720 | `b5272ea5cad2c32896b9f0660d8e743b5a56492b8cd4fd14f0a1dc832d374c06` | Cisco partner article thumbnail |
| `https://sendiansecurity.com/wp-content/uploads/2026/02/cctv-2.png` | `public/sites/sendian-news/images/news-ai-security.png` | PNG, 1344×768 | `4ca9dc0332e20691991742a1ee5535d55ba03f2c482c703c5147963836192926` | AI security article thumbnail |
| `https://sendiansecurity.com/wp-content/uploads/2026/02/5-1024x576.png` | `public/sites/sendian-news/images/news-carsafe-partner.png` | PNG, 1024×576 | `ec14d64114b71cc8f0c71f2986408a75b557ffea7677c44afc3077ab1decbe82` | Carsafe partner article thumbnail |

## Notes and substitutions

- The `cctv-2-1024x576.png` derivative returned an HTML error page, so the full-size original `cctv-2.png` was used instead.
- Hero reuses the shared local `/images/home/hero.webp` banner pattern (same as Services/Contact) rather than a news-specific banner; the source hero background was not captured.
- Source article excerpts were lightly cleaned of line-break artifacts introduced by the WordPress markup; wording preserved.
- Article detail pages were not cloned — only the listing page was in scope.
- No pagination was present on the source listing.
