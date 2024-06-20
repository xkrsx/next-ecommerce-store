'use client';
import './AddToCart.scss';
import { useState } from 'react';
import { createOrUpdateCookie } from './actions.ts';

export default function AddToCart({ stockCount, productId }) {
  const [cartQuantity, setCartQuantity] = useState(0);

  function changeQuantityButtons(inputName) {
    if (inputName === 'increaseQuantity') {
      return setCartQuantity(cartQuantity + 1);
    }
    if (inputName === 'decreaseQuantity') {
      if (cartQuantity - 1 >= 0) {
        return setCartQuantity(cartQuantity - 1);
      }
    }
  }

  const handleQuantityChange = (event) => {
    event.preventDefault();

    if (event.target.type === 'submit') {
      changeQuantityButtons(event.target.name);
    }
  };

  return (
    <div className="add-to-cart">
      <form>
        <label>
          <span className="quantity-label">Quantity:</span>
          <div className="quantity-input-buttons">
            <button
              className="change-quantity-button decrease"
              style={{ cursor: !cartQuantity ? 'not-allowed' : 'pointer' }}
              disabled={!cartQuantity}
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
              value={cartQuantity}
            />

            <button
              className="change-quantity-button increase"
              onClick={handleQuantityChange}
              disabled={cartQuantity >= stockCount}
              style={{
                cursor: cartQuantity >= stockCount ? 'not-allowed' : 'copy',
              }}
              name="increaseQuantity"
            >
              +
            </button>
          </div>

          <button
            disabled={!cartQuantity}
            style={{ cursor: !cartQuantity ? 'not-allowed' : 'pointer' }}
            formAction={async () =>
              await createOrUpdateCookie(productId, cartQuantity)
            }
            className="add-to-cart-button"
          >
            Add to cart
          </button>
        </label>
      </form>
    </div>
  );
}
