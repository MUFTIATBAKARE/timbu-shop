import { Link} from "react-router-dom";
import Cart from "../assets/Cart.svg";
import User from "../assets/User.svg";
import Logo from "./Logo";
import Nav from "./navBar";
import Search from "./searchBox";

function desktopHeader1() {
  return (
    <>
    <div className="h-4 bg-green-800">
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

export default desktopHeader1;
