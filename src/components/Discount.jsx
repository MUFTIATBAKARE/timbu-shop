
import DiscountA from "../assets/DiscountA.svg";
import DiscountB from "../assets/DiscountB.svg";

function Discount() {
  return (
    <div className="bg-custom-lightestGreen relative">
      <div className="flex  flex-col-reverse lg:flex-row items-center mx-auto h-44 lg:justify-center lg:w-9/12 bg-custom-green mx-12 my-8 xl:h-128 lg:h-128  lg:my-8">
        <img
          src={DiscountA}
          alt="picture"
          className=" hidden lg:block lg:start-2 lg:absolute"
        />
        <span className="flex flex-col items-center justify-center gap-8 h-60 lg:w-1/2 lg:h-80 text-3xl">
          <h3 className="text-base lg:text-2xl text-white text-center font-bold">
            Get up to 15% off on all items above $300
          </h3>
          <button className="bg-custom-green text-white font-light lg:font-medium text-xs lg:text-2xl mx-auto py-3 w-fit lg:w-2/4 px-8 border border-white rounded">
            Learn More
          </button>
        </span>
        <img
          src={DiscountB}
          alt="picture"
          className=" hidden lg:block lg:end-2 lg:top-0 lg:absolute"
        />
      </div>
    </div>
  );
}

export default Discount;
