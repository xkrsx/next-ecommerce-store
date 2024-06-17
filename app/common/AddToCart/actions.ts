'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

// Case A: cookie is undefined (not set)
// Case B: cookie set, id doesn't exist yet
// Case C: cookie set, id exists already

export type CartCount = {
  productId: number;
  count: number;
};

export async function createOrUpdateCookie(productId: number, count: number) {
  // 1. get current cookie
  const cartCountCookie = getCookie('cart');

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
