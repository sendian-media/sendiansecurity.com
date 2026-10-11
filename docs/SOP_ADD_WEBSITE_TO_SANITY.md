# SOP: Add a Website to the Sendian Sanity CMS

- **Version:** 1.1
- **Last updated:** 10 October 2026
- **Owner:** Sendian Media (Web Team)
- **Audience:** Developers connecting an Astro, Next.js, or similar website to a Sendian-managed Sanity project

---

## 1. Purpose

Use this procedure to connect a website to Sanity, define the matching Studio workspace and content schemas, generate static content pages, and rebuild the site when editors publish.

The Sendian Studio codebase is shared, but websites do **not** necessarily use the same Sanity project. Add each website with its approved project ID, dataset, workspace, and schema. The EL ABB Holding implementation in [Section 7](#7-el-abb-holding-reference-implementation) is the verified reference.

## 2. Architecture at a Glance

```text
Sanity Studio repository
  └─ workspace + schema for a website
       └─ publishes documents to that website's Sanity project/dataset
            └─ website build fetches published documents through @sanity/client
                 └─ Astro/Next creates static list and article pages

Sanity publish event
  └─ external webhook/publisher
       └─ GitHub repository_dispatch or hosting deploy hook
            └─ website repository deployment rebuilds the static site
```

Drafts stay in Sanity until an editor publishes them. The website client must use the `published` perspective unless preview functionality is deliberately implemented.

## 3. Prerequisites

- Node.js 22 or newer
- Access to the website repository and `/Users/farsin/sendiangroup/Sanity-studio`
- The approved Sanity **project ID**, **dataset**, and a read-only API token
- A decision on the website's content types and public routes
- Access to the website deployment and the external publish/rebuild configuration

### Secret handling

- Store tokens only in ignored local env files and deployment secrets.
- Never commit a read token, GitHub token, webhook credential, or `Authorization` header.
- Commit an `.env.example` with variable names and safe placeholders only.

## 4. Generic Implementation Procedure

### Step 1: Define the Studio workspace first

In the `Sanity-studio` repository, add the website before writing website queries.

1. Add a project entry in `config/projects.ts` with the approved project ID and dataset. Allow the project ID to be overridden by an environment variable when appropriate.
2. Create a workspace under `workspaces/` with a unique `name`, human-readable `title`, and unique `basePath`.
3. Create the website-specific schemas under `schemas/<website>/` and register them in that folder's `index.ts`.
4. Reuse shared schemas such as `blockContent` and `seo` where they match the website's needs.
5. Add a desk structure under `desk/` so editors see only the relevant document types.
6. Export the workspace from `workspaces/index.ts`; `sanity.config.ts` consumes that workspace array.
7. Validate and build the Studio:

```bash
cd /Users/farsin/sendiangroup/Sanity-studio
npx sanity schemas validate --workspace <workspace-name>
npx sanity build dist
```

**Result:** editors can open the workspace at its configured base path and create the content the website expects.

### Step 2: Add the website dependencies and environment variables

For Astro, install the Sanity client and a Portable Text renderer if article bodies use block content:

```bash
npm install @sanity/client @portabletext/astro
```

Create an ignored `.env` file in the website repository:

```bash
SANITY_PROJECT_ID=<approved-project-id>
SANITY_DATASET=production
SANITY_API_READ_TOKEN=sk...replace-with-read-token
```

Ensure `.env` is in `.gitignore`; commit only the same keys with placeholders to `.env.example`.

For Astro, create `src/lib/sanity.ts`:

```ts
import {createClient} from '@sanity/client'

const projectId = import.meta.env.SANITY_PROJECT_ID
const dataset = import.meta.env.SANITY_DATASET
const token = import.meta.env.SANITY_API_READ_TOKEN

if (!projectId || !dataset || !token) {
  throw new Error('SANITY_PROJECT_ID, SANITY_DATASET, and SANITY_API_READ_TOKEN must be set before building the site.')
}

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01',
  token,
  perspective: 'published',
  useCdn: false,
})
```

For Next.js, use `process.env` rather than `import.meta.env` and keep the client server-only when it uses a token.

### Step 3: Create a typed data layer that mirrors the schema

Create a small module such as `src/lib/news.ts` that owns the TypeScript types and GROQ projections. It should:

- query only the document types registered for that website;
- filter out documents without a slug;
- dereference images with `asset->url`;
- request only fields that the Studio schema defines;
- provide list, single-item, and related-item helpers where the routes need them;
- use GROQ parameters (`$slug`, `$category`, and `$limit`) rather than interpolating user input.

Do not reuse another site's queries unchanged: project IDs, schema fields, document types, translation fields, and routes may differ.

### Step 4: Generate and render static routes

For Astro:

1. Fetch the list at build time in the list page.
2. In `src/pages/<collection>/[slug].astro`, use `getStaticPaths()` to create one path per published slug.
3. Render rich-text bodies with `@portabletext/astro`.
4. Use schema-provided SEO fields as page metadata, with useful fallbacks.

For Next.js, implement the equivalent static generation with `generateStaticParams()` and a server-side data fetch.

### Step 5: Configure rebuilds after publishing

A static website does not update until it rebuilds. Choose one of these mechanisms:

- **Hosting deploy hook:** configure a Sanity webhook that POSTs to the hosting provider's deploy-hook URL.
- **GitHub repository dispatch:** configure a secure external publisher that sends `repository_dispatch` to the website repo using the event type expected by its workflow.

Keep webhook credentials outside both repositories. Test by publishing a non-production test article, confirming the webhook/publisher succeeds, waiting for the deployment, then checking the live route.

### Step 6: Validate before handover

- [ ] The Studio schema validates for the new workspace.
- [ ] Studio builds successfully.
- [ ] The website has no token in Git history or tracked files.
- [ ] `npm run build` succeeds with the required environment variables.
- [ ] The list page includes published Sanity documents.
- [ ] One static article route renders body content, image alt text, and SEO metadata.
- [ ] Publishing content triggers one website rebuild and the live site reflects it.

## 5. Studio Change Checklist

Record these changes in the pull request or implementation note for every website:

| Area | Required change |
|---|---|
| Project configuration | Add the project ID and dataset to `config/projects.ts`. |
| Workspace | Add a `workspaces/<website>.ts` configuration and export it through `workspaces/index.ts`. |
| Schema | Define only the document types and fields required by the website; register them in `schemas/<website>/index.ts`. |
| Editor experience | Add a matching desk structure under `desk/`. |
| Deployment validation | Add the workspace to the Studio schema-validation workflow. |
| Website data layer | Add a client, types, GROQ helpers, static routes, and renderers. |
| Rebuild automation | Configure and test the external publish-to-rebuild path. |

## 6. Common Problems

| Problem | Cause | Fix |
|---|---|---|
| Build says required `SANITY_*` values are missing | Local or deployment environment is incomplete | Add the exact variable names to the ignored `.env` and deployment secrets. |
| Queries return no content | Documents are still drafts, are in another project/dataset, or fail the GROQ filter | Publish the document and verify the selected workspace, project ID, dataset, and schema fields. |
| Image does not render | Query returned the image object or asset ID instead of the URL | Project `asset->url` and use the image `alt` field. |
| A field is always empty | The website query and Studio schema differ | Add/migrate the schema field, publish the Studio, then update the typed projection. |
| Static article page is missing | `getStaticPaths()` / `generateStaticParams()` did not receive a published slug | Verify the list query and publish a document with a slug. |
| Content publishes but the site remains unchanged | The webhook/publisher or deployment trigger failed | Check the external webhook delivery, dispatch event type, workflow run, and hosting deployment. |

## 7. EL ABB Holding Reference Implementation

This section documents the implementation in `/Users/farsin/sendiangroup/elabholding.com` and its companion Studio configuration in `/Users/farsin/sendiangroup/Sanity-studio`.

### 7.1 Connection details

| Setting | Value |
|---|---|
| Sanity project ID | `y6sgmngo` |
| Dataset | `production` |
| API version | `2025-01-01` |
| Studio workspace | `el-abb` |
| Studio base path | `/el-abb` |
| Content currently integrated | `newsArticle` only |
| Not currently Sanity-backed | Careers/job postings |

The website's `.env.example` lists the three required `SANITY_*` variables. The token value remains a secret and is intentionally not documented here.

### 7.2 Changes made in the EL ABB website

| File | Change and responsibility |
|---|---|
| `package.json` | Added `@sanity/client` and `@portabletext/astro`. |
| `.env.example` | Documents `SANITY_PROJECT_ID=y6sgmngo`, `SANITY_DATASET=production`, and the token variable name. |
| `src/lib/sanity.ts` | Validates all three environment variables; creates a published-only Sanity client with CDN disabled. |
| `src/lib/news.ts` | Defines `NewsArticle` types and shared GROQ projection; provides list, single-article, and same-category related-article queries. It maps `slug.current` to `id`, dereferences `featuredImage.asset->url`, and reads SEO and keyword fields. |
| `src/pages/news.astro` | Fetches published news at build time and passes it to the interactive news-list UI. |
| `src/pages/news/[slug].astro` | Uses `getStaticPaths()` to create a static page per published slug; renders Portable Text, SEO metadata, topic chips, image alt text, and related news. |
| `src/components/news/*` | Displays and filters the build-time article data. |
| `src/components/layout/Header.vue` and `src/components/layout/Footer.vue` | Add the public `/news` navigation entry. |
| `.github/workflows/rebuild-from-sanity.yml` | Responds to the `sanity-publish` repository-dispatch event (and manual runs), then pushes an empty commit to `main` to trigger the existing Hostinger deployment. |

The current website data projection contains these fields:

```text
slug.current, title, summary, publishedAt, category, body,
featuredImage.asset->url, featuredImage.alt,
primaryKeyword, secondaryKeywords, seo.title, seo.description
```

### 7.3 Changes made in the Sanity Studio project

| File | Change and responsibility |
|---|---|
| `config/projects.ts` | Added `PROJECTS.elAbb`, using `SANITY_STUDIO_ELABB_PROJECT_ID` when set and defaulting to `y6sgmngo`; the dataset is `production`. |
| `workspaces/el-abb.ts` | Added the `el-abb` workspace titled **EL ABB Holding**, mounted at `/el-abb`, with Structure and Vision tools. |
| `workspaces/index.ts` | Exports the EL ABB workspace so `sanity.config.ts` includes it. |
| `schemas/el-abb/index.ts` | Registers shared types plus the EL ABB `newsArticle` schema. |
| `schemas/el-abb/newsArticle.ts` | Defines the EL ABB news model described below. |
| `desk/el-abb.ts` | Adds an **EL ABB Holding** desk containing a single **News** document list. |
| `.github/workflows/deploy-studio.yml` | Validates both `sendian-group` and `el-abb` schemas before building and publishing the Studio deployment. |

The EL ABB `newsArticle` schema includes:

- Required: title, slug, summary (maximum 250 characters), article body, featured image, featured-image alt text, publication date, and category.
- Category values: **Group News**, **Company News**, **Projects & Developments**, **Partnerships**, and **Industry Insights**.
- Optional metadata: primary keyword, secondary keywords, shared SEO fields, and editor-only internal notes.
- Image hotspot support, a generated slug sourced from title, newest-first ordering, and a document preview showing category and date.

The keyword fields are deliberate: `primaryKeyword` is rendered as the highlighted topic chip and `secondaryKeywords` as supporting chips on the EL ABB article page. Do not remove or rename them without changing `src/lib/news.ts` and the article route.

### 7.4 Publish-to-rebuild configuration for EL ABB

The repository contains the receiver workflow but **does not** contain the Sanity webhook or publisher credentials. Maintain that external configuration separately.

The external publisher must trigger the `elabholding.com` repository workflow with:

```text
GitHub event: repository_dispatch
Event type:  sanity-publish
Receiver:    .github/workflows/rebuild-from-sanity.yml
```

After receiving the event, the workflow creates an empty `main` branch commit. The existing Hostinger deployment detects that push and rebuilds the site. Configure the publish filter to cover `newsArticle`; add another document type only after that type is implemented in both the Studio schema and website data layer.

### 7.5 Implementation history

| Repository | Commit | Change |
|---|---|---|
| EL ABB website | `e560d84` | Added Sanity-backed news. |
| EL ABB website | `429eaed` | Added the Sanity publish rebuild workflow. |
| EL ABB website | `0de155e` | Enhanced the news article layout. |
| EL ABB website | `f4d8fe9` | Fixed color news-image rendering. |
| Sanity Studio | `fc0a566` | Added the EL ABB Studio workspace. |
| Sanity Studio | `e182c9f` | Added EL ABB article keyword fields. |

## 8. Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.1 | 10 October 2026 | Sendian Media | Corrected the project-specific model and added the verified EL ABB website and Studio integration reference. |
| 1.0 | 04 October 2026 | Sendian Media | Initial version. |
