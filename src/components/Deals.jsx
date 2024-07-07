import PropTypes from "prop-types";
import A from "../assets/FrameA.svg";
import B from "../assets/FrameB.svg";
import C from "../assets/FrameC.svg";
import D from "../assets/FrameD.svg";
import E from "../assets/FrameE.svg";
import Like from "../assets/Heart.svg";

const items = [
  {
    picture: A,
    name: "FeatherStep Classic",
    price: "$259.99",
  },
  {
    picture: B,
    name: "Retro Air Jordan 1 OG “Panda”",
    price: "$325.89",
  },
  {
    picture: C,
    name: "New Balance 550 Olive",
    price: "$220.00",
  },
  {
    picture: D,
    name: "Adidas ZX Torsion For Men",
    price: "$387.79",
  },
  {
    picture: E,
    name: "Retro Adidas Lowdunk",
    price: "$375.99",
  },
];
function Deals() {
  return (
    <>
      <h4>Best Deals Today</h4>
      <ul className="flex justify-between">
        {items.map((item) => (
          <Product item key={item.name} itemObj={item} />
        ))}
        <img src={Like} />
      </ul>
    </>
  );
}
function Product(props) {
  console.log(props);
  return (
    <>
      <li>
        <img src={props.itemObj.picture} />
        <p>{props.itemObj.name}</p>
        <p>{props.itemObj.price}</p>
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
export default Deals;
