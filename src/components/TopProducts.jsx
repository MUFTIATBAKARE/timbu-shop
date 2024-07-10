import PropTypes from "prop-types";
import A from "../assets/FrameF.svg";
import B from "../assets/FrameG.svg";
import C from "../assets/FrameH.svg";
import D from "../assets/FrameI.svg";
import E from "../assets/FrameJ.svg";
import Like from "../assets/Heart.svg";
import Slide from "../assets/ArrowSlide.svg";
import { Link } from "react-router-dom";

const items = [
  {
    picture: A,
    name: "Air Jordan 1 Retro High OG",
    price: "$349.99",
  },
  {
    picture: B,
    name: "Air Jordan 6 Retro DM",
    price: "$329.99",
  },
  {
    picture: C,
    name: "Adidas Retro Gradas",
    price: "$315.75",
  },
  {
    picture: D,
    name: "New Balance M990v6",
    price: "$250.99",
  },
  {
    picture: E,
    name: "New Balance Masculino",
    price: "$289.99",
  },
  {
    picture: A,
    name: "Air Jordan 1 Retro High OG",
    price: "$349.99",
  },
  {
    picture: B,
    name: "Air Jordan 6 Retro DM",
    price: "$329.99",
  },
  {
    picture: C,
    name: "Adidas Retro Gradas",
    price: "$315.75",
  },
  {
    picture: D,
    name: "New Balance M990v6",
    price: "$250.99",
  },
  {
    picture: E,
    name: "New Balance Masculino",
    price: "$289.99",
  },
];
function TopProducts() {
  const rightSlide = () => {
    var rightSlider = document.getElementById('nextSlider');
    rightSlider.scrollLeft = rightSlider.scrollLeft + 500;
  }
  return (
    <div className=" mx-10">
      <h4 className="font-semibold my-6">Top Products</h4>
      <div className="flex relative items-center">
        <ul id="nextSlider" className="flex mr-24 overflow-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-12">
          {items.map((item) => (
            <Product item key={item.name} itemObj={item} />
          ))}
          <img src={Like} />
        </ul>
        <img src={Slide} onClick={rightSlide} className="absolute right-0 mr-8 cursor-pointer" />
      </div>
    </div>
  );
}
function Product(props) {
  console.log(props);
  return (
    <>
      <li className="inline-block p-2 cursor-pointer">
        <Link to="/product">
          <img src={props.itemObj.picture} />
          <p>{props.itemObj.name}</p>
          <p>{props.itemObj.price}</p>
        </Link>
        <Link to="/cart">
          <button>Add to Cart</button>
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
    price: PropTypes.string.isRequired,
  }).isRequired,
};
export default TopProducts;
