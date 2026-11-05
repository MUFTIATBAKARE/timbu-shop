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
    <div className="min-h-screen bg-white flex flex-col w-full overflow-x-hidden">
      <Desktop />
      <main className="flex-1 flex flex-col gap-8">
        <Legend />
        <PopularImages />
        <Deals />
        <TopProducts />
        <Discount />

        {/* Global Statistics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 my-6 text-center">
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-3xl sm:text-4xl font-extrabold text-custom-green">15k+</p>
            <p className="text-sm font-semibold text-gray-600 mt-1">Outlets Worldwide</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-3xl sm:text-4xl font-extrabold text-custom-green">2M+</p>
            <p className="text-sm font-semibold text-gray-600 mt-1">Satisfied Customers</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-3xl sm:text-4xl font-extrabold text-custom-green">9M+</p>
            <p className="text-sm font-semibold text-gray-600 mt-1">Footwear Sold</p>
          </div>
        </div>

        <HomeText />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
