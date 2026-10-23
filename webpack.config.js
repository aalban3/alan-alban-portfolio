const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.[contenthash].js",
    assetModuleFilename: "assets/[name].[contenthash][ext]",
    publicPath: "/",
    clean: true,
  },
  entry: "./client/index.jsx",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
    // Serve index.html for client-side routes like /work/dashdoc (CloudFront does the same in prod).
    historyApiFallback: true,
  },
  performance: { hints: false },
  // Real content hashes rename the minified style.css after index.html already points at it.
  optimization: { realContentHash: false },
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
      {
        test: /\.(png|jpe?g|svg|ico)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
