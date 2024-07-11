import PropTypes from "prop-types";
import {Items} from "../Items";
import { useContext } from "react";
import {ShopContext} from "../context/ShopContext"
import Delete from "../assets/Delete.svg";
import OrderCount from "./OrderCount";
import { useState } from "react";


function MyCart() {
  const { cartItems} = useContext(ShopContext)

  return (
    <div className="flex flex-col ">
      <span className="flex gap-80 mb-8">
        <p>PRODUCT</p>
        <span className="flex gap-10 ">
          <p>QUANTITY</p>
          <p>PRICE</p>
        </span>
      </span>
      <ul className="flex flex-col">
        {Items.map((item) => {
          if(cartItems[item.id] !== 0){
            return <Product itemObj={item}/>
          }
        }
        )}
      </ul>
    </div>
  );
}
function Product(props) {
  const [checked, setChecked] = useState(false);
  const { cartItems} = useContext(ShopContext)
  const {id, picture, name, price} = props.itemObj
  function handleChange(e) {
    setChecked(e.target.checked);
 }

  return (
    <>
      <li className="flex  gap-12">
      <input value="test" type="checkbox" onChange={handleChange} />
      {checked}
        <img src={picture} />
        <span className="flex flex-col">
          <p>{name}</p>
          {/* <p>{size}</p>
          <p>{color}</p> */}
        </span>
        <OrderCount id={id}/>
        <p>{price}</p>
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
export default MyCart;
