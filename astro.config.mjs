// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

const normalizeBase = (value = "/") => {
  if (value === "/" || value === "") return "/";

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.replace(/\/+$/, "");
};

const site = process.env.SITE_URL ?? "http://localhost/";
const base = normalizeBase(process.env.BASE_PATH);

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/materialy-do-druku/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
