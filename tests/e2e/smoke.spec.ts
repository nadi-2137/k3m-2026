import { expect, test } from "@playwright/test";

const coreRoutes = [
  "/",
  "/historia",
  "/czym-byla-konstytucja-3-maja",
  "/postanowienia-konstytucji-3-maja",
  "/tekst-konstytucji",
  "/tworcy-konstytucji-3-maja",
  "/os-czasu",
  "/przed-i-po",
  "/quiz",
  "/quiz/pytania",
  "/quiz/wybor-odpowiedzi",
  "/quiz/prawda-czy-falsz",
  "/quiz/dopasowanie-pojec",
  "/quiz/chronologia",
  "/materialy",
  "/zrodla",
  "/mapa-strony",
];

test.describe("Smoke", () => {
  for (const route of coreRoutes) {
    test(`${route} renders without horizontal overflow`, async ({ page }) => {
      const response = await page.goto(route);

      expect(response?.ok()).toBe(true);
      await expect(page.locator("main").first()).toBeVisible();
      await expect(page.locator("h1").first()).toBeVisible();

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 2,
      );

      expect(hasHorizontalOverflow).toBe(false);
    });
  }

  test("home hero keeps layout shift under control", async ({ page }) => {
    await page.addInitScript(() => {
      window.__k3mCumulativeLayoutShift = 0;

      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShift = entry as LayoutShift;

          if (!layoutShift.hadRecentInput) {
            window.__k3mCumulativeLayoutShift += layoutShift.value;
          }
        }
      }).observe({ type: "layout-shift", buffered: true });
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(750);

    const cumulativeLayoutShift = await page.evaluate(
      () => window.__k3mCumulativeLayoutShift,
    );

    expect(cumulativeLayoutShift).toBeLessThan(0.1);
  });

  test("Postanowienia dropdown stays inside laptop viewport", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "Desktop navigation is hidden on mobile.");

    for (const width of [1024, 1100, 1280, 1366]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");

      const desktopNav = page.locator("nav[aria-label='Główna nawigacja']");
      await desktopNav.getByRole("link", { name: "Postanowienia" }).hover();

      const dropdown = desktopNav
        .locator(".k3m-nav-dropdown")
        .filter({ hasText: "Trójpodział władzy" });

      await expect(dropdown).toBeVisible();

      const box = await dropdown.boundingBox();

      expect(box).not.toBeNull();
      expect(box!.x).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1);
    }
  });

  test("dropdown active states, hover and focus work on desktop", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "Desktop navigation is hidden on mobile.");

    const cases = [
      { path: "/os-czasu", parent: "Historia", child: "Oś czasu" },
      {
        path: "/losy-konstytucji-3-maja",
        parent: "Historia",
        child: "Losy konstytucji",
      },
      { path: "/przed-i-po", parent: "Postanowienia", child: "Przed i po" },
      {
        path: "/liberum-veto",
        parent: "Postanowienia",
        child: "Liberum veto",
      },
      {
        path: "/trojpodzial-wladzy",
        parent: "Postanowienia",
        child: "Trójpodział władzy",
      },
      { path: "/mieszczanie", parent: "Postanowienia", child: "Mieszczanie" },
      { path: "/chlopi", parent: "Postanowienia", child: "Chłopi" },
      { path: "/do-pobrania", parent: "Materiały", child: "Do pobrania" },
      { path: "/slownik", parent: "Materiały", child: "Słownik" },
      {
        path: "/jak-odpowiedziec-na-sprawdzianie",
        parent: "Materiały",
        child: "Na sprawdzian",
      },
      { path: "/zrodla", parent: "Materiały", child: "Źródła" },
    ];

    await page.setViewportSize({ width: 1280, height: 900 });

    for (const item of cases) {
      await page.goto(item.path);

      const desktopNav = page.locator("nav[aria-label='Główna nawigacja']");
      const navItem = desktopNav.locator(`[data-nav-item="${item.parent}"]`);
      const parentLink = navItem.locator(":scope > a");
      const childLink = navItem
        .locator(".k3m-nav-dropdown__link")
        .filter({ hasText: item.child });
      const dropdown = navItem.locator("[data-nav-dropdown]");

      await expect(parentLink).toHaveClass(/k3m-nav-link--active/);
      await expect(childLink).toHaveClass(/k3m-nav-dropdown__link--active/);

      await parentLink.hover();
      await expect(dropdown).toBeVisible();

      await parentLink.focus();
      await expect(dropdown).toBeVisible();
    }
  });

  test("key viewports render without horizontal overflow", async ({ page }) => {
    for (const width of [390, 768, 1366, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto("/");
      await page.waitForLoadState("networkidle");

      await expect(page.locator("header")).toBeVisible();
      await expect(page.locator("h1")).toBeVisible();

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 2,
      );
      const headerWidth = await page
        .locator("header")
        .evaluate((element) => element.getBoundingClientRect().width);

      expect(hasHorizontalOverflow).toBe(false);
      expect(headerWidth).toBeLessThanOrEqual(width);
    }
  });

  test("interactive quiz can be completed", async ({ page }) => {
    await page.goto("/quiz/pytania");

    for (const question of await page.locator("[data-question]").all()) {
      const option = question.locator("[data-option-index]").first();
      const matchButton = question.locator("[data-match-check]");

      if (await option.count()) {
        await option.click();
      } else if (await matchButton.count()) {
        const selects = await question.locator("[data-match-select]").all();

        for (const [index, select] of selects.entries()) {
          await select.selectOption(String(index));
        }

        await matchButton.click();
      }

      await expect(question.locator("[data-feedback]")).toBeVisible();
    }

    await expect(page.locator("[data-quiz-result]")).toBeVisible();
    await expect(page.locator("[data-result-text]")).toContainText(
      "Twój wynik:",
    );
    await expect(page.locator("[data-result-review]")).toBeVisible();
    await expect(
      page.locator("[data-result-glossary] a").first(),
    ).toBeVisible();
  });

  test("mixed quiz draws 18 random questions and shuffles choice answers", async ({
    page,
  }) => {
    await page.goto("/quiz/pytania");

    await expect(page.locator("[data-question]")).toHaveCount(18);

    const choiceQuestions = page.locator(
      '[data-question-type="singleChoice"], [data-question-type="trueFalse"]',
    );
    await expect(choiceQuestions.first()).toBeVisible();

    const firstCorrectPositions = await choiceQuestions.evaluateAll(
      (questions) =>
        questions.map((question) => {
          const options = Array.from(
            question.querySelectorAll("[data-option-index]"),
          );

          return options.findIndex(
            (option) => option.getAttribute("data-option-correct") === "true",
          );
        }),
    );

    expect(firstCorrectPositions.some((index) => index > 0)).toBe(true);
  });

  test("glossary search works with and without Polish characters", async ({
    page,
  }) => {
    await page.goto("/slownik");

    const search = page.locator("[data-glossary-search]");

    await search.fill("trojpodzial");
    await expect(
      page.locator("[data-glossary-entry]").filter({
        hasText: "Trójpodział władzy",
      }),
    ).toBeVisible();
    await expect(page.locator("[data-glossary-count]")).toContainText("1");

    await search.fill("pańszczyzna");
    await expect(
      page.locator("[data-glossary-entry]").filter({ hasText: "Pańszczyzna" }),
    ).toBeVisible();

    await search.fill("panszczyzna");
    await expect(
      page.locator("[data-glossary-entry]").filter({ hasText: "Pańszczyzna" }),
    ).toBeVisible();
  });

  test("sources page explains categories and local illustration licenses", async ({
    page,
  }) => {
    await page.goto("/zrodla");

    await expect(
      page.getByRole("heading", { name: "Tekst źródłowy" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Archiwalia i skany" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Materiały edukacyjne" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Opracowania i kontekst" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Ilustracje i multimedia" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Licencje lokalnych ilustracji" }),
    ).toBeVisible();
    await expect(page.locator("main")).toContainText("Olek Remesz / Orem");
  });

  test("breadcrumbs reflect parent navigation groups", async ({ page }) => {
    const cases = [
      {
        path: "/przed-i-po",
        parent: "Postanowienia",
        current: "Przed i po",
      },
      {
        path: "/zrodla",
        parent: "Materiały",
        current: "Źródła",
      },
      {
        path: "/do-pobrania",
        parent: "Materiały",
        current: "Do pobrania",
      },
      {
        path: "/slownik",
        parent: "Materiały",
        current: "Słownik",
      },
      {
        path: "/jak-odpowiedziec-na-sprawdzianie",
        parent: "Materiały",
        current: "Na sprawdzian",
      },
    ];

    for (const item of cases) {
      await page.goto(item.path);

      const breadcrumb = page.getByRole("navigation", { name: "Ścieżka" });

      await expect(
        breadcrumb.getByRole("link", { name: "Start" }),
      ).toBeVisible();
      await expect(
        breadcrumb.getByRole("link", { name: item.parent }),
      ).toBeVisible();
      await expect(breadcrumb).toContainText(item.current);
    }
  });

  test("chronology task reacts to ordering controls", async ({ page }) => {
    await page.goto("/quiz/chronologia");

    const firstItem = page.locator("[data-chronology-item]").first();
    await firstItem.locator("[data-move-down]").click();

    await expect(page.locator("[data-chronology-status]")).toContainText(
      "Zmieniono kolejność",
    );

    await page.locator("[data-chronology-check]").click();
    await expect(page.locator("[data-chronology-feedback]")).toBeVisible();
  });

  test("timeline and comparison table keep semantic structure", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/os-czasu");

    const detailedTimeline = page.locator("ol.k3m-timeline--detailed");

    await expect(detailedTimeline).toBeVisible();
    await expect(
      detailedTimeline.locator("time[datetime]").first(),
    ).toBeVisible();

    await page.goto("/przed-i-po");
    await expect(page.locator("table caption")).toContainText("Porównanie");
    await expect(page.locator("th[scope='row']").first()).toHaveText(
      /Podejmowanie decyzji/,
    );

    if (isMobile) {
      await expect(page.locator(".k3m-comparison-card").first()).toBeVisible();
    } else {
      await expect(page.locator(".k3m-table--comparison")).toBeVisible();
    }
  });

  test("mobile menu opens, traps focus and closes with Escape", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "Mobile menu is hidden on desktop.");

    await page.goto("/");

    const button = page.locator("[data-mobile-menu-button]");
    const panel = page.locator("[data-mobile-menu-panel]");

    await button.click();
    await expect(button).toHaveAttribute("aria-expanded", "true");
    await expect(panel).toBeVisible();
    await expect(page.locator("[data-mobile-menu-link]").first()).toBeFocused();
    await expect(
      panel.locator(
        '[data-mobile-menu-group="Postanowienia"] .k3m-mobile-menu-children',
      ),
    ).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(button).toHaveAttribute("aria-expanded", "false");
    await expect(button).toBeFocused();
  });
});

declare global {
  interface Window {
    __k3mCumulativeLayoutShift: number;
  }

  interface LayoutShift extends PerformanceEntry {
    value: number;
    hadRecentInput: boolean;
  }
}
