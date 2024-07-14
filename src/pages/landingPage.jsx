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
    <div className="max-w-full h-screen flex flex-col gap-8" >
      <Desktop />
      <Legend />
      <PopularImages />
      <Deals />
      <TopProducts />
      <Discount />
      <div className="flex flex-col gap-16 mx-auto lg:flex-row  lg:justify-between align-center lg:gap-32 my-10 text-3xl">
        <span className="hidden lg:block lg:text-center">
          <p> 15k+<br />
            Outlets Worldwide</p>
        </span>
        <span>
          <p className="text-center"> 2M+ <br />
            Satisfied Customers</p>
        </span>
        <span className="hidden lg:block lg:text-center">
          <p> 9M+<br />
            Footwears Sold </p>
        </span>
      </div>
      <HomeText />
      <Footer />
    </div>
  );
};

export default LandingPage;
