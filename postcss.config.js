module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          /**
           * 移除所有註解
           */
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}
