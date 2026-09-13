# Personal Portfolio — React (Vite) migration

This is your portfolio rebuilt in React using Vite, keeping all your Tailwind
classes, the same visual design, the same project data, the Resend contact
form (via a Netlify Function), and Matter.js for the background.

## 1. Install dependencies

```bash
npm install
```

## 2. Copy over your actual asset files

The following folders were scaffolded but are EMPTY — copy your real files
from your old static project into these exact paths:

```
public/assets/images/     <- all your project screenshots, testimonial photos, contact-me.svg
public/assets/icons/      <- foursquare.png (favicon)
public/assets/files/      <- Fahad_Akhtar_CV.pdf
```

Also copy your font files/CSS if you were self-hosting fonts via `font.css`
(currently not wired in — if you were using self-hosted fonts rather than
system fonts, let me know and I'll add the `@font-face` rules into `src/index.css`).

## 3. Matter.js background

`src/hooks/useMatterBackground.js` recreates a generic floating-shapes
background using Matter.js, mounted into the same `#wrapper-canvas` div as
your original site. This is NOT a byte-for-byte copy of your old `matter.js`
file's exact physics/shapes (that file's content wasn't available during
this migration) — if you want an exact match, share your old `matter.js`
file and I'll port its logic into the hook precisely.

## 4. About page

`src/pages/About.jsx` is currently a placeholder. Your original
`about/about.html` content wasn't included in this migration — share it and
I'll convert it into a matching React component at the `/about` route.

## 5. Environment variable for the contact form

You need `RESEND_API_KEY` in TWO places (they're separate environments):

**For local development (`npm run dev`):**
1. Copy `.env.example` to `.env`
2. Paste your real Resend API key into it
3. `.env` is already git-ignored — it will never be committed

**For production (your live Netlify site):**
Set `RESEND_API_KEY` in Netlify's dashboard → Site configuration → Environment
variables (same as your old static site). This is what `netlify/functions/send-email.js`
uses when actually deployed.

## 6. Run locally — contact form works out of the box

```bash
npm install
npm run dev
```

This single command now starts BOTH:
- Vite's dev server (`http://localhost:5173`) — your actual site
- A small local Express server (`server/local-api.js`, on port 8787) that
  mirrors the real Netlify Function, so the contact form works locally
  without needing the separate `netlify dev` command.

Vite is configured (see `vite.config.js`) to transparently proxy any request
to `/.netlify/functions/*` over to that local server — so from the browser's
perspective, nothing looks different than in production.

**Note:** `server/local-api.js` is a dev-only convenience — it is NOT
deployed. In production, Netlify runs the real function in
`netlify/functions/send-email.js` instead. Both files intentionally contain
the same logic, so keep them in sync if you change the email template.

## 7. Deploy

Push this to a new (or the same) GitHub repo, connect it to Netlify. The
included `netlify.toml` already sets:
- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`
- A catch-all redirect so React Router's client-side routes (like `/about`)
  work correctly on refresh/direct load.

## What's structurally different from the old static site

- All 7 projects now live in one data file: `src/data/projects.js` — add,
  edit, or reorder projects by editing that array instead of duplicating
  HTML blocks. The left/right zig-zag alignment is driven by each project's
  `imageSide: 'left' | 'right'` field.
- Testimonials are similarly data-driven from `src/data/testimonials.js`.
- Swiper and Matter.js are now real npm packages (`swiper`, `matter-js`)
  instead of CDN `<script>` tags.
