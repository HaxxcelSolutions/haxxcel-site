# Haxxcel Solutions — Enterprise Website

Official marketing website for **Haxxcel Solutions Pvt Ltd** — an AI Automation and Custom Software Development company. Built as a modern, SEO-first enterprise platform.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion

---

## Tech Stack

| Area          | Tools                                                        |
| ------------- | ----------------------------------------------------------- |
| Framework     | Next.js 15 (App Router), React 19, TypeScript               |
| Styling       | Tailwind CSS v4, class-variance-authority, tailwind-merge   |
| UI            | Radix UI primitives, Lucide React icons                     |
| Animation     | Framer Motion, Lenis (smooth scroll)                        |
| Forms         | React Hook Form + Zod validation                            |
| Theme         | next-themes                                                 |
| Email         | Resend (contact form delivery)                              |
| Analytics     | Google Analytics via `@next/third-parties`                  |
| SEO           | Metadata API, JSON-LD structured data, sitemap, robots      |

---

## Prerequisites

- **Node.js** 18.18+ (Node 20 LTS recommended)
- **npm** (or pnpm/yarn)

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Create your local environment file
cp .env.example .env.local
#   (Windows PowerShell: Copy-Item .env.example .env.local)

# 3. Fill in the values in .env.local (see the table below)

# 4. Start the dev server
npm run dev
```

The app runs at **http://localhost:3000**.

---

## Environment Variables

Copy `.env.example` to `.env.local` and set the following. `.env.local` is **not** committed to Git — never commit real secrets.

| Variable              | Required | Description                                                        |
| --------------------- | -------- | ------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`| No       | Public site URL. Defaults to `https://www.haxxcelsolutions.com`.   |
| `NEXT_PUBLIC_GA_ID`   | No       | Google Analytics measurement ID (e.g. `G-XXXXXXXXXX`).             |
| `RESEND_API_KEY`      | For email| Resend API key used to send contact-form emails.                   |
| `CONTACT_TO_EMAIL`    | For email| Inbox that receives contact-form submissions.                      |
| `CONTACT_FROM_EMAIL`  | For email| Verified sender address for outgoing contact emails.               |

> If the three email variables are missing, the contact form still works — submissions are logged to the server console instead of being emailed. Set them in production to receive inquiries.

---

## Available Scripts

| Command             | Description                                    |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Start the dev server (Turbopack).              |
| `npm run build`     | Create a production build.                     |
| `npm run start`     | Run the production build locally.              |
| `npm run lint`      | Run ESLint.                                    |
| `npm run type-check`| Type-check with `tsc --noEmit`.                |
| `npm run format`    | Format the codebase with Prettier.             |

---

## Project Structure

```
app/            App Router pages, routes, layouts, and API handlers
  api/          Route handlers (e.g. contact form → /api/contact)
components/     UI, layout, sections, animations, forms
config/         Site config, navigation, metadata, socials, theme
content/        Static content (e.g. AI services)
hooks/          Reusable React hooks
lib/            Utilities, constants, fonts, JSON-LD helpers
public/         Static assets (images, logos, favicons, OG images)
schemas/        Validation schemas
seo/            SEO helpers (metadata, breadcrumbs, org/service schema)
styles/         Global CSS (animations, typography, utilities)
types/          Shared TypeScript types
```

---

## Deployment

Optimized for **Vercel**:

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Add the environment variables from the table above in **Project Settings → Environment Variables**.
4. Deploy — Vercel auto-detects Next.js and runs `npm run build`.

Any Node.js host works too: run `npm run build` then `npm run start`, and make sure the environment variables are configured on the host.

Before deploying, verify locally:

```bash
npm run type-check
npm run lint
npm run build
```

---

## License

Private and proprietary. © Haxxcel Solutions Pvt Ltd. All rights reserved.
