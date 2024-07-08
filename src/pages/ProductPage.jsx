
import Desktop from "../components/desktopHeader";
import Back from "../assets/Arrow.svg";
import CartDetails from "../components/CartDetails";
import ProductImages from "../components/ProductImages";
import C from "../assets/FrameC.svg";


function ProductPage() {
  return (
    <>
      <Desktop />
      <div className=" flex flex-col gap-4 mx-24">
      <a href="/">
        <img src={Back} alt="back" />
        <p>Back to Homepage</p>
      </a>
      <span className="flex gap-24">
      <img src={C} alt=" Image" className="w-2/3"/>
      <p>color picker</p>

        <CartDetails />
      </span>
      <ProductImages />
      <p>*This item has already been added to your cart.</p>
      </div>
    </>
  );
}

export default ProductPage;
