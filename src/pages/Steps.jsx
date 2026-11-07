import { useState } from "react";
import Desktop from "../components/desktopHeader1";
import Footer from "../components/Footer";
import CartPage from "./cartPage";
import CheckPage from "./CheckPage";
import Payment from "./Payment";
import ProgressBar from "../components/ProgressBar";

function Steps() {
  const [page, setPage] = useState(0);
  const totalPages = 3;

  const nextStep = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const ShowNextPage = () => {
    switch (page) {
      case 0:
        return <CartPage nextStep={nextStep} />;
      case 1:
        return <CheckPage nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <Payment prevStep={prevStep} />;
      default:
        return <CartPage nextStep={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Desktop />
      <div className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-4 py-4">
        <ProgressBar currentPage={page} />
        {ShowNextPage()}
      </div>
      <Footer />
    </div>
  );
}

export default Steps;
