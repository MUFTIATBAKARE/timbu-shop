import { Link} from "react-router-dom";
import Cart from "../assets/Cart.svg";
import User from "../assets/User.svg";
import Logo from "./Logo";
import Nav from "./navBar";
import Search from "./searchBox";

function desktopHeader2() {
  return (
    <>
    <div className="flex items-center justify-end gap-4 px-16 bg-custom-green">
      <select className="bg-transparent text-white  px-2 py-1 rounded focus:outline-none">
        <option value="English">Language</option>
      </select>
      <select className="bg-transparent text-white  px-2 py-1 rounded focus:outline-none">
        <option className="bg-gray-800" value="Nigeria">Country</option>
      </select>
    </div>
    <header className="flex justify-between my-6 mx-10">
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
      <Search />
      <span className="flex items-center gap-4">
      <Link to="/cart">
        <img src={Cart} alt="Cart" />
      </Link>
      <img src={User} alt="User" />
      </span>
    </header>
    </>

  );
}

export default desktopHeader2;
