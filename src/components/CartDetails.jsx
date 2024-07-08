import { Link } from "react-router-dom";
import Button from "./Button";

function CartDetails() {
  return (
    <div>
      <p>
        Air Jordan 6 Retro <br />
        “Defining Moments”
      </p>
      <p>star rating</p>
      <span>
        <p>size dropdown</p>
        <p>quantity dropdown</p>
      </span>
      <p>$329.99</p>
      <p>
        The Air Jordan 6 Retro Defining Moments embodies a blend of elegance and
        boldness, making a striking visual statement with its iconic silhouette.{" "}
        <br /> Designed for both style and impact, this sneaker seamlessly
        merges classic elements with contemporary flair, appealing to both
        collectors and fashion enthusiasts.
      </p>
      <Link to="/cart">
        <Button body="Buy Now" />
      </Link>
    </div>
  );
}

export default CartDetails;
