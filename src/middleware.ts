import { defineMiddleware } from "astro:middleware";

const STATIC_ASSET_RE = /\.(mp4|webm|avif|jpg|jpeg|png|svg|gif|ico|woff2|woff|ttf)$/i;

// Long-lived cache for static assets. Files are not content-hashed so we avoid
// `immutable` — 7 days + stale-while-revalidate lets the browser serve from
// cache instantly while revalidating in the background.
const ASSET_CACHE = "public, max-age=604800, stale-while-revalidate=86400";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Redirect www → non-www (canonical domain)
  if (url.hostname === "www.cleanngo.be") {
    url.hostname = "cleanngo.be";
    return Response.redirect(url.toString(), 301);
  }

  const response = await next();
  const { pathname } = url;

  if (STATIC_ASSET_RE.test(pathname)) {
    response.headers.set("Cache-Control", ASSET_CACHE);
  }

  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
});
