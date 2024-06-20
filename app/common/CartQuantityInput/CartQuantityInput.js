export default function CartQuantityInput({ count }) {
  return (
    <input
      className="quantity-input"
      name="changeQuantityInput"
      inputMode="numeric"
      disabled
      min="0"
      // max={stockCount}
      value={count}
    />
  );
}
