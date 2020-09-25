import React from "react";
import PropTypes from "prop-types";
// Styles
import {
  Container,
  informativeStyle,
  positiveStyle,
  noticeStyle,
  negativeStyle,
} from "./styles";

const Text = ({ children, variant = "default", ...props }) => {
  let styles = "";
  switch (variant) {
    case "informative":
      styles = informativeStyle;
      break;
    case "positive":
      styles = positiveStyle;
      break;
    case "notice":
      styles = noticeStyle;
      break;
    case "negative":
      styles = negativeStyle;
      break;
    default:
      styles = "";
      break;
  }
  return (
    <Container styles={styles} {...props}>
      {children}
    </Container>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf([
    "default",
    "informative",
    "positive",
    "notice",
    "negative",
  ]),
  children: PropTypes.node,
};
