import { Link, NavLink } from "react-router-dom";
import Cart from "../assets/Cart.svg";
import User from "../assets/User.svg";
import Logo from "./Logo";
import Nav from "./navBar";
import Search from "./searchBox";

function desktopHeader() {
  return (
    <header className="flex justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
      <Search />
      <NavLink to="/Cart">
        <img src={Cart} alt="Cart" />
      </NavLink>
      <img src={User} alt="User" />
    </header>
  );
}

export default desktopHeader;
