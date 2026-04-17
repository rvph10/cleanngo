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
    // Inline all stylesheets to eliminate the render-blocking CSS request.
    // The generated CSS bundle is small (~10 KiB) so the inline cost is
    // negligible compared to the round-trip saved on the critical render path.
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss() as never],
  },
  site: "https://cleanngo.be",
  redirects: {
    "/review": "https://g.page/r/CR0AgGP0Bx2HEBM/review",
  },
});
