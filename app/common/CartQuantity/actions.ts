'use server';

import { createOrUpdateCookie } from '../AddToCart/actions';

export default async function UpdateCartCount(
  inputName: string,
  id: number,
  cartCount: number,
) {
  if (inputName === 'increaseQuantity') {
    console.log('+');
    return await createOrUpdateCookie(id, +1);
  }
  if (inputName === 'decreaseQuantity') {
    console.log('-');

    if (cartCount - 1 >= 0) {
      console.log('--');

      return await createOrUpdateCookie(id, -1);
    }
  }
}
