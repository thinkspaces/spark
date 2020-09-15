// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styles
import { Container, outlinedStyle, linkStyle, defaultStyle } from "./styles";

const Button = ({ variant = "primary", onClick = () => {}, ...props }) => {
  let styles = defaultStyle;
  switch (variant) {
    case "outlined":
      styles = outlinedStyle;
      break;
    case "link":
      styles = linkStyle;
      break;
    default:
      styles = defaultStyle;
      break;
  }
  return <Container variant={variant} styles={styles} onClick={onClick} {...props} />;
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "outlined", "link"]),
  onClick: PropTypes.func,
};

export default Button;
