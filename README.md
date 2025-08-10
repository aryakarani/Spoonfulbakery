# Spoonful Bakery — Next.js + Netlify Storefront

Modern storefront for Spoonful Bakery with a clean UI, cart, and WhatsApp-only ordering.

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

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — digits only, default fallback: `+91 7977264846`
- `NEXT_PUBLIC_INSTAGRAM_USERNAME` — optional, e.g. `spoonful_bakery` (enables Instagram buttons)

## Deploy to Netlify

- This repo ships with `netlify.toml` and the official Next.js plugin.
- Set the environment variables in Netlify Site settings → Environment.
- Deploy; Netlify will run `npm run build` automatically.

## Brand

- Replace `public/logo.svg` with your original logo file named exactly `logo.svg` (or adjust the import in `components/Header.tsx`).
- Tailwind brand palette is tuned to your logo’s warm blush/brown scheme.

## Notes

- No online payment is included — checkout is via WhatsApp with a pre-filled order message built from the cart.
- If Instagram username is set, Instagram CTAs appear in the header, hero and contact sections.