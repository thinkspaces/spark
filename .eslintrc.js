module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ["react", "react-hooks"],
  extends: ["eslint:recommended"],
};
