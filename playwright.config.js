import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  use: {
    baseURL: "http://localhost:8080",
  },
  ...(process.env.CI && {
    webServer: {
      command: "node e2e/server.mjs",
      url: "http://localhost:8080",
      reuseExistingServer: false,
    },
  }),
});
