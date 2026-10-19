# SEO quick wins implementation plan

## Context
The completed audit found strong branded discovery but poor visibility for SISS’s existing non-brand service pages. The requested scope is deliberately limited to current pages: improve keyword-to-page targeting, add legacy URL redirects, apply the proposed metadata, and extend structured data. No new landing pages will be created.

## Approach
- Reuse the central SEO head and the existing page/data sources; do not add an SEO package.
- Add a Hostinger/LiteSpeed `.htaccess` configuration for the legacy URLs and the `www` → apex redirect.
- Replace generic or overlong metadata with the approved, page-specific keyword copy for the existing core and service pages in scope; do not create pages or alter CMS article metadata.
- Generate Organization/WebSite, BreadcrumbList, Service, and BlogPosting JSON-LD only from visible, verified source data.

## Files to modify
- `public/.htaccess` — Hostinger/LiteSpeed rules for the five legacy-path 301s and `www` → apex canonicalization. Verify Astro copies this dotfile to `dist/.htaccess`.
- `src/components/seo/SeoHead.astro` — extend the existing schema output and continue to own all head rendering.
- `src/layouts/BaseLayout.astro` — type and forward a page-schema prop.
- `src/data/site.ts` — consolidate only verified Organization fields and official social URLs.
- `src/components/sites/sendian-contact/ContactPage.astro` — reuse the confirmed `site.ts` Luqta address so the visible contact page, footer, and Organization schema share one NAP.
- `src/pages/index.astro`, `src/pages/about.astro`, `src/pages/services.astro`, `src/components/sites/sendian-projects/ProjectIndex.astro`, and `src/pages/contact.astro` — replace the literal titles/descriptions with the approved existing-page metadata and add breadcrumb input where visually present.
- `src/data/service-details.ts` and `src/pages/services/[slug].astro` — store concise service SEO fields, consume them, fix the visible “Securty” typo, and emit one matching Service object per existing service page.
- `src/pages/news/[slug].astro` — emit BlogPosting data from the existing Sanity article fields without changing the current CMS article metadata.
- Existing legal/vendor page templates only if they need breadcrumb parity; they are not keyword targets.

## Reuse
- `src/components/seo/SeoHead.astro` centralizes canonical, Open Graph, Twitter, robots, Organization/WebSite, and BreadcrumbList output.
- `src/layouts/BaseLayout.astro` passes shared SEO props into `SeoHead`.
- `src/data/service-details.ts` already supplies every static service route’s title, visible summary, categories, and slug; add a small nested `seo` field rather than a second registry.
- `src/pages/news/[slug].astro`, `src/lib/sanity/news.ts`, and `src/lib/sanity/types.ts` already provide article title, summary, SEO overrides, dates, and images.
- `src/data/site.ts` publishes the name, SISS short name, phone, email, and address currently shown on site.

## Steps
- [x] Add `public/.htaccess` with five exact, one-hop legacy-path 301s and one `www` → apex 301, preserving paths and query strings. Confirm `dist/.htaccess` is emitted by the static build and deploy it to the Hostinger web root.
- [x] Apply the audit’s proposed title and description to the five existing core pages and seven existing service routes. Keep `/news`, legal, vendor, and utility metadata unchanged unless separately approved.
- [x] Add `seo: { title, description }` to each `ServiceDetail` and consume it in the existing dynamic service route, so concise metadata does not overwrite visible body content.
- [x] Preserve the existing Organization/WebSite and BreadcrumbList behavior, enrich Organization with the confirmed SISS alternate name, Luqta address, and site-linked official social profiles; add BreadcrumbList to existing pages that visibly show breadcrumbs; and pass page-specific Service/BlogPosting JSON-LD through the shared head.
- [x] Keep existing Sanity article metadata unchanged in this repository; emit BlogPosting from the current title, summary/SEO description, date, image, and publisher. Do not invent authors or modified dates.
- [x] Correct the existing service-page “Securty Services” typo as part of the on-page quick wins.
- [x] Run type/build checks; inspect generated output and, after deploy, verify redirects, both hosts, rendered metadata, and schema validators.

## Verification
- Run `npm run check` and `npm run build`.
- Crawl all 21 sitemap URLs in `dist`: each indexable page has one title, description, canonical, and an appropriate schema object; noindex routes emit no schema.
- Assert `dist/.htaccess` exists after the build; after deployment, assert every legacy mapping below returns a single-hop `301` to its specified current path.
- Confirm `https://www.sendiansecurity.com/*` redirects to the matching apex URL while retaining path/query.
- Validate Organization/Service/BlogPosting/BreadcrumbList JSON-LD against the deployed visible content with Schema Markup Validator and Google Rich Results Test.

## Decisions resolved
- **Redirect platform:** Hostinger hPanel/LiteSpeed. Commit a `public/.htaccess` so Astro copies its permanent redirect and host-canonicalization rules into `dist/`; deploy `dist` to the web root and verify Hostinger applies the file.
- **Claims:** retain only the verified “MOI-approved” wording. Do not add “MOI-SSD certified” to metadata or structured data.
- **Address:** use the `src/data/site.ts` Luqta address as the public source of truth, and update hard-coded contact-page addresses to match it.

## Legacy redirect mapping

| Legacy path | 301 target |
| --- | --- |
| `/security/ai-security-solutions-qatar/` | `/news/ai-security-solutions-qatar` |
| `/security/ongoing-project-cctv-surveillance-system-installation-at-qatar-finland-international-school/` | `/news/ongoing-project-cctv-surveillance-system-installation-at-qatar-finland-international-school` |
| `/security/ongoing-project-moi-regulated-cctv-system-deployment-at-kreeq-sports-club-al-wakra/` | `/news/ongoing-project-moi-regulated-cctv-system-deployment-at-kreeq-sports-club-al-wakra` |
| `/portfolios/` | `/projects` |
| `/portfolio/towers/` | `/projects` |

## Metadata mapping

| Existing route | Primary keyword | Planned title |
| --- | --- | --- |
| `/` | security systems Qatar | `SISS Qatar \| CCTV, Access Control & Security Systems` |
| `/about` | Qatar security systems integrator | `About SISS \| Qatar Security Systems Integrator` |
| `/services` | security systems and ELV solutions Qatar | `Security Systems & ELV Solutions in Qatar \| SISS` |
| `/services/security-solutions` | CCTV and access control systems Qatar | `CCTV, Access Control & Security Systems Qatar \| SISS` |
| `/services/infrastructure-solutions` | ELV and data infrastructure Qatar | `ELV & Data Infrastructure Solutions Qatar \| SISS` |
| `/services/parking-systems` | smart parking and ANPR systems Qatar | `Smart Parking & ANPR Systems Qatar \| SISS` |
| `/services/automation-solutions` | building and home automation Qatar | `Building & Home Automation Qatar \| SISS` |
| `/services/communication-solutions` | network and communication solutions Qatar | `Network & Communication Solutions Qatar \| SISS` |
| `/services/audio-visual-solutions` | audio-visual and video wall solutions Qatar | `Audio-Visual & Video Wall Solutions Qatar \| SISS` |
| `/services/other-solutions` | security system maintenance and AMC Qatar | `Security System Maintenance & AMC Qatar \| SISS` |
| `/projects` | security system projects Qatar | `Security System Projects in Qatar \| SISS` |
| `/contact` | security systems company Doha | `Contact SISS \| Security Systems Company in Doha` |

Use the matching descriptions already approved in `docs/seo-audit-2026-10-19.md`; write them to the existing source/data owner listed above. No new page will be added.

## Structured-data implementation
- Keep the existing homepage `Organization` and `WebSite` objects; add only `alternateName: "SISS"`, the confirmed `site.ts` Luqta address, and the three official social URLs from the existing footer as `sameAs`.
- Extend `SeoHead`/`BaseLayout` with a typed array of page-specific schema objects. The shared component remains responsible for serializing JSON-LD and must continue to emit nothing on `noindex` routes.
- Pass `BreadcrumbList` to existing indexable templates where the page already visibly renders the same breadcrumb trail; use the same `{ name, path }` convention already used by news and services.
- On each existing service-detail route, emit one `Service` with the visible service title, visible introductory description, canonical URL, `provider` set to the shared organization, and `areaServed: Qatar`. No ratings, offers, prices, or certification claims will be invented.
- On each existing news route, emit one `BlogPosting` with its visible headline, current SEO description or summary, canonical URL, featured/SEO image, raw `publishedAt`, and shared publisher. Do not add an author or `dateModified` without CMS data.

## Remaining content decision
- Existing news metadata is sourced from Sanity. This repository can render improved article schema but cannot safely edit those CMS records. Leave existing article titles/descriptions untouched in this implementation except where content is changed in Sanity separately.
