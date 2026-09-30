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
| `photos.ts` | Authentic photographs of the advocate |
| `site.ts` | Public origin used for canonical URLs and JSON-LD |

Set `NEXT_PUBLIC_SITE_URL` to the live domain before launch.

### Photographs

Authentic photographs live in `public/images/` and are listed in `src/content/photos.ts`. The portrait used in the hero is set on `lawyerProfile.portrait` in `src/content/lawyer.ts`.

To change a photograph: overwrite the matching file in `public/images/` (keep the same filename) and, if the pixel size changed, update `width` / `height` in `src/content/photos.ts`. If you add a new filename, also update `src` in that file and, for the homepage hero, in `src/content/lawyer.ts`. Then restart or rebuild the site.

| File in `public/images/` | Used for |
| --- | --- |
| `advocate-manoj-kumar-singh-portrait.jpg` | Hero, About, practice areas, insights, cases |
| `advocate-manoj-kumar-singh-chambers.jpg` | Home About, contact, office, consultation |
| `advocate-manoj-kumar-singh-supreme-court.jpg` | Home strip, About gallery, Courts |
| `advocate-manoj-kumar-singh-supreme-court-call.jpg` | Home strip, About gallery, Courts |
| `advocate-manoj-kumar-singh-supreme-court-steps.jpg` | Home strip, About gallery, Courts |
| `advocate-manoj-kumar-singh-ambedkar.jpg` | Home strip, About gallery, Courts |

Pictures taken at the Supreme Court of India in New Delhi are captioned as a visit. They must not be treated as a Supreme Court practice listing.

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
