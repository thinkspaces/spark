import styled, { css } from "styled-components";
// Utilities
import { fontStyle, fontWeight, typeScale, color } from "@thinkspaces/styled";
import typography from "@thinkspaces/tokens/typography";
import colors from "@thinkspaces/tokens/colors";

const informativeStyle = css`
  ${color(colors.semanticColors.informative)}
`;

const positiveStyle = css`
  ${color(colors.semanticColors.positive)}
`;

const noticeStyle = css`
  ${color(colors.semanticColors.notice)}
`;

const negativeStyle = css`
  ${color(colors.semanticColors.negative)}
`;

const Container = styled.span`
  ${color(typography.fontColors.text.primary)}
  ${typeScale(3)}
  ${fontWeight(typography.fontWeights.regular)}
  ${fontStyle(
    "normal",
  )};
  ${(props) => props.styles}
`;

export {
  Container,
  informativeStyle,
  positiveStyle,
  noticeStyle,
  negativeStyle,
};
