# SEO Performance Baseline

## Build baseline

- `npm run check`: passed with 0 errors, warnings, and hints.
- `npm run build`: passed; 17 static pages generated.
- The built home page loads a 1920×1080 WebP hero image (`/images/home/hero.webp`, 144 KB) as a CSS background.
- Content images use explicit dimensions, async decoding, and lazy loading where appropriate.
- The global interactive JavaScript is limited to the header submenu. Statistics and project-dialog scripts are emitted only on their respective routes.

## Field metrics

No project RUM or Google Search Console/CrUX access was supplied for this implementation, so no field LCP, INP, or CLS values are asserted here. Before a performance change is proposed, record mobile and desktop PageSpeed Insights/CrUX values for the production canonical URL and the main public route templates.

## Follow-up trigger

If field or lab evidence identifies the home hero as the LCP element, replace the CSS-background delivery with a responsive HTML image and preload it intentionally. Until then, retain the current static implementation rather than making an unmeasured performance change.
