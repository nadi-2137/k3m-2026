import type { APIRoute } from "astro";
import { absoluteWithBase } from "../utils/base";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL("https://konstytucja-3-maja.example.com");

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${absoluteWithBase("/sitemap.xml", baseUrl)}`,
      `Sitemap: ${absoluteWithBase("/sitemap-index.xml", baseUrl)}`,
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
};
