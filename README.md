# Shein Tracking (sheintracking.com)

Independent Shein order & package tracking site — Next.js App Router, multi-carrier lookup, SEO guides, and AdSense-ready layout.

## Stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS + Outfit / Source Sans 3
- Markdown content in `src/content/`
- Tracking widget → `/api/track` (Cainiao, 17Track, TrackingMore, or WP ajax proxy)

## Scripts

```bash
npm run dev
npm run build
npm start
```

## Environment

Copy `.env.example` to `.env.local` and set:

- `TRACKING_PROVIDER` — default `cainiao`
- `TRACKING_API_KEY` — if you switch to 17Track / TrackingMore
- `NEXT_PUBLIC_ADSENSE_CLIENT` — your `ca-pub-…` ID
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional GA4

## URL map

| Path | Page |
|------|------|
| `/` | Home + tracker |
| `/category/blog` | Blog index |
| `/how-to-track-your-shein-order` | Article |
| `/how-long-does-shein-take` | Article |
| `/shein-tracking-statuses-explained` | Article |
| `/shein-tracking-not-updating` | Article |
| `/shein-delivered-but-not-received` | Article |
| `/shein-customs-clearance` | Article |
| `/about-us` `/contact-us` `/privacy-policy` `/disclaimer` | Policy pages |

## Brand config

Edit `src/lib/siteConfig.ts` for domain, articles, FAQs, and image paths. Public brand assets live in `/public` (`shein-tracking.webp`, feature OG cards, blog heroes under `/public/blog`).
