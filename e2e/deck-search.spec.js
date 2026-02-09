import { test, expect } from "@playwright/test";

test("selecting a deck from autocomplete changes the active deck", async ({
  page,
}) => {
  await page.goto("/");

  const input = page.getByRole("textbox", { name: "Select a deck..." });
  await expect(input).toHaveValue("Rider Waite");

  await input.click();
  await input.fill("thoth");

  const option = page.getByRole("link", { name: "Thoth", exact: true });
  await expect(option).toBeVisible();
  await option.click();

  await expect(input).not.toHaveValue("Rider Waite");
  await expect(input).toHaveValue(/Thoth/);
});

test("keyboard navigation selects a deck", async ({ page }) => {
  await page.goto("/");

  const input = page.getByRole("textbox", { name: "Select a deck..." });
  await input.click();
  await input.fill("thoth");

  const menu = page.locator(".menu-wrapper.open");
  await expect(menu).toBeVisible();

  await input.press("ArrowDown");
  const activeItem = menu.locator("li.pure-menu-item.pure-menu-active");
  await expect(activeItem).toBeVisible();

  await input.press("Enter");
  await expect(input).toHaveValue(/Thoth/);
});

test("typing filters the deck list", async ({ page }) => {
  await page.goto("/");

  const input = page.getByRole("textbox", { name: "Select a deck..." });
  await input.click();
  await input.fill("rider");

  const menu = page.locator(".menu-wrapper.open");
  await expect(menu).toBeVisible();

  const items = menu.locator("li.pure-menu-item");
  const count = await items.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    await expect(items.nth(i)).toContainText(/rider/i);
  }
});
