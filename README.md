# WebMint — Premium Agency Website

A premium, cinematic dark-mode agency website built with React, TypeScript, Vite,
Tailwind CSS v4, Framer Motion, GSAP + ScrollTrigger, Lenis, and React Three Fiber.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/pages/` — one file per route: Home, About, Services, Team, Process, Portfolio, Pricing, Testimonials, FAQ, Contact
  (About, Testimonials, and FAQ stay live but sit outside the primary nav — link to them from the footer or directly)
- `src/components/`
  - `Navbar`, `Footer` — global chrome
  - `HeroVisual` / `HeroScene` — the hero's React Three Fiber scene (floating wireframe geometry, glass core, mouse-parallax camera), lazy-loaded so Three.js only downloads when the hero mounts
  - `ServicesShowcase`, `FeaturedProjects`, `TestimonialsMarquee` — Home page sections
  - `MagneticButton` — cursor-attracted CTA buttons
  - `CustomCursor` — desktop-only ring + dot cursor with magnetic hover
  - `LoadingScreen` — plays once per browser tab session on first load
  - `SmoothScroll` — mounts Lenis and syncs it with GSAP's ScrollTrigger
  - `Reveal` — scroll-in fade/slide wrapper used throughout
- `src/data`, `src/config/contact.ts` — shared data and the Google Apps Script endpoint config
- `src/index.css` — design tokens (colors, fonts) defined via Tailwind v4's `@theme`

## Design system

- **Background:** near-black `#050505`, cards `#111111`
- **Accent:** emerald/mint `#00F5B8` — the primary brand color
- **Secondary glow:** a faint violet (`#7C6CF0`) survives only in a couple of gradients for depth
- **Display type:** Clash Display · **Body type:** General Sans · **Data/labels:** JetBrains Mono
- **Signature elements:**
  - The hero's live React Three Fiber scene, with camera drift that follows the cursor
  - GSAP ScrollTrigger "light-up" timeline on the Process page
  - An infinite auto-scrolling testimonials marquee

## Content to personalize before launch

- Team photos: swap the placeholder SVGs in `public/images/team/` for real headshots (same filenames, no code changes needed)
- Project mockups: swap `public/images/projects/*.svg` for real screenshots of the four featured builds
- Social links: several social icons (LinkedIn, GitHub, Instagram, Behance) currently point to `#` — update the `href`s in `Footer.tsx` and `Team.tsx`
- Contact form backend: see below

## Contact form — Google Apps Script

The form in `src/pages/Contact.tsx` posts to a single configurable endpoint:

```
src/config/contact.ts → GOOGLE_APPS_SCRIPT_URL
```

To wire it up:
1. Create a Google Sheet to collect submissions.
2. In the Sheet, go to **Extensions → Apps Script** and paste a script that appends
   incoming POST data as a new row, then sends a notification email via
   `MailApp`/`GmailApp` to your agency inbox.
3. Deploy the Apps Script as a **Web App** (Execute as: Me, Access: Anyone), and
   paste the resulting `/exec` URL into `GOOGLE_APPS_SCRIPT_URL`.

Nothing else in the codebase needs to change once that URL is set.

## Performance notes

- The Three.js/React Three Fiber hero scene is code-split into its own chunk via
  `React.lazy` + `Suspense`, so it isn't downloaded on routes that don't render it.
- Lenis + GSAP ScrollTrigger are kept in sync via `SmoothScroll.tsx` so scroll-linked
  animations track the eased scroll position rather than the raw native one.
