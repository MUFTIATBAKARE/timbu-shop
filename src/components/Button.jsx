import PropTypes from "prop-types";

function Button({ body, onClick}) {
  return (
    <>
      <button className="bg-custom-midGreen text-white font-medium text-2xl mx-auto py-3 w-3/4 md:w-1/2 md:mx-0 lg:mx-0 lg:w-2/4 xl:w-1/4 px-8 border rounded" onClick={onClick}>{body}</button>
    </>
  );
}

Button.propTypes = { body: PropTypes.string,
  onClick: PropTypes.func.isRequired,
 };

export default Button;
