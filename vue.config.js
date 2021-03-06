
const { resolve } = require('path');

module.exports = {
  pages: {
    index: {
      //entry for the page
      entry: './example/main.js',
      //template for the page
      template: './example/index.html',
      //output as dist/index.html
      fileName: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-verdors', 'chunk-common', 'index']
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    console.log('>>>', config);
    config.resolve.alias.set('@c', resolve('src/components'))
      .set('@data', resolve('example/data'))
      .set('@less', resolve('example/less'))
  }



};