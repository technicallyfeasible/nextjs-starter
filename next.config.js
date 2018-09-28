const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(withSass(
  {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
      localIdentName: '[local]-[hash:base64:5]',
      camelCase: 'dashesOnly',
    },
  }
));
