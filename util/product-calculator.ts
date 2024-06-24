'use server';

import { getAllProductsInsecure } from '../database/products';
import { CartCount, getCookie } from './cookies';
import { parseJson } from './json';

export async function totalCountCalc() {
  const products = await getAllProductsInsecure();
  const cookieCart = await getCookie('cart');
  const cart = !cookieCart ? [] : parseJson(cookieCart);

  const productsWithCounts = products.map((product) => {
    const matchingProducts = cart.find(
      (productObject: CartCount) => product.id === productObject.productId,
    );

    return { ...product, count: matchingProducts?.count };
  });

  const productsInCart = productsWithCounts.filter(
    (product) => product.count > 0,
  );
  return productsInCart;
}
