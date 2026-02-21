import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://airdb.com",
  image: {
    domains: ["airdb.com"],
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr"],
  //   fallback: {
  //     fr: "en",
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        filter: (page) => !page.includes("404"),
        defaultLocale: "en", // All urls that don't contain `fr` after `https://airdb.com/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en", // The `defaultLocale` value must present in `locales` keys
          "zh-cn": "zh-CN",
        },
      },
    }),
    starlight({
      title: "Airdb Docs",
      defaultLocale: "root",
      // https://github.com/withastro/starlight/blob/main/packages/starlight/CHANGELOG.md
      // If no Astro and Starlight i18n configurations are provided, the built-in default locale is used in Starlight and a matching Astro i18n configuration is generated/used.
      // If only a Starlight i18n configuration is provided, an equivalent Astro i18n configuration is generated/used.
      // If only an Astro i18n configuration is provided, the Starlight i18n configuration is updated to match it.
      // If both an Astro and Starlight i18n configurations are provided, an error is thrown.
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        "en": { label: "English", lang: "en" },
        "zh-cn": { label: "简体中文", lang: "zh-CN" },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "Quick Start Guides",
          translations: {
            en: "Quick Start Guides",
            "zh-cn": "快速入门指南",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "About Us",
          translations: {
            en: "About Us",
            "zh-cn": "关于我们",
          },
          items: [
            { label: "Terms of Service", link: "about/terms-of-service/" },
            { label: "Privacy Policy", link: "about/privacy-policy/" },
          ],
        }
      ],
      social: [
	{ label: "github", icon: 'github', href: 'https://github.com/airdb' },
      ],
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
        MobileMenuFooter: "./src/components/ui/starlight/MobileMenuFooter.astro",
        ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://airdb.com" + "/social.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://airdb.com" + "/social.webp",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "static",
  experimental: {
    // clientPrerender: true,
    // directRenderScript: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
