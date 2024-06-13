'use server';

import { cookies } from 'next/headers';

export async function getCookies() {
  const cartCountCookie = await cookies().get('cart');
  const cartCount = JSON.parse(cartCountCookie.value);
  return cartCount[0].count;
}
