'use server';

import { cookies } from 'next/headers';

export async function getCookies() {
  const cartCountCookie = await cookies().get('cart');
  if (!cartCountCookie) {
    await cookies().set('cart', JSON.stringify([{}]));
    return false;
  } else {
    return JSON.parse(cartCountCookie.value);
  }
}
