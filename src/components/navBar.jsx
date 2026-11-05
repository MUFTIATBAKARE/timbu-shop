import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="hidden lg:flex items-center gap-6 font-semibold text-sm text-gray-700">
      <Link to="/" className="hover:text-custom-green transition-colors">
        Home
      </Link>
      <Link to="/product" className="hover:text-custom-green transition-colors">
        All Products
      </Link>
      <Link to="/product" className="hover:text-custom-green transition-colors">
        New Arrivals
      </Link>
      <Link to="/cart" className="hover:text-custom-green transition-colors">
        Cart
      </Link>
    </nav>
  );
}

export default NavBar;
