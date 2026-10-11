# Authorized Sendian Security news-archive inventory

- Index source: https://sendiansecurity.com/news/
- Sync direction: source archive → `f7kbpxr2/production`
- Approved behavior: upsert existing articles and add missing articles; never delete or unpublish Sanity documents.
- Archive count at inspection: 5 articles.

| Source article | Sanity slug | Source image handling |
| --- | --- | --- |
| [Qatar Finland CCTV installation](https://sendiansecurity.com/security/ongoing-project-cctv-surveillance-system-installation-at-qatar-finland-international-school/) | `ongoing-project-cctv-surveillance-system-installation-at-qatar-finland-international-school` | Already imported with featured and inline images; full body preserved. |
| [Kreeq Sports Club CCTV deployment](https://sendiansecurity.com/security/ongoing-project-moi-regulated-cctv-system-deployment-at-kreeq-sports-club-al-wakra/) | `ongoing-project-moi-regulated-cctv-system-deployment-at-kreeq-sports-club-al-wakra` | Source hero and inline images downloaded to `public/sites/sendiansecurity-com/news/` before upload. |
| [Cisco Registered Partner](https://sendiansecurity.com/security/sendian-integrated-security-services-siss-becomes-cisco-registered-partner/) | `sendian-integrated-security-services-siss-becomes-cisco-registered-partner` | Source hero downloaded to `public/sites/sendiansecurity-com/news/` before upload. |
| [AI-powered security solutions](https://sendiansecurity.com/security/ai-security-solutions-qatar/) | `ai-security-solutions-qatar` | Source provides article copy; existing imported featured image is preserved. |
| [Shenzhen Carsafe partnership](https://sendiansecurity.com/technology/partners-with-shenzhen-carsafe-technology/) | `sendian-integrated-security-services-partners-with-shenzhen-carsafe-technology` | Source provides article copy; existing imported featured image is preserved. |

The importer is `/Users/farsin/sendiangroup/Sanity-studio/scripts/sync-sendian-security-news-archive.mjs`. Its dry-run command is `npm run sync:security-news`; its upsert command is `npm run sync:security-news:write` with `SANITY_DEVELOPER_API_KEY` set in the local environment.
