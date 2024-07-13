
import Desktop from "../components/desktopHeader2";
import Back from "../assets/Arrow.svg";
import ProductImages from "../components/ProductImages";
import PropTypes from "prop-types";
import { Items } from "../Items";
import { Products } from "../Products"
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom";
import Button from "../components/Button";


function ProductPage() {
  const { cartItems, cartProducts } = useContext(ShopContext)

  return (
    <div>
      <Desktop />
      <div className=" flex flex-col mx-24">
        <a href="/">
          <img src={Back} alt="back" />
          <p>Back to Homepage</p>
        </a>
        <span className="flex flex-col gap-24">
          <ul className="flex flex-col gap-24">
            {Items.map((item) => {
              if (cartItems[item.id] !== 0) {
                return <ProductA itemObj={item} />
              }
            }
            )}
          </ul>
          <ul className="flex flex-col gap-24">
            {Products.map((item) => {
              if (cartProducts[item.id] !== 0) {
                return <ProductB itemObj={item} />
              }
            }
            )}
          </ul>
        </span>
      </div>
    </div>
  );
}
function ProductA({ itemObj }) {
  const { cartItems } = useContext(ShopContext)
  const { id, picture, name, price, description } = itemObj

  return (
    <div className="flex flex-col gap-16">
      <li className="flex gap-12">
        <img src={picture} />
        <p>color picker</p>
        <span className="flex flex-col gap-2 w-25%">
          <p>{name}</p>
          <p>star rating</p>
          <span>
            <p>size dropdown</p>
            <p>quantity dropdown</p>
          </span>

          <p>${price}</p>
          <p>{description}</p>
          <Link to="/cart">
            <Button body="Buy Now" />
          </Link>
        </span>

      </li>
      <span>
        <ProductImages />
        <p>*This item has already been added to your cart.</p>
      </span>
    </div>
  );
}
function ProductB({ itemObj }) {
  const { cartProducts } = useContext(ShopContext)
  const { id, picture, name, price, description } = itemObj

  return (
    <div className="flex flex-col gap-16">
      <li className="flex  gap-12">
        <img src={picture} />
        <p>color picker</p>
        <span className="flex flex-col gap-2 w-25%">
          <p>{name}</p>
          <p>star rating</p>
          <span>
            <p>size dropdown</p>
            <p>quantity dropdown</p>
          </span>
          <p>${price}</p>
          <p>{description}</p>
          <Link to="/cart">
            <Button body="Buy Now" />
          </Link>
        </span>

      </li>
      <span>
        <ProductImages />
        <p>*This item has already been added to your cart.</p>
      </span>
    </div>
  )
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
