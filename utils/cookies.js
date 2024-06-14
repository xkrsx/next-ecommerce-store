'use server';

import { cookies } from 'next/headers';

export async function getCookies() {
  let cartCount;
  let cartCountCookie = await cookies().get('cart');
  if (typeof cartCountCookie === 'undefined') {
    return createEmptyCartCookie();
  } else if (cartCountCookie.value === '') {
    return;
  } else {
    cartCountCookie = await getCartCountFromCookies();
    cartCount = JSON.parse(cartCountCookie.value);
    return cartCount;
  }
}

export async function getCartCountFromCookies() {
  const cartCountCookie = await getCookies();
  return cartCountCookie;
}

export async function createEmptyCartCookie() {
  await cookies().set('cart', JSON.stringify([{}]));
}

export async function createCookieWithCountCookie(productId, count) {
  await cookies().set(
    'cart',
    JSON.stringify([{ productId: productId, count: count }]),
  );
}
