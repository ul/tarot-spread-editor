import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  use: {
    baseURL: "http://localhost:8080",
  },
  ...(process.env.CI && {
    webServer: {
      command: "python3 -m http.server 8080 -d resources/public",
      url: "http://localhost:8080",
      reuseExistingServer: false,
    },
  }),
});
