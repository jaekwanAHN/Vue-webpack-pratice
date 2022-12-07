const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      // 루트 -> src를 찾는다.
      '~': path.resolve(__dirname, 'src'),
    },
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/',
    clean: true,
    // filename: "",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        // 제일 먼저 평가되어야 하는 로더가 제일 나중에 작성되야 한다.
        test: /\.s?css$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      // 기본적으로 resolve가 적용되어 있다.
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }],
    }),
  ],
  devServer: {
    historyApiFallback:true
  }
}
