'use server';

import { cookies } from 'next/headers';
import { getAllProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { CartCount } from '../common/AddToCart/actions';

export async function cartCalculator() {
  const products = await getAllProductsInsecure();
  const cookieCart = getCookie('cart');
  const cart = !cookieCart ? [] : parseJson(cookieCart);

  const productsWithCounts = products.map((product) => {
    const matchingProducts = cart.find(
      (productObject: CartCount) => product.id === productObject.productId,
    );

    return { ...product, count: matchingProducts?.count };
  });

  const productsInCart = productsWithCounts.filter((product) => product.count);
  return productsInCart;
}

export async function deleteCookies() {
  await cookies().set('cart', '');
}
