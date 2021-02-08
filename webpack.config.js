const HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");
path = require("path");

module.exports = {
  entry: {
    js: "./src/index.js",
    react: "./src/index-react.js",
    ts: "./src/index-ts.js",
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[ext]",
            },
          },
          "image-webpack-loader",
        ],
      },
      {
        test: /\.woff$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["js"],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./react.html",
      chunks: ["react"],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./ts.html",
      chunks: ["ts"],
      hash: true,
    }),
    new MiniCssExtractPlugin(),
  ],
};
