// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Dashboard', () => {
  test('Dashboard is visible after opening Samantha', async ({ page }) => {
    // 1. Open Samantha. The saved login (playwright/.auth/user.json) is applied
    //    automatically by storageState in playwright.config.js.
    await page.goto('/');

    // 2. Being signed in redirects us from "/" to "/dashboard"
    await expect(page).toHaveURL(/\/dashboard$/);

    // 3. The Dashboard item is visible
    await expect(page.getByRole('button', { name: 'Dashboard' })).toBeVisible();
  });
});
