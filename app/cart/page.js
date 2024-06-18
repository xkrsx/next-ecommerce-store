import { getSingleProductInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default function Cart() {
  const cookieCart = getCookie('cart');
  const cart = !cookieCart ? [] : parseJson(cookieCart);

  const productsValues = [];
  let cartValue;

  const allValues = cart.map((product) => {
    // const productInfo = await getSingleProductInsecure(product.productId);
    const singleProductValue = product.count * 5;
    productsValues.push(singleProductValue);
    cartValue = productsValues.reduce((acc, cur) => acc + cur, 0);
    console.log('0: ', productsValues);
    console.log('1: ', cartValue);
    return cartValue;
  });
  console.log('++: ', productsValues);
  console.log('-: ', cartValue);
  // console.log('2: ', allValues);

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
                  <li>name: {productInfo.name}</li>
                  <li>count: {product.count}</li>
                  <li>price per one: {productInfo.price}</li>
                  <li> total price: {singleProductValue}</li>
                </ul>
              </li>
            );
          })}
          total value:{' '}
        </ul>
      </div>
    </div>
  );
}
