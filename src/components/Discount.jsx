import Button from "./Button"
import DiscountA from "../assets/DiscountA.svg";
import DiscountB from "../assets/DiscountB.svg";

function Discount() {
  return (
    <div className="flex items-center justify-center bg-green-50 h-128 mx-12 my-8">
      <img src={DiscountA} alt="picture" className="start-24 absolute" />
      <span className="flex flex-col items-center justify-center gap-8 bg-green-900 w-1/2 h-80 text-3xl">
        <h3>Get up to 15% off on all items above $300</h3>
        <Button body="Learn More" />
      </span>
      <img src={DiscountB} alt="picture" className=" end-24 absolute"/>
    
    </div>
  )
}

export default Discount