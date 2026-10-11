# Sendian Security legal pages — authorized reference record

## Scope and authorization

- **Source:** `https://sendiansecurity.com/terms-and-conditions/` and `https://sendiansecurity.com/privacy-policy-2/`
- **Local routes:** `/terms-and-conditions/` and `/privacy-policy-2/`
- **Authorization:** User authorized reproduction of each page's copy, branding, and assets.
- **Boundary:** Local-only. No deployment, uploads, external services, analytics, form submission, or remote navigation were activated.
- **Owner:** `src/components/sites/sendiansecurity-com/LegalPage.astro` with the two route files in `src/pages/`.

## Evidence captured

Source reference captures are in `docs/design-references/sendiansecurity/`:

- `terms-desktop-1440x900-top.png` — 1440×900, top of page, default state.
- `terms-tablet-768x900-full.png` — 768×900, full page, default state.
- `terms-mobile-375x812-full.png` — 375×812, full page, default state.
- `privacy-desktop-1440x900-full.png` — 1440×900, full page, default state.
- `privacy-tablet-768x900-full.png` — 768×900, full page, default state.
- `privacy-mobile-375x812-full.png` — 375×812, full page, default state.

Observed page structure:

- Existing shared header and footer; a hero image with a dark navy overlay, title, and breadcrumb.
- Terms content is a single main column containing nine sections.
- Privacy content is a main column plus Search, Recent Posts, Recent Comments, and Categories sidebar; it stacks below the content at narrower widths.
- The source shows a responsive menu and a floating WhatsApp control. Local routes preserve this project's existing shared header/footer/WhatsApp implementation rather than importing production scripts.

## Asset provenance

| Local path | Authorized source | Type / dimensions | Use |
| --- | --- | --- | --- |
| `public/sites/sendiansecurity-com/legal/services-single05.jpg` | `https://sendiansecurity.com/wp-content/uploads/2025/10/services-single05.jpg` | JPEG, 1400×650 | Legal-page hero background |
| `public/sites/sendiansecurity-com/news/qatar-finland-cctv-installation.png` | Existing authorized Sendian Security local news asset | Local image | Privacy recent-post reference |
| `public/sites/sendiansecurity-com/news/kreeq-cctv-installation.png` | Existing authorized Sendian Security local news asset | Local image | Privacy recent-post reference |
| `public/sites/sendiansecurity-com/news/cisco-registered-partner.jpeg` | Existing authorized Sendian Security local news asset | Local image | Privacy recent-post reference |

The hero image was copied from the project's existing matching local image into the source-specific asset directory. The project’s existing header/footer logos and fonts are reused; no production scripts, analytics, or third-party controls were copied.

## Intentional local substitutions

- The source sidebar search is a visible disabled local-preview stub to avoid activating a search service.
- Recent-post entries are informational only; they do not navigate to any external page.
- Existing shared navigation and footer remain unchanged, including their legacy placeholder legal links, to preserve unrelated routes and shared components.
