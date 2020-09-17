const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["./index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
              plugins: ["babel-plugin-styled-components"],
            },
          },
          {
            loader: "eslint-loader",
          },
        ],
      },
    ],
  },
  output: {
    filename: "index.js",
    library: "spark",
    libraryTarget: "umd",
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
};
