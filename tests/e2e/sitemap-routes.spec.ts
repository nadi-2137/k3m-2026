import { expect, test } from "@playwright/test";

import { sitemapItems } from "../../src/data/pages";

test.describe("sitemap routes", () => {
  for (const item of sitemapItems) {
    test(`${item.href} responds`, async ({ request }) => {
      const response = await request.get(item.href);

      expect(response.ok()).toBe(true);
    });
  }
});
