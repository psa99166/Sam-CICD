// @ts-check
const { test, expect } = require('@playwright/test');

// Guest tests must start logged out
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Guest', () => {

  test('Guest can open Samantha homepage', async ({ page }) => {

    // Open Samantha
    await page.goto('/');

    // Verify the homepage is visible
    await expect(page).toHaveURL(/\/$/);

    // Verify Sign in is available for the guest
    await expect(
      page.getByRole('link', { name: 'Sign in' })
    ).toBeVisible();

  });

});