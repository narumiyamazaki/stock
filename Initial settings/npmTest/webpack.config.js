const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // または 'production'
  context: path.join(__dirname, "src"),
  entry: './index.js',

  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
	publicPath: "/",  
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // style-loader の代わりに使用
          "css-loader",
          "sass-loader",
          "webpack-dart-sass-glob",
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "../../style.css", // 任意の出力先を指定
    }),
  ],
};
