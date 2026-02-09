import { test, expect } from "@playwright/test";

test("default scale is 1", async ({ page }) => {
  await page.goto("/");

  const canvas = page.locator("#canvas");
  await expect(canvas).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
});

test("changing the slider updates canvas transform scale", async ({
  page,
}) => {
  await page.goto("/");

  const slider = page.locator("input[type=range]");
  const canvas = page.locator("#canvas");

  // Set slider to 1.5
  await slider.fill("1.5");

  await expect(canvas).toHaveCSS(
    "transform",
    "matrix(1.5, 0, 0, 1.5, 0, 0)",
  );
});
