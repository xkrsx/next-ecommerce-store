'use client';
import './AddToCart.scss';
import { useState } from 'react';
import { createCookieWithCountCookie } from '../../../utils/cookies';

export default function AddToCart({ count, productId }) {
  const [cartQuantity, setCartQuantity] = useState(0);

  function changeQuantityButtons(inputName) {
    if (inputName === 'increaseQuantity') {
      return setCartQuantity(cartQuantity + 1);
    }
    if (inputName === 'decreaseQuantity') {
      console.log('decrease');
      if (cartQuantity - 1 >= 0) {
        return setCartQuantity(cartQuantity - 1);
      }
      if (cartQuantity - 1 === 0) {
        return setCartQuantity(cartQuantity - 1);
      }
    }
  }

  const handleQuantityChange = (event) => {
    event.preventDefault();

    if (event.target.name === 'changeQuantityInput') {
      setCartQuantity({ quantityInput: Number(event.currentTarget.value) });
    }
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

            {/*
          // TODO + and - buttons styling
          add to cart functionality
          */}

            <input
              className="quantity-input"
              name="changeQuantityInput"
              type="number"
              min="0"
              max={`${count}`}
              value={`${cartQuantity}`}
              onChange={handleQuantityChange}
            />

            <button
              className="change-quantity-button increase"
              onClick={handleQuantityChange}
              name="increaseQuantity"
            >
              +
            </button>
          </div>

          <button
            disabled={!cartQuantity}
            style={{ cursor: !cartQuantity ? 'not-allowed' : 'pointer' }}
            formAction={async () =>
              await createCookieWithCountCookie(productId, cartQuantity)
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
