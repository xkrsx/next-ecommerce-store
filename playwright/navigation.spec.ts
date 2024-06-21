import { test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('/');
});
