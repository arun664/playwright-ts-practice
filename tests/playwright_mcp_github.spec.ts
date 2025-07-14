import { test, expect } from '@playwright/test';

// Step 1: Navigate to Playwright official website and verify the page header

test('Playwright website header verification', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('h1')).toHaveText('Playwright enables reliable end-to-end testing for modern web apps.');
});

// Step 2: Switch to GitHub Playwright MCP repository and open Issues

test('Open Playwright MCP GitHub Issues', async ({ page }) => {
  await page.goto('https://github.com/microsoft/playwright-mcp/issues');
  // Verify Issues page is loaded by checking for Issues heading
  await expect(page.getByRole('heading', { name: 'Issues' })).toBeVisible();
});
