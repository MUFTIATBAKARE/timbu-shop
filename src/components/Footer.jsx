import FooterA from "../assets/footerImageA.svg";
import FooterB from "../assets/footerImageB.svg";

function Footer() {
  return (
    <div className="flex justify-between items-center bg-gray-300">
      <img src={FooterA} alt="Footer Image" />
      <span >
        <h5>About Us</h5>
        <p>About Achilles</p>
        <p>Careers</p>
        <p>News and Blog</p>
        <p>Help</p>
        <p>Shop by Location</p>
        <p>Affiliates and Partners</p>
        <p>Press center</p>
      </span>
      <span>
        <h5>Services</h5>
        <p>Gift Cards</p>
        <p>Mobile App</p>
        <p>Shipping and Delivery</p>
        <p>Order Pickup</p>
        <p>Account SignUp</p>
        <p>Payment</p>
      </span>
      <span>
        <h5>Help</h5>
        <p>Help Desk</p>
        <p>Returns</p>
        <p>Track Orders</p>
        <p>Feedback</p>
        <p>Security and Fraud</p>
        <p>Transactions</p>
      </span>
      <span>
        <h5>Social</h5>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>TikTok</p>
      </span>
      <img src={FooterB} alt="Footer Image" />
    </div>
  );
}

export default Footer;
