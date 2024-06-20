import './page.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import CartQuantity from '../common/CartQuantity/CartQuantity';
import { findProductInCookieCart } from './actions';

export default async function Cart() {
  const cookieCart = getCookie('cart');
  const cart = !cookieCart ? [] : parseJson(cookieCart);
  const productsInCart = await findProductInCookieCart();

  const cartTotalValue = productsInCart.reduce((acc, product) => {
    return acc + Number(product.price) * Number(product.count);
  }, 0);

  const onlyCounts = cart.map((product) => {
    return product.count;
  });
  const cartTotalCount = onlyCounts.reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="cart-wrapper">
      <h1>Cart</h1>
      <div className="cart">
        <ul className="cart-product">
          {cart.map(async (product) => {
            const productInfo = await getSingleProductInsecure(
              product.productId,
            );
            const singleProductValue = product.count * productInfo.price;

            return (
              <li key={`cart-product-${product.productId}`}>
                <ul className="product-info">
                  <li>
                    <div className="product-image">
                      <Link
                        href={`/products/${productInfo.id}`}
                        // target="_blank"
                      >
                        <Image
                          src={`/images/products/${productInfo.name}/1.webp`}
                          alt={productInfo.name}
                          layout="fill"
                          objectFit="contain"
                        />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <strong>
                      <Link
                        href={`/products/${productInfo.id}`}
                        // target="_blank"
                      >
                        {productInfo.name}
                      </Link>
                    </strong>

                    <Link href={`/products/${productInfo.category}`}>
                      /{productInfo.category}
                    </Link>
                  </li>

                  <li>
                    <CartQuantity
                      cartCount={product.count}
                      stockCount={productInfo.count}
                      productId={productInfo.id}
                    />
                  </li>
                  <li>
                    <span>in stock:</span>
                    <strong>{productInfo.count}</strong>
                  </li>
                  <li>
                    <span>price per one: </span>
                    <strong> {productInfo.price}€</strong>
                  </li>
                  <li>
                    <span>total price: </span>
                    <strong> {singleProductValue}€</strong>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
        <div className="value-count-link">
          <div className="total-value-count">
            Cart total count: {cartTotalCount}
          </div>
          <div className="total-value-count">
            Cart total value: {cartTotalValue}€
          </div>
          <div className="checkout-link">
            <Link href="/checkout">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.6rem"
                  viewBox="0 -960 960 960"
                  width="1.6rem"
                  fill="#FFFFFF"
                >
                  <path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                </svg>
              </span>
              <strong>Checkout</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
