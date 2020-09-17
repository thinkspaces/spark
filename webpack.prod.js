const { merge } = require("webpack-merge");

const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "production",
  externals: [
    {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react",
      },
    },
    {
      "react-dom": {
        root: "ReactDom",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom",
      },
    },
  ],
});
