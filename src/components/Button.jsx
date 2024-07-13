import PropTypes from "prop-types";

function Button({ body, onClick}) {
  return (
    <>
      <button className="bg-custom-midGreen text-white text-lg py-3 w-1/4 px-8 border rounded" onClick={onClick}>{body}</button>
    </>
  );
}

Button.propTypes = { body: PropTypes.string,
  onClick: PropTypes.func.isRequired,
 };

export default Button;
