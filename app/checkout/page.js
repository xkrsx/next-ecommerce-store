import './page.scss';
import Image from 'next/image';
import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { cartCalculator } from './actions';

export default async function Checkout() {
  const cookieCart = getCookie('cart');
  const cart = !cookieCart ? [] : parseJson(cookieCart);
  const productsInCart = await cartCalculator();

  const totalValue = productsInCart.reduce((acc, product) => {
    return acc + Number(product.price) * Number(product.count);
  }, 0);

  console.log(totalValue);

  return (
    <div className="checkout-wrapper">
      <h1>Checkout</h1>
      <div className="checkout">
        <div className="order">
          <h2>Your order</h2>
          <ul className="single-product-info">
            {cart.map(async (product) => {
              const productInfo = await getSingleProductInsecure(
                product.productId,
              );
              const singleProductValue = product.count * productInfo.price;

              return (
                <li key={`cart-product-${product.productId}`}>
                  <ul>
                    <li>{productInfo.name}</li>
                    <li>
                      {product.count} x {productInfo.price}€
                    </li>
                    <li>
                      <strong>total price: {singleProductValue}€</strong>
                    </li>
                  </ul>
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
                  <input required />
                </label>
              </li>
              <li>
                <label>
                  <span>
                    <strong>*</strong>Last name:
                  </span>{' '}
                  <input required />
                </label>
              </li>
              <li>
                <label>
                  <span>
                    <strong>*</strong>E-mail:
                  </span>{' '}
                  <input type="email" required />
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
                  <input required />
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
                  <input required />
                </label>
              </li>
              <li>
                <label>
                  <span>
                    <strong>*</strong>City:{' '}
                  </span>
                  <input required />
                </label>
              </li>
              <li>
                <label>
                  <span>
                    <strong>*</strong>Country:{' '}
                  </span>
                  <input required />
                </label>
              </li>
            </ul>
            <h2>Payment</h2>
            <div className="payment-form">
              <div className="cards">
                <Image src="/images/mastercard.webp" width="45" height="35" />
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
                    />
                  </label>
                </li>
                <li>
                  <label>
                    <span>
                      <strong>*</strong>Expiry date{' '}
                    </span>
                    <input placeholder="MM / YY" required />
                  </label>
                </li>
                <li>
                  <label>
                    <span>
                      <strong>*</strong>Security code{' '}
                    </span>
                    <input placeholder="XXX" type="number" required />
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

            {/* TODO add functionality to the button: delete the cookies and go to 'thank you' website */}

            <button className="pay-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M420-360h120l-23-129q20-10 31.5-29t11.5-42q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 23 11.5 42t31.5 29l-23 129Zm60 280q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" />
              </svg>
              Order & Pay {totalValue}€
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
