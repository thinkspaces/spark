import { css } from "styled-components";
import typography from "@thinkspaces/tokens/typography";

export const fontWeight = (value) => css`
  font-weight: ${value};
`;

export const fontStyle = (value) => css`
  font-style: ${value};
`;

export const pa = (value) => css`
  padding: ${value}px;
`;

export const mb = (value) => css`
  margin-bottom: ${value}px;
`;

export const mv = (value) => css`
  margin-top: ${value}px;
  margin-bottom: ${value}px;
`;

export const color = (value) => css`
  color: ${value};
`;

export const typeScale = (step) => css`
  font-size: ${typography.fontSizes[step]};
  line-height: ${typography.lineHeights[step]};
`;
