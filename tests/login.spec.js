// @ts-check
const { test, expect } = require('@playwright/test');

// Login tests must start logged out
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login', () => {
  test('Sign in opens the modal with "Sign in with Email"', async ({ page }) => {
    // 1. Open Samantha
    await page.goto('/');

    // 2. Click "Sign in" in the top nav
    await page.getByRole('link', { name: 'Sign in' }).click();

    // 3. Check the "Sign in with Email" option is shown
    await expect(
      page.getByRole('button', { name: 'THIS SHOULD FAIL' })
    ).toBeVisible();
  });

  test('Sign in with Email shows the email screen and Send code', async ({ page }) => {
    // 1. Open Samantha
    await page.goto('/');

    // 2. Sign in
    await page.getByRole('link', { name: 'Sign in' }).click();

    // 3. Sign in with Email
    await page.getByRole('button', { name: 'Sign in with Email' }).click();

    // 4. Email screen is showing
    await expect(
      page.getByText("Enter your email and we'll send you a one-time code.")
    ).toBeVisible();

    // 5. Email field accepts input
    const emailField = page.getByPlaceholder('you@example.com');
    await expect(emailField).toBeVisible();
    await emailField.fill('qa.test@example.com');
    await expect(emailField).toHaveValue('qa.test@example.com');

    // 6. Send code button is there and clickable
    await expect(page.getByRole('button', { name: 'Send code' })).toBeEnabled();
  });
});