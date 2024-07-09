import PropTypes from "prop-types";
import MyCart from "../components/MyCart";
import MyOrder from "../components/MyOrder";

function CartPage({ nextStep }) {
  const handleClick = () => {
    nextStep();
  };
  return (
    <div className="flex flex-col  m-16">
      <h4 className="font-bold">My Cart</h4>
      <span className="flex justify-center items-center gap-16">
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
