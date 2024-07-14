import { Link} from "react-router-dom";
import Cart from "../assets/Cart.svg";
import User from "../assets/User.svg";
import Logo from "./Logo";
import Nav from "./navBar";
import Search from "./searchBox";
import Hamburger from "../assets/Menu.svg";


function desktopHeader1() {
  return (
    <>
    <div className="hidden md:h-4 bg-custom-green lg:h-4 bg-custom-green xl:h-4 bg-custom-green" >
    </div>
    <header className="flex justify-between my-6 mx-8">
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
      <Search />
      <span className="flex flex-row-reverse items-center gap-4 lg:flex-row">
      <Link to="/cart">
        <img src={Cart} alt="Cart" className="hidden lg:block"/>
      </Link>
      <img src={User} alt="User" />
      <img src={Hamburger} alt="Menu" className="lg:hidden" />
      </span>
    </header>
    </>

  );
}

export default desktopHeader1;
