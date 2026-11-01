# Airdb website

Source for [airdb.com](https://airdb.com), the Airdb company website for AI agents, web solutions, security services and conversational AI.

The site includes English and Simplified Chinese landing pages, product information, solutions, a blog and documentation. Some articles and shared product descriptions are currently available in English only.

## Local development

Use Node.js 26 and pnpm, matching the deployment workflow.

```sh
pnpm install
pnpm dev
```

## Build and preview

```sh
pnpm build
pnpm preview
```

Run the language-route tests and verify the generated site before deploying:

```sh
pnpm test
pnpm check:site
```

`check:site` requires a completed build. It checks internal link targets, language alternatives, page metadata and Chinese blog links. Both checks also run in the deployment workflow.

The build runs Astro's type and content checks, generates the static site, then processes the HTML with `process-html.mjs`. Output is written to `dist/`.

## Project structure

- `src/pages/`: routes, including Simplified Chinese pages under `zh-cn/`.
- `src/content/products/`: shared product descriptions. Existing product slugs are preserved for incoming links.
- `src/content/blog/`: articles grouped by language.
- `src/content/docs/`: Starlight documentation and policy pages.
- `src/components/`: layouts, navigation and reusable UI components.
- `src/data_files/`: metadata, pricing, FAQs and feature copy, with Chinese variants under `zh-cn/`.
- `src/images/` and `public/`: local images and static assets.
- `astro.config.mjs`: integrations, site URL and documentation configuration.

## Content maintenance

Keep product claims, prices and customer references consistent with approved business information. Pricing buttons lead to a consultation; the site does not provide checkout. Contact links open the visitor's email app at `support@airdb.cn`. No account authentication or newsletter subscription backend is connected.

Update both language variants when changing shared navigation, FAQs or pricing. Translate articles before presenting them as Chinese content; English originals may remain available with a language label.

## Deployment

The GitHub Actions workflow in `.github/workflows/` builds the site on push and publishes `dist/` to the `gh-pages` branch, using the `airdb.com` custom domain. Deployment credentials are managed through repository secrets.

Report problems through the [repository issue tracker](https://github.com/airdb/airdb.github.io/issues).

## Attribution and license

The site was originally based on [ScrewFast](https://github.com/mearashadowfax/ScrewFast) by Emil Gulamov. It uses Astro, Starlight, Tailwind CSS and Preline UI. Retain upstream copyright notices; see [LICENSE](LICENSE).
