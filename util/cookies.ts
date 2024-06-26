'use server';
import { cookies } from 'next/headers';
import { parseJson } from './json';

export type CartCount = {
  productId: number;
  count: number;
};

export async function getCookie(name: string) {
  const cookie = await cookies().get(name);
  if (!cookie) {
    return undefined;
  }
  return cookie.value;
  // Optional chaining operator, if cookies().get('testCookie') is undefined return undefined
  // developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  // return cookies().get(name)?.value;
}

export async function createOrUpdateCookie(productId: number, count: number) {
  // 1. get current cookie
  const cartCountCookie = await getCookie('cart');

  // 2. parse the cookie value
  const cartCounts: CartCount[] = !cartCountCookie
    ? // Case A: cookie is undefined
      []
    : parseJson(cartCountCookie) || [];

  // 3. edit the cookie value
  const countToUpdate = cartCounts.find((cartCount) => {
    return cartCount.productId === productId;
  });

  // Case B: cookie set, id doesn't exist yet
  if (!countToUpdate) {
    cartCounts.push({ productId: productId, count: count });
  } else {
    // Case C: cookie set, id exists already
    countToUpdate.count = count;
  }

  // 4. we override the cookie
  await cookies().set('cart', JSON.stringify(cartCounts));
}

export async function deleteCookies() {
  await cookies().set('cart', '');
}
