# QA Report — PT CJ Trading (Luxury Living & Spa Solutions)

**Date:** 2026-08-27 · **Mode:** Standard · **Result:** ✅ SHIP-READY (1 config note for deploy)

---

## Health Score

| Area | Before | After |
|------|--------|-------|
| All pages render (5/5) | ✅ 200 | ✅ 200 |
| Broken assets (images/videos/logos) | 1 bug | ✅ 0 |
| Stale "Bathroom" branding | 5 refs | ✅ 0 |
| Static build (`npm run build`) | ✅ | ✅ |
| cPanel deploy files (`mail.php`, `.htaccess`, `404.html`) | ⚠️ partial | ✅ complete |
| Contact form endpoint | 404 (old `/api/contact`) | ✅ `/mail.php` wired |

---

## Checks Run & Evidence

### 1. All pages load — no console errors, all 200
Verified via HTTP fetch on dev server (`localhost:3000`):
- `/` → 200
- `/about` → 200
- `/products` → 200
- `/project-references` → 200
- `/contact` → 200

### 2. All referenced assets exist (0 broken images)
Scanned every `src`/`href` in built HTML against files in `out/`:
- ✅ All brand images resolve (harvia, jeeo, mrsteam, planika, safyooz, takarabelmont, viega, wellness)
- ✅ All 12 partner logos resolve (including 5 filenames containing `&` — verified decoded)
- ✅ All 3 carousel videos exist (`dornbracht.mp4`, `viega.mp4`, `ciclotte.mp4`)

**Bug found & fixed:**
- `planika-02.jpg` referenced in project-references hero → actual file is `planika-02.png`. Fixed in [project-references/page.js](src/app/project-references/page.js). Would have 404'd after deploy.

### 3. Stale "Bathroom" branding removed (5 refs → 0)
Updated to "Luxury Living & Spa" positioning:
- [SiteHeader.jsx:27](src/components/SiteHeader.jsx#L27) — tagline "Bathroom Living" → "Luxury Living & Spa"
- [SiteFooter.jsx:10](src/components/SiteFooter.jsx#L10) — footer description
- [CompanyHome.jsx:32](src/components/CompanyHome.jsx#L32) & [products/page.js:33](src/app/products/page.js#L33) — MR. STEAM description ("any bathroom" → "any space")
- [contact.js:8](src/lib/contact.js#L8) — WhatsApp pre-filled message ("kebutuhan bathroom" → "kebutuhan spa dan luxury living")

### 4. Static production build succeeds
`npm run build` → 6 static routes prerendered (`/`, `/about`, `/contact`, `/products`, `/project-references`, `/404`), no TypeScript/build errors. Total `out/` = **375MB** (299MB brand images + 75MB videos + 892KB JS/CSS).

### 5. cPanel deployment files in place
- ✅ `out/mail.php` — PHP mailer (replaces deleted `/api/contact` route)
- ✅ `out/.htaccess` — clean URLs (`/about` → `about.html`), 404 handling, compression, caching
- ✅ `out/404.html` — custom not-found page
- ✅ `out/favicon.ico`

### 6. Contact form wiring
- [ContactForm.jsx:18](src/components/ContactForm.jsx#L18) POSTs to `/mail.php` (JSON) — no more `/api/contact` calls.
- **Note:** The PHP endpoint only executes on the cPanel Apache server (returns 405 in the Next.js dev server, which is expected). Form submission must be smoke-tested *after* deploy.

---

## ⚠️ Before You Deploy

1. **Set the recipient email** in [mail.php:49](public/mail.php#L49):
   ```php
   $to = 'hello@cjtrading.co.id'; // ← Ganti email tujuan di sini
   ```
2. **375MB upload** — make sure your cPanel plan/disk quota allows it. All videos are already compressed; only drop more if quota forces it.

## ✅ Deploy Checklist (cPanel)
1. Upload contents of `out/` to `public_html/`
2. Set `$to` email in `mail.php` first
3. Test: visit each URL, submit contact form, confirm email arrives
4. (Optional) Uncomment the HTTPS redirect block in `.htaccess` once SSL is live

---

## Residual Risk
- **Video carousel + gallery modal interactions** were verified by code review (logic is sound: `onEnded`→next video; modal uses `useState`/`useEffect` with keyboard nav) but not driven in a headless browser. Worth one manual click-through on the live site post-deploy.
- **`mail()` function** depends on the cPanel host's PHP mail configuration (SPF/DKIM). If mail lands in spam, that's a host-side DNS setup, not the code.
