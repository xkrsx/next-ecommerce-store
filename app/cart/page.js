import './page.scss';
import Link from 'next/link';
import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
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
                  {/* <Image
                    src={`/images/products/${product.name}/1.webp`}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                  /> */}
                  <li>{productInfo.name}</li>
                  <li>
                    <span className="quantity-label">Quantity:</span>
                    <div className="quantity-input-buttons">
                      <button
                        className="change-quantity-button decrease"
                        // style={{
                        //   cursor: !cartQuantity ? 'not-allowed' : 'pointer',
                        // }}
                        // disabled={!cartQuantity}
                        // onClick={handleQuantityChange}
                        name="decreaseQuantity"
                      >
                        -
                      </button>

                      <input
                        className="quantity-input"
                        name="changeQuantityInput"
                        type="number"
                        disabled
                        min="0"
                        // max={stockCount}
                        // value={cartQuantity}
                      />

                      <button
                        className="change-quantity-button increase"
                        // onClick={handleQuantityChange}
                        // disabled={cartQuantity >= stockCount}
                        // style={{
                        //   cursor:
                        //     cartQuantity >= stockCount
                        // ? 'not-allowed'
                        // : 'pointer',
                        // }}
                        name="increaseQuantity"
                      >
                        +
                      </button>
                    </div>

                    {/* TODO add cookie functionality to -/+ buttons instead */}
                    {/* <button
                      disabled={!cartQuantity}
                      style={{
                        cursor: !cartQuantity ? 'not-allowed' : 'pointer',
                      }}
                      // formAction={async () =>
                      //   await createOrUpdateCookie(productId, cartQuantity)
                      }
                      className="add-to-cart-button"
                    >
                      Add to cart
                    </button> */}
                  </li>
                  <li>price per one: {productInfo.price}€</li>
                  <li> total price: {singleProductValue}€</li>

                  <li>
                    <button className="remove-button">Remove product</button>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
        <div className="value-link">
          <div className="total-value">total value: {totalValue}€</div>
          <div className="checkout-link">
            <Link href="/checkout">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
