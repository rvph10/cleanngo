import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

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
  site: "https://cleanngo.be",
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
  },
});
