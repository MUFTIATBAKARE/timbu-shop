import { Link } from "react-router-dom";
import DiscountA from "../assets/DiscountA.svg";
import DiscountB from "../assets/DiscountB.svg";

function Discount() {
  return (
    <div className="bg-custom-lightestGreen py-8 sm:py-12 my-6">
      <div className="relative flex flex-col lg:flex-row items-center justify-center bg-custom-green mx-4 sm:mx-8 md:mx-auto max-w-5xl rounded-3xl p-8 sm:p-12 overflow-hidden shadow-lg">
        <img
          src={DiscountA}
          alt="Discount left"
          className="hidden lg:block absolute left-4 bottom-4 w-48 opacity-80"
        />

        <div className="flex flex-col items-center justify-center text-center gap-4 z-10 max-w-md">
          <span className="text-xs font-bold tracking-widest uppercase text-green-300">
            Special Promotion
          </span>
          <h3 className="text-xl sm:text-3xl text-white font-extrabold leading-tight">
            Get up to 15% off on all footwear orders above $300
          </h3>
          <p className="text-xs sm:text-sm text-green-100">
            Use code <span className="font-mono font-bold text-white">TIMBU15</span> at checkout
          </p>
          <Link
            to="/product"
            className="mt-2 inline-block bg-white text-custom-green font-bold text-sm sm:text-base py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-all"
          >
            Shop Now
          </Link>
        </div>

        <img
          src={DiscountB}
          alt="Discount right"
          className="hidden lg:block absolute right-4 top-4 w-48 opacity-80"
        />
      </div>
    </div>
  );
}

export default Discount;
