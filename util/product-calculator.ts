'use server';

import { getAllProductsInsecure } from '../database/products';
import { CartCount, getCookie } from './cookies';
import { parseJson } from './json';

export async function productsInCart() {
  const products = await getAllProductsInsecure();
  const cookieCart = await getCookie('cart');
  const cart = !cookieCart ? [] : parseJson(cookieCart);

  const productsWithCounts = products.map((product) => {
    const matchingProducts = cart.find(
      (productObject: CartCount) => product.id === productObject.productId,
    );
    return { ...product, count: matchingProducts?.count };
  });

  return productsWithCounts.filter((product) => product.count > 0);
}

export async function totalValueCalc() {
  const totalValue = (await productsInCart()).reduce((acc, product) => {
    return acc + Number(product.price) * Number(product.count);
  }, 0);
  return totalValue;
}
