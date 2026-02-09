import { test, expect } from "@playwright/test";

// Cards are direct img children of #canvas (background img is inside a div)
const canvasCardsSelector = "#canvas > img";

test("clicking a card on canvas selects it (transformer appears)", async ({
  page,
}) => {
  await page.goto("/");

  // Add a card
  await page.locator("a.mini").first().click();

  const card = page.locator(canvasCardsSelector).first();
  // Use force:true because the background div intercepts pointer events
  await card.click({ force: true });

  // When selected, the "Remove selected" button becomes enabled
  const removeBtn = page.getByRole("button", { name: "Remove selected" });
  await expect(removeBtn).toBeEnabled();
});

test("clicking empty area deselects the card", async ({ page }) => {
  await page.goto("/");

  // Add a card and select it
  await page.locator("a.mini").first().click();
  const card = page.locator(canvasCardsSelector).first();
  await card.click({ force: true });

  // Verify card is selected
  const removeBtn = page.getByRole("button", { name: "Remove selected" });
  await expect(removeBtn).toBeEnabled();

  // Click the background to deselect — dispatch click directly on the element
  const background = page.locator("#canvas > div").first();
  await background.dispatchEvent("click");

  // Remove-selected button should be disabled (nothing selected)
  await expect(removeBtn).toBeDisabled();
});

test("dragging a card changes its position", async ({ page }) => {
  await page.goto("/");

  // Add a card
  await page.locator("a.mini").first().click();
  const card = page.locator(canvasCardsSelector).first();

  // Get initial transform
  const initialTransform = await card.evaluate((el) => el.style.transform);

  // Select the card first
  await card.click({ force: true });

  // Drag using mouse events on the card's position
  const box = await card.boundingBox();
  if (box) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(
      box.x + box.width / 2 + 100,
      box.y + box.height / 2 + 50,
      { steps: 5 },
    );
    await page.mouse.up();
  }

  // Wait for the transform update
  await page.waitForTimeout(100);

  // Position should have changed
  const newTransform = await card.evaluate((el) => el.style.transform);
  expect(newTransform).not.toBe(initialTransform);
});
