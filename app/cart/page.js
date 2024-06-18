import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default function Cart() {
  const cartCountCookie = getCookie('cart');
  const cartCounts = !cartCountCookie ? [] : parseJson(cartCountCookie);
  let cartValue;

  return (
    <div className="cart-wrapper">
      <h1>Cart</h1>
      <div className="cart">
        <ul>
          {cartCounts.map(async (product) => {
            const productInfo = await getSingleProductInsecure(
              product.productId,
            );
            return (
              <li key={`cart-product-${product.productId}`}>
                name: {productInfo.name} count: {product.count} price per one:{' '}
                {productInfo.price} total price:{' '}
                {product.count * productInfo.price}
              </li>
            );
          })}
          total value: {cartCounts.map(async (product) => {
            const productInfo = await getSingleProductInsecure(
              product.productId,
            );
            return (
              {}
            )

          }
        </ul>
      </div>
    </div>
  );
}
