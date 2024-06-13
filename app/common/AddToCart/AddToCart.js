'use client';
import './AddToCart.scss';
import { useState } from 'react';

export default function AddToCart({ quantityDB }) {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <div className="add-to-cart">
      <form>
        <label>
          Quantity
          <br />
          <div className="quantity-input">
            <button>-</button>

            {/*
          // TODO + and - buttons styling
          // TODO adjust max quantity possible to add to cart with DB quantity
          // props: {quantityDB}
          add to cart functionality
          */}

            <input
              style={{
                width: '1.6rem',
                textAlign: 'center',
                height: '1.6rem',
                fontWeight: 700,
              }}
              type="number"
              min="1"
              // step="1"
              value={`${cartQuantity}`}
              onChange={(event) => event.preventDefault()}
            />

            <button>+</button>
          </div>
        </label>
      </form>
    </div>
  );
}
