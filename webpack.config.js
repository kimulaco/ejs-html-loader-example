const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: path.resolve(process.cwd(), './src/ejs/index.ejs')
  },
  output : {
    filename: '[name]',
    path: path.resolve(process.cwd(), './dist')
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: [
          'html-loader',
          {
            loader: 'ejs-html-loader',
            options: {
              title: 'ejs-html-loader Example'
            }
          }
        ]
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      filename : 'index',
      template : path.resolve(process.cwd(), './src/ejs/index.ejs')
    })
  ]
}
