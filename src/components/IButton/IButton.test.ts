import test, { expect } from 'playwright/test';

test('IButton screenshot test', async ({ page }) => {
  await page.goto('http://localhost:3000/IButton');

  await page.screenshot({ path: '__snap__/IButtonDemo.png' });

  await expect(page).toHaveScreenshot();
});
