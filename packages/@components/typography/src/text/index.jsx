// Libraries
import React from "react";
import PropTypes from "prop-types";

// Styles
import {
  Container,
  primaryStyle,
  secondaryStyle,
  informativeStyle,
  positiveStyle,
  noticeStyle,
  negativeStyle,
  bodyStyle,
  captionStyle,
  subtitleStyle,
  detailStyle,
} from "./styles";

const Text = ({
  children,
  color = "primary",
  variant = "body",
  disabled = false,
  paragraph = false,
  ...props
}) => {
  let colorStyle = primaryStyle;
  switch (color) {
    case "secondary":
      colorStyle = secondaryStyle;
      break;
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
    <Container
      colorStyle={colorStyle}
      variantStyle={variantStyle}
      disabled={disabled}
      paragraph={paragraph}
      {...props}
    >
      {children}
    </Container>
  );
};

Text.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "informative",
    "positive",
    "notice",
    "negative",
  ]),
  variant: PropTypes.oneOf(["body", "caption", "subtitle", "detail"]),
  disabled: PropTypes.bool,
  paragraph: PropTypes.bool,
  children: PropTypes.node,
};

export default Text;
