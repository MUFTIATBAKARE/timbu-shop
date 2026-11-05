import PropTypes from "prop-types";
import { Items } from "../Items";
import { Products } from "../Products";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function MyOrder() {
  const { cartItems, cartProducts, selectedItems, selectedProducts, getSubtotalAmount } =
    useContext(ShopContext);

  const selectedItemList = Items.filter(
    (item) => selectedItems.includes(item.id) && (cartItems[item.id] || 0) > 0
  );

  const selectedProductList = Products.filter(
    (product) => selectedProducts.includes(product.id) && (cartProducts[product.id] || 0) > 0
  );

  const subtotal = getSubtotalAmount();
  const discount = subtotal > 0 ? Number((subtotal * 0.1).toFixed(2)) : 0;
  const shippingFee = subtotal > 0 ? (subtotal >= 200 ? 0 : 15.0) : 0;
  const grandTotal = subtotal > 0 ? Number((subtotal - discount + shippingFee).toFixed(2)) : 0;

  return (
    <div className="flex flex-col border border-gray-200 rounded-xl p-6 gap-6 bg-white shadow-sm w-full max-w-md mx-auto">
      <h4 className="text-xl font-bold text-gray-900 border-b pb-3">Order Summary</h4>

      {selectedItemList.length === 0 && selectedProductList.length === 0 ? (
        <p className="text-gray-400 text-sm py-4 text-center">No items selected</p>
      ) : (
        <div className="flex flex-col gap-4 max-h-64 overflow-y-auto pr-1">
          {selectedItemList.map((item) => (
            <OrderItem
              key={`item-${item.id}`}
              name={item.name}
              price={item.price}
              quantity={cartItems[item.id]}
              picture={item.picture}
            />
          ))}
          {selectedProductList.map((product) => (
            <OrderItem
              key={`product-${product.id}`}
              name={product.name}
              price={product.price}
              quantity={cartProducts[product.id]}
              picture={product.picture}
            />
          ))}
        </div>
      )}

      <div className="flex flex-col gap-3 pt-3 border-t border-gray-100 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-green-700">
          <span>Discount (10%)</span>
          <span className="font-semibold">-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Estimated Shipping</span>
          <span className="font-semibold text-gray-900">
            {shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-200 text-base">
          <span className="font-bold text-gray-900">Grand Total</span>
          <span className="text-xl font-extrabold text-custom-green">
            ${grandTotal.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

function OrderItem({ name, price, quantity, picture }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <div className="flex items-center gap-3">
        {picture && (
          <img
            src={picture}
            alt={name}
            className="w-12 h-12 rounded-lg object-contain bg-gray-50 border border-gray-100 shrink-0"
          />
        )}
        <div className="flex flex-col">
          <span className="font-medium text-gray-800 line-clamp-1">{name}</span>
          <span className="text-xs text-gray-500">Qty: {quantity}</span>
        </div>
      </div>
      <span className="font-semibold text-gray-800 whitespace-nowrap">
        ${(price * quantity).toFixed(2)}
      </span>
    </div>
  );
}

OrderItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  picture: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default MyOrder;
