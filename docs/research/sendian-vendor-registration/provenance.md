# Sendian vendor-registration recreation

## Scope and authorization

- **Source:** `https://sendiansecurity.com/vendor-registration/`
- **Local route:** `/vendor-registration`
- **Authorization:** User authorized reproduction of the source page's visible copy, branding, assets, and interactions.
- **Boundary:** Local-only: no deployment, uploads, analytics, external submission, Google Maps, or external service activation.
- **Owner:** `src/components/sites/sendian-vendor-registration/VendorRegistrationPage.astro` and `src/pages/vendor-registration.astro`.

## Evidence

- `docs/design-references/sendiansecurity/vendor-registration-desktop-1440x900-full.png` — source at 1440×900, default state.
- `docs/design-references/sendiansecurity/vendor-registration-mobile-375x812-full.png` — source at 375×812, default state.
- `docs/design-references/sendiansecurity/vendor-registration-mobile-focus.png` — source at 375×812 after keyboard traversal.

## Authorized assets

| Source URL | Local path | Type / dimensions | Use |
| --- | --- | --- | --- |
| `https://sendiansecurity.com/wp-content/uploads/2025/10/services-single05.jpg` | `public/sites/sendian-vendor-registration/services-single05.jpg` | JPEG, 1400×650 | Hero background |

The hero is an authorized copy of the existing matching local project asset, placed in the vendor-specific directory.

## Local substitutions

- The source Contact Form 7 form is reproduced with native controls, but the submit button is disabled and labelled by a local-preview notice.
- The source Google Map embed is omitted.
- The project’s local shared header/footer and WhatsApp representation are retained; no source scripts, tracking, remote submission, or external controls are loaded.
