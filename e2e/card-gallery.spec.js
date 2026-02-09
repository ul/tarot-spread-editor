import { test, expect } from "@playwright/test";

// Cards are direct img children of #canvas (background img is inside a div)
const canvasCardsSelector = "#canvas > img";

test("clicking a card in gallery adds it to the canvas", async ({ page }) => {
  await page.goto("/");

  const canvasCards = page.locator(canvasCardsSelector);
  const initialCount = await canvasCards.count();

  await page.locator("a.mini").first().click();

  await expect(canvasCards).toHaveCount(initialCount + 1);
});

test("clicking the same card again adds a second copy", async ({ page }) => {
  await page.goto("/");

  const canvasCards = page.locator(canvasCardsSelector);
  const initialCount = await canvasCards.count();
  const card = page.locator("a.mini").first();

  await card.click();
  await expect(canvasCards).toHaveCount(initialCount + 1);

  await card.click();
  await expect(canvasCards).toHaveCount(initialCount + 2);
});

test("used card gets active class in gallery", async ({ page }) => {
  await page.goto("/");

  const card = page.locator("a.mini").first();
  await expect(card).not.toHaveClass(/active/);

  await card.click();

  await expect(card).toHaveClass(/active/);
});
