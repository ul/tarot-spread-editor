import { test, expect } from "@playwright/test";

// Cards are direct img children of #canvas (background img is inside a div)
const canvasCardsSelector = "#canvas > img";

test("clicking random adds a card to the canvas", async ({ page }) => {
  await page.goto("/");

  const canvasCards = page.locator(canvasCardsSelector);
  const initialCount = await canvasCards.count();

  await page.getByRole("button", { name: "random" }).click();

  await expect(canvasCards).toHaveCount(initialCount + 1);
});

test("with reversible checked, random card may be upside down", async ({
  page,
}) => {
  await page.goto("/");

  const checkbox = page.locator("label.pure-checkbox input[type=checkbox]");
  await checkbox.check();

  // Draw multiple cards to increase chance of a reversed one
  const randomBtn = page.getByRole("button", { name: "random" });
  for (let i = 0; i < 20; i++) {
    await randomBtn.click();
  }

  const canvasCards = page.locator(canvasCardsSelector);
  const count = await canvasCards.count();
  // May get slightly fewer if duplicates are skipped; just need enough cards
  expect(count).toBeGreaterThanOrEqual(10);

  // Check if at least one card has a non-zero rotation (reversed = π rad ≈ 3.14)
  let hasRotated = false;
  for (let i = 0; i < count; i++) {
    const transform = await canvasCards.nth(i).evaluate(
      (el) => el.style.transform,
    );
    // Match rotate with a non-zero angle
    const match = transform.match(/rotate\(([^)]+)rad\)/);
    if (match && parseFloat(match[1]) !== 0) {
      hasRotated = true;
      break;
    }
  }
  expect(hasRotated).toBe(true);
});
