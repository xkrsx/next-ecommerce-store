'use client';
import './CartQuantity.scss';
import { useState } from 'react';
import { createOrUpdateCookie } from '../../../util/cookies';
import UpdateCartCount from './actions';

export default function CartQuantity({ cartCount, stockCount, productId }) {
  const [cartCountPreview, setCartCountPreview] = useState(cartCount);

  const handleQuantityChange = (event) => {
    event.preventDefault();
    if (event.target.name === 'decreaseQuantity') {
      setCartCountPreview(cartCountPreview - 1);
      return UpdateCartCount(productId, cartCountPreview - 1);
    }
    if (event.target.name === 'increaseQuantity') {
      setCartCountPreview(cartCountPreview + 1);
      return UpdateCartCount(productId, cartCountPreview + 1);
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
              data-test-id={`"cart-product-quantity-${productId}"`}
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
              data-test-id={`"cart-product-remove-${productId}"`}
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
