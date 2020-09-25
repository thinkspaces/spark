// Libraries
import React from "react";
import PropTypes from "prop-types";

// Utilities
import { fontStyle, fontWeight, typeScale, color } from "@thinkspaces/styled";
import typography from "@thinkspaces/tokens/typography";

const InnerTitleWrapper = ({ level, children, ...props }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag {...props}>{children}</HeadingTag>;
};

InnerTitleWrapper.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};

const Title = ({ children, level = 1, ...props }) => {
  return (
    <InnerTitleWrapper
      css={[
        color(typography.fontColors.title.primary),
        typeScale(9 - level),
        fontWeight(typography.fontWeights.medium),
        fontStyle("normal"),
      ]}
      level={level}
      {...props}
    >
      {children}
    </InnerTitleWrapper>
  );
};

Title.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};

export { Title };
