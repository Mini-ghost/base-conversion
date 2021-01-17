const path = require('path')
const {
  override,
  addWebpackAlias,
} = require('customize-cra')

const addChunckName = config => {
  config.output = Object.assign({}, config.output, {
    chunkFilename: '[name].[chunkhash:8].js'
  })

  return config
}

module.exports = override(
  addChunckName,
  addWebpackAlias({
    '@': path.resolve(__dirname, './src/')
  })
)
