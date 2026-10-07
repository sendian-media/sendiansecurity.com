# Sendian contact-page asset provenance

## Authorization and scope

- Source: `https://sendiansecurity.com/contact/`
- Authorization: user confirmed permission in this session.
- Destination: existing local `/contact` route.
- Runtime boundary: local-only; no remote forms, maps, analytics, social links, chat, or other external services.

## Downloaded assets

| Source URL | Local path | Type and dimensions | SHA-256 | Use |
| --- | --- | --- | --- | --- |
| `https://sendiansecurity.com/wp-content/uploads/2026/02/Siss.crop_.png` | `public/sites/sendian-contact/images/logo-header.png` | PNG, 1188×668 | `4264cb1f2695b4b074cfc241e18cbbdc9bd23aa86da87f7913a3a4e67e23c6b9` | Contact-only header |
| `https://sendiansecurity.com/wp-content/uploads/2026/02/Siss.crop_-768x432.png` | `public/sites/sendian-contact/images/logo-footer.png` | PNG, 768×432 | `50f6bea3de56d564c579c04dc5d3f2c00c0afa2040397206f3cd7a753e192b1b` | Contact-only footer |

## Explicit substitutions and omissions

- The source Google Map iframe is replaced with a local location panel; no map tiles or iframe load at runtime.
- Source web fonts are replaced by local system-font fallbacks because local font files and license evidence were not supplied.
- Icon-library marks are replaced with text/semantic UI; no icon-library CSS is loaded.
- Source contact-form submission, social links, email links, WhatsApp, analytics, and back-to-top widget are omitted to preserve the local-only boundary.
- The large source banner is omitted because the source inspection could not establish whether it visibly renders.
