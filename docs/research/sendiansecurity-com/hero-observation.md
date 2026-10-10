# Sendian homepage hero observation

- **Source:** `https://sendiansecurity.com/`
- **Local target:** `/`
- **Scope:** homepage hero only
- **Authorization:** user explicitly authorized reproduction of the homepage hero’s copy, branding, and assets on 2026-03-11.
- **Operating boundary:** local-only; no deployment, tunnel, analytics, remote services, or external form activation.

## Observed implementation

Direct browser inspection of the source hero found an image slideshow, not video:

- Three 1920×1080 WebP background images.
- Fade transition with a 3,000 ms slide duration and 2,000 ms transition duration.
- Looping Ken Burns motion.
- Approximate hero heights: 850 px desktop, 800 px tablet, 650 px mobile.
- Dark navy overlay, pale camera-frame corners, `Rec` indicator, and static `19:20:00` display.
- The contact cards are visible at tablet/desktop sizes and hidden on mobile.
- No visible slideshow controls were observed.

## Recreated behavior

`src/components/home/Hero.astro` uses three local background layers with CSS-only 9 s cycling (three 3 s slide intervals), cross-fade and scale motion. It stops motion and shows the first image when reduced motion is requested.

The source’s primary and secondary CTA labels are preserved, with local destinations only. The visible phone/email cards are non-interactive so the local preview does not activate external calling or email services.
