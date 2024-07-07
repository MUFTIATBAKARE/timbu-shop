import Desktop from "../components/desktopHeader";
import Legend from "../components/Legend";
import PopularImages from "../components/PopularImages";
import Deals from "../components/Deals";
import TopProducts from "../components/TopProducts";

const landingPage = () => {
  return (
    <div>
      <Desktop />
      <Legend />
      <PopularImages />
      <Deals />
      <TopProducts />
    </div>
  );
};

export default landingPage;
