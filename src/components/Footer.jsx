import { Link } from "react-router-dom";
import Achilles from "../assets/Achilles.svg";

function Footer() {
  return (
    <footer className="w-full bg-[#111915] text-gray-300 mt-12 pt-12 pb-8 border-t border-gray-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-gray-800">
          {/* Brand info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={Achilles} alt="Timbu Footwear" className="w-24 h-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Curated footwear drops, rare deadstock sneakers, and iconic silhouettes. Verified 100% authentic with worldwide delivery.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 pt-2">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-custom-midGreen"></span> Global Shipping
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-custom-midGreen"></span> 30-Day Returns
              </span>
            </div>
          </div>

          {/* Links Column 1: Shop */}
          <div className="flex flex-col gap-3 text-sm">
            <h5 className="font-bold text-white text-base">Shop</h5>
            <Link to="/product" className="text-gray-400 hover:text-white transition-colors">
              All Sneakers
            </Link>
            <Link to="/product" className="text-gray-400 hover:text-white transition-colors">
              Nike & Jordans
            </Link>
            <Link to="/product" className="text-gray-400 hover:text-white transition-colors">
              Adidas Originals
            </Link>
            <Link to="/product" className="text-gray-400 hover:text-white transition-colors">
              New Balance Drops
            </Link>
          </div>

          {/* Links Column 2: Customer Care */}
          <div className="flex flex-col gap-3 text-sm">
            <h5 className="font-bold text-white text-base">Customer Care</h5>
            <Link to="/cart" className="text-gray-400 hover:text-white transition-colors">
              Order Tracking
            </Link>
            <span className="text-gray-400">Shipping & Delivery</span>
            <span className="text-gray-400">Authenticity Guarantee</span>
            <span className="text-gray-400">Returns & Exchanges</span>
          </div>

          {/* Links Column 3: About */}
          <div className="flex flex-col gap-3 text-sm">
            <h5 className="font-bold text-white text-base">About Achilles</h5>
            <span className="text-gray-400">Our Heritage</span>
            <span className="text-gray-400">Retail Outlets</span>
            <span className="text-gray-400">Sustainability</span>
            <span className="text-gray-400">Careers</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Timbu Footwear Shop. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
