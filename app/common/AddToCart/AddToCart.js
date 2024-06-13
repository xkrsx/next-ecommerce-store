'use client';
import './AddToCart.scss';
import { useState } from 'react';

export default function AddToCart({ quantityDB }) {
  const [cartQuantity, setCartQuantity] = useState({
    quantityInput: 0,
    isDisabled: true,
  });

  function changeQuantityButtons(inputName) {
    if (inputName === 'increaseQuantity') {
      setCartQuantity({
        quantityInput: ++cartQuantity.quantityInput,
        isDisabled: false,
      });
      return console.log('increase: ', cartQuantity.quantityInput);
    }
    if (inputName === 'decreaseQuantity') {
      if (cartQuantity.quantityInput - 1 >= 0) {
        setCartQuantity({
          quantityInput: --cartQuantity.quantityInput,
        });
        return console.log('decrease >= 1: ', cartQuantity.quantityInput);
      }
      if (cartQuantity.quantityInput - 1 === 0) {
        return setCartQuantity({
          quantityInput: --cartQuantity.quantityInput,
          isDisabled: true,
        });
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
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          <strong className="quantity-label">Quantity</strong>
          <div className="quantity-input-buttons">
            <button
              className="change-quantity-button decrease"
              disabled={cartQuantity.isDisabled}
              // disabled
              // `${cartQuantity.isDisabled}` }}

              onClick={handleQuantityChange}
              name="decreaseQuantity"
            >
              -
            </button>

            {/*
          // TODO + and - buttons styling
          // TODO adjust max quantity possible to add to cart with DB quantity
          // props: {quantityDB}
          add to cart functionality
          */}

            <input
              className="quantity-input"
              name="changeQuantityInput"
              type="number"
              min="0"
              value={`${cartQuantity.quantityInput}`}
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
            onSubmit={(event) => event.preventDefault()}
            className="add-to-cart-button"
          >
            Add to cart
          </button>
        </label>
      </form>
    </div>
  );
}
