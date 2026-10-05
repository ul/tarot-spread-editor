import { test, expect } from "@playwright/test";
import { waitForApp, linkTo } from "./helpers.js";

const canvasCards = "#canvas > img";

test("adding a card updates the URL fragment", async ({ page }) => {
  await page.goto("/");
  await waitForApp(page);
  const initialUrl = page.url();

  await page.locator("a.mini").first().click();

  await expect.poll(() => page.url()).not.toBe(initialUrl);
  expect(page.url()).toContain("#");
});

test("a shared link restores the spread", async ({ page, context }) => {
  await page.goto("/");
  await waitForApp(page);
  await page.locator("a.mini").nth(0).click();
  await expect.poll(() => new URL(page.url()).hash).not.toBe("");
  const oneCard = page.url();
  await page.locator("a.mini").nth(1).click();
  await expect.poll(() => page.url()).not.toBe(oneCard);

  const other = await context.newPage();
  await other.goto(page.url());
  await waitForApp(other);
  await expect(other.locator(canvasCards)).toHaveCount(2);
});

test("Back undoes the last change, down to the initial empty canvas", async ({
  page,
}) => {
  await page.goto("/");
  await waitForApp(page);
  await page.locator("a.mini").nth(0).click();
  await expect.poll(() => new URL(page.url()).hash).not.toBe("");
  const oneCard = page.url();
  await page.locator("a.mini").nth(1).click();
  await expect.poll(() => page.url()).not.toBe(oneCard);
  await expect(page.locator(canvasCards)).toHaveCount(2);

  await page.goBack();
  await expect(page.locator(canvasCards)).toHaveCount(1);
  await page.goBack();
  await expect(page.locator(canvasCards)).toHaveCount(0);
});

test("selecting items does not add history entries", async ({ page }) => {
  await page.goto("/");
  await waitForApp(page);
  await page.locator("a.mini").first().click();
  await expect.poll(() => new URL(page.url()).hash).not.toBe("");
  const url = page.url();
  const length = await page.evaluate(() => history.length);

  // deselect by clicking the background, then wait past the debounce
  await page.locator("#canvas > div").first().dispatchEvent("click");
  await expect(page.getByRole("button", { name: "Remove selected" })).toBeDisabled();
  await page.waitForTimeout(400);

  expect(page.url()).toBe(url);
  expect(await page.evaluate(() => history.length)).toBe(length);
});

test.describe("hostile links", () => {
  test("label markup cannot run scripts", async ({ page }) => {
    const payload = '<img src=x onerror="window.__xss=1">';
    await page.goto(
      linkTo({
        "~:items": [
          {
            "~:origin": [10, 10],
            "~:dimensions": [100, 50],
            "~:original-dimensions": [100, 50],
            "~:angle": 0,
            "~:layer": "~:labels",
            "~:content": [
              "~#list",
              [
                ["~:p", { "~:dangerouslySetInnerHTML": { "~:__html": payload } }, "hello"],
                ["~:iframe", { "~:srcdoc": "<script>parent.__xss=1</script>" }],
              ],
            ],
          },
        ],
      }),
    );
    await waitForApp(page);
    await expect(page.locator("#canvas div.ql-editor")).toContainText("hello");
    await expect(page.locator("#canvas iframe, #canvas img[src=x]")).toHaveCount(0);
    expect(await page.evaluate(() => window.__xss)).toBeUndefined();
  });

  test("links cannot change where card images come from", async ({ page }) => {
    await page.goto(linkTo({ "~:deck-base-url": "https://attacker.invalid/" }));
    await waitForApp(page);
    await expect(page.locator("a.mini img").first()).toHaveAttribute(
      "src",
      /^https:\/\/decks\.mantike\.pro\//,
    );
  });

  test("a malformed link still loads and syncs later changes", async ({ page }) => {
    await page.goto("/#%");
    await waitForApp(page);
    await page.locator("a.mini").first().click();
    await expect.poll(() => new URL(page.url()).hash.length).toBeGreaterThan(5);
  });
});
