import { expect, test } from "@playwright/test";

const metadataCases = [
  {
    path: "/",
    title: "Konstytucja 3 Maja dla uczniów",
    documentTitle: "Konstytucja 3 Maja dla uczniów",
    description:
      "Proste i źródłowe wprowadzenie do Konstytucji 3 Maja: data, znaczenie, twórcy, postanowienia i quiz.",
    canonical: "http://localhost/",
  },
  {
    path: "/tekst-konstytucji",
    title: "Tekst Konstytucji 3 Maja",
    documentTitle: "Tekst Konstytucji 3 Maja | Konstytucja 3 Maja dla uczniów",
    description:
      "Opracowany tekst Konstytucji 3 Maja: preambuła, artykuły I-XI, cytaty, objaśnienia i linki do skanów.",
    canonical: "http://localhost/tekst-konstytucji/",
  },
  {
    path: "/zrodla",
    title: "Źródła o Konstytucji 3 Maja",
    documentTitle:
      "Źródła o Konstytucji 3 Maja | Konstytucja 3 Maja dla uczniów",
    description:
      "Biblioteka Sejmowa, AGAD, Zamek Królewski, ZPE i opracowania naukowe: źródła do nauki o Konstytucji 3 Maja.",
    canonical: "http://localhost/zrodla/",
  },
];

test.describe("Metadata and social preview", () => {
  for (const item of metadataCases) {
    test(`${item.path} exposes title, description and social preview tags`, async ({
      page,
    }) => {
      await page.goto(item.path);

      await expect(page).toHaveTitle(item.documentTitle);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        "content",
        item.description,
      );
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        item.canonical,
      );
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
        "content",
        item.title,
      );
      await expect(
        page.locator('meta[property="og:description"]'),
      ).toHaveAttribute("content", item.description);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        "content",
        "http://localhost/og-image.png",
      );
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
        "content",
        "summary_large_image",
      );
    });
  }

  test("HTML sitemap is reader-facing and hides XML-only metadata", async ({
    page,
  }) => {
    await page.goto("/mapa-strony");

    await expect(page.locator("main")).not.toContainText(
      /\b(monthly|weekly|yearly|priority|changefreq)\b/i,
    );
    await expect(page.locator(".k3m-sitemap-card").first()).toContainText(
      "Przejdź do strony",
    );
  });
});
