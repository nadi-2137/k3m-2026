import { createServer } from "node:http";
import { readFileSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const args = new Map(
  process.argv.slice(2).flatMap((arg, index, allArgs) => {
    if (!arg.startsWith("--")) return [];
    return [[arg.slice(2), allArgs[index + 1]]];
  }),
);

const root = resolve(process.cwd());
const distDir = resolve(root, "dist");
const port = Number(args.get("port") ?? process.env.PORT ?? 4323);
const basePath = (args.get("base") ?? process.env.BASE_PATH ?? "/k3m-2026")
  .replace(/\/+$/, "")
  .replace(/^([^/])/, "/$1");

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml; charset=utf-8"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
]);

const assertInside = (target, parent) => {
  const normalizedTarget = normalize(target);
  const normalizedParent = normalize(parent);

  if (
    normalizedTarget !== normalizedParent &&
    !normalizedTarget.startsWith(`${normalizedParent}\\`) &&
    !normalizedTarget.startsWith(`${normalizedParent}/`)
  ) {
    throw new Error(`Refusing to serve path outside dist: ${target}`);
  }
};

const routeToFile = (requestUrl) => {
  const url = new URL(requestUrl, `http://127.0.0.1:${port}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === "/") {
    pathname = `${basePath}/`;
  }

  if (pathname === basePath) {
    pathname = "/";
  } else if (pathname.startsWith(`${basePath}/`)) {
    pathname = pathname.slice(basePath.length);
  } else {
    throw new Error(`Request outside configured base path: ${pathname}`);
  }

  const withoutLeadingSlash = pathname.replace(/^\/+/, "");
  let filePath = resolve(distDir, withoutLeadingSlash);
  assertInside(filePath, distDir);

  try {
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      filePath = join(filePath, "index.html");
    }
  } catch {
    if (!extname(filePath)) {
      filePath = join(filePath, "index.html");
    }
  }

  assertInside(filePath, distDir);
  return filePath;
};

const server = createServer((request, response) => {
  try {
    const filePath = routeToFile(request.url ?? "/");
    const body = readFileSync(filePath);
    const contentType =
      contentTypes.get(extname(filePath)) ?? "application/octet-stream";

    response.writeHead(200, { "Content-Type": contentType });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Serving dist at http://127.0.0.1:${port}${basePath}/`);
});
