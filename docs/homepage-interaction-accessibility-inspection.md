# Homepage interaction and accessibility inspection

**Authorized reference:** `https://sendiansecurity.com/`  
**Method:** Static HTML/CSS/JS inspection only. The production page and its scripts were treated as untrusted reference data; none were executed or copied into this project. Runtime-only details are marked as inferred from configuration.

## Header and menu

- The page begins with a functional skip link (`Skip to content` → `#primary`), followed by a labelled main-navigation landmark.
- At desktop sizes (`xl`, 1200px and up), the header exposes the logo, Home, About, Services, Projects, News, Contact, and Vendor Registration. Home carries `aria-current="page"`.
- Below `xl`, the same navigation is an end-side off-canvas panel. The hamburger has an accessible name and `aria-controls="site-navigation"`; the panel has a visible “Main Menu” title and a labelled close control. Bootstrap is expected to handle the focus trap/return, but that was not runtime-tested.
- Services is the only nested item: its parent is a normal link to Services and declares `aria-haspopup="true"` / `aria-expanded="false"`; a separate, unlabelled `<span class="submenu-toggle">` opens the submenu in the mobile/off-canvas treatment. The production script toggles `.active` and slides the submenu. On desktop, CSS opens the submenu on hover.
- The header is `header-sticky` / `sticky-stype--header-reveal`: after scrolling past header height it becomes sticky; while sticky it is shown when scrolling upward and hidden when scrolling downward. Smooth Lenis scrolling is also configured for wheel and touch input.

### Local implementation requirements

- Preserve the skip link, landmark, current-page indication, labelled menu/close buttons, Escape-to-close, focus trap, and focus return.
- Implement Services as either a disclosure **button** next to a normal Services link or a single menu button—never as the production page’s unfocusable span. Synchronize `aria-expanded`; support Enter/Space, Escape, click/tap, and keyboard focus without relying on hover.
- Do not reproduce the pointer-only custom cursor as essential feedback. Normal cursor and keyboard focus must communicate interactivity.
- Give every interactive link/button a visible `:focus-visible` ring; production CSS contains many hover transitions but no reliable site-wide focus treatment in the inspected reference.

## Primary links and pointer states

- Hero CTAs lead to About and Services. Section CTAs lead to About, Services, and Projects. Service-card titles lead to their respective service pages. Portfolio cards and news cards are linked.
- Primary buttons use a horizontal wobble animation class on hover. Card images scale from `1` to `1.1` on hover; card overlays are permanently visible for this instance (`content-alwasy-show--yes`), while generic card CSS would otherwise reveal them only on hover.
- Text links commonly transition colour over 0.3s. The cards, buttons, nav links, portfolio/news items, and social icons therefore need equivalent focus-visible styling—not merely hover styling.
- A fixed “WhatsApp us” control is configured in the lower-right corner. It has a short scale-in entrance animation and opens WhatsApp in a new tab; its source config also includes analytics/tracking fields.

## Services carousel (not an infinite marquee)

- The services row is a horizontal Swiper carousel with four cards: Security & Surveillance, Infrastructure & Data Center, Parking & Mobility, and Communication & Network.
- Configuration found in the markup: one card initially; two cards at 767px+; four at 1024px+; 16px gap; 1500ms slide speed; autoplay every 3000ms; `loop: false`; `disableOnInteraction: false`; `pauseOnMouseEnter: false`.
- In left-to-right layout, default Swiper advancement moves to the next logical slide, making cards travel visually **right-to-left**. Because looping is disabled, it is not a continuously wrapping marquee; at four-up desktop there are exactly four supplied cards, so there is no additional card to advance to.
- The carousel exposes a partial next-card treatment on wider screens (`margin-right: -25%`), removed below 768px. Swiper’s ordinary drag/swipe interaction is implied by its default configuration.
- The rendered markup has an empty `.swiper-bottom-control`: there are **no visible previous/next buttons, dots, progress indicator, pause button, or explicit carousel keyboard controls**. Generic theme CSS supports controls, but this instance does not render them.

### Local implementation requirements

- Prefer a static responsive card grid for reduced motion and for the first local version. If carousel fidelity is required, provide Previous, Next, and Pause/Play buttons with accessible names; keep the active slide/card focusable; and pause autoplay on hover, focus-within, and user pause.
- Respect `prefers-reduced-motion: reduce` by disabling autoplay, drag momentum/transition animation, hover wobble/zoom, and scroll/reveal animation. Never auto-resume after a user pauses it.
- Do not call this component a marquee unless it is deliberately changed to an infinitely scrolling, non-essential decorative strip. The reference implementation is finite carousel behavior.

## Scroll- and time-driven motion

- The hero has a three-image background slideshow inferred from Elementor data: looping fade transition, 3s slide duration, 2s transition duration, and Ken Burns zoom-in.
- Multiple headings, body blocks, cards, and feature items enter with `fadeInUp`, `fadeInLeft`, or `fadeInRight` after they enter view; several have 100–800ms delays.
- The hero’s “record” dot pulses. Buttons can wobble on hover. The desktop custom cursor follows pointer movement in a requestAnimationFrame loop.
- Four statistics count from zero to their target over 2000ms when activated (250+, 10,000+, 24/7, and 750M+).
- The reference only includes a narrow `prefers-reduced-motion: no-preference` scroll-behaviour rule. It does **not** provide a sufficient global reduced-motion fallback; Lenis smoothing, hero slideshow, carousel autoplay, counter animation, cursor tracking, and most entrance effects remain configured.

## Forms and outbound/service stubs

Keep content navigation local, but do not activate any production integration, third-party service, or submission.

| Reference behaviour | Local-safe treatment |
| --- | --- |
| Floating WhatsApp chat (including analytics/webhook fields) | A non-network button or inert labelled badge such as “WhatsApp unavailable in local preview”; no `wa.me`, no popup/new tab, no analytics. |
| Facebook, Instagram, and LinkedIn links | Visually matching local stub buttons/links that do not navigate externally; announce that external links are disabled in the local preview. |
| `tel:` phone and `mailto:` email links | Display the contact information, but make the action a local disabled/stub control rather than invoking a calling or mail client. |
| Search off-canvas form targeting the production domain | Keep it non-submitting. If preserved visually, intercept it locally and announce “Search is unavailable in this local preview”; do not request the source site. |
| Request a Consultation, Get a Quote, Contact, and Vendor Registration | Local internal pages may be viewed, but any form submit/send action must be a local no-op confirmation only—no external POST, email, CRM, Contact Form 7 endpoint, analytics, or webhook. |
| Gallery/lightbox and internal service/project/news links | These may stay entirely local if needed. Do not load remote assets/scripts or route to the production origin. |

## Accessibility gaps not to replicate

1. The mobile submenu trigger is a non-semantic span and is not keyboard-operable by itself.
2. The auto-advancing carousel has no pause control and is configured not to pause on pointer hover; this conflicts with the expected control of motion that starts automatically.
3. The carousel’s interaction/announcement model is absent in the static markup; explicit labelled controls and slide status are needed locally.
4. Numerous meaningful visual states depend on `:hover`; local focus-visible and touch-safe equivalents are required.
5. The custom cursor and smooth scroll provide continuous motion without an observed reduced-motion guard.
6. Several `target="_blank"` links lack an observed `rel="noopener noreferrer"`; local stubs avoid this entirely.
