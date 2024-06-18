import { getSingleProductInsecure } from '../database/products';
import { getCookie } from './cookies';
import { parseJson } from './json';

export default async function cartCal() {
  const cartCountCookie = getCookie('cart');
  const cartCounts = !cartCountCookie ? [] : parseJson(cartCountCookie);

  const productsValues = [];
  let cartValue;

  await cartCounts.map(async (cartProduct) => {
    const productInfo = await getSingleProductInsecure(cartProduct.productId);
    const singleProductValue = cartProduct.count * productInfo.price;
    productsValues.push(singleProductValue);
    console.log('1: ', productsValues);
    cartValue = productsValues.reduce((acc, cur) => acc + cur, 0);
    console.log('2: ', cartValue);
  });
}
