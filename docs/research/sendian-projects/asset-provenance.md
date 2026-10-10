# Sendian projects asset provenance

Authorized origin: `https://sendiansecurity.com/projects/`. Assets were retrieved only for this approved local recreation and are served locally at runtime. Source HTML/CSS was inspected as untrusted reference material; no source scripts were executed.

| Local asset | Authorized source | SHA-256 | Notes |
| --- | --- | --- | --- |
| `public/images/projects/services-single05.jpg` | `https://sendiansecurity.com/wp-content/uploads/2025/10/services-single05.jpg` | `4d39db6ec605019ef88ca7bf4ac0105202c82304c51e23c0655fcca8300d693e` | New local copy; 1400×650 shared project hero background. |
| `public/images/projects/towers.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/10/towers-1000x650.jpg` | `e5112e811ea40281d318939b89e31462c2b01809fe1ac65cf63f9ababa2df718` | Existing verified first-party index card. |
| `public/images/projects/commercial.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/10/2-6-1000x650.jpg` | `e8c2027c36010e9d0521e77f9b966c7efdf9d262ef1c0c757ae36d40e32f6bf6` | Existing verified first-party index card. |
| `public/images/projects/residential.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/10/al-bostan-compound-inside.crop_-1000x650.jpg` | `2375c4968e66eae4c5ca897f06599bbfed30b41eef7dcdcd5dccb361ba820c32` | Existing verified first-party index card. |
| `public/images/projects/healthcare.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/10/eve-medical-center-1000x650.jpg` | `c5525400f7017a4dab32b82f81c9f63566b9de3cbd774ea64745f7d5d21472e3` | Existing verified first-party index card. |
| `public/images/projects/education.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/10/13-2-1000x650.jpg` | `0afd01540f6c7384cfc3b8e1c94fe1d9411d438abb42b56897118a68ec634f6e` | Existing verified first-party index card. |
| `public/images/projects/retail.png` | `https://sendiansecurity.com/wp-content/uploads/2026/02/Domasco-Watches-1000x650.png` | `ad8215ddeee827203f9c5324a6cc691cc8e5c51e490707dbdf63b84490355fd4` | Existing verified first-party index card. |
| `public/images/projects/showrooms.png` | `https://sendiansecurity.com/wp-content/uploads/2026/02/GAC-MOTOR-1000x650.png` | `6d1efffe57b364b3945bb4e68558e38fb8a205756a6cb0c306b3c1441a4928c0` | Existing verified first-party index card. |
| `public/images/projects/industrial.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/10/12-2-1000x650.jpg` | `d8d0ab5e4a7495d91bbb42b4a95593a8b9dc6aa12d16ac6b0e18641f4c276d55` | Existing verified first-party index card. |
| `public/images/projects/portfolio-01.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/02/portfolio-01.jpg` | `0a0303116e78609eef804c6b298429d129ea5875daf99058f83990e4873200bc` | Existing verified 1400×1632 detail lead for Towers, Commercial, Healthcare, Education. |
| `public/images/projects/portfolio-02.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/02/portfolio-02.jpg` | `7a9f3418b37faa68e948d49094c6e6c356d4f28afe7e32f5d3a3e14f570ae215` | Existing verified 1400×1632 Residential detail lead. |
| `public/images/projects/portfolio-03.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/02/portfolio-03.jpg` | `e3bb46e186bc6d7d2dcdd2b36c794b6cb2f80a13b53ec33c260d4b3148a719ab` | Existing verified 1400×1632 detail lead for Retail, Showrooms, Industrial. |
| `public/images/projects/challenge-1.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/02/our-challenge-01.jpg` | `c992f27dda5aec7ed83e94b6ca6ae2a854e2763a68a5302d2b84ff86ff626856` | Existing verified challenge image 1. |
| `public/images/projects/challenge-3.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/02/our-challenge-03.jpg` | `4795813ee5f61b6af33b02625a67838ae6a4626f17a18a599f583b364156d88e` | Existing verified challenge image 2 (source order is 01, 03, 02). |
| `public/images/projects/challenge-2.jpeg` | `https://sendiansecurity.com/wp-content/uploads/2025/02/our-challenge-02.jpg` | `43b41c667ae9c2a488151e99e882ea8688572a705eefa44c5cc28a72401714a8` | Existing verified challenge image 3 (source order is 01, 03, 02). |

## Local behavior and retained historical assets

- The source index opens each sector within a modal; the local index now uses native HTML dialogs with the same visual structure, plus accessible Escape, backdrop-click, and focus behavior.
- No `/projects/<slug>` detail routes are generated locally, matching the corrected source behavior.
- `portfolio-*.jpeg` and `challenge-*.jpeg` are retained historical research assets from the earlier, now-removed detail-page recreation. They are not referenced or loaded at runtime.
