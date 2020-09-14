import colors from "colors";

const colorScheme = {
  title: {
    primary: colors.neutralColors.gray[10],
  },
  text: {
    primary: colors.neutralColors.gray[9],
    secondary: colors.neutralColors.gray[7],
  },
};

const designTokens = {
  font: {
    bold: "bold",
    italic: "italic",
  },
  colorScheme,
};

export default designTokens;
