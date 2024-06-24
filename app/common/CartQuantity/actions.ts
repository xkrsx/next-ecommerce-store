'use server';

import { createOrUpdateCookie } from '../../../util/cookies';

export default async function UpdateCartCount(id: number, cartCount: number) {
  return await createOrUpdateCookie(id, cartCount);
}
