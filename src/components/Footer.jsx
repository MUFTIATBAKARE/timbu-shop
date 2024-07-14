import FooterA from "../assets/footerImageA.svg";
import FooterB from "../assets/footerImageB.svg";
import Achilles from "../assets/Achilles.svg";


function Footer() {
  return (
    <div className="flex flex-col-reverse gap-8 lg:flex-row lg:justify-between items-center bg-gray-300">
      <img src={FooterA} alt="Footer Image" />
      <div className="flex flex-col items-center lg:flex-row lg:items-start  lg:my-auto gap-8">
        <span className="text-2xl font-medium text-center lg:text-base lg:font-light lg:text-start" >
          <h5>About Us</h5>
          <p>About Achilles</p>
          <p>Careers</p>
          <p>News and Blog</p>
          <p>Help</p>
          <p>Shop by Location</p>
          <p>Affiliates and Partners</p>
          <p>Press center</p>
        </span>
        <span className="hidden lg:block">
          <h5>Services</h5>
          <p>Gift Cards</p>
          <p>Mobile App</p>
          <p>Shipping and Delivery</p>
          <p>Order Pickup</p>
          <p>Account SignUp</p>
          <p>Payment</p>
        </span>
        <span className="hidden lg:block">
          <h5>Help</h5>
          <p>Help Desk</p>
          <p>Returns</p>
          <p>Track Orders</p>
          <p>Feedback</p>
          <p>Security and Fraud</p>
          <p>Transactions</p>
        </span>
        <span className="hidden lg:block">
          <h5>Social</h5>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>TikTok</p>
        </span>
      </div>
      <img src={FooterB} alt="Footer Image"className="hidden lg:block" />
      <span>
      <img src={Achilles} alt="Achilles Logo" className=" footerLogo lg:hidden" />
      </span>
    </div>
  );
}

export default Footer;
