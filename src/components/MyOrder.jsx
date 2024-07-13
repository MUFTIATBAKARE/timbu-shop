import PropTypes from "prop-types";
import { Items } from "../Items";
import { Products } from "../Products"
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext"

function MyOrder() {
  const { cartItems, selectedItems, selectedProducts, getSubtotalAmount } = useContext(ShopContext)

  const allSelectedItems = Items.filter((item) =>
    selectedItems.includes(item.id)
  );
  const allSelectedProducts = Products.filter((product) =>
    selectedProducts.includes(product.id)
  );
  const Amount = getSubtotalAmount()
  return (
    <div className="flex flex-col gap-8">
      <h4>Your Order</h4>
      <span>
        <ul className="flex flex-col gap-8">
          {allSelectedItems.map((item) => (
            <Product key={item.id} itemObj={item} />
          ))}
        </ul>
      </span>
      <span>
        <ul className="flex flex-col gap-8">
          {allSelectedProducts.map((item) => (
            <Product key={item.id} itemObj={item} />
          ))}
        </ul>
      </span>
      <span className="flex justify-between">
        <p>Subtotal</p>
        <p>${Amount}</p>
      </span>
      <span className="flex justify-between">
        <p>Discount <br /> (15%)</p>
        <p>-$102</p>
      </span>
      <span className="flex justify-between">
        <h4>Grand Total</h4>
        <p>$577.98</p>
      </span>

    </div>
  )
}
function Product({ itemObj }) {
  const { id, picture, name, price } = itemObj
  return (
    <>
      <li className="flex gap-12">
        <img src={picture} />
        <span>
          <p>{name}</p>
          {/* <p>{size}</p>
          <p>{color}</p> */}
        </span>
        <p>${price}</p>
      </li>
    </>
  );
}

Product.propTypes = {
  itemObj: PropTypes.shape({
    picture: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    name: PropTypes.string.isRequired,
    // size: PropTypes.number.isRequired,
    // color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default MyOrder