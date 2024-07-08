import PropTypes from "prop-types";
import N from "../assets/N.svg";
import O from "../assets/O.svg";


const items = [
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
  ];
function MyOrder() {
  return (
    <>
    <h4>Your Order</h4>
    <span>
    <ul >
        {items.map((item) => (
          <Product item key={item.name} itemObj={item} />
        ))}
      </ul>
    </span>
    <span></span>
    <span className="flex justify-between">
    <p>Subtotal</p>
    <p>$679.98</p>
    </span>
    <span className="flex justify-between">
    <p>Discount <br/> (15%)</p>
    <p>-$102</p>
    </span>
    <span className="flex justify-between">
    <h4>Grand Total</h4>
    <p>$577.98</p>
    </span>
    
    </>
  )
}
function Product(props) {
    console.log(props);
    return (
      <>
        <li className="flex gap-12">
          <img src={props.itemObj.picture} />
          <span>
          <p>{props.itemObj.name}</p>
          <p>{props.itemObj.size}</p>
          <p>{props.itemObj.color}</p>
          </span>
          <p>{props.itemObj.price}</p>
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
export default MyOrder