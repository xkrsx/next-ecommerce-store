import Image from 'next/image';
import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { cartCalculator } from './actions';

export default async function Cart() {
  const cookieCart = getCookie('cart');
  const cart = !cookieCart ? [] : parseJson(cookieCart);
  const productsInCart = await cartCalculator();

  const totalValue = productsInCart.reduce((acc, product) => {
    return acc + Number(product.price) * Number(product.count);
  }, 0);

  console.log(totalValue);

  return (
    <div className="cart-wrapper">
      <h1>Cart</h1>
      <div className="cart">
        <ul>
          {cart.map(async (product) => {
            const productInfo = await getSingleProductInsecure(
              product.productId,
            );
            const singleProductValue = product.count * productInfo.price;

            return (
              <li key={`cart-product-${product.productId}`}>
                <ul>
                  <Image
                    src={`/images/products/${product.name}/1.webp`}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                  />
                  <li>name: {productInfo.name}</li>
                  <li>count: {product.count}</li>
                  <li>price per one: {productInfo.price}</li>
                  <li> total price: {singleProductValue}</li>
                </ul>
              </li>
            );
          })}
          total value: {totalValue}
        </ul>
      </div>
    </div>
  );
}
