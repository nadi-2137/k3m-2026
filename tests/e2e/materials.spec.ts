import { expect, test } from "@playwright/test";

import { downloadMaterials } from "../../src/data/materials";

test.describe("printable materials", () => {
  test("legacy printable-materials index points to public downloads page", async ({
    page,
  }) => {
    const response = await page.goto("/materialy-do-druku");

    expect(response?.ok()).toBe(true);
    await expect(page).toHaveURL(/\/do-pobrania\/?$/);
    await expect(
      page.getByRole("heading", { name: "Materiały do pobrania" }),
    ).toBeVisible();
  });

  for (const material of downloadMaterials) {
    test(`${material.slug} has printable page and generated PDF`, async ({
      page,
    }) => {
      const printableResponse = await page.goto(
        `/do-pobrania/${material.slug}`,
      );

      expect(printableResponse?.ok()).toBe(true);
      await expect(page.locator("h1")).toHaveText(material.title);
      await expect(page).toHaveURL(new RegExp(`/do-pobrania/${material.slug}`));

      await page.emulateMedia({ media: "print" });
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.getByRole("button", { name: "Drukuj" })).toBeHidden();

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 2,
      );

      expect(hasHorizontalOverflow).toBe(false);

      const pdfResponse = await page.request.get(
        `/pdfs/${material.pdfFileName}`,
      );

      expect(pdfResponse.ok()).toBe(true);
      expect(pdfResponse.headers()["content-type"]).toContain(
        "application/pdf",
      );
    });
  }
});
