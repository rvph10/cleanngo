import { createServer } from "node:http";
import { createGzip } from "node:zlib";
import { handler as ssrHandler } from "./dist/server/entry.mjs";

const PORT = parseInt(process.env.PORT ?? "4321", 10);

// Content types that benefit from gzip compression
const COMPRESSIBLE = /^(text\/|application\/(javascript|json|xml)|image\/svg\+xml)/;
const NO_BODY = new Set([204, 205, 304]);

function withGzip(req, res, next) {
  if (!/\bgzip\b/.test(req.headers["accept-encoding"] ?? "")) return next();

  const gz = createGzip({ level: 6 });
  let decided = false;
  let active = false;

  const _writeHead = res.writeHead.bind(res);
  const _write = res.write.bind(res);
  const _end = res.end.bind(res);

  function decide(statusCode) {
    if (decided) return;
    decided = true;
    const ct = String(res.getHeader("content-type") ?? "");
    active = !NO_BODY.has(statusCode) && COMPRESSIBLE.test(ct);
    if (active) {
      res.setHeader("Content-Encoding", "gzip");
      res.removeHeader("Content-Length");
      gz.on("data", _write);
      gz.once("end", () => _end());
    }
  }

  res.writeHead = function (code, ...args) {
    decide(code);
    return _writeHead(code, ...args);
  };

  res.write = function (chunk, enc, cb) {
    decide(res.statusCode);
    return active ? gz.write(chunk, enc, cb) : _write(chunk, enc, cb);
  };

  res.end = function (chunk, enc, cb) {
    decide(res.statusCode);
    if (!active) return _end(chunk, enc, cb);
    if (chunk) gz.write(chunk, enc);
    return gz.end(cb);
  };

  next();
}

createServer((req, res) => {
  withGzip(req, res, () => {
    ssrHandler(req, res, () => {
      res.writeHead(500);
      res.end("Internal Server Error");
    });
  });
}).listen(PORT, () => console.log(`Server on :${PORT}`));
