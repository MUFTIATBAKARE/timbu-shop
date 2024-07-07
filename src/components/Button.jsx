import PropTypes from "prop-types";

function Button({ body }) {
  return (
    <>
      <button>{body}</button>
    </>
  );
}

Button.propTypes = { body: PropTypes.string };

export default Button;
