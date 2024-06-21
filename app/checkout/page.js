import './page.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { cartCalculator } from './actions';
import OrderPayButton from './OrderPayButton';

export function generateMetadata() {
  return {
    title: `Checkout`,
    description: `This is your last step to get some wonderful bike polo stuff from Bik E'Polo!`,
  };
}

export default async function Checkout() {
  const cookieCart = getCookie('cart');
  const cart = !cookieCart ? [] : parseJson(cookieCart);
  const productsInCart = await cartCalculator();

  const totalValue = productsInCart.reduce((acc, product) => {
    return acc + Number(product.price) * Number(product.count);
  }, 0);

  return (
    <div className="checkout-wrapper">
      <h1>Checkout</h1>
      <div className="checkout">
        {!totalValue ? (
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
          <div className="order-payment">
            <div className="order">
              <h2>Your order</h2>
              <ul className="single-product-info">
                {cart.map(async (product) => {
                  const productInfo = await getSingleProductInsecure(
                    product.productId,
                  );
                  const singleProductValue = product.count * productInfo.price;

                  return !product.count ? (
                    ''
                  ) : (
                    <li
                      key={`cart-product-${product.productId}`}
                      className="single-product"
                    >
                      <ul className="info-image">
                        <li>{productInfo.name}</li>
                        <li>
                          {product.count} x {productInfo.price}€
                        </li>
                        <li>
                          <strong>total price: {singleProductValue}€</strong>
                        </li>
                      </ul>

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
                  );
                })}
              </ul>

              <div className="total-value">total value: {totalValue}€</div>
            </div>
            <div className="payment">
              <h2>Shipping</h2>
              <form>
                <ul className="shipping-form">
                  <li>
                    <label>
                      <span>
                        <strong>*</strong>First name
                      </span>{' '}
                      <input required data-test-id="checkout-first-name" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <span>
                        <strong>*</strong>Last name:
                      </span>{' '}
                      <input required data-test-id="checkout-last-name" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <span>
                        <strong>*</strong>E-mail:
                      </span>{' '}
                      <input
                        type="email"
                        required
                        data-test-id="checkout-email"
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      <span>Phone number:</span> <input type="tel" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <span>
                        <strong>*</strong>Street:{' '}
                      </span>
                      <input required data-test-id="checkout-address" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <span>
                        <strong>*</strong>House number:
                      </span>{' '}
                      <input required />
                    </label>
                  </li>
                  <li>
                    <label>
                      <span>Apartment number:</span> <input />
                    </label>
                  </li>
                  <li>
                    <label>
                      <span>
                        <strong>*</strong>Postcode:{' '}
                      </span>
                      <input required data-test-id="checkout-postal-code" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <span>
                        <strong>*</strong>City:{' '}
                      </span>
                      <input required data-test-id="checkout-city" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <span>
                        <strong>*</strong>Country:{' '}
                      </span>
                      <input required data-test-id="checkout-country" />
                    </label>
                  </li>
                </ul>
                <h2>Payment</h2>
                <div className="payment-form">
                  <div className="cards">
                    <Image
                      src="/images/mastercard.webp"
                      width="45"
                      height="35"
                    />
                    <Image src="/images/visa.webp" width="45" height="35" />
                  </div>
                  <ul>
                    <li>
                      <label>
                        <span>
                          <strong>*</strong>Card holder{' '}
                        </span>
                        <input placeholder="First and Last Name" required />
                      </label>
                    </li>
                    <li>
                      <label>
                        <span>
                          <strong>*</strong>Card number{' '}
                        </span>
                        <input
                          placeholder="XX XXXX XXXX XXXX XXXX XXXX"
                          type="number"
                          required
                          data-test-id="checkout-credit-card"
                        />
                      </label>
                    </li>
                    <li>
                      <label>
                        <span>
                          <strong>*</strong>Expiry date{' '}
                        </span>
                        <input
                          placeholder="MM / YY"
                          required
                          data-test-id="checkout-expiration-date"
                        />
                      </label>
                    </li>
                    <li>
                      <label>
                        <span>
                          <strong>*</strong>Security code{' '}
                        </span>
                        <input
                          placeholder="XXX"
                          type="number"
                          required
                          data-test-id="checkout-security-code"
                        />
                      </label>
                    </li>
                    <li>
                      <label>
                        <span>
                          <strong>*</strong>Post code{' '}
                        </span>
                        <input placeholder="XX - XXX" required />
                      </label>
                    </li>
                  </ul>
                </div>

                <OrderPayButton totalValue={totalValue} />
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
