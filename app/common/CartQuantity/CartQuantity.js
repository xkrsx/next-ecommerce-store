'use client';
import './CartQuantity.scss';
import { useState } from 'react';
import { createOrUpdateCookie } from '../AddToCart/actions';
import UpdateCartCount from './actions';

// TODO improve cart count adjust:
// single click changes count (now 2, why?)
// decreasing to 0 removes product from cart
// remove the product from cart with button

export default function CartQuantity({ cartCount, stockCount, productId }) {
  const [cartCountPreview, setCartCountPreview] = useState(cartCount);

  const handleQuantityChange = (event) => {
    if (event.target.name === 'removeProduct') {
      console.log('remove test');
      setCartCountPreview(0);
      return UpdateCartCount(productId, 0);
    }
    if (event.target.name === 'decreaseQuantity') {
      setCartCountPreview(cartCountPreview - 1);
      return UpdateCartCount(productId, cartCountPreview);
    }
    if (event.target.name === 'increaseQuantity') {
      setCartCountPreview(cartCountPreview + 1);
      return UpdateCartCount(productId, cartCountPreview);
    }
  };

  return (
    <div className="cart-quantity">
      <div>
        <form className="quantity-input-buttons-remove">
          <div className="quantity-input-buttons">
            <button
              className="change-quantity-button decrease"
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
              value={cartCountPreview}
            />

            <button
              className="change-quantity-button increase"
              onClick={handleQuantityChange}
              disabled={cartCount >= stockCount}
              style={{
                cursor: cartCount >= stockCount ? 'not-allowed' : 'copy',
              }}
              name="increaseQuantity"
            >
              +
            </button>
          </div>
          <div className="remove-product">
            <button
              className="remove-button"
              formAction={async () => await createOrUpdateCookie(productId, 0)}
              // name="removeProduct"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ea3323"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
