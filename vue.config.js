const path = require('path');

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type =>
      addStyleResource(config.module.rule('sass').oneOf(type))
    );
  },
  devServer: {
    disableHostCheck: true,
  },
  lintOnSave: undefined,
};

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/assets/stylesheets/lib/index.sass'),
      ],
    });
}
