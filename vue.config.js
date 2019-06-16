module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    })
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
    entry
      .add('@/data/mock')
      .end()
  },
  devServer: {
    // 反向代理配置
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
