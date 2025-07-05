import { test, expect } from '@playwright/test';

test('Login, add iPhone X to cart, and confirm in cart', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Fill in username and password using correct selectors
  await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
  await page.getByRole('textbox', { name: 'Password:' }).fill('learning');

  // Check the terms and conditions checkbox
  await page.getByRole('checkbox', { name: /I Agree to the terms/ }).check();

  // Click sign in
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Wait for navigation to products page
  await page.waitForURL('**/angularpractice/shop');

  // Add iPhone X to cart using robust selector
  const iphoneCard = page.locator('app-card').filter({ hasText: /iphone X/i });
  await iphoneCard.getByRole('button', { name: /Add/i }).click();

  // Click on the Checkout link in the navbar
  await page.locator('a.nav-link.btn.btn-primary').click();

  // Assert iPhone X is present in the cart summary table
  const cartTable = page.locator('table.table');
  await expect(cartTable).toContainText('iphone X');

  // Now click the green Checkout button to go to the purchase form
  await page.getByRole('button', { name: 'Checkout' }).click();
}); 