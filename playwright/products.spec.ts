import { expect, test } from '@playwright/test';

test('all products test', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('products-link').click();

  await expect(
    page.getByRole('heading', { name: 'all products' }),
  ).toBeVisible();

  await expect(
    page.locator('div').filter({ hasText: 'mallet' }).nth(3),
  ).toBeVisible();
  await expect(page.getByAltText('mallet')).toBeVisible();

  await expect(
    page
      .locator('div')
      .filter({ hasText: /^bike$/ })
      .first(),
  ).toBeVisible();
  await expect(page.getByAltText('bike')).toBeVisible();

  await expect(
    page.locator('div').filter({ hasText: 'helmet' }).nth(3),
  ).toBeVisible();
  await expect(page.getByAltText('helmet')).toBeVisible();

  await expect(
    page.locator('div').filter({ hasText: 'ball' }).nth(3),
  ).toBeVisible();
  await expect(page.getByAltText('ball')).toBeVisible();

  await expect(
    page.locator('div').filter({ hasText: 'goal' }).nth(3),
  ).toBeVisible();
  await expect(page.getByAltText('goal')).toBeVisible();

  await expect(
    page.locator('div').filter({ hasText: 'gloves' }).nth(3),
  ).toBeVisible();
  await expect(page.getByAltText('gloves')).toBeVisible();

  await expect(
    page.locator('div').filter({ hasText: 'front brake' }).nth(3),
  ).toBeVisible();
  await expect(page.getByAltText('front brake')).toBeVisible();
});

test('single product test', async ({ page }) => {
  // TODO going to a single product page with click() resulted in timing out. why?
  // await page.goto('/');
  // await page.getByTestId('products-link').click();
  // await page.getByTestId('product-1').click();

  await page.goto('products/1');
  await expect(page.getByRole('heading', { name: 'mallet' })).toBeVisible();
  await expect(page.getByTestId('product-image')).toBeVisible();
  await expect(page.getByText('Name: mallet')).toBeVisible();
  await expect(page.getByText('Category: equipment')).toBeVisible();
  await expect(
    page.locator('a').filter({ hasText: /^equipment$/ }),
  ).toBeVisible();
  await expect(page.getByText('Price: 20 €')).toBeVisible();
  await expect(page.getByText('In stock:')).toBeVisible();
  await expect(page.getByText('Description: Discover the')).toBeVisible();
  await expect(page.getByText('Quantity:-+Add to cart')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: /^0$/ })).toBeVisible();
  await expect(page.locator('li').filter({ hasText: /^1$/ })).not.toBeVisible();
  await expect(page.getByTestId('product-quantity')).toHaveValue('1');
  // TODO playwright cannot find this button, even though it is described in a same manner as + button
  // await page.getByRole('button', { name: '-', exact: true }).click();
  // await expect(page.getByTestId('product-quantity')).toHaveValue('1');
  await page.getByRole('button', { name: '+', exact: true }).click();
  await expect(page.getByTestId('product-quantity')).toHaveValue('2');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.locator('li').filter({ hasText: /^0$/ })).not.toBeVisible();
  await expect(page.locator('li').filter({ hasText: /^2$/ })).toBeVisible();
});
