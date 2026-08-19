// @ts-check

const { test } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.signInLink = page.getByRole('link', { name: 'Sign in' });

    this.signInWithEmailButton = page.getByRole('button', {
      name: 'Sign in with Email'
    });

    this.emailDescription = page.getByText(
      "Enter your email and we'll send you a one-time code."
    );

    this.emailField = page.getByPlaceholder('you@example.com');

    this.sendCodeButton = page.getByRole('button', {
      name: 'Send code'
    });
  }

  // Actions

  async goto() {
    await this.page.goto('/');
  }

  async clickSignIn() {
    await this.signInLink.click();
  }

  async clickSignInWithEmail() {
    await this.signInWithEmailButton.click();
  }

  /**
   * @param {string} email
   */
  async enterEmail(email) {
    await this.emailField.fill(email);
  }
}

module.exports = { LoginPage };