import { createReadStream } from "node:fs";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";

const root = decodeURIComponent(new URL(".", import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, "$1");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
};

const port = Number(process.env.PORT || 4173);

createServer((request, response) => {
  const requested = decodeURIComponent((request.url || "/").split("?")[0]);
  const relative = requested === "/" ? "index.html" : requested.replace(/^\/+/, "");
  const file = normalize(join(root, relative));

  if (!file.startsWith(normalize(root))) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  const stream = createReadStream(file);
  stream.on("open", () => {
    response.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
    stream.pipe(response);
  });
  stream.on("error", () => response.writeHead(404).end("Not found"));
}).listen(port, "127.0.0.1", () => {
  console.log(`Portfolio preview: http://127.0.0.1:${port}`);
});
