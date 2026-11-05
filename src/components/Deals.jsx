import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Products } from "../Products";
import Slide from "../assets/ArrowSlide.svg";
import { ShopContext } from "../context/ShopContext";

function Deals() {
  const rightSlide = () => {
    const slider = document.getElementById("rightSlider");
    if (slider) {
      slider.scrollLeft += 400;
    }
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-10 my-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-extrabold text-gray-900 text-xl sm:text-2xl">
          Best Deals Today
        </h4>
        <span className="text-xs font-semibold text-custom-midGreen">
          Scroll to explore →
        </span>
      </div>

      <div className="flex relative items-center">
        <ul
          id="rightSlider"
          className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-6 pb-4 w-full"
        >
          {Products.map((item) => (
            <DealCard key={item.id} itemObj={item} />
          ))}
        </ul>
        <button
          type="button"
          onClick={rightSlide}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 shadow-md p-2 rounded-full hover:bg-white transition-all cursor-pointer z-10"
          aria-label="Scroll right"
        >
          <img src={Slide} alt="Slide right" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function DealCard({ itemObj }) {
  const { id, picture, name, price } = itemObj;
  const { addProduct } = useContext(ShopContext);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addProduct(id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <li className="flex-none w-56 sm:w-64 p-4 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 shadow-xs flex flex-col justify-between transition-all">
      <div className="flex flex-col items-center">
        <img
          src={picture}
          alt={name}
          className="w-full h-40 object-contain p-2 rounded-xl bg-gray-50 mb-3"
        />
        <p className="text-gray-800 font-bold text-sm text-center line-clamp-2 min-h-10">
          {name}
        </p>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <p className="font-extrabold text-lg text-gray-900 text-center">
          ${price.toFixed(2)}
        </p>
        <button
          type="button"
          onClick={handleAdd}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            added
              ? "bg-custom-green text-white shadow-sm"
              : "bg-custom-midGreen hover:bg-custom-green text-white shadow-xs"
          }`}
        >
          {added ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </li>
  );
}

DealCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Deals;
