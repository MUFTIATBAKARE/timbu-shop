import { Link} from "react-router-dom";
import Cart from "../assets/Cart.svg";
import User from "../assets/User.svg";
import Logo from "./Logo";
import Nav from "./navBar";
import Search from "./searchBox";
import Drop from "./HeaderDrop";

function desktopHeader() {
  return (
    <>
    <span className="flex items-center justify-center  bg-green-800 ">
      <span className=" flex gap-4 text-white">
      <p>Join our community for special discounts on selected items</p>
      <p>Subscribe to Newsletter</p>
      </span>
      <Drop/>
    </span>
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

export default desktopHeader;
