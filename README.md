# Spoonful Bakery — Next.js + Netlify Storefront

Modern storefront for Spoonful Bakery with a clean UI, boutique typography, cart, and WhatsApp-only ordering.

## Quick start

1. Install dependencies:
   ```bash
   npm i
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Build:
   ```bash
   npm run build && npm start
   ```

## Environment

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — digits only (e.g. `917977264846`)
- `NEXT_PUBLIC_INSTAGRAM_USERNAME` — optional, e.g. `spoonful.bakery`

## Features

- Typed menu data in `data/menu.ts` matching the live reference site (Jar Menu and Cookies)
- Inter body and Playfair Display headings via Next.js fonts + Tailwind
- INR price formatting with `Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })`
- Cart with per-size variants and quantities
- WhatsApp checkout with a pre-filled human-readable order message

## Deploy to Netlify

- Uses `@netlify/plugin-nextjs` via `netlify.toml`
- Set environment variables in Netlify Site settings → Environment
- Deploy; Netlify will run `npm run build`

## Notes

- All product images are served from `public/images/...` and optimized via Next.js `<Image>`
- Location references are updated to “Mumbai, India”