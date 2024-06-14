'use server';

import { cookies } from 'next/headers';

export async function getCookies() {
  let cartCount;
  const cartCountCookie = await cookies().get('cart');
  if (typeof cartCountCookie === 'undefined') {
    return createEmptyCartCookie();
  } else if (cartCountCookie.value === 'false') {
    return;
  } else {
    cartCount = JSON.parse(cartCountCookie.value);
    return cartCount;
  }
}

export async function getCartCountFromCookies() {
  const cartCountCookie = await getCookies();
  return cartCountCookie;
}

export async function createEmptyCartCookie() {
  await cookies().set('cart', JSON.stringify([{ productId: '', count: '' }]));
}

export async function createCookieWithCount(productId, count) {
  await cookies().set(
    'cart',
    JSON.stringify([{ productId: productId, count: count }]),
  );
}
