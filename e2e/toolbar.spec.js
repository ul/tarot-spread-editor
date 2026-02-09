import { test, expect } from "@playwright/test";
import { waitForApp } from "./helpers.js";

// Cards are direct img children of #canvas (background img is inside a div)
const canvasCardsSelector = "#canvas > img";

test.describe("remove selected button", () => {
  test("disabled when nothing is selected", async ({ page }) => {
    await page.goto("/");

    const btn = page.getByRole("button", { name: "Remove selected" });
    await expect(btn).toBeDisabled();
  });

  test("enabled after selecting a card, removes it on click", async ({
    page,
  }) => {
    await page.goto("/");
    await waitForApp(page);

    // Add a card
    await page.locator("a.mini").first().click();
    const canvasCards = page.locator(canvasCardsSelector);
    await expect(canvasCards).toHaveCount(1);

    // Select the card by clicking it on the canvas (force: background intercepts)
    await canvasCards.first().click({ force: true });

    const btn = page.getByRole("button", { name: "Remove selected" });
    await expect(btn).toBeEnabled();

    await btn.click();
    await expect(canvasCards).toHaveCount(0);
  });
});

test.describe("remove all button", () => {
  test("disabled when canvas is empty", async ({ page }) => {
    await page.goto("/");

    const btn = page.getByRole("button", { name: "Remove all" });
    await expect(btn).toBeDisabled();
  });

  test("clears all cards after confirming dialog", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);

    // Add two cards
    await page.locator("a.mini").first().click();
    await page.locator("a.mini").nth(1).click();
    const canvasCards = page.locator(canvasCardsSelector);
    await expect(canvasCards).toHaveCount(2);

    // Accept the confirm dialog
    page.on("dialog", (dialog) => dialog.accept());

    await page.getByRole("button", { name: "Remove all" }).click();
    await expect(canvasCards).toHaveCount(0);
  });
});

test.describe("board toggle", () => {
  test("hides and shows the board panel", async ({ page }) => {
    await page.goto("/");

    const board = page.locator("div.board-section");
    await expect(board).not.toHaveClass(/collapsed/);

    await page.getByRole("button", { name: "Toggle board" }).click();
    await expect(board).toHaveClass(/collapsed/);

    await page.getByRole("button", { name: "Toggle board" }).click();
    await expect(board).not.toHaveClass(/collapsed/);
  });
});

test.describe("grid toggle", () => {
  test("toggles grid visibility via button style", async ({ page }) => {
    await page.goto("/");

    const btn = page.getByRole("button", { name: "Toggle grid" });

    // Grid is off by default - no special background color
    await expect(btn).not.toHaveCSS(
      "background-color",
      "rgba(100, 149, 237, 0.9)",
    );

    await btn.click();

    // Grid is now on
    await expect(btn).toHaveCSS(
      "background-color",
      "rgba(100, 149, 237, 0.9)",
    );

    await btn.click();

    // Grid is off again
    await expect(btn).not.toHaveCSS(
      "background-color",
      "rgba(100, 149, 237, 0.9)",
    );
  });
});
