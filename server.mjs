// Production entry point. Wraps the Astro node handler so security and cache
// headers apply to every response, including prerendered pages and static
// assets, which are served by the adapter without running Astro middleware.
import http from "node:http";
import process from "node:process";

process.env.ASTRO_NODE_AUTOSTART = "disabled";
const { handler } = await import("./dist/server/entry.mjs");

const ANALYTICS_ORIGIN = "https://analytics.lab.upintown.dev";

const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${ANALYTICS_ORIGIN}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self' ${ANALYTICS_ORIGIN}`,
  "media-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Content-Security-Policy": CSP,
  "X-Frame-Options": "SAMEORIGIN",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

// Files under /_astro/ are content-hashed by the build, so they never change.
const HASHED_ASSET_CACHE = "public, max-age=31536000, immutable";
// Files from public/ keep stable names, so revalidate after a week.
const PUBLIC_ASSET_CACHE = "public, max-age=604800, stale-while-revalidate=86400";
const PUBLIC_ASSET_RE = /\.(mp4|webm|avif|webp|jpg|jpeg|png|svg|gif|ico|woff2|woff|ttf)$/i;

const server = http.createServer((req, res) => {
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    res.setHeader(name, value);
  }

  const pathname = (req.url ?? "/").split("?")[0];
  if (pathname.startsWith("/_astro/")) {
    res.setHeader("Cache-Control", HASHED_ASSET_CACHE);
  } else if (PUBLIC_ASSET_RE.test(pathname)) {
    res.setHeader("Cache-Control", PUBLIC_ASSET_CACHE);
  }

  handler(req, res);
});

const port = Number(process.env.PORT ?? 4321);
const host = process.env.HOST ?? "0.0.0.0";
server.listen(port, host, () => {
  process.stdout.write(`Server listening on http://${host}:${port}\n`);
});
