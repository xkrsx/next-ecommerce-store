import './page.scss';
import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { cartCalculator } from './actions';

// TODO: add style
// TODO: add removing and adjusting quantity in the cart

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
          <ul>
            {cart.map(async (product) => {
              const productInfo = await getSingleProductInsecure(
                product.productId,
              );
              const singleProductValue = product.count * productInfo.price;

              return (
                <li key={`cart-product-${product.productId}`}>
                  <ul>
                    <li>name: {productInfo.name}</li>
                    <li>quantity: {product.count}</li>
                    <li>price per one: {productInfo.price}</li>
                    <li>
                      <strong>total price: {singleProductValue}</strong>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>

          <div className="total-value">total value: {totalValue}</div>
        </div>
        <div className="payment">
          <h2>Shipping / Payment</h2>
          <form>
            <ul>
              <li>
                <label>
                  First name:
                  <input />
                </label>
              </li>
              <li>
                <label>
                  Last name:
                  <input />
                </label>
              </li>
              <li>
                <label>
                  E-mail:
                  <input />
                </label>
              </li>
              <li>
                <label>
                  Phone number:
                  <input />
                </label>
              </li>
              <li>
                <label>
                  Street:
                  <input />
                </label>
              </li>
              <li>
                <label>
                  House number:
                  <input />
                </label>
              </li>
              <li>
                <label>
                  Apartment number:
                  <input />
                </label>
              </li>
              <li>
                <label>
                  Postcode:
                  <input />
                </label>
              </li>
              <li>
                <label>
                  City:
                  <input />
                </label>
              </li>
              <li>
                <label>
                  Country:
                  <input />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  Card holder <input />
                </label>
              </li>
              <li>
                <label>
                  Card number <input />
                </label>
              </li>
              <li>
                <label>
                  Expiry date <input />
                </label>
              </li>
              <li>
                <label>
                  Security code
                  <input />
                </label>
              </li>
              <li>
                <label>
                  Postal code
                  <input />
                </label>
              </li>
            </ul>
            <button>Order & Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
}
