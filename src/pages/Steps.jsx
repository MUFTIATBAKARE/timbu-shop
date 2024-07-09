import { useState } from "react";
import Desktop from "../components/desktopHeader";
import CartPage from "./CartPage";
import CheckPage from "./CheckPage";
import Payment from "./Payment";
import ProgressBar from "../components/ProgressBar";

function Steps() {
    const [page, setPage] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const totalPages = 3;
  const nextStep = () => {
    if (page !== totalPages - 1) {
      setPage(page + 1);
      setCurrentStep(currentStep + 1);
    }
  };

  const ShowNextPage = () => {
    switch (page) {
      case 0:
        return (
          <CartPage nextStep={nextStep}  />
        );
      case 1:
        return (
          <CheckPage
            nextStep={nextStep}
          />
        );
      case 2:
        return <Payment />;
      default:
        break;
    }
  };
  return (
    <>
      <Desktop />
      <div>
      <ProgressBar currentPage={page} activeStep={currentStep} />
        {ShowNextPage()}
        
      </div>
    </>
  );
}

export default Steps;
