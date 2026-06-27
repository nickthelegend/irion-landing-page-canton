import { test, expect } from "@playwright/test"

// Real-browser E2E: builds + serves the actual Next app and drives Chromium —
// proves the page serves, hydrates, and renders the hero + CTAs + footer. This is
// the genuinely automatable browser surface (no passkey/Carpincho hardware needed).

test("hero renders with the Buy Now / Pay Never headline", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Pay Never")
})

test("primary CTA links to the app", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("link", { name: /Launch App/i }).first()).toBeVisible()
})

test("footer explore section is present", async ({ page }) => {
  await page.goto("/")
  await expect(page.locator("footer")).toContainText("Explore")
})
