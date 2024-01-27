const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  entry: "./client/index.jsx",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
  },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      publicPath: "/",
    }),
  ],
};
