import { test, expect } from "@playwright/test";
import { waitForApp } from "./helpers.js";

const canvasCards = "#canvas > img";

async function selectDeck(page, query, name) {
  const input = page.getByRole("textbox", { name: "Select a deck..." });
  await input.click();
  await input.fill(query);
  await page.getByRole("link", { name, exact: true }).click();
  await expect(input).toHaveValue(new RegExp(name));
}

test("cards used in one deck are not marked as used in another", async ({
  page,
}) => {
  await page.goto("/");
  await waitForApp(page);
  await page.locator("a.mini").first().click();
  await expect(page.locator("a.mini").first()).toHaveClass(/active/);

  await selectDeck(page, "thoth", "Thoth");
  await expect(page.locator("a.mini.active")).toHaveCount(0);
});

test("switching decks resets the suit", async ({ page }) => {
  await page.goto("/");
  await waitForApp(page);
  const suits = page.locator(".pure-menu-list li.pure-menu-item a");
  await suits.last().click();
  await expect(page.locator("li.pure-menu-active")).toHaveCount(1);

  await selectDeck(page, "thoth", "Thoth");
  await expect(suits.first().locator("..")).toHaveClass(/pure-menu-active/);
});

test("resizing from the left edge keeps the right edge in place", async ({
  page,
}) => {
  await page.goto("/");
  await waitForApp(page);
  await page.locator("a.mini").nth(0).click();
  await page.locator("a.mini").nth(1).click();
  // select both cards: the second one is selected, shift-click the first
  await page.keyboard.down("Shift");
  await page.locator(canvasCards).first().dispatchEvent("pointerdown", { shiftKey: true });

  const overlay = page.locator('div[role="slider"] + div');
  // wait until the selection overlay covers both cards
  const cardWidth = (await page.locator(canvasCards).first().boundingBox()).width;
  await expect
    .poll(async () => (await overlay.boundingBox()).width)
    .toBeGreaterThan(cardWidth * 1.5);
  const before = await overlay.boundingBox();
  const right = before.x + before.width;

  const y = before.y + before.height / 2;
  await page.mouse.move(before.x + 3, y);
  await page.mouse.down();
  for (let i = 1; i <= 6; i++) await page.mouse.move(before.x + 3 - i * 10, y);
  await page.mouse.up();
  await page.keyboard.up("Shift");

  await expect.poll(async () => (await overlay.boundingBox()).width).toBeGreaterThan(before.width + 30);
  const after = await overlay.boundingBox();
  expect(Math.abs(after.x + after.width - right)).toBeLessThan(3);
});

test("releasing the pointer outside the canvas does not leave multiselect on", async ({
  page,
}) => {
  await page.goto("/");
  await waitForApp(page);
  await page.locator("a.mini").nth(0).click();
  await page.locator("a.mini").nth(1).click();

  // press on the canvas, release over the header
  const card = await page.locator(canvasCards).first().boundingBox();
  await page.mouse.move(card.x + 5, card.y + 5);
  await page.mouse.down();
  await page.mouse.move(10, 10);
  await page.mouse.up();

  // a plain click on a card now selects only that card
  await page.locator(canvasCards).nth(1).dispatchEvent("pointerdown");
  await page.getByRole("button", { name: "Remove selected" }).first().click();
  await expect(page.locator(canvasCards)).toHaveCount(1);
});

test("reopening the background dialog and pressing OK keeps the image", async ({
  page,
}) => {
  const src = "https://decks.mantike.pro/RiderWaiteTarot/back.jpg";
  await page.goto("/");
  await waitForApp(page);
  const dialog = page.getByRole("dialog", { name: "Background" });
  const image = page.locator("#canvas > div img");

  await page.getByRole("button", { name: "Background" }).click();
  await dialog.getByText("Link", { exact: true }).click();
  await dialog.locator("input[type=url]").fill(src);
  await dialog.getByRole("button", { name: "OK" }).click();
  await expect(image).toHaveAttribute("src", src);

  await page.getByRole("button", { name: "Background" }).click();
  await expect(dialog.locator("input[type=url]")).toHaveValue(src);
  await dialog.getByRole("button", { name: "OK" }).click();
  await expect(image).toHaveAttribute("src", src);

  await page.getByRole("button", { name: "Background" }).click();
  await dialog.getByRole("button", { name: "Remove image" }).click();
  await dialog.getByRole("button", { name: "OK" }).click();
  await expect(image).not.toHaveAttribute("src", src);
});

test("labels from the context menu go where it was opened, later ones don't", async ({
  page,
}) => {
  await page.goto("/");
  await waitForApp(page);
  const labels = page.locator("#canvas div.ql-editor");
  const dialog = page.getByRole("dialog", { name: "Label" });
  const addLabel = async () => {
    await dialog.locator(".ql-editor").click();
    await page.keyboard.type("x");
    await dialog.getByRole("button", { name: "OK" }).click();
  };

  const bg = await page.locator("#canvas > div").first().boundingBox();
  await page.mouse.click(bg.x + 300, bg.y + 25, { button: "right" });
  await page.locator(".goog-menuitem", { hasText: "Add label" }).click();
  await addLabel();
  const first = await labels.nth(0).boundingBox();
  expect(Math.abs(first.x - (bg.x + 300))).toBeLessThan(15);
  expect(Math.abs(first.y - (bg.y + 25))).toBeLessThan(15);

  await page.getByRole("button", { name: "Add label" }).click();
  await addLabel();
  const second = await labels.nth(1).boundingBox();
  expect(Math.abs(second.x - first.x) + Math.abs(second.y - first.y)).toBeGreaterThan(30);
});
