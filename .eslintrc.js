module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["babel", "react", "react-hooks"],
  rules: {
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": 0,
    "import/no-extraneous-dependencies": 0,
    "react/require-default-props": 0,
  },
};
