import PropTypes from "prop-types";
import M from "../assets/M.svg";
import N from "../assets/N.svg";
import O from "../assets/O.svg";
import P from "../assets/P.svg";
import Delete from "../assets/Delete.svg";
import OrderCount from "./OrderCount";

const items = [
    {
      picture: M,
      name: "New Balance Masculino",
      size: 9,
      color: "Custom",
      price: "$289.99",
    },
    {
      picture: N,
      name: "Air Jordan 6 DM",
      size: 9,
      color: "Black",
      price: "$329.99",
    },
    {
      picture: O,
      name: "Air Jordan 1 GreyToe",
      size: 9,
      color: "Grey/White",
      price: "$349.99",
    },
    {
      picture: P,
      name: "New Balance 550 Olive",
      size: 9,
      color: "Olive/White",
      price: "$220.00",
    },
  ];
function MyCart() {
  return (
    <div className="flex flex-col gap-24">
    <span className="flex gap-24">
        <p>Product</p>
        <span className="flex gap-36">
            <p>QUANTITY</p>
            <p>PRICE</p>
        </span>
    </span>
    <ul className="flex flex-col">
        {items.map((item) => (
          <Product item key={item.name} itemObj={item} />
        ))}
      </ul>
    </div>
  )
}
function Product(props) {
    console.log(props);
    return (
      <>
        <li className="flex gap-24 ">
        <checkbox></checkbox>
          <img src={props.itemObj.picture} />
          <span className="flex flex-col">
          <p>{props.itemObj.name}</p>
          <p>{props.itemObj.size}</p>
          <p>{props.itemObj.color}</p>
          </span>
          <OrderCount/>
          <p>{props.itemObj.price}</p>
          <img src={Delete} />

        </li>
      </>
    );
  }
  
  Product.propTypes = {
    itemObj: PropTypes.shape({
      picture: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  };
export default MyCart