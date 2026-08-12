# Gorman Hardin CPA & Consulting

Marketing site for Gorman Hardin CPA & Consulting (Louisville, KY). Next.js 14 App Router + Tailwind + TypeScript.

Rebuilt 2026-08-12 from the live WordPress site (gormanhardin.com) — same URLs preserved, same real content, plus fixed bugs (broken logo link, wrong click-to-call number, broken footer link) and added `AccountingService` LocalBusiness schema with NAP matching the Google Business Profile.

Separate repo/Vercel project from Framework Advisory and Even Ground Co — same GitHub account (`cmgorman0-pixel`), distinct project.

## Env vars

- `RESEND_API_KEY` / `RESEND_FROM_EMAIL` — contact form email delivery (no-ops honestly until set)
- `UNSPLASH_ACCESS_KEY` — licensed stock photography for section images (falls back to a gradient panel until set)
- `NEXT_PUBLIC_SITE_URL` — defaults to `https://gormanhardin.com`

## Dev

```
npm install
npm run dev
```
