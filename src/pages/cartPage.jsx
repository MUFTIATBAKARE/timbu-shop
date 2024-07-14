import PropTypes from "prop-types";
import MyCart from "../components/MyCart";
import MyOrder from "../components/MyOrder";

function CartPage({ nextStep }) {
  const handleClick = () => {
    nextStep();
  };
  return (
    <div className="flex flex-col my-8 mx-8">
      <h4 className="font-bold">My Cart</h4>
      <span className="flex flex-col lg:flex-row xl:flex-row justify-center items-center gap-16">
        <MyCart />
        <span className="flex flex-col gap-8">
          <MyOrder />
          <button className="bg-custom-midGreen text-white text-lg py-3 w-fullwidth px-8 border rounded" onClick={handleClick}> Proceed to Checkout </button>
        </span>
      </span>
    </div>
  );
}
CartPage.propTypes = {
  nextStep: PropTypes.func.isRequired,
};
export default CartPage;
