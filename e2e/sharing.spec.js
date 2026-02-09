import { test, expect } from "@playwright/test";

// Cards are direct img children of #canvas (background img is inside a div)
const canvasCardsSelector = "#canvas > img";

test("adding a card updates the URL fragment", async ({ page }) => {
  await page.goto("/");

  // Wait for initial load
  await page.waitForTimeout(500);
  const initialUrl = page.url();

  // Add a card
  await page.locator("a.mini").first().click();

  // Wait for debounced fragment update (250ms + buffer)
  await page.waitForTimeout(500);

  const newUrl = page.url();
  expect(newUrl).not.toBe(initialUrl);
  expect(newUrl).toContain("#");
});

test("navigating to URL with fragment restores state", async ({ page }) => {
  await page.goto("/");

  // Add a card to get a URL with state
  await page.locator("a.mini").first().click();
  const canvasCards = page.locator(canvasCardsSelector);
  await expect(canvasCards).toHaveCount(1);

  // Wait for fragment update
  await page.waitForTimeout(500);
  const urlWithCard = page.url();

  // Navigate to the URL with the fragment (fresh load)
  await page.goto(urlWithCard);

  // Card should be restored
  await expect(canvasCards).toHaveCount(1);
});
