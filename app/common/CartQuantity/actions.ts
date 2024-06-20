'use server';

import { createOrUpdateCookie } from '../AddToCart/actions';

export default async function UpdateCartCount(id: number, cartCount: number) {
  return await createOrUpdateCookie(id, cartCount);
}
