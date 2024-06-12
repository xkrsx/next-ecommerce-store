'use client';
import { useState } from 'react';

export default function AddToCart() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="add-to-cart">
      <form>
        <label>
          Quantity
          <br />
          <button>-</button>
          {/*
          TODO + and - buttons styling
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
            value={`${quantity}`}
            // onChange={() => event.preventDefault;}
          />
          <button>+</button>
        </label>
      </form>
    </div>
  );
}
