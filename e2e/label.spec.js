import { test, expect } from "@playwright/test";

test("clicking Add label opens the label dialog", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Add label" }).click();

  const dialog = page.getByRole("dialog", { name: "Label" });
  await expect(dialog).toBeVisible();
});

test("typing text and clicking OK adds a label to the canvas", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Add label" }).click();

  const dialog = page.getByRole("dialog", { name: "Label" });
  await expect(dialog).toBeVisible();

  // Type into the Quill editor inside the dialog
  const editor = dialog.locator(".ql-editor");
  await editor.click();
  await editor.type("Test Label");

  // Click OK
  await dialog.getByRole("button", { name: "OK" }).click();

  // Label should appear on canvas
  const labels = page.locator("#canvas div.ql-editor");
  await expect(labels.first()).toBeVisible();
});

test("clicking Cancel does not add a label", async ({ page }) => {
  await page.goto("/");

  const labelsBefore = await page.locator("#canvas div.ql-editor").count();

  await page.getByRole("button", { name: "Add label" }).click();

  const dialog = page.getByRole("dialog", { name: "Label" });
  await expect(dialog).toBeVisible();

  await dialog.getByRole("button", { name: "Cancel" }).click();

  await expect(dialog).not.toBeVisible();
  const labelsAfter = await page.locator("#canvas div.ql-editor").count();
  expect(labelsAfter).toBe(labelsBefore);
});
