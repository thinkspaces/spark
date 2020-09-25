// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styles
import {
  Container,
  primaryStyle,
  informativeStyle,
  positiveStyle,
  noticeStyle,
  negativeStyle,
  bodyStyle,
  captionStyle,
  subtitleStyle,
  detailStyle,
} from "./styles";

const Text = ({ children, color = "primary", variant = "body", ...props }) => {
  let colorStyle = primaryStyle;
  switch (color) {
    case "informative":
      colorStyle = informativeStyle;
      break;
    case "positive":
      colorStyle = positiveStyle;
      break;
    case "notice":
      colorStyle = noticeStyle;
      break;
    case "negative":
      colorStyle = negativeStyle;
      break;
    default:
      colorStyle = primaryStyle;
      break;
  }

  let variantStyle = bodyStyle;
  switch (variant) {
    case "caption":
      variantStyle = captionStyle;
      break;
    case "subtitle":
      variantStyle = subtitleStyle;
      break;
    case "detail":
      variantStyle = detailStyle;
      break;
    default:
      variantStyle = bodyStyle;
      break;
  }

  return (
    <Container colorStyle={colorStyle} variantStyle={variantStyle} {...props}>
      {children}
    </Container>
  );
};

Text.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "informative",
    "positive",
    "notice",
    "negative",
  ]),
  variant: PropTypes.oneOf(["body", "caption", "subtitle", "detail"]),
  children: PropTypes.node,
};

export default Text;
