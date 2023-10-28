// import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === "/" && (
        <Button
          color={props.showAdd ? "red" : "green"}
          text={props.showAdd ? "Close" : "Add"}
          onClick={props.onAdd}
        />
      )}
    </header>
  );
};

// Default prop values
Header.defaultProps = {
  title: "Task Tracker",
};

// Restricting propTypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
