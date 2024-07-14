import { Link} from "react-router-dom";
import Cart from "../assets/Cart.svg";
import Hamburger from "../assets/Menu.svg";
import User from "../assets/User.svg";
import Logo from "./Logo";
import Nav from "./navBar";
import Search from "./searchBox";
import TopNav from "./TopNav";

function desktopHeader() {
  return (
    <>
    <TopNav/>
    <header className="flex justify-between my-6 mx-10">
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
      <Search />
      <span className="hidden lg:flex items-center gap-4">
      <Link to="/cart">
        <img src={Cart} alt="Cart" />
      </Link>
      <img src={User} alt="User" />
      </span>
      <img src={Hamburger} alt="Menu" className="lg:hidden" />
    </header>
    </>

  );
}

export default desktopHeader;
