/**
 * Wait for the app to finish loading deck data.
 * Deck and suitcase JSON are fetched asynchronously on startup;
 * the card gallery only renders once both have loaded.
 */
export async function waitForApp(page) {
  await page.locator("a.mini").first().waitFor();
}

/**
 * Builds an app URL whose fragment holds the given state. `state` uses
 * transit-json key notation, e.g. {"~:items": []}.
 */
export function linkTo(state) {
  const toTransit = (x) =>
    Array.isArray(x)
      ? x.map(toTransit)
      : x && typeof x === "object"
        ? ["^ ", ...Object.entries(x).flatMap(([k, v]) => [k, toTransit(v)])]
        : x;
  return "/#" + encodeURIComponent(JSON.stringify(toTransit(state)));
}
