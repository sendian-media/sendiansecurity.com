# Homepage comparison evidence

| Capture | URL | Viewport | State |
| --- | --- | --- | --- |
| `source-home-desktop-1280x633.png` | `https://sendiansecurity.com/` | 1280×633 | Initial hero after media settles |
| `local-home-desktop-1280x633.png` | `http://127.0.0.1:4321/` | 1280×633 | Initial hero after staged entry motion settles |
| `local-home-mobile-375x667.png` | `http://127.0.0.1:4321/` | 375×667 | Initial hero after staged entry motion settles |

## Observed local verification

- Hero slideshow, Ken Burns treatment, copy/HUD entry, and section/card reveals load without console errors.
- Services cards auto-advance, wrap, pause on pointer hover or focus, and provide keyboard-accessible previous/next controls.
- The services image holder fades/scales on its initial reveal and when the current card changes.
- At 375px the header changes to a modal end-side menu that closes with Escape and restores focus to its trigger.
- Under `prefers-reduced-motion: reduce`, hero animation is disabled and the services autoplay remains stopped.
- Local-only rendering uses local images and font files; outbound social, WhatsApp, and email controls are displayed as non-navigating stubs on the recreated homepage.
