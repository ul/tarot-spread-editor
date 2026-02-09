import { test, expect } from "@playwright/test";

test("opening background dialog makes it visible", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Background" }).click();

  const dialog = page.getByRole("dialog", { name: "Background" });
  await expect(dialog).toBeVisible();
});

test("setting a background color changes the canvas background", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Background" }).click();

  const dialog = page.getByRole("dialog", { name: "Background" });
  await expect(dialog).toBeVisible();

  // The color tab should be active by default
  const colorInput = dialog.locator("input[type=color]");
  await expect(colorInput).toBeVisible();

  // Set a color
  await colorInput.fill("#ff0000");

  // Click OK
  await dialog.getByRole("button", { name: "OK" }).click();
  await expect(dialog).not.toBeVisible();

  // Canvas background div is the first child of #canvas
  const bg = page.locator("#canvas > div").first();
  await expect(bg).toHaveCSS("background-color", "rgb(255, 0, 0)");
});

test("canceling background dialog does not change background", async ({
  page,
}) => {
  await page.goto("/");

  // Get initial background
  const bg = page.locator("#canvas > div").first();
  const initialBg = await bg.evaluate((el) => el.style.backgroundColor);

  await page.getByRole("button", { name: "Background" }).click();

  const dialog = page.getByRole("dialog", { name: "Background" });
  await expect(dialog).toBeVisible();

  const colorInput = dialog.locator("input[type=color]");
  await colorInput.fill("#00ff00");

  await dialog.getByRole("button", { name: "Cancel" }).click();
  await expect(dialog).not.toBeVisible();

  const afterBg = await bg.evaluate((el) => el.style.backgroundColor);
  expect(afterBg).toBe(initialBg);
});
