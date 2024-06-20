'use server';

import { createOrUpdateCookie } from '../AddToCart/actions';

export default async function UpdateCartCount(id: number, cartCount: number) {
  console.log('update cookies id:', id, ' count: ', cartCount);
  return await createOrUpdateCookie(id, cartCount);
}
