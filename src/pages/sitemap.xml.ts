import type { APIRoute } from "astro";

// Keep prerender = false so this runs through the SSR handler.
// The middleware-based redirect doesn't work for unknown static paths
// because the Node standalone server serves 404.html before Astro's
// middleware layer gets a chance to intercept.
export const prerender = false;

export const GET: APIRoute = () =>
  new Response(null, {
    status: 301,
    headers: { Location: "/sitemap-index.xml" },
  });
