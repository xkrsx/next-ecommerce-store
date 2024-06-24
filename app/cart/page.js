import './page.scss';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import CartQuantity from '../common/CartQuantity/CartQuantity';
import { findProductInCookieCart } from './actions';

export function generateMetadata() {
  return {
    title: `Cart`,
    description: `Your cart full of awesome bike polo stuff to buy on Bik E'Polo!`,
  };
}

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
      {!cartTotalCount ? (
        <div className="empty-cart">
          <div className="empty-cart first-line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
              alt="Empty cart icon"
            >
              <path d="M480-580q-17 0-28.5-11.5T440-620q0-17 11.5-28.5T480-660q17 0 28.5 11.5T520-620q0 17-11.5 28.5T480-580Zm-40-140v-200h80v200h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
            </svg>
            <p>You still haven't found what you're looking for? </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
              alt="Sad emoji"
            >
              <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 100q-68 0-123.5 38.5T276-280h66q22-37 58.5-58.5T480-360q43 0 79.5 21.5T618-280h66q-25-63-80.5-101.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
            </svg>
          </div>
          <div className="empty-cart-second-line">
            <Link href="/products">See all products</Link>
          </div>
          <div className="empty-cart-third-line">
            or browse categories:
            <div>
              <Link href="/products/equipment">Equipment</Link>
              {' / '}
              <Link href="/products/bike">Bike</Link>
              {' / '}
              <Link href="/products/protection">Protection</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart">
          <ul className="cart-product">
            {cart.map(async (product) => {
              const productInfo = await getSingleProductInsecure(
                product.productId,
              );
              const singleProductValue = product.count * productInfo.price;

              return (
                <li
                  style={{
                    display: !product.count ? 'none' : '',
                  }}
                  key={`cart-product-${product.productId}`}
                >
                  <ul
                    className="product-info"
                    data-test-id={`cart-product-${product.productId}`}
                  >
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
                      <strong> {singleProductValue}</strong> €
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>

          <div className="value-count-link">
            <div className="total-value-count shopping">
              <Link href="/products"> Continue shopping</Link>
            </div>
            <div className="total-value-count ">
              Cart total count:
              <p className="value">{cartTotalCount}</p>
            </div>
            <div className="total-value-count ">
              Cart total value:
              <p className="value" data-test-id="cart-total">
                {cartTotalValue}
              </p>{' '}
              €
            </div>
            <button
              className="checkout-link"
              data-test-id="cart-checkout"
              onClick={async () => {
                await redirect('/checkout');
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.6rem"
                viewBox="0 -960 960 960"
                width="1.6rem"
                fill="#FFFFFF"
              >
                <path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
              </svg>
              <span>
                <strong>Checkout</strong>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
