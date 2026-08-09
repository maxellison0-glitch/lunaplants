# Luna storefront

The production frontend for Luna, a UK ecommerce brand pairing houseplants with made-to-order 3D-printed pots. The official domain is [lunaplants.co.uk](https://lunaplants.co.uk).

## Stack

- Next.js App Router via vinext
- React 19 and TypeScript
- Tailwind CSS 4 with a custom editorial design system
- Cloudflare Workers-compatible Sites deployment

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npx tsc --noEmit
npm test
```

The test command builds the production worker and verifies the homepage, storefront, product detail, content, checkout and SEO routes through server rendering.

## Storefront routes

- `/` — editorial homepage
- `/shop` — filterable product collection
- `/products/[slug]` — configurable product detail
- `/cart` and `/checkout` — local cart and Stripe-ready checkout UI
- `/about`, `/contact` and `/journal` — brand and organic-content pages

The cart is deliberately client-side and the checkout is a non-payment prototype. Product data lives in `lib/catalog.ts`, ready to be replaced by a commerce backend.
