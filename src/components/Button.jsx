import PropTypes from "prop-types";

function Button({ body}) {
  return (
    <>
      <button className="bg-green-800 text-white" >{body}</button>
    </>
  );
}

Button.propTypes = { body: PropTypes.string,
  onClick: PropTypes.func.isRequired,
 };

export default Button;
