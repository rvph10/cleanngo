import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // "static" is the default in Astro v5. Pages with `export const prerender = false`
  // will be server-rendered by the node adapter (e.g. src/pages/api/contact.ts).
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    plugins: [tailwindcss() as never],
  },
  site: "https://example.com",
});
