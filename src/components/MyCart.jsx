import PropTypes from "prop-types";
import { Items } from "../Items";
import { Products } from "../Products";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Delete from "../assets/Delete.svg";
import OrderCount from "./OrderCount";
import { Link } from "react-router-dom";

function MyCart() {
  const {
    cartItems,
    cartProducts,
    toggleItemSelection,
    selectedItems,
    toggleProductSelection,
    selectedProducts,
    deleteFromCart,
    deleteProduct,
  } = useContext(ShopContext);

  const activeItems = Items.filter((item) => (cartItems[item.id] || 0) > 0);
  const activeProducts = Products.filter((prod) => (cartProducts[prod.id] || 0) > 0);
  const hasItems = activeItems.length > 0 || activeProducts.length > 0;

  if (!hasItems) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-gray-200 text-center gap-4 w-full">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-custom-green text-2xl font-bold">
          🛒
        </div>
        <h3 className="text-xl font-bold text-gray-800">Your shopping cart is empty</h3>
        <p className="text-gray-500 text-sm max-w-sm">
          Looks like you haven&apos;t added any footwear to your cart yet. Explore our top drops!
        </p>
        <Link
          to="/"
          className="mt-2 px-6 py-3 bg-custom-midGreen text-white font-semibold rounded-lg hover:bg-custom-green transition-colors"
        >
          Explore Sneakers
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="hidden md:grid md:grid-cols-12 text-xs font-bold text-gray-400 uppercase tracking-wider pb-3 border-b border-gray-200 px-2">
        <span className="col-span-6">Product</span>
        <span className="col-span-3 text-center">Quantity</span>
        <span className="col-span-2 text-right">Price</span>
        <span className="col-span-1 text-center">Remove</span>
      </div>

      <div className="flex flex-col gap-4">
        {activeItems.map((item) => {
          const isChecked = selectedItems.includes(item.id);
          const qty = cartItems[item.id];
          return (
            <CartRow
              key={`item-${item.id}`}
              id={item.id}
              picture={item.picture}
              name={item.name}
              price={item.price}
              quantity={qty}
              checked={isChecked}
              onToggle={() => toggleItemSelection(item.id)}
              onDelete={() => deleteFromCart(item.id)}
              itemType="item"
            />
          );
        })}

        {activeProducts.map((product) => {
          const isChecked = selectedProducts.includes(product.id);
          const qty = cartProducts[product.id];
          return (
            <CartRow
              key={`product-${product.id}`}
              id={product.id}
              picture={product.picture}
              name={product.name}
              price={product.price}
              quantity={qty}
              checked={isChecked}
              onToggle={() => toggleProductSelection(product.id)}
              onDelete={() => deleteProduct(product.id)}
              itemType="product"
            />
          );
        })}
      </div>
    </div>
  );
}

function CartRow({
  id,
  picture,
  name,
  price,
  quantity,
  checked,
  onToggle,
  onDelete,
  itemType,
}) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-xs hover:border-gray-300 transition-colors w-full">
      {/* Product column */}
      <div className="flex items-center gap-3 w-full md:col-span-6">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          className="w-4 h-4 rounded text-custom-midGreen accent-custom-midGreen cursor-pointer"
          aria-label={`Select ${name}`}
        />
        <img
          src={picture}
          alt={name}
          className="w-16 h-16 rounded-lg object-contain bg-gray-50 border border-gray-100 shrink-0"
        />
        <div className="flex flex-col min-w-0">
          <span className="font-semibold text-gray-900 text-sm md:text-base truncate">
            {name}
          </span>
          <span className="text-xs text-gray-500 font-mono">${price.toFixed(2)} each</span>
        </div>
      </div>

      {/* Quantity & Actions row for mobile, split columns on desktop */}
      <div className="flex items-center justify-between w-full md:contents pt-2 md:pt-0 border-t md:border-0 border-gray-100">
        <div className="md:col-span-3 flex justify-center">
          <OrderCount id={id} itemType={itemType} />
        </div>

        <div className="md:col-span-2 text-right">
          <span className="font-bold text-gray-900 text-base">
            ${(price * quantity).toFixed(2)}
          </span>
        </div>

        <div className="md:col-span-1 flex justify-center">
          <button
            type="button"
            onClick={onDelete}
            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            title="Remove item"
            aria-label="Remove item"
          >
            <img src={Delete} alt="Delete" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

CartRow.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  itemType: PropTypes.oneOf(["item", "product"]).isRequired,
};

export default MyCart;
