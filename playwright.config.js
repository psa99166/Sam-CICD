// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests in parallel locally
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Use one worker in CI
  workers: process.env.CI ? 1 : undefined,

  // HTML test report
  reporter: 'html',

  use: {
    // Your Samantha application
    baseURL: 'https://samantha-stage.flashpact.in',

    // Open Chromium locally
    headless: false,

    // Take screenshot when test fails
    screenshot: 'only-on-failure',

    // Keep trace when test fails/retries
    trace: 'retain-on-failure',
  },

  // For now, only Chromium
projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/user.json',
    },
  },
],
});