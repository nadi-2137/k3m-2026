import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const auditRoutes = [
  "/",
  "/tekst-konstytucji",
  "/quiz/pytania",
  "/quiz/wybor-odpowiedzi",
  "/quiz/prawda-czy-falsz",
  "/quiz/dopasowanie-pojec",
  "/quiz/chronologia",
  "/os-czasu",
  "/przed-i-po",
  "/mapa-strony",
];

test.describe("axe accessibility audit", () => {
  for (const route of auditRoutes) {
    test(`${route} has no serious accessibility violations`, async ({
      page,
    }) => {
      await page.goto(route);

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const seriousViolations = results.violations.filter((violation) =>
        ["serious", "critical"].includes(violation.impact ?? ""),
      );

      expect(
        seriousViolations,
        JSON.stringify(
          seriousViolations.map((violation) => ({
            id: violation.id,
            impact: violation.impact,
            help: violation.help,
            nodes: violation.nodes.map((node) => node.target),
          })),
          null,
          2,
        ),
      ).toEqual([]);
    });
  }
});
