import { expect, test } from "@playwright/test";

const visualPages = [
  { name: "home", path: "/" },
  { name: "quiz-questions", path: "/quiz/pytania" },
  { name: "timeline", path: "/os-czasu" },
  { name: "comparison-table", path: "/przed-i-po" },
];

test.describe("responsive visual snapshots", () => {
  for (const pageCase of visualPages) {
    test(`${pageCase.name} desktop/mobile screenshot`, async ({ page }) => {
      await page.goto(pageCase.path);
      await page.addStyleTag({
        content: `
          *,
          *::before,
          *::after {
            animation: none !important;
            scroll-behavior: auto !important;
            transition: none !important;
          }
        `,
      });

      await expect(page).toHaveScreenshot(`${pageCase.name}.png`, {
        animations: "disabled",
        fullPage: true,
      });
    });
  }
});
