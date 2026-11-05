import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ body, onClick, to = "/product" }) {
  if (to) {
    return (
      <Link
        to={to}
        className="inline-block bg-custom-midGreen hover:bg-custom-green text-white font-semibold text-lg py-3 px-8 rounded-xl shadow-md transition-all text-center w-full sm:w-auto"
      >
        {body}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="bg-custom-midGreen hover:bg-custom-green text-white font-semibold text-lg py-3 px-8 rounded-xl shadow-md transition-all text-center w-full sm:w-auto cursor-pointer"
      onClick={onClick}
    >
      {body}
    </button>
  );
}

Button.propTypes = {
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default Button;
