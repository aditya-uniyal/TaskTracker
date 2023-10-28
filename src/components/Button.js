// import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      onClick={props.onClick}
      className="btn"
    >
      {props.text}
    </button>
  );
}

// Button.defaultProps = {
//   color: "black",
// };

Button.protoTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
