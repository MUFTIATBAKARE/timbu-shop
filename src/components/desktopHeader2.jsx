import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../assets/Cart.svg";
import User from "../assets/User.svg";
import Hamburger from "../assets/Menu.svg";
import Logo from "./Logo";
import Nav from "./navBar";
import Search from "./searchBox";
import { ShopContext } from "../context/ShopContext";

function DesktopHeader2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalCartCount } = useContext(ShopContext);
  const cartCount = getTotalCartCount ? getTotalCartCount() : 0;

  return (
    <>
      <div className="hidden lg:flex items-center justify-end gap-4 px-10 py-1 bg-custom-green text-xs text-white">
        <span>Language: English</span>
        <span>•</span>
        <span>Region: United States</span>
      </div>
      <header className="flex justify-between items-center my-4 md:my-6 mx-4 sm:mx-8 md:mx-10 relative">
        <Link to="/">
          <Logo />
        </Link>
        <Nav />
        <Search />

        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/cart" className="relative p-1" title="View Cart">
            <img src={Cart} alt="Cart" className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-custom-midGreen text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </Link>

          <img src={User} alt="User" className="w-6 h-6 hidden sm:block cursor-pointer" />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <img src={Hamburger} alt="Menu" className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-2xl shadow-xl p-5 z-50 flex flex-col gap-4 mt-2 lg:hidden animate-fadeIn">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-gray-800 hover:text-custom-green py-2 border-b border-gray-100"
            >
              Home
            </Link>
            <Link
              to="/product"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-gray-800 hover:text-custom-green py-2 border-b border-gray-100"
            >
              All Footwear & Products
            </Link>
            <Link
              to="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-gray-800 hover:text-custom-green py-2 flex items-center justify-between"
            >
              <span>Shopping Cart</span>
              <span className="bg-custom-midGreen text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
                {cartCount}
              </span>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

export default DesktopHeader2;
