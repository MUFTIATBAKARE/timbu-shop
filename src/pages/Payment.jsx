import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import MyOrder from "../components/MyOrder";
import Back from "../assets/Arrow.svg";
import { ShopContext } from "../context/ShopContext";

function Payment({ prevStep }) {
  const navigate = useNavigate();
  const { shippingData, getSubtotalAmount, clearCart } = useContext(ShopContext);

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("4242 •••• •••• 4242");
  const [cardExpiry, setCardExpiry] = useState("12/28");
  const [cardCvc, setCardCvc] = useState("892");
  const [cardName, setCardName] = useState(shippingData?.fullName || "Jane Doe");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState("");

  const subtotal = getSubtotalAmount();
  const discount = subtotal > 0 ? Number((subtotal * 0.1).toFixed(2)) : 0;
  const shippingFee = subtotal > 0 ? (subtotal >= 200 ? 0 : 15.0) : 0;
  const grandTotal = Number((subtotal - discount + shippingFee).toFixed(2));

  const handlePay = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedId = `TMB-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setOrderConfirmed(true);
    }, 1800);
  };

  const handleFinish = () => {
    clearCart();
    navigate("/");
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      {/* Step Header */}
      <div className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-200">
        <button
          type="button"
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
          title="Back to Shipping"
        >
          <img src={Back} alt="Back" className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Payment & Review
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Choose your payment method and complete your order
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Delivery Summary + Payment Form */}
        <div className="lg:col-span-7 xl:col-span-8 w-full flex flex-col gap-6">
          {/* Shipping Recap Banner */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Delivering to:
              </span>
              <p className="font-semibold text-gray-900 text-sm">
                {shippingData?.fullName || "Guest Customer"}
              </p>
              <p className="text-xs text-gray-600">
                {shippingData?.resAddress || "123 Street"}, {shippingData?.region?.toUpperCase()},{" "}
                {shippingData?.country?.toUpperCase()} • {shippingData?.phoneNumber || "Phone"}
              </p>
            </div>
            <button
              type="button"
              onClick={prevStep}
              className="text-xs font-bold text-custom-midGreen hover:underline cursor-pointer"
            >
              Edit
            </button>
          </div>

          {/* Payment Method Selector */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs flex flex-col gap-6">
            <h3 className="text-lg font-bold text-gray-900">Payment Method</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  paymentMethod === "card"
                    ? "border-custom-midGreen bg-green-50/40 text-custom-green font-bold shadow-xs"
                    : "border-gray-200 hover:border-gray-300 text-gray-600"
                }`}
              >
                <span className="text-2xl">💳</span>
                <span className="text-xs">Credit Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("applepay")}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  paymentMethod === "applepay"
                    ? "border-custom-midGreen bg-green-50/40 text-custom-green font-bold shadow-xs"
                    : "border-gray-200 hover:border-gray-300 text-gray-600"
                }`}
              >
                <span className="text-2xl">📱</span>
                <span className="text-xs">Apple / Google Pay</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("transfer")}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  paymentMethod === "transfer"
                    ? "border-custom-midGreen bg-green-50/40 text-custom-green font-bold shadow-xs"
                    : "border-gray-200 hover:border-gray-300 text-gray-600"
                }`}
              >
                <span className="text-2xl">🏦</span>
                <span className="text-xs">Bank Transfer</span>
              </button>
            </div>

            {/* Credit Card Form */}
            {paymentMethod === "card" && (
              <form onSubmit={handlePay} className="flex flex-col gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm font-mono focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      required
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm font-mono focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Security Code (CVV)
                    </label>
                    <input
                      type="password"
                      maxLength={4}
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value)}
                      required
                      placeholder="•••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm font-mono focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 text-xs text-gray-500">
                  <span>🔒</span>
                  <span>Payments are 256-bit SSL encrypted & secure.</span>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing || grandTotal <= 0}
                  className="w-full py-4 bg-custom-midGreen hover:bg-custom-green text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base mt-2 cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Processing Payment...</span>
                  ) : (
                    <span>Complete Order • ${grandTotal.toFixed(2)}</span>
                  )}
                </button>
              </form>
            )}

            {paymentMethod !== "card" && (
              <div className="flex flex-col items-center justify-center p-8 border border-dashed border-gray-300 rounded-xl text-center gap-3">
                <span className="text-3xl">✓</span>
                <p className="font-semibold text-gray-800">
                  {paymentMethod === "applepay" ? "Apple / Google Pay Ready" : "Bank Transfer Instructions"}
                </p>
                <p className="text-xs text-gray-500 max-w-sm">
                  Click below to confirm your reservation and authorize the transaction securely.
                </p>
                <button
                  type="button"
                  onClick={handlePay}
                  disabled={isProcessing || grandTotal <= 0}
                  className="mt-2 w-full max-w-xs py-3.5 bg-custom-midGreen hover:bg-custom-green text-white font-bold rounded-xl shadow-md transition-all cursor-pointer"
                >
                  {isProcessing ? "Confirming..." : `Authorize $${grandTotal.toFixed(2)}`}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 xl:col-span-4 w-full sticky top-6">
          <MyOrder />
        </div>
      </div>

      {/* Order Confirmed Modal */}
      {orderConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center flex flex-col items-center gap-4 shadow-2xl animate-scaleUp">
            <div className="w-20 h-20 rounded-full bg-green-100 text-custom-midGreen flex items-center justify-center text-4xl shadow-inner">
              ✓
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Order Confirmed!</h2>
            <p className="text-sm text-gray-600">
              Thank you, <span className="font-bold text-gray-900">{cardName}</span>! Your
              order has been received and is being prepared for dispatch.
            </p>

            <div className="w-full bg-gray-50 p-4 rounded-xl border border-gray-200 text-left flex flex-col gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Order Reference:</span>
                <span className="font-mono font-bold text-gray-900">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total Paid:</span>
                <span className="font-bold text-custom-green">${grandTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Estimated Delivery:</span>
                <span className="font-medium text-gray-900">3–5 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Confirmation Sent To:</span>
                <span className="font-medium text-gray-900 truncate max-w-[180px]">
                  {shippingData?.email || "customer@example.com"}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFinish}
              className="w-full py-4 bg-custom-midGreen hover:bg-custom-green text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-sm mt-2 cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Payment.propTypes = {
  prevStep: PropTypes.func.isRequired,
};

export default Payment;
