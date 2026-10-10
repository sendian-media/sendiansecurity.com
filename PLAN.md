# Technical SEO Improvements Plan

## Context
The project is a static Astro 7 site with `https://sendiansecurity.com` selected as the sole canonical domain and a no-trailing-slash URL policy. It already ships a sitemap and permissive robots file, and the user wants page-specific SEO across all public routes while retaining sitemap exclusion for the noindexed legal pages. This plan scopes verified source-level improvements for crawlability, metadata, structured data, and performance-friendly delivery.

## Approach
- Extend the existing shared `SeoHead` component rather than adding a package or duplicating head tags in routes.
- Continue deriving canonical URLs from the configured production origin; standardize absolute social image URLs there and preserve `noindex,follow` for utility pages.
- Emit richer Organization and WebSite JSON-LD only on the indexable home page from already published data, and generate service BreadcrumbList markup from the same route title and visible breadcrumb path.
- Preserve the validated static sitemap configuration—no `astro.config.mjs` change is required—and make the approved AI-crawler allow policy explicit in `robots.txt`.
- Fix duplicated document landmarks and constrain performance work to measured follow-up, because existing images have dimensions and the only detected global JavaScript is the required header menu behavior.

## Files to modify
- `src/components/seo/SeoHead.astro`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/services.astro`
- `src/pages/services/[slug].astro`
- `src/components/sites/sendian-projects/ProjectIndex.astro`
- `src/components/sites/sendian-news/NewsPage.astro`
- `src/pages/news.astro`
- `src/pages/contact.astro`
- `public/robots.txt`

## Reuse
- `astro.config.mjs` already provides `site`, `trailingSlash: 'never'`, and `@astrojs/sitemap` v3.7.4.
- `src/components/seo/SeoHead.astro` already centralizes title, description, canonical, Open Graph basics, noindex, and JSON-LD, so it is the single head-generation extension point.
- `src/data/site.ts` publishes the organization name, email, telephone, and Doha address used by the header, footer, and home page.
- `src/data/service-details.ts` provides dynamic service title, description, and visual content for every static service detail route.
- `src/components/sites/sendian-projects/ProjectIndex.astro` and `src/components/sites/sendian-news/NewsPage.astro` own their listing-page content.

## Steps
- [x] Map the shared document head and route-level metadata conventions.
- [x] Inspect the base configuration, robots rules, sitemap integration, and available build output.
- [x] Identify all public route templates, their content sources, and page-specific schema candidates.
- [x] Compare the available generated head, sitemap, and robots output against the configured canonical policy.
- [x] Inspect images and client-side behavior for source-level CWV risks.
- [x] Confirm the AI-crawler policy and define implementation changes and verification steps.
- [x] Implement and validate the approved SEO changes after plan approval.

## Verification
- Run `npm run check` and `npm run build`.
- Inspect generated home, about, services index/detail, projects, news, contact, and noindex utility HTML for one `<main>`, expected title/description/canonical, absolute OG/Twitter image URLs, and the correct robots directive.
- Inspect `dist/sitemap-index.xml`, `dist/sitemap-0.xml`, and `dist/robots.txt`: only canonical indexable routes are listed; privacy, terms, thank-you, and 404 remain excluded; sitemap is absolute and robots permits Google plus the approved AI crawlers.
- Validate homepage Organization/WebSite and a service page BreadcrumbList using Schema Markup Validator/Rich Results Test; confirm no schema is emitted on noindex utility pages.
- Record mobile and desktop PageSpeed Insights/CrUX field data when available, then use Lighthouse only to diagnose any measured LCP or INP issue. Do not treat current source inspection as field-performance proof.

## Decisions recorded
- Canonical and indexable production origin: `https://sendiansecurity.com` (apex, no `www`).
- Organization schema may only use facts already published on the current site.
- Apply page-specific SEO to every public page.
- Keep `/privacy` and `/terms` excluded from the sitemap; they remain explicitly `noindex`.

## Findings so far
- `public/robots.txt` allows crawling and references the correct absolute sitemap URL.
- `dist/` already contains `robots.txt`, `sitemap-index.xml`, and `sitemap-0.xml`.
- `SeoHead.astro` emits canonical URLs and basic OG tags, but lacks an OG image, Twitter title/description/image, and explicit `robots` index directives for indexable pages.
- Organization JSON-LD is emitted globally but currently includes only `name` and `url`; its public contact/logo evidence and page applicability still need review.
- `BaseLayout.astro` emits the outer document `<main>`, while `src/pages/services/[slug].astro` adds a nested `<main>`; this must be corrected as part of semantic-template cleanup rather than SEO tags alone.
- The existing build verifies self-referencing canonical URLs, language, titles, descriptions, and `noindex,follow` on utility pages; the sitemap contains exactly the indexable public route set and excludes privacy, terms, and the thank-you page.
- Every public template passes `title` and `description` to `BaseLayout`; dynamic service descriptions are sourced from the visible introductory content.
- The public header logo and `src/data/site.ts` contact/address facts support accurate Organization JSON-LD. Footer social links are generic platform home pages, so they cannot safely be represented as organization `sameAs` values.
- The home hero is a 144 KB, 1920×1080 CSS background (`/images/home/hero.webp`), so it cannot use native image dimensions, loading priority, or Astro image transforms without a template change. Most content images already supply dimensions, alt text, async decoding, and lazy loading. The header's interaction script is shipped on every page, and the projects/dialog and statistics scripts are route-specific.
- `src/pages/about.astro`, `src/pages/services.astro`, `src/pages/services/[slug].astro`, and `src/components/sites/sendian-news/NewsPage.astro` each add a nested `<main>` inside the layout's document `<main>`; use a neutral wrapper or section in those files instead.
- The existing `/news` content only links to external article URLs, and projects are modal details without canonical detail routes; do not fabricate `Article` or item-level schema for either listing.
- Several SEO-adjacent source files are already user-modified. Implementation must preserve those in-progress changes and make only narrow, additive edits.

## Implementation steps
- [x] Enhance `SeoHead.astro` and its `BaseLayout` contract: add an optional social-image path and breadcrumb input; resolve all URLs against the same production origin as the canonical; output `og:image`, `og:image:alt`, `twitter:card=summary_large_image`, and matching Twitter title/description/image tags. Continue to emit `noindex,follow` only where requested.
- [x] Replace the sparse global JSON-LD with conditional, indexable-page schema. On `/`, emit one accurate `Organization` (published name, header-logo URL, published telephone/email, Doha postal address; no placeholder social `sameAs`) plus `WebSite`. When breadcrumb input is provided, emit `BreadcrumbList` URLs from the canonical origin. Emit no JSON-LD on noindex pages.
- [x] Pass each public template's existing representative image to `BaseLayout`: home hero, about image, services banner, project banner, news banner, contact banner, and the service-detail banner. Pass Home → Services → current-service breadcrumb items from `src/pages/services/[slug].astro`; use the existing `service.heroTitle` and route pathname, not a duplicated text constant.
- [x] Change only inner landmark wrappers in about, services, service detail, and news listing content so `BaseLayout` remains the sole document `<main>`; retain the existing classes and layout styling.
- [x] Update `public/robots.txt` to retain the universal allow and absolute sitemap declaration while documenting explicit `Allow: /` groups for the approved AI agents (GPTBot, ClaudeBot, and PerplexityBot). Do not block `/_astro/`, public assets, or indexable routes.
- [x] Leave `astro.config.mjs` and sitemap filtering unchanged: current generated XML correctly uses the apex no-slash canonical format and omits `/privacy`, `/terms`, and `/contact/thanks`.
- [x] After the build-based verification, create a baseline performance report rather than speculative optimization. If field/lab evidence identifies the hero as LCP, follow up separately with an HTML `<img>`/responsive-image implementation and intentional preloading; otherwise preserve the current lightweight static delivery.
