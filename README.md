# S&M Law Firm — Advocate Manoj Kumar Singh

Official website for **Advocate Manoj Kumar Singh** of **S&M Law Firm**, Howrah, West Bengal.

This project represents only that practice. It must not be mixed with other advocates of a similar name.

## Stack

- Next.js (App Router) and TypeScript
- Central content in `src/content/`
- No invented qualifications, awards, ratings or case results

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Edit content

All identity and copy that should stay consistent lives in `src/content/`:

| File | Purpose |
| --- | --- |
| `lawyer.ts` | Name, firm, biography, portrait path, qualifications, experience |
| `contact.ts` | Address, phones, email, maps, social profiles, WhatsApp flag |
| `practiceAreas.ts` | Practice-area cards and long pages |
| `courts.ts` | Associated courts and the empty cases list |
| `articles.ts` | Legal insights |
| `faqs.ts` | Frequently asked questions |
| `reviews.ts` | Approved client remarks (unpublished until `publish` is true) |
| `site.ts` | Public origin used for canonical URLs and JSON-LD |

Set `NEXT_PUBLIC_SITE_URL` to the live domain before launch.

### Add a real photograph

1. Place an authentic portrait at `public/images/advocate-manoj-kumar-singh.webp` (or `.jpg`).
2. In `src/content/lawyer.ts`, set `portrait.src` to `/images/advocate-manoj-kumar-singh.webp`.

Do not use a generated or stock portrait of another person.

### Qualifications, years of practice, cases

These arrays are empty on purpose. Fill them only after the chambers confirm the facts. Publish cases only with approval; edit `publishedCases` in `src/content/courts.ts`.

### WhatsApp

`contactInfo.whatsApp.enabled` controls the WhatsApp button and the mobile bar. Turn it off if the number is not used for WhatsApp.

## Contact form

`POST /api/contact` validates input, ignores honeypot submissions, and rate-limits by IP. JSON posts and ordinary HTML form posts are both accepted.

Delivery, in order, if the matching environment variables are set:

1. `CONTACT_WEBHOOK_URL` — JSON post of `{ to, subject, record }`
2. `RESEND_API_KEY` — email via Resend
3. `SMTP_HOST` (and optional `SMTP_USER` / `SMTP_PASSWORD`) — email via SMTP

If none of those succeed, the server appends a line to `.data/inquiries.jsonl` when the filesystem is writable. If neither email nor a file record can be written, the visitor is asked to telephone the office.

Do not ask visitors to paste confidential case papers into the form.

## Deploy

Any Node host that can run `next start` is suitable (for example Vercel). Serve the site over HTTPS. Keep NAP (name, address, phone) identical to the Google Business Profile.
