//
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin') //引入gzip压缩插件

module.exports = {
  lintOnSave: false,
  chainWebpack(config) {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
  },
  configureWebpack(config) {
    let prodPlugins = [
      new CompressionPlugin({
        //gzip压缩配置
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 10240, //对超过10kb的数据进行压缩
        deleteOriginalAssets: false //是否删除原文件
      })
    ]
    config.plugins = [...config.plugins, ...prodPlugins]
  }
}
