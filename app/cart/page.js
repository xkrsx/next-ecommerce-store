// import Image from 'next/image';

import Link from 'next/link';
import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { createOrUpdateCookie } from '../common/AddToCart/actions';
import { cartCalculator } from './actions';

// TODO: add style
// TODO: add removing and adjusting quantity in the cart

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
                  {/* <Image
                    src={`/images/products/${product.name}/1.webp`}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                  /> */}
                  <li>name: {productInfo.name}</li>
                  <li>count: {product.count}</li>
                  <li>price per one: {productInfo.price}</li>
                  <li> total price: {singleProductValue}</li>
                  <li>
                    <button>-1</button>
                    <button
                      formAction={createOrUpdateCookie(
                        productInfo.id,
                        product.count + 1,
                      )}
                      className="add-to-cart-button"
                    >
                      +1
                    </button>
                  </li>
                  <li>
                    <button>remove</button>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
        <hr />
        total value: {totalValue}
        <hr />
        <div
          style={{
            borderStyle: '1px solid black',
            backgroundColor: 'lightcyan',
            borderRadius: '0.5rem',
          }}
        >
          <Link href="/checkout">Checkout</Link>
        </div>
      </div>
    </div>
  );
}
