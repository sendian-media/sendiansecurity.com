# Sendian homepage motion research

- **Source:** https://sendiansecurity.com/
- **Local route:** `/`
- **Scope:** Hero entry animation only; background image slideshow was observed and left unchanged.
- **Authorization:** User authorized local reproduction of the source motion, copy, branding, and assets.
- **Boundary:** Local-only; no production scripts were executed, copied, deployed, uploaded, or connected to external services.

## Observed source behavior

Captured at 1440×900, 768×900, and 375×812 at the top of the page after load. The source hero uses Elementor/Animate.css-style reveals:

- Hero heading: `fadeInUp`, no delay.
- Hero description: `fadeInUp`, 600ms delay, `animated-slow` duration of 2s.
- Both hero buttons: `fadeInUp`, 800ms delay, `animated-slow` duration of 2s.
- Contact cards: `fadeInRight`, 500ms and 700ms delays.
- Source background slideshow settings were 3s slide duration, 2s fade transition, and Ken Burns zoom; local image transitions were not changed for this request.
- Source reduced-motion CSS disables the animated entrance effects.

## Local decision

Framer Motion is not integrated. This Astro site is static and does not currently use React. The requested hero behavior is a small set of one-time opacity/transform reveals that CSS and the existing `HomeMotion.astro` observer reproduce without adding a client framework or dependency. Current Motion documentation confirms that duration, easing, stagger/delay, and reduced-motion behavior are controllable, but using it here would add runtime and dependency cost without improving this simple effect.

The local hero now uses source-aligned hero-specific duration/easing and delays while preserving the existing reduced-motion fallback and local image slideshow. The hero copy and contact cards enter from outside their clipped viewport edges so their movement is visible before settling into place.

## Site-wide extension

The same reveal system was extended to all pages. `HomeMotion.astro` now loads from `BaseLayout.astro` so every route gets the IntersectionObserver reveal. Elements already in the viewport on load reveal immediately; the rest reveal on scroll entry. Pages converted from load-time `fade-up` animations to viewport reveals: About (`/about`, including `fade-up-left` cards as `home-reveal--left`), Services (`/services`), Contact (`/contact`), News (`/news`), Projects (`/projects`, staggered card delays preserved), and Vendor Registration (`/vendor-registration`). Service cards keep their per-index delay via inline `--reveal-delay`. Service detail routes (`/services/[slug]`) retain their source-specific `svc-reveal` timings but now use the same reliable trigger rules. No animation dependency was added.

## Remaining service detail pages clone (workflow)

The six remaining detail pages (`/services/infrastructure-solutions`, `parking-systems`, `automation-solutions`, `communication-solutions`, `audio-visual-solutions`, `other-solutions`) were cloned/verified via a fanned-out multi-agent run (infrastructure, automation, other-solutions first; communication and audio-visual re-ran after early agent errors). Findings:

- Live accordion copy matches `src/data/service-details.ts` verbatim on all six pages (`copyMatch: exact` per page).
- On every source page only the FIRST accordion item of each category carries an image; the rest are text-only. Local entries previously repeated the category image on every item; entries were de-duplicated to match the live pattern (security-solutions kept as-is — its live page images 8 of 16 items and local already matched).
- All live image URLs were byte-identical to existing local assets (e.g. `unified.png` ← `detail-unified.png`, `network.png` ← `detail-network.png`), so no new files were required.
- The `svc-reveal` animation system in `src/pages/services/[slug].astro` applies to all seven detail routes automatically; no page-specific animation changes were needed.

## Trigger reliability fix

The first site-wide version measured transformed, off-screen positions. On some viewport sizes this left hero copy pending forever, and a negative bottom root margin delayed section entry. The observer now reveals hero elements explicitly, measures other elements before applying the pending state, uses `rootMargin: 0px 0px 120px` with `threshold: 0`, and caps non-hero stagger waits at 200ms. A no-dependency Node regression test covers hero completion, early scroll triggers, and reduced-motion/no-observer fallbacks in `tests/reveal-motion.test.mjs`.
