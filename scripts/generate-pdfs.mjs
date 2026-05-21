import { createServer } from "node:http";
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { chromium } from "@playwright/test";

import { downloadMaterials } from "../src/data/site.ts";

const root = resolve(process.cwd());
const distDir = resolve(root, "dist");
const outputDir = resolve(root, "public", "pdfs");
const basePath = (process.env.BASE_PATH || "/k3m-2026").replace(/\/+$/, "");
const port = Number(process.env.PDF_SERVER_PORT || 4362);
const origin = `http://127.0.0.1:${port}`;

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
  const url = new URL(requestUrl, origin);
  let pathname = decodeURIComponent(url.pathname);

  if (basePath && pathname.startsWith(`${basePath}/`)) {
    pathname = pathname.slice(basePath.length);
  } else if (basePath && pathname === basePath) {
    pathname = "/";
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

const createStaticServer = () =>
  createServer((request, response) => {
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

const listen = (server) =>
  new Promise((resolveListen, rejectListen) => {
    server.once("error", rejectListen);
    server.listen(port, "127.0.0.1", () => resolveListen());
  });

const close = (server) =>
  new Promise((resolveClose, rejectClose) => {
    server.close((error) => (error ? rejectClose(error) : resolveClose()));
  });

if (!statSync(distDir, { throwIfNoEntry: false })?.isDirectory()) {
  throw new Error(
    "Missing dist directory. Run pnpm build:prod before generating PDFs.",
  );
}

mkdirSync(outputDir, { recursive: true });

const server = createStaticServer();
await listen(server);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } });
await page.emulateMedia({ media: "print" });

const manifest = [];

try {
  for (const material of downloadMaterials) {
    const url = `${origin}${basePath}/do-pobrania/${material.slug}/`;
    const outputPath = join(outputDir, material.pdfFileName);

    const response = await page.goto(url, { waitUntil: "networkidle" });

    if (!response?.ok()) {
      throw new Error(
        `Cannot render ${material.slug}: HTTP ${response?.status()}`,
      );
    }

    await page.evaluate(() => document.fonts.ready);
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });

    const size = statSync(outputPath).size;
    manifest.push({
      slug: material.slug,
      title: material.title,
      fileName: material.pdfFileName,
      bytes: size,
    });

    console.log(`Generated ${material.pdfFileName} (${size} bytes)`);
  }
} finally {
  await browser.close();
  await close(server);
}

writeFileSync(
  join(outputDir, "manifest.json"),
  `${JSON.stringify({ generatedAt: new Date().toISOString(), files: manifest }, null, 2)}\n`,
);
