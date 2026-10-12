import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { locales, localeMeta } from "./src/i18n/config";
import { allAlternates } from "./src/i18n/routes";

const SITE = "https://cleanngo.be";

// Sitemap entries list their translations as xhtml:link alternates, keyed by
// URL without trailing slash.
const stripSlash = (url: string) => url.replace(/\/$/, "");
const sitemapLinks = new Map(
  allAlternates().flatMap((alternates) => {
    const links = [
      ...locales.map((l) => ({ lang: localeMeta[l].hreflang, url: SITE + alternates[l] })),
      { lang: "x-default", url: SITE + alternates.fr },
    ].map((link) => ({ ...link, url: stripSlash(link.url) }));
    return locales.map((l) => [stripSlash(SITE + alternates[l]), links] as const);
  })
);

export default defineConfig({
  // "static" is the default in Astro v5. Pages with `export const prerender = false`
  // will be server-rendered by the node adapter (e.g. src/pages/api/contact.ts).
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/api/") && !page.includes("/review"),
      serialize: (item) => {
        const links = sitemapLinks.get(stripSlash(item.url));
        return links ? { ...item, links } : item;
      },
    }),
  ],
  build: {
    // The CSS bundle is ~50 KiB, so serve it as a hashed file under /_astro/
    // (cached for a year by server.mjs) instead of repeating it in every page.
    // Astro still inlines stylesheets small enough to not be worth a request.
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss() as never],
    build: {
      minify: "esbuild",
    },
  },
  site: SITE,
  trailingSlash: "never",
  redirects: {
    "/review": "https://g.page/r/CR0AgGP0Bx2HEBM/review",
    "/nettoyage-des-panneaux-solaires": "/services/panneaux-solaires",
    "/nettoyage-verandas": "/services/nettoyage-veranda",
    "/nettoyage-des-vitres": "/services/nettoyage-vitres",
    "/contact-5": "/contact",
    "/book-online": "/contact",
    "/services-9": "/services",
    "/about-6": "/",
    "/copie-de-politique-de-confidentialité": "/politique-de-confidentialite",
    // Services discontinued in October 2026 (roofs, facades)
    "/services/nettoyage-toiture": "/services",
    "/services/nettoyage-facade": "/services",
    "/ixelles/nettoyage-toiture": "/services",
    "/uccle/nettoyage-toiture": "/services",
    "/waterloo/nettoyage-toiture": "/services",
    "/woluwe-saint-lambert/nettoyage-toiture": "/services",
    "/etterbeek/nettoyage-toiture": "/services",
    "/watermael-boitsfort/nettoyage-toiture": "/services",
    // Residential cleaning replaced by communal areas (October 2026)
    "/services/nettoyage-residentiel": "/services",
  },
});
