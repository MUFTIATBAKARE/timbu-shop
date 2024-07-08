import PropTypes from "prop-types";
import A from "../assets/FrameF.svg";
import B from "../assets/FrameG.svg";
import C from "../assets/FrameH.svg";
import D from "../assets/FrameI.svg";
import E from "../assets/FrameJ.svg";
import Like from "../assets/Heart.svg";
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
];
function TopProducts() {
  return (
    <div className=" mx-10">
      <h4 className="font-semibold my-6">Top Products</h4>
      <ul className="flex gap-6">
        {items.map((item) => (
          <Product item key={item.name} itemObj={item} />
        ))}
        <img src={Like} />
      </ul>
    </div>
  );
}
function Product(props) {
  console.log(props);
  return (
    <>
      <li>
      <Link to="/product">
        <img src={props.itemObj.picture} />
        <p>{props.itemObj.name}</p>
        <p>{props.itemObj.price}</p>
        </Link>
        <button>Add to Cart</button>
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
