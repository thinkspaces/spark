module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ["react", "react-hooks"],
  extends: ["airbnb", "prettier", "prettier/react"],
  rules: {
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": 0,
    "import/no-extraneous-dependencies": 0,
    "react/require-default-props": 0,
    "react/no-array-index-key": 0,
    "react/prop-types": [1, { ignore: ["className"] }],
  },
};
