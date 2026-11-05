import PropTypes from "prop-types";

function ProgressBar({ currentPage }) {
  const steps = [
    { label: "Cart", number: 1 },
    { label: "Shipping", number: 2 },
    { label: "Payment", number: 3 },
  ];

  return (
    <div className="w-full max-w-xl mx-auto py-4 px-4 my-2">
      {/* Desktop & Tablet Progress Stepper */}
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />
        <div
          className="absolute top-1/2 left-0 h-1 bg-custom-midGreen -translate-y-1/2 z-0 transition-all duration-300"
          style={{ width: `${(currentPage / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, idx) => {
          const isCompleted = currentPage > idx;
          const isActive = currentPage === idx;

          return (
            <div key={step.label} className="relative z-10 flex flex-col items-center gap-1.5">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all border-2 ${
                  isActive
                    ? "bg-custom-midGreen text-white border-custom-midGreen ring-4 ring-green-100 shadow-sm"
                    : isCompleted
                    ? "bg-custom-green text-white border-custom-green"
                    : "bg-white text-gray-400 border-gray-300"
                }`}
              >
                {isCompleted ? "✓" : step.number}
              </div>
              <span
                className={`text-xs font-semibold whitespace-nowrap ${
                  isActive
                    ? "text-custom-green font-bold"
                    : isCompleted
                    ? "text-gray-700"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default ProgressBar;
