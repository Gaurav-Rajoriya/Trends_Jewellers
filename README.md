# TRENDS JEWELLERS

Diamond-necklace showcase and enquiry website. React 18 + TypeScript + Vite, GSAP/ScrollTrigger, Swiper, Lenis.

```
npm install
npm run dev        # local
npm run typecheck
npm run build      # outputs dist/
```

## Enquiry form (FormSubmit.co)
`src/services/enquiry.ts` posts to `https://formsubmit.co/ajax/<VITE_FORMSUBMIT_ID>`. Success is shown **only** when FormSubmit confirms it.

Setup:
1. Copy `.env.example` to `.env`, set `VITE_FORMSUBMIT_ID` to your receiving email.
2. Deploy, submit one test enquiry from the live site, then click the **activation link** FormSubmit emails you. Enquiries are delivered only after this.
3. Optional: FormSubmit then gives a random token; use that as `VITE_FORMSUBMIT_ID` so your email is not visible in the site code.

Without `VITE_FORMSUBMIT_ID` the form shows an error, never a fake success. Spam: honeypot (also sent as `_honey`), minimum fill time and double-submit lock.

## Business details
`VITE_CONTACT_PHONE / EMAIL / ADDRESS` and `VITE_SOCIAL_*` are shown only when set. Nothing is invented.

## Content to replace
- `src/data/images.ts`: currently free Unsplash photos (hotlinked). Replace with your own product photography (WebP/JPG).
- `src/data/necklaces.ts`: add verified diamond/metal/carat specs per necklace only when you have them.
- Privacy/Terms are sensible starting text; have them reviewed for your business.

## Hosting
SPA routing: `public/_redirects` (Netlify) is included; on Vercel add a rewrite of all paths to `/index.html`. For best SEO consider prerendering product pages.
