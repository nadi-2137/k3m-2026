import { expect, test } from "@playwright/test";

const basePath = "/k3m-2026";

test.describe("production base path", () => {
  test("serves main pages, assets and metadata under /k3m-2026", async ({
    page,
  }) => {
    const homeResponse = await page.goto(`${basePath}/`);

    expect(homeResponse?.ok()).toBe(true);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute(
      "data-base-path",
      basePath,
    );
    await expect(
      page.locator('link[rel="stylesheet"]').first(),
    ).toHaveAttribute("href", new RegExp(`^${basePath}/_astro/`));
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      `https://nadia.luczak.org${basePath}/og-image.png`,
    );

    const textResponse = await page.goto(`${basePath}/tekst-konstytucji`);

    expect(textResponse?.ok()).toBe(true);
    await expect(page.locator("h1")).toContainText(
      "Tekst Konstytucji z komentarzem",
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://nadia.luczak.org${basePath}/tekst-konstytucji/`,
    );

    const sitemapResponse = await page.goto(`${basePath}/sitemap.xml`);

    expect(sitemapResponse?.ok()).toBe(true);
    await expect(page.locator("body")).toContainText(
      `https://nadia.luczak.org${basePath}/tekst-konstytucji`,
    );
  });
});
