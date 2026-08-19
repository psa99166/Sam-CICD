class DashboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.dashboardButton = page.getByRole('button', {
      name: 'Dashboard'
    });

    this.loadingText = page.getByText('Loading...');
  }

  async goto() {
    await this.page.goto('/');
  }

  async waitForDashboard() {
    await this.loadingText.waitFor({
      state: 'hidden',
      timeout: 15000
    });
  }
}

module.exports = { DashboardPage };