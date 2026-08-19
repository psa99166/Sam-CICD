// @ts-check

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { generateEmail } = require('../utils/testData');

test.use({
  storageState: {
    cookies: [],
    origins: []
  }
});

test.describe('Login', () => {

  test('Sign in opens the modal', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.clickSignIn();

    await expect(
      loginPage.signInWithEmailButton
    ).toBeVisible();
  });


  test('Sign in with Email shows email screen', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.clickSignIn();

    await loginPage.clickSignInWithEmail();

    await expect(
      loginPage.emailDescription
    ).toBeVisible();

    // Generate unique email
    const email = generateEmail();

    await loginPage.enterEmail(email);

    // Verify the generated email
    await expect(
      loginPage.emailField
    ).toHaveValue(email);

    // Verify Send code button
    await expect(
      loginPage.sendCodeButton
    ).toBeEnabled();
  });

});