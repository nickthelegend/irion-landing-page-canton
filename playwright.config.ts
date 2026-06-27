import { defineConfig, devices } from "@playwright/test"

// E2E config: Playwright auto-starts the real Next dev server on a scratch port
// and runs Chromium against it. Kept separate from the node:test unit/render suite
// (`npm test` → src/**/*.test.tsx); run with `npm run e2e`.
export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  fullyParallel: true,
  reporter: "list",
  use: { baseURL: "http://localhost:3099", trace: "on-first-retry" },
  webServer: {
    command: "npm run dev -- -p 3099",
    url: "http://localhost:3099",
    timeout: 120_000,
    reuseExistingServer: true,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
})
