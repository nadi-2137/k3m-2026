import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";

const require = createRequire(import.meta.url);
const port = Number(process.env.K3M_LIGHTHOUSE_PORT ?? 4322);
const baseUrl = `http://127.0.0.1:${port}`;
const routes = ["/", "/quiz/pytania", "/os-czasu", "/przed-i-po"];
const outputDir = path.resolve("reports", "lighthouse");
const astroCli = path.join(
  path.dirname(require.resolve("astro/package.json")),
  "bin",
  "astro.mjs",
);
const thresholds = {
  performance: Number(process.env.K3M_LIGHTHOUSE_PERFORMANCE_THRESHOLD ?? 0.55),
  accessibility: 0.9,
  "best-practices": 0.9,
  seo: 0.9,
};

const preview = spawn(
  process.execPath,
  [astroCli, "preview", "--host", "127.0.0.1", "--port", String(port)],
  { stdio: "ignore" },
);

const waitForServer = async () => {
  const timeoutAt = Date.now() + 60_000;

  while (Date.now() < timeoutAt) {
    try {
      const response = await fetch(baseUrl);

      if (response.ok) {
        return;
      }
    } catch {
      // Preview is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Preview server did not start at ${baseUrl}`);
};

const slugifyRoute = (route) =>
  route === "/" ? "home" : route.replace(/^\/+/, "").replace(/\//g, "-");

try {
  await fs.mkdir(outputDir, { recursive: true });
  await waitForServer();

  const chrome = await launch({
    chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"],
  });

  try {
    const summary = [];

    for (const route of routes) {
      const url = `${baseUrl}${route}`;
      const result = await lighthouse(url, {
        port: chrome.port,
        output: ["json", "html"],
        logLevel: "error",
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
      });

      if (!result) {
        throw new Error(`Lighthouse did not return a result for ${route}`);
      }

      const [jsonReport, htmlReport] = Array.isArray(result.report)
        ? result.report
        : [result.report, ""];
      const name = slugifyRoute(route);

      await fs.writeFile(path.join(outputDir, `${name}.json`), jsonReport);
      await fs.writeFile(path.join(outputDir, `${name}.html`), htmlReport);

      const scores = Object.fromEntries(
        Object.entries(result.lhr.categories).map(([key, category]) => [
          key,
          category.score ?? 0,
        ]),
      );

      summary.push({ route, scores });
    }

    console.table(
      summary.map((item) => ({
        route: item.route,
        performance: item.scores.performance,
        accessibility: item.scores.accessibility,
        bestPractices: item.scores["best-practices"],
        seo: item.scores.seo,
      })),
    );

    await fs.writeFile(
      path.join(outputDir, "summary.json"),
      `${JSON.stringify({ thresholds, summary }, null, 2)}\n`,
    );

    const failures = summary.flatMap((item) =>
      Object.entries(thresholds)
        .filter(([category, threshold]) => item.scores[category] < threshold)
        .map(([category, threshold]) => ({
          route: item.route,
          category,
          score: item.scores[category],
          threshold,
        })),
    );

    if (failures.length > 0) {
      console.error("Lighthouse thresholds failed:");
      console.table(failures);
      process.exitCode = 1;
    }
  } finally {
    try {
      chrome.kill();
    } catch (error) {
      console.warn(
        `Could not remove Lighthouse temporary profile: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }
} finally {
  preview.kill();
}
