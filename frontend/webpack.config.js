// 📦 Core imports
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  // 📍 Entry point for your app
  entry: "./src/index.jsx",

  // 📤 Output settings (bundle file and public path)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  // 🧠 Resolve file extensions automatically
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // 🛠️ Module rules: how different files should be handled
  module: {
    rules: [
      {
        // 🔄 Transpile JS/JSX files using Babel
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        // 🎨 Handle CSS files
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // 🖼️ Load image files (png, jpg, gif)
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        // 🐙 Convert SVGs into React components using SVGR
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },

  // 🔌 Plugins to enhance webpack features
  plugins: [
    // 🏗️ Create HTML file and inject JS bundle automatically
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // 🌐 Define global environment variables
    new webpack.DefinePlugin({
      "process.env.API_BASE_URL": JSON.stringify(process.env.API_BASE_URL),
    }),
  ],

  // 🚀 Dev server config for hot reloading and SPA routing
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, "public"),
    port: 3000,
    open: true,
    hot: true,
  },

  // 📊 Set build mode: 'development' for now
  mode: "development",
};
