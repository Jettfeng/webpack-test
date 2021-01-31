const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') 

module.exports = {
  mode: 'production',
  entry:{
    app:'./src/index.js'
  },
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Caching'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  // optimization: {
  //   usedExports: true,
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader',"css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  }
};
