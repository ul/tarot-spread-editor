import { test, expect } from "@playwright/test";
import { waitForApp } from "./helpers.js";

test("adding a card updates the URL fragment", async ({ page }) => {
  await page.goto("/");
  await waitForApp(page);

  // Wait for initial fragment to settle
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
