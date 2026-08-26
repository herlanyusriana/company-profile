# PT CJ Trading — Company Profile

Company profile website for **PT CJ Trading** — curated wellness, spa, and luxury living products for homes, hospitality, and commercial spaces across Indonesia.

Built with **Next.js (App Router)** and **Tailwind CSS v4**, exported as a fully static site for cPanel hosting.

## ✨ Features

- **Hero video carousel** — 3 brand videos (`dornbracht`, `viega`, `ciclotte`), auto-advances on video end
- **Products page** — 8 brand collections with clickable cards
  - Slide-in **gallery modal** per brand (grid of all brand images)
  - Full-screen **lightbox** with keyboard navigation (← → Escape) and dot indicator
- **Our Partners** — 12 brand logos
- **Contact form** — posts to a PHP mailer (`public/mail.php`) compatible with cPanel shared hosting
- **Custom 404 page**
- Scroll-triggered reveal animations & parallax (respects `prefers-reduced-motion`)

## 🚀 Getting Started

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🛠 Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build static export into `out/` |
| `npm run lint` | Run ESLint |

## 📦 Deploy to cPanel

The site is configured for **static export** (`output: 'export'` in `next.config.mjs`), so no Node runtime is needed on the host.

1. Build:
   ```sh
   npm run build
   ```
2. Set the contact form recipient email in `public/mail.php` (line ~49):
   ```php
   $to = 'hello@cjtrading.co.id'; // ← Ganti email tujuan di sini
   ```
3. Upload the **contents of `out/`** to your cPanel `public_html/` directory (FTP / File Manager).
4. `public/.htaccess` is included in the export — it handles:
   - Clean URLs (`/about` → `about.html`)
   - Custom `404.html`
   - Gzip compression
   - Browser caching for images/videos
5. Smoke-test every page + submit the contact form once to confirm mail delivery.

> `mail.php` only executes on the cPanel Apache server. In the Next.js dev server it returns 405 — expected.

## 📁 Project Structure

```
src/
  app/                    # App Router pages (/, /about, /products, /contact, /project-references)
  components/             # CompanyHome, SiteHeader, SiteFooter, ContactForm
  lib/contact.js          # Contact info (WhatsApp, email, phone) from env
public/
  mail.php                # PHP contact-form mailer (cPanel)
  .htaccess               # Apache config for the static export
  images/brands/          # Brand collection images
  images/logos/           # Partner logos
  videos/                 # Hero carousel videos
```

## 🔧 Configuration

Contact details are driven by env vars (see `.env.example`):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (digits only) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Phone shown on site |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email |
| `CONTACT_TO_EMAIL` | (reference) destination for the mailer |

## ⚠️ Notes

- `/assets/` (raw source assets) is git-ignored — filenames exceed Windows/ git path limits. The web uses copies under `public/images/`.
- Brand images and videos total ~375 MB in the export; ensure your cPanel plan has enough disk quota.
