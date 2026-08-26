# PT CJ Trading — WordPress Edition

This directory contains a self-contained WordPress conversion of the current Next.js website.

## Packages

- `themes/cj-trading`: visual theme, responsive layouts, header/footer, all four pages, homepage sections, typography controls, bundled fallback assets, and front-end interactions.
- `plugins/cj-trading-content`: editable Products and Project References, starter catalog data, card metadata, and secure contact form handling.
- `dist`: upload-ready ZIP archives.

The theme does not require Node.js, Tailwind, Storyblok, Elementor, ACF, or any paid plugin at runtime.

## Installation

1. In WordPress, open **Appearance → Themes → Add New → Upload Theme**.
2. Upload `dist/cj-trading-theme.zip` and activate it. Activation creates Home, About Us, Products, Project References, and Contact Us pages and assigns Home as the front page.
3. Open **Plugins → Add New → Upload Plugin**.
4. Upload `dist/cj-trading-content.zip` and activate it. Activation creates the starter Products and Project References visible in the current design.
5. Open **Settings → Permalinks** and click **Save Changes** once.
6. Open **Appearance → Customize** and replace the placeholder company/contact data before launch.

## Content management

- **Products**: title, excerpt/card description, eyebrow badge, ordering, content, and Featured Image.
- **Project References**: title, project type, ordering, content, and Featured Image.
- **Pages**: main editable page copy and page Featured Image.
- **Appearance → Customize → CJ Trading — Homepage Assets**: hero and supporting homepage imagery from Media Library.
- **Appearance → Customize → CJ Trading — Homepage Content**: major homepage headings and descriptions.
- **Appearance → Customize → CJ Trading — Typography**: separate body and heading font presets.
- **Appearance → Menus → Hamburger Navigation**: navigation order, labels, and URLs.
- **Appearance → Customize → Site Identity**: optional custom logo.

`theme.json` also exposes the CJ color and typography presets to the WordPress block editor.

## Contact form

The form validates a WordPress nonce, sanitizes input, includes a honeypot, and sends through `wp_mail()`. Production delivery still depends on the hosting email configuration; an SMTP plugin can be added if the host does not provide reliable PHP mail.

## Compatibility and validation

- WordPress 6.6+
- PHP 8.0+
- PHP syntax validated on PHP 8.2
- Modern evergreen browser required for the catalog width-hover effect

The current machine does not contain a WordPress runtime or WP-CLI, so browser/dashboard integration must be smoke-tested after installing the ZIPs in the target WordPress environment.

