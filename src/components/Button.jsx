import PropTypes from "prop-types";

function Button({ body}) {
  return (
    <>
      <button className="bg-green-800 text-white text-lg py-3 w-1/4 px-8 border rounded" >{body}</button>
    </>
  );
}

Button.propTypes = { body: PropTypes.string,
  onClick: PropTypes.func.isRequired,
 };

export default Button;
