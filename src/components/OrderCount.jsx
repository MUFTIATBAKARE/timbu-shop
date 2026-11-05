import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";

function OrderCount({ id, itemType }) {
  const { cartItems, cartProducts, addProduct, removeProduct, addToCart, removeFromCart } =
    useContext(ShopContext);

  const quantity = itemType === "item" ? (cartItems[id] || 0) : (cartProducts[id] || 0);
  const add = itemType === "item" ? addToCart : addProduct;
  const remove = itemType === "item" ? removeFromCart : removeProduct;

  return (
    <div className="flex items-center justify-between h-8 w-24 px-2 bg-gray-50 border border-gray-300 rounded-lg select-none">
      <button
        type="button"
        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-black font-bold text-base hover:bg-gray-200 rounded transition-colors"
        onClick={() => remove(id)}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="text-sm font-semibold text-gray-800 text-center w-6">
        {quantity}
      </span>
      <button
        type="button"
        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-black font-bold text-base hover:bg-gray-200 rounded transition-colors"
        onClick={() => add(id)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

OrderCount.propTypes = {
  id: PropTypes.number.isRequired,
  itemType: PropTypes.oneOf(["item", "product"]).isRequired,
};

export default OrderCount;
