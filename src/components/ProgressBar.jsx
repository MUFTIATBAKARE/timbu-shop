import PropTypes from "prop-types";

function ProgressBar({ currentPage, activeStep }) {
  const totalSteps = 2;
  const progressBarValue = (currentPage / totalSteps) * 100;

  return (
    <div className="hidden lg:flex lg:flex-col lg:items-center xl:flex xl:flex-col xl:items-center">
      <span className="flex gap-96 mx-auto">
        <p>Cart</p>
        <p>Checkout</p>
        <p>Payment</p>
      </span>
      <div className="progress_bar">
        <div className="filler" style={{ width: `${progressBarValue}%` }}></div>
        <div className="progress_circle1"></div>
        <div
          className={`progress_circle2  ${activeStep >= 2 ? "active" : ""}`}
        ></div>
        <div
          className={`progress_circle3  ${activeStep >= 3 ? "active" : ""}`}
        ></div>
      </div>
    </div>
  );
}
ProgressBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
};
export default ProgressBar;
