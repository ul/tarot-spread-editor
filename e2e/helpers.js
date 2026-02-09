/**
 * Wait for the app to finish loading deck data.
 * Deck and suitcase JSON are fetched asynchronously on startup;
 * the card gallery only renders once both have loaded.
 */
export async function waitForApp(page) {
  await page.locator("a.mini").first().waitFor();
}
