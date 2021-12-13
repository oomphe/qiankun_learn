const {
  name
} = require('./package')
module.exports = {
  publicPath: '/child/',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: "static",
  devServer: {
    port: 8083,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
  configureWebpack: {
    output: {
      library: "vueApp",
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}