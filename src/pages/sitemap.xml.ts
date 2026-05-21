import type { APIRoute } from "astro";
import { sitemapItems, sitemapLastModified } from "../data/site";
import { absoluteWithBase, withBase } from "../utils/base";

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL("https://konstytucja-3-maja.example.com");

  const urls = sitemapItems
    .map((item) => {
      const loc = absoluteWithBase(item.href, baseUrl);

      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${sitemapLastModified}</lastmod>`,
        `    <changefreq>${item.changefreq}</changefreq>`,
        `    <priority>${item.priority.toFixed(1)}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return new Response(
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      `<?xml-stylesheet type="text/xsl" href="${withBase("/sitemap.xsl")}"?>`,
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      urls,
      "</urlset>",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
};
