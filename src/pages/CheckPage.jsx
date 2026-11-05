import PropTypes from "prop-types";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import MyOrder from "../components/MyOrder";
import Back from "../assets/Arrow.svg";
import { ShopContext } from "../context/ShopContext";

const countries = [
  { value: "usa", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "nigeria", label: "Nigeria" },
];

const regions = {
  usa: [
    { value: "ny", label: "New York" },
    { value: "ca", label: "California" },
    { value: "tx", label: "Texas" },
    { value: "fl", label: "Florida" },
  ],
  canada: [
    { value: "bc", label: "British Columbia" },
    { value: "on", label: "Ontario" },
    { value: "qc", label: "Quebec" },
  ],
  uk: [
    { value: "lon", label: "London" },
    { value: "man", label: "Manchester" },
    { value: "bir", label: "Birmingham" },
  ],
  nigeria: [
    { value: "lag", label: "Lagos" },
    { value: "abj", label: "Abuja" },
    { value: "phc", label: "Port Harcourt" },
  ],
};

function CheckPage({ nextStep, prevStep }) {
  const { setShippingData, shippingData } = useContext(ShopContext);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    resAddress: Yup.string()
      .required("Residential address is required")
      .min(5, "Address must be at least 5 characters"),
    country: Yup.string().required("Select your country"),
    region: Yup.string().required("Select your state/region"),
    postalCode: Yup.string().required("Postal / ZIP code is required"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: shippingData || {
      country: "usa",
      region: "ny",
    },
  });

  const selectedCountry = watch("country", "usa");
  const availableRegions = regions[selectedCountry] || regions["usa"];

  const onSubmit = (data) => {
    setShippingData(data);
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      <div className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-200">
        <button
          type="button"
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
          title="Back to Cart"
        >
          <img src={Back} alt="Back" className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Shipping Information
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter your delivery address and contact details
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Shipping Form */}
        <div className="lg:col-span-7 xl:col-span-8 w-full bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                {...register("fullName")}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  {...register("email")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...register("phoneNumber")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Street Address *
              </label>
              <input
                type="text"
                placeholder="123 Sneaker Boulevard, Apt 4B"
                {...register("resAddress")}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
              />
              {errors.resAddress && (
                <p className="text-red-500 text-xs mt-1">{errors.resAddress.message}</p>
              )}
            </div>

            {/* Country, State, Postal */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Country *
                </label>
                <select
                  {...register("country")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm bg-white focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
                >
                  {countries.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  State / Region *
                </label>
                <select
                  {...register("region")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm bg-white focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
                >
                  {availableRegions.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
                {errors.region && (
                  <p className="text-red-500 text-xs mt-1">{errors.region.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Postal / ZIP Code *
                </label>
                <input
                  type="text"
                  placeholder="10001"
                  {...register("postalCode")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none transition-all"
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-xs mt-1">{errors.postalCode.message}</p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 mt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={prevStep}
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              >
                ← Return to Cart
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-custom-midGreen hover:bg-custom-green text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Continue to Payment →
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 xl:col-span-4 w-full sticky top-6">
          <MyOrder />
        </div>
      </div>
    </div>
  );
}

CheckPage.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default CheckPage;
