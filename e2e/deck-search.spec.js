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
