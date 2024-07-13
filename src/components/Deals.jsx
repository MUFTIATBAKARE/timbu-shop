import PropTypes from "prop-types";
import Like from "../assets/Heart.svg";
import { Products } from "../Products"
import Slide from "../assets/ArrowSlide.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext"

function Deals() {
  const rightSlide = () => {
    var rightSlider = document.getElementById('rightSlider');
    rightSlider.scrollLeft = rightSlider.scrollLeft + 500;
  }
  return (
    <div className=" mx-10">
      <h4 className="font-semibold my-6">Best Deals Today</h4>
      <div className="flex relative items-center">
        <ul id="rightSlider" className="flex mr-24 overflow-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-12"  >
          {Products.map((item) => (
            <Product item key={item.id} itemObj={item} />
          ))}
          <img src={Like} />
        </ul>
        <img src={Slide} onClick={rightSlide} className="absolute right-0 mr-8 cursor-pointer" />
      </div>
    </div>
  );
}
function Product(props) {
  const { id, picture, name, price } = props.itemObj
  const { addProduct, cartProducts } = useContext(ShopContext)

  return (
    <>
      <li className="inline-block p-2 cursor-pointer">

        <img src={picture} />
        <p>{name}</p>
        <p>${price}</p>
        <Link to="/product">
          <button onClick={() => addProduct(id)}>Add to Cart</button>
        </Link>
      </li>

    </>
  );
}

Product.propTypes = {
  itemObj: PropTypes.shape({
    picture: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default Deals;
