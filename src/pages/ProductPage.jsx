import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Desktop from "../components/desktopHeader2";
import Back from "../assets/Arrow.svg";
import { Items } from "../Items";
import { Products } from "../Products";
import { ShopContext } from "../context/ShopContext";

function ProductPage() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allFootwear = [
    ...Items.map((item) => ({ ...item, source: "item" })),
    ...Products.map((prod) => ({ ...prod, source: "product", id: prod.id + 100 })),
  ];

  const filteredShoes = allFootwear.filter((shoe) => {
    const matchesSearch = shoe.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    if (filter === "jordans") {
      return shoe.name.toLowerCase().includes("jordan") || shoe.name.toLowerCase().includes("nike");
    }
    if (filter === "adidas") {
      return shoe.name.toLowerCase().includes("adidas");
    }
    if (filter === "balance") {
      return shoe.name.toLowerCase().includes("balance");
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Desktop />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-custom-green transition-colors"
          >
            <img src={Back} alt="Back" className="w-4 h-4" />
            <span>Back to Storefront</span>
          </Link>

          {/* Quick Search */}
          <div className="w-full sm:w-72">
            <input
              type="text"
              placeholder="Filter by shoe name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:border-custom-midGreen focus:ring-1 focus:ring-custom-midGreen outline-none"
            />
          </div>
        </div>

        {/* Catalog Header */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs mb-8">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Footwear Collection
          </h1>
          <p className="text-gray-500 text-sm mt-1 max-w-xl">
            Explore authentic sneakers from world-class brands. Choose your pair, select options, and check out seamlessly.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-custom-midGreen text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Sneakers ({allFootwear.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("jordans")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === "jordans"
                  ? "bg-custom-midGreen text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Nike & Jordans
            </button>
            <button
              type="button"
              onClick={() => setFilter("adidas")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === "adidas"
                  ? "bg-custom-midGreen text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Adidas
            </button>
            <button
              type="button"
              onClick={() => setFilter("balance")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === "balance"
                  ? "bg-custom-midGreen text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              New Balance
            </button>
          </div>
        </div>

        {/* Shoes Grid */}
        {filteredShoes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200">
            <p className="text-gray-400 text-lg">
              No footwear found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setFilter("all");
              }}
              className="mt-3 text-sm font-bold text-custom-midGreen hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredShoes.map((shoe) => (
              <ShoeCard key={`${shoe.source}-${shoe.id}`} shoe={shoe} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function ShoeCard({ shoe }) {
  const { id, picture, name, price, source } = shoe;
  const originalId = source === "product" ? id - 100 : id;
  const { addToCart, addProduct } = useContext(ShopContext);
  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState("42");

  const handleAddToCart = () => {
    if (source === "product") {
      addProduct(originalId);
    } else {
      addToCart(originalId);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between group">
      <div>
        <div className="w-full h-48 bg-gray-50 rounded-xl flex items-center justify-center p-4 mb-4 overflow-hidden">
          <img
            src={picture}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
          <span>★★★★★</span>
          <span className="text-gray-400 text-[11px] ml-1">(4.9)</span>
        </div>

        <h3 className="font-bold text-gray-900 text-base line-clamp-1 mb-1" title={name}>
          {name}
        </h3>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>Size (EU):</span>
          <div className="flex gap-1">
            {["40", "42", "44"].map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => setSelectedSize(sz)}
                className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold border ${
                  selectedSize === sz
                    ? "border-custom-midGreen bg-green-50 text-custom-green"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
        <div>
          <span className="text-[10px] text-gray-400 uppercase font-bold block">Price</span>
          <span className="text-lg font-extrabold text-gray-900">
            ${price.toFixed(2)}
          </span>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className={`py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            added
              ? "bg-custom-green text-white shadow-xs"
              : "bg-custom-midGreen hover:bg-custom-green text-white shadow-xs active:scale-95"
          }`}
        >
          {added ? "✓ Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

ShoeCard.propTypes = {
  shoe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductPage;
