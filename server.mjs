import express from "express";
import compression from "compression";
import { handler as ssrHandler } from "./dist/server/entry.mjs";

const PORT = parseInt(process.env.PORT ?? "4321", 10);
const app = express();

app.use(compression());
app.use(ssrHandler);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
