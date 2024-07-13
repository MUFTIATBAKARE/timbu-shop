import PropTypes from "prop-types";
import {Items} from "../Items";
import { Products } from "../Products"
import { useContext } from "react";
import {ShopContext} from "../context/ShopContext"
import Delete from "../assets/Delete.svg";
import OrderCount from "./OrderCount";


function MyCart() {
  console.log(useContext(ShopContext))
  const { cartItems, cartProducts, toggleItemSelection, selectedItems, toggleProductSelection, selectedProducts } = useContext(ShopContext)

  return (
    <div className="flex flex-col gap-8">
      <span className="flex gap-96 mb-8">
        <p>PRODUCT</p>
        <span className="flex gap-10 ">
          <p>QUANTITY</p>
          <p>PRICE</p>
        </span>
      </span>
      <ul className="flex flex-col gap-8">
        {Items.map((item) => {
          if (cartItems[item.id] !== 0) {
            const isChecked = selectedItems.includes(item.id);
            return <ProductA itemObj={item} checked={isChecked}
            onCheckboxChange={() => toggleItemSelection(item.id)}/>
          }
        }
        )}
      </ul>
      <ul className="flex flex-col gap-8">
        {Products.map((item) => {
          if (cartProducts[item.id] !== 0) {
            const isChecked = selectedProducts.includes(item.id);
            return <ProductB itemObj={item} checked={isChecked}
            onCheckChange={() => toggleProductSelection(item.id)}/>
          }
        }
        )}
      </ul>
    </div>
  );
}
function ProductA({ itemObj, checked, onCheckboxChange }) {
  const { cartItems} = useContext(ShopContext)
  const {id, picture, name, price} = itemObj

  return (
    <>
      <li className="flex  gap-12">
      <input value="test" type="checkbox" checked={checked}
        onChange={onCheckboxChange}/>
        <img src={picture} />
        <span className="flex flex-col">
          <p>{name}</p>
          {/* <p>{size}</p>
          <p>{color}</p> */}
        </span>
        <OrderCount id={id} itemType="item" />
        <p>${price}</p>
        <img src={Delete} />
      </li>
    </>
  );
}
function ProductB({ itemObj, checked, onCheckChange }) {
  const { cartProducts} = useContext(ShopContext)
  const {id, picture, name, price} = itemObj

  return (
    <>
      <li className="flex  gap-12">
      <input value="test" type="checkbox" checked={checked}
        onChange={onCheckChange}/>
        <img src={picture} />
        <span className="flex flex-col">
          <p>{name}</p>
          {/* <p>{size}</p>
          <p>{color}</p> */}
        </span>
        <OrderCount id={id} itemType="product" />
        <p>${price}</p>
        <img src={Delete} />
      </li>
    </>
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
  onCheckboxChange: PropTypes.func.isRequired,
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
  onCheckChange: PropTypes.func.isRequired,
};
export default MyCart;
