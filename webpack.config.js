const path = require("path");
module.exports = {
  entry: path.join(__dirname, "client", "index.tsx"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
        },
        include: [path.resolve(__dirname, "client")],
        exclude: [path.resolve(__dirname, "node_modules")],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
