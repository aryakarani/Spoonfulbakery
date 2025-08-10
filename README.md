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

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — digits only, e.g. `2348012345678`

## Deploy to Netlify

- This repo ships with `netlify.toml` and the official Next.js plugin.
- Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in Netlify Site settings → Environment.

## Brand

- Replace `public/logo.svg` with your original logo file named exactly `logo.svg` (or adjust the import in `components/Header.tsx`).
- Tailwind brand palette is tuned to your logo’s warm blush/brown scheme.

## Notes

- No online payment is included by design — checkout goes through WhatsApp using a pre-filled order message built from the cart contents.