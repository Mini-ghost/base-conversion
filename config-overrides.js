const path = require('path')
const {
  override,
  addWebpackAlias,
  addWebpackModuleRule
} = require('customize-cra')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const addChunckName = config => {
  config.output = Object.assign({}, config.output, {
    chunkFilename: '[name].[chunkhash:8].js'
  })

  return config
}

module.exports = override(
  addChunckName,
  addWebpackModuleRule({
    test: /\.(scss|sass|css)$/i,
    use: [
      {
        loader: process.env.NODE_ENV === 'development'
          ? 'style-loader'
          : MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader',
      },
      {
        loader: 'sass-loader'
      }
    ]
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src/')
  })
)
