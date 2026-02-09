import { test, expect } from "@playwright/test";

// The suit menu is the div.pure-menu with width: 150px inside the board section
const suitMenuSelector = '.board-section div.pure-menu[style*="150px"]';

test("clicking a suit tab updates the card gallery", async ({ page }) => {
  await page.goto("/");

  const suitMenu = page.locator(suitMenuSelector);
  const suitItems = suitMenu.locator("a.pure-menu-link");

  // Wait for gallery to be populated
  await expect(page.locator("img.card-gallery-img").first()).toBeVisible();

  const firstSuitSrc = await page
    .locator("img.card-gallery-img")
    .first()
    .getAttribute("src");

  // Click a different suit (second one)
  await suitItems.nth(1).click();

  // Wait for gallery images to update
  await expect(page.locator("img.card-gallery-img").first()).not.toHaveAttribute(
    "src",
    firstSuitSrc,
  );
});

test("active suit gets highlighted class", async ({ page }) => {
  await page.goto("/");

  const suitMenu = page.locator(suitMenuSelector);
  const suitItems = suitMenu.locator("li.pure-menu-item");

  // Default active-suit is 0, so first item should have pure-menu-active
  await expect(suitItems.first()).toHaveClass(/pure-menu-active/);

  // Click second suit
  await suitItems.nth(1).locator("a.pure-menu-link").click();

  await expect(suitItems.nth(1)).toHaveClass(/pure-menu-active/);
  await expect(suitItems.first()).not.toHaveClass(/pure-menu-active/);
});
