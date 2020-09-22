import colors from "../colors";

const fontSizes = {
  1: "12px",
  2: "14px",
  3: "16px",
  4: "20px",
  5: "24px",
  6: "28px",
  7: "32px",
  8: "36px",
  9: "40px",
  10: "44px",
};

const lineHeights = {
  1: "1.33",
  2: "1.43",
  3: "1.5",
  4: "1.4",
  5: "1.33",
  6: "1.29",
  7: "1.25",
  8: "1.22",
  9: "1.2",
  10: "1.18",
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 600,
};

const fontFamilies = {
  main: "HelveticaNeue, sans-serif",
  code: "source-code pro, Menlo, Consolas, monospace",
};

const fontColors = {
  title: {
    primary: colors.neutralColors.gray[10],
  },
  text: {
    primary: colors.neutralColors.gray[9],
    secondary: colors.neutralColors.gray[7],
  },
  disabled: colors.neutralColors.gray[6],
};

const typography = {
  fontSizes,
  lineHeights,
  fontWeights,
  fontFamilies,
  fontColors,
};

export default typography;
