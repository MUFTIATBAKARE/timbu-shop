import PropTypes from "prop-types";
import MyCart from "../components/MyCart";
import MyOrder from "../components/MyOrder";

function CartPage({ nextStep }) {
  const handleClick = () => {
    nextStep();
  };
  return (
    <div className="my-8">
      <h4>My Cart</h4>
      <span className="flex ">
        <MyCart />
        <span>
          <MyOrder />
          <button onClick={handleClick}> Proceed to Checkout </button>
        </span>
      </span>
    </div>
  );
}
CartPage.propTypes = {
  nextStep: PropTypes.func.isRequired,
};
export default CartPage;
