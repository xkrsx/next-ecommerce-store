import './page.scss';
import Link from 'next/link';
import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import CartQuantity from '../common/CartQuantity/CartQuantity';
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
                    <CartQuantity />
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
        <div className="value-link">
          <div className="total-value">Cart total value: {totalValue}€</div>
          <div className="checkout-link">
            <Link href="/checkout">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
