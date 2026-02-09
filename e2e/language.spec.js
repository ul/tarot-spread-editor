import { test, expect } from "@playwright/test";

test("default language is EN", async ({ page }) => {
  await page.goto("/");

  // The language button has title="Switch language" and displays "en"
  const langBtn = page.locator("button", { hasText: "en" }).filter({
    has: page.locator("i.fa-language"),
  });
  await expect(langBtn).toBeVisible();
  await expect(langBtn).toContainText("en");
});

test("clicking language button switches to RU and back", async ({ page }) => {
  await page.goto("/");

  const langBtn = page.locator("button", { has: page.locator("i.fa-language") });
  await expect(langBtn).toContainText("en");

  await langBtn.click();

  // Button should now show "ru"
  await expect(langBtn).toContainText("ru");

  // UI text should change — e.g. the deck search placeholder
  const input = page.locator("input.pure-input-rounded");
  await expect(input).toHaveAttribute("placeholder", /колод/i);

  // Click again to go back to EN
  await langBtn.click();
  await expect(langBtn).toContainText("en");
  await expect(input).toHaveAttribute("placeholder", /deck/i);
});
