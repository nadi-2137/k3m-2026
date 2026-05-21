import { expect, test } from "@playwright/test";

test.describe("Keyboard interactions", () => {
  test("header dropdowns open on keyboard focus", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "Desktop navigation is hidden on mobile.");

    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");

    const navItem = page.locator('[data-nav-item="Postanowienia"]');
    const parentLink = navItem.locator(":scope > a");
    const dropdown = navItem.locator("[data-nav-dropdown]");

    await parentLink.focus();
    await expect(parentLink).toBeFocused();
    await expect(dropdown).toBeVisible();

    await page.keyboard.press("Tab");
    await expect(
      dropdown.getByRole("link", { name: "Co zmieniała" }),
    ).toBeFocused();
  });

  test("mobile menu opens, cycles focus and closes from keyboard", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "Mobile menu is hidden on desktop.");

    await page.goto("/");

    const button = page.locator("[data-mobile-menu-button]");
    const panel = page.locator("[data-mobile-menu-panel]");

    await button.focus();
    await page.keyboard.press("Enter");
    await expect(button).toHaveAttribute("aria-expanded", "true");
    await expect(panel).toBeVisible();
    await expect(page.locator("[data-mobile-menu-link]").first()).toBeFocused();

    await page.keyboard.press("Shift+Tab");
    await expect(button).toBeFocused();

    await page.keyboard.press("Shift+Tab");
    await expect(page.locator("[data-mobile-menu-link]").last()).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(button).toHaveAttribute("aria-expanded", "false");
    await expect(button).toBeFocused();
  });

  test("source excerpt tabs switch with arrow keys", async ({ page }) => {
    await page.goto("/tekst-konstytucji");

    const youngerTab = page.getByRole("tab", { name: "Młodszy uczeń" }).first();
    const olderTab = page.getByRole("tab", { name: "Starszy uczeń" }).first();

    await youngerTab.focus();
    await page.keyboard.press("ArrowRight");
    await expect(olderTab).toBeFocused();
    await expect(olderTab).toHaveAttribute("aria-selected", "true");

    await page.keyboard.press("ArrowLeft");
    await expect(youngerTab).toBeFocused();
    await expect(youngerTab).toHaveAttribute("aria-selected", "true");
  });

  test("quiz answers can be submitted from keyboard", async ({ page }) => {
    await page.goto("/quiz/pytania");

    const firstQuestion = page
      .locator(
        '[data-question-type="singleChoice"], [data-question-type="trueFalse"]',
      )
      .first();
    const firstOption = firstQuestion.locator("[data-option-index]").first();

    await firstOption.focus();
    await page.keyboard.press("Enter");

    await expect(firstQuestion.locator("[data-feedback]")).toBeVisible();
    await expect(firstOption).toHaveAttribute("aria-pressed", "true");
  });

  test("constitution accordion opens from keyboard", async ({ page }) => {
    await page.goto("/tekst-konstytucji");

    const secondArticle = page.locator(".k3m-constitution-article").nth(1);
    const summary = secondArticle.locator("summary");

    await summary.focus();
    await page.keyboard.press("Enter");

    await expect(secondArticle).toHaveJSProperty("open", true);
  });

  test("glossary filter and search work from keyboard", async ({ page }) => {
    await page.goto("/slownik");

    const search = page.locator("[data-glossary-search]");
    const systemFilter = page.getByRole("button", { name: "Ustrój" });

    await search.focus();
    await search.fill("liberum");
    await expect(
      page.locator("[data-glossary-entry]").filter({ hasText: "Liberum veto" }),
    ).toBeVisible();

    await systemFilter.focus();
    await page.keyboard.press("Enter");
    await expect(systemFilter).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("[data-glossary-count]")).toContainText("1");
  });
});
