// @ts-check

const { test, expect } = require('@playwright/test');
const { DashboardPage } = require('../pages/DashboardPage');
const { waitForPageLoad } = require('../utils/helpers');

test.describe('Dashboard', () => {

  test('Dashboard is visible after opening Samantha', async ({ page }) => {

    const dashboardPage = new DashboardPage(page);

    // Open Samantha
    await dashboardPage.goto();

    // Wait for browser page to load
    await waitForPageLoad(page);

    // Verify redirect
    await expect(page).toHaveURL(/\/dashboard$/);

    // Wait for application loading to finish
    await dashboardPage.waitForDashboard();

    // Verify Dashboard button
    await expect(
      dashboardPage.dashboardButton
    ).toBeVisible();
  });

});