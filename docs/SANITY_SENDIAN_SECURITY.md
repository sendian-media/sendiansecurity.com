# Sendian Integrated Security Services — Sanity integration

## Connection

| Setting | Value |
| --- | --- |
| Sanity project ID | `f7kbpxr2` |
| Dataset | `production` |
| Studio workspace | `oq0gxzzm2` |
| Studio URL path | `/oq0gxzzm2` |
| Content type | `newsArticle` |
| Public routes | `/news`, `/news/<slug>` |

The shared Studio configuration is in `/Users/farsin/sendiangroup/Sanity-studio`. Its `sendian-security` workspace uses `SANITY_STUDIO_SENDIAN_SECURITY_PROJECT_ID` when supplied and otherwise connects to the approved project ID above.

## Content model

The workspace provides security-specific news categories: Security Solutions, Technology, Projects & Deployments, Partnerships, and Company News. Every article requires a title, slug, summary, Portable Text body, featured image with alternative text, publication date, and category. Optional metadata consists of primary and secondary keywords, shared SEO fields, and internal notes.

The Astro site queries only published `newsArticle` documents with a slug. Images are dereferenced to their asset URL, article routes are generated statically, and article bodies are rendered with `@portabletext/astro`.

## Local-news import

`/Users/farsin/sendiangroup/Sanity-studio/scripts/import-sendian-security-news.mjs` imports the five local news cards and their image assets. It is idempotent: running it again updates the same document IDs and reuses existing featured-image assets.

```bash
cd /Users/farsin/sendiangroup/Sanity-studio
SANITY_DEVELOPER_API_KEY=<write-token> npm run import:security-news
SANITY_DEVELOPER_API_KEY=<write-token> npm run import:security-news:write
```

The first command is a dry run. The second uploads missing assets and publishes the five article documents to `f7kbpxr2/production`.

The authorized full CCTV article import is maintained separately because it includes its own source body and two article images:

```bash
SANITY_DEVELOPER_API_KEY=<write-token> npm run import:security-cctv-full
```

Its source evidence and authorized-asset provenance are recorded in `docs/research/sendiansecurity/cctv-source-article.md`.

## Deployment configuration

Set these values in the website's local `.env` and in the deployment environment:

```text
SANITY_PROJECT_ID=f7kbpxr2
SANITY_DATASET=production
SANITY_API_READ_TOKEN=<read-only-token>
```

`SANITY_API_READ_TOKEN` must be stored as the `SANITY_API_READ_TOKEN` GitHub Actions secret before the quality workflow can build CMS-backed pages. It must never be committed.

Configure the external Sanity publish publisher/webhook separately to send a GitHub `repository_dispatch` event with type `sanity-publish` to this repository. The receiver is `.github/workflows/rebuild-from-sanity.yml`; it creates an empty `main` commit so the existing hosting deployment rebuilds the static site. Keep the publisher credential outside both repositories.

The shared Studio deployment is source-configured like EL ABB: its CI validates `oq0gxzzm2`, builds the Studio, and publishes `dist` to the existing `deploy` branch after a push to `main`. It is not a separate Sanity-hosted Studio deployment for `f7kbpxr2`; `sanity.cli.ts` intentionally keeps the existing shared-Studio target. No deployment has been triggered because these changes have not been committed or pushed.

## Verification performed

- `npx sanity schemas validate --workspace oq0gxzzm2` passed.
- `npm run build` in the Studio passed.
- `sanity dataset list -p f7kbpxr2` confirmed the `production` dataset.
- `npm run check` and `npm run build` in the website passed with the approved token in ignored local `.env`.
- All five local news records and their featured-image assets were published to `f7kbpxr2/production`.
- The production query confirmed five published articles with a slug and image URL; the Astro build generated all five `/news/<slug>` pages.

The approved token is local-only in ignored `.env`; it is not tracked by Git. Add it to the deployment environment and GitHub Actions secret store separately.
