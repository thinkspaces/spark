// Libraries
import styled, { css } from "styled-components";

// Utilities
import {
  fontStyle,
  fontWeight,
  typeScale,
  color,
  mb,
} from "@thinkspaces/styled";
import tokens from "@thinkspaces/tokens";

const primaryStyle = css`
  ${color(tokens.typography.fontColors.text.primary)}
`;

const secondaryStyle = css`
  ${color(tokens.typography.fontColors.text.secondary)}
`;

const informativeStyle = css`
  ${color(tokens.colors.semanticColors.informative)}
`;

const positiveStyle = css`
  ${color(tokens.colors.semanticColors.positive)}
`;

const noticeStyle = css`
  ${color(tokens.colors.semanticColors.notice)}
`;

const negativeStyle = css`
  ${color(tokens.colors.semanticColors.negative)}
`;

const bodyStyle = css`
  ${typeScale(3)}
  ${fontWeight(tokens.typography.fontWeights.regular)}
  ${fontStyle("normal")};
`;

const captionStyle = css`
  ${typeScale(1)}
  ${fontStyle("italic")}
`;

const subtitleStyle = css`
  ${typeScale(2)}
  ${fontWeight(tokens.typography.fontWeights.medium)}
`;

const detailStyle = css`
  ${typeScale(3)}
  ${fontWeight(tokens.typography.fontWeights.medium)}
  letter-spacing: 0.84px;
  text-transform: uppercase;
`;

const disabledStyle = css`
  ${color(tokens.typography.fontColors.disabled)}
  cursor: not-allowed;
`;

const paragraphStyle = css`
  ${mb(16)}
`;

const Container = styled.span`
  display: block;
  margin-bottom: 5px;
  ${fontWeight(tokens.typography.fontWeights.regular)}
  ${fontStyle("normal")};
  ${(props) => props.variantStyle}
  ${(props) => props.colorStyle}
  ${(props) =>
    props.disabled && disabledStyle}
  ${(props) =>
    props.paragraph && paragraphStyle}
`;

export {
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
};
