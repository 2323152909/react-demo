const CracoLessPlugin = require('craco-less');
const path = require('path');

const pathResolve = (name) => path.resolve(__dirname, name);

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
