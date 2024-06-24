import { expect, test } from '@playwright/test';

test('cart test', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('cart-link').click();

  await expect(page.getByRole('heading', { name: 'cart' })).toBeVisible();

  await expect(
    page.getByText(
      "You still haven't found what you're looking for? See all productsor browse",
    ),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'See all products' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Equipment' }).first(),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Bike' }).nth(1)).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Protection' }).first(),
  ).toBeVisible();

  await page.goto('/products/1');
  await page.getByTestId('product-add-to-cart').click();

  await page.getByTestId('cart-link').click();
  // TODO goto(cart) cleans cookies, but cart.click times out. therefore I cannot test cart/checkout
  // await page.goto('/cart');
  // await expect(page.getByRole('heading', { name: 'cart' })).toBeVisible();
});
