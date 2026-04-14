import { defineMiddleware } from "astro:middleware";

const STATIC_ASSET_RE = /\.(mp4|webm|avif|jpg|jpeg|png|svg|gif|ico|woff2|woff|ttf)$/i;

// Long-lived cache for static assets. Files are not content-hashed so we avoid
// `immutable` — 7 days + stale-while-revalidate lets the browser serve from
// cache instantly while revalidating in the background.
const ASSET_CACHE = "public, max-age=604800, stale-while-revalidate=86400";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const { pathname } = new URL(context.request.url);

  if (STATIC_ASSET_RE.test(pathname)) {
    response.headers.set("Cache-Control", ASSET_CACHE);
  }

  return response;
});
