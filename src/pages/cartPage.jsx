import PropTypes from "prop-types";
import { useContext } from "react";
import MyCart from "../components/MyCart";
import MyOrder from "../components/MyOrder";
import { ShopContext } from "../context/ShopContext";

function CartPage({ nextStep }) {
  const { getSubtotalAmount, selectedItems, selectedProducts } = useContext(ShopContext);
  const subtotal = getSubtotalAmount();
  const hasSelected = (selectedItems.length > 0 || selectedProducts.length > 0) && subtotal > 0;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Shopping Cart</h1>
          <p className="text-sm text-gray-500 mt-1">
            Review your selected sneakers and proceed to checkout
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Cart Item List */}
        <div className="lg:col-span-7 xl:col-span-8 w-full">
          <MyCart />
        </div>

        {/* Order Summary & Checkout Trigger */}
        <div className="lg:col-span-5 xl:col-span-4 w-full flex flex-col gap-4 sticky top-6">
          <MyOrder />

          <button
            type="button"
            disabled={!hasSelected}
            onClick={nextStep}
            className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 ${
              hasSelected
                ? "bg-custom-midGreen text-white hover:bg-custom-green hover:shadow-lg active:scale-98 cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
            }`}
          >
            Proceed to Checkout →
          </button>

          {!hasSelected && (
            <p className="text-xs text-center text-amber-600 bg-amber-50 p-2 rounded-lg border border-amber-200">
              Please select at least one item in your cart to proceed.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

CartPage.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default CartPage;
