'use client';
import './CartQuantity.scss';
import { useState } from 'react';
import UpdateCartCount from './actions';

// import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';
// import { createOrUpdateCookie } from '../AddToCart/actions';

export default function CartQuantity({ cartCount, stockCount, productId }) {
  const [cartCountPreview, setCartCountPreview] = useState(cartCount);

  const handleQuantityChange = async (event) => {
    if (event.target.name === 'decreaseQuantity') {
      console.log('-cartCountPreview: ', cartCountPreview);
      setCartCountPreview(cartCountPreview - 1);
    } else {
      console.log('+cartCountPreview: ', cartCountPreview);
      setCartCountPreview(cartCountPreview + 1);
    }
    console.log(
      'update cookies: productId: ',
      productId,
      ' count: ',
      cartCountPreview,
    );
    return await UpdateCartCount(productId, cartCountPreview);
  };

  return (
    <div className="cart-quantity">
      <div className="quantity-input-buttons-remove">
        <div className="quantity-input-buttons">
          <button
            className="change-quantity-button decrease"
            style={{
              cursor: !cartCountPreview ? 'not-allowed' : 'pointer',
            }}
            disabled={!cartCount}
            onClick={handleQuantityChange}
            name="decreaseQuantity"
          >
            -
          </button>

          <input
            className="quantity-input"
            name="changeQuantityInput"
            inputMode="numeric"
            disabled
            min="0"
            max={stockCount}
            value={cartCount}
          />

          <button
            className="change-quantity-button increase"
            onClick={handleQuantityChange}
            disabled={cartCount >= stockCount}
            style={{
              cursor: cartCount >= stockCount ? 'not-allowed' : 'pointer',
            }}
            name="increaseQuantity"
          >
            +
          </button>
        </div>
        <div className="remove-product">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ea3323"
          >
            <button className="remove-button" />
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
