const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const path = require('path');

const config = withModuleFederationPlugin({
  name: 'product-details-mfe',
  exposes: {
    './Component': path.resolve(__dirname, 'src/app/features/product-details/product-details.component.ts'),
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  },
});

// ADD THIS: Force the context to be the current project directory
config.context = __dirname;

module.exports = config;