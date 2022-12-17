const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://travel-app-yufu.netlify.app',
        pathRewrite: {
          '^/api': 'mock'
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', path.join(__dirname, './src/assets/styles/'))
      .set('@', path.join(__dirname, './src/'))
  }
}
