import Desktop from "../components/desktopHeader2";
import Back from "../assets/Arrow.svg";
import ProductImages from "../components/ProductImages";
import PropTypes from "prop-types";
import { Items } from "../Items";
import { Products } from "../Products";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function ProductPage() {
  const { cartItems, cartProducts } = useContext(ShopContext);

  return (
    <div>
      <Desktop />
      <div className=" flex flex-col gap-4 p-8 lg:mx-24 2xl:mx-32">
        <a href="/" className="flex gap-4">
          <img src={Back} alt="back" className="block lg:hidden xl:hidden" />
          <p className="hidden lg-block xl-block">Back to Homepage</p>
        </a>
        <span className="flex flex-col gap-24">
          <ul className="flex flex-col gap-24">
            {Items.map((item) => {
              if (cartItems[item.id] !== 0) {
                return <ProductA itemObj={item} />;
              }
            })}
          </ul>
          <ul className="flex flex-col gap-24">
            {Products.map((item) => {
              if (cartProducts[item.id] !== 0) {
                return <ProductB itemObj={item} />;
              }
            })}
          </ul>
        </span>
      </div>
    </div>
  );
}
function ProductA({ itemObj }) {
  const { cartItems } = useContext(ShopContext);
  const { id, picture, name, price, description } = itemObj;

  return (
    <div className="flex flex-col gap-16">
      <li className="flex flex-col gap-4 lg:flex-row lg:gap-12 xl:flex-row lg:gap-12">
        <img src={picture} />
        <p>color picker</p>
        <span className="flex flex-col gap-2 w-100% lg:w-25% xl:w-45%">
          <p>{name}</p>
          <p>star rating</p>
          <span>
            <p>size dropdown</p>
            <p>quantity dropdown</p>
          </span>

          <p>${price}</p>
          <p>{description}</p>
          <Link to="/cart">
            <button className="hidden bg-custom-midGreen text-white font-medium text-2xl py-3 w-100% md:w-1/2 md:mx-0 lg:mx-0 lg:w-2/4 xl:w-1/4 px-8 border rounded">
              Buy Now
            </button>
          </Link>
        </span>
      </li>
      <span className="flex flex-col gap-4">
        <ProductImages />
        <p className="hidden md:block lg:block xl:block">
          {" "}
          *This item has already been added to your cart.
        </p>
        <Link to="/cart">
          <button className="block md:hidden lg:hidden xl:hidden bg-custom-midGreen text-white font-medium text-2xl mx-auto py-3 w-0% md:w-1/2 md:mx-0 lg:mx-0 lg:w-2/4 xl:w-1/4 px-8 border rounded">
            Buy Now
          </button>
        </Link>
      </span>
    </div>
  );
}
function ProductB({ itemObj }) {
  const { cartProducts } = useContext(ShopContext);
  const { id, picture, name, price, description } = itemObj;

  return (
    <div className="flex flex-col gap-16">
      <li className="flex flex-col gap-4 lg:flex-row lg:gap-12 xl:flex-row lg:gap-12">
        <img src={picture} />
        <p>color picker</p>
        <span className="flex flex-col gap-2 w-100% lg:w-25% xl:w-45%">
          <p>{name}</p>
          <p>star rating</p>
          <span>
            <p>size dropdown</p>
            <p>quantity dropdown</p>
          </span>
          <p>${price}</p>
          <p>{description}</p>
          <Link to="/cart">
            <button className="hidden bg-custom-midGreen text-white font-medium text-2xl py-3 w-100% md:w-1/2 md:mx-0 lg:mx-0 lg:w-2/4 xl:w-1/4 px-8 border rounded">
              Buy Now
            </button>
          </Link>
        </span>
      </li>
      <span className="flex flex-col gap-4">
        <ProductImages />
        <p className="hidden md:block lg:block xl:block">
          {" "}
          *This item has already been added to your cart.
        </p>
        <Link to="/cart">
        <button className="block md:hidden lg:hidden xl:hidden bg-custom-midGreen text-white font-medium text-2xl mx-auto py-3 w-0% md:w-1/2 md:mx-0 lg:mx-0 lg:w-2/4 xl:w-1/4 px-8 border rounded">
          Buy Now
        </button>
        </Link>
      </span>
    </div>
  );
}
ProductA.propTypes = {
  itemObj: PropTypes.shape({
    picture: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    name: PropTypes.string.isRequired,
    // size: PropTypes.number.isRequired,
    // color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  checked: PropTypes.bool.isRequired,
};
ProductB.propTypes = {
  itemObj: PropTypes.shape({
    picture: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    name: PropTypes.string.isRequired,
    // size: PropTypes.number.isRequired,
    // color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  checked: PropTypes.bool.isRequired,
};
export default ProductPage;
