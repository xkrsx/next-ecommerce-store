import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default function Cart() {
  const cartCountCookie = getCookie('cart');
  const cartCounts = !cartCountCookie ? [] : parseJson(cartCountCookie);

  let cartValue;

  function calculateCartValue() {
    const productsValues = [];

    cartCounts.map(async (product) => {
      const productInfo = await getSingleProductInsecure(product.productId);
      const singleProductValue = product.count * productInfo.price;
      productsValues.push(singleProductValue);
      cartValue = productsValues.reduce((acc, cur) => acc + cur, 0);
      console.log(cartValue);
    });
  }
  calculateCartValue();

  return (
    <div className="cart-wrapper">
      <h1>Cart</h1>
      <div className="cart">
        <ul>
          {cartCounts.map(async (product) => {
            const productInfo = await getSingleProductInsecure(
              product.productId,
            );
            const singleProductValue = product.count * productInfo.price;

            return (
              <li key={`cart-product-${product.productId}`}>
                <ul>
                  <li>name: {productInfo.name}</li>
                  <li>count: {product.count}</li>
                  <li>price per one: {productInfo.price}</li>
                  <li> total price: {singleProductValue}</li>
                </ul>
              </li>
            );
          })}
          {/* total value: {console.log(calculateCartValue())} */}
        </ul>
      </div>
    </div>
  );
}
