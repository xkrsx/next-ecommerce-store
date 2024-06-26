import { expect, test } from '@playwright/test';

test('header test', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('all productsequipbikeprotect0')).toBeVisible();
  await expect(page.getByRole('link', { name: 'all products' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'equip', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'bike', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'protect', exact: true }),
  ).toBeVisible();
  await expect(page.getByAltText("Bik E'Polo Logo")).toBeVisible();
  await expect(page.locator('li').filter({ hasText: '0' })).toBeVisible();
});

test('footer test', async ({ page }) => {
  await page.goto('/');

  await expect(
    page
      .locator('div')
      .filter({
        hasText:
          "BuyEquipmentBikeProtectionWebshopAccountWishlistCartAboutBike PoloBik E'",
      })
      .first(),
  ).toBeInViewport;
  await expect(page.getByRole('heading', { name: 'Buy' })).toBeVisible;
  await expect(
    page.getByRole('link', { name: "Logo Bik E'Polo" }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Equipment' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Bike', exact: true }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Protection' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Webshop' })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Account' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Wishlist' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Cart' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Bike Polo' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: "Bik E'Polo", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Author' })).toBeVisible();
});
