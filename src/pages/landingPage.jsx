import Desktop from "../components/desktopHeader";
import Legend from "../components/Legend";
import PopularImages from "../components/PopularImages";
import Deals from "../components/Deals";
import TopProducts from "../components/TopProducts";
import Discount from "../components/Discount";
import HomeText from "../components/HomeText";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div >
      <Desktop />
      <Legend />
      <PopularImages />
      <Deals />
      <TopProducts />
      <Discount/>
      <div className="flex justify-between align-center mx-48 my-10">
      <span>
        <p> 15k+<br/>
        Outlets Worldwide</p>
      </span>
      <span>
        <p> 2M+ <br/>
        Satisfied Customers</p>
      </span>
      <span>
        <p> 9M+<br/>
        Footwears Sold </p>
      </span>
      </div>
      <HomeText/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
