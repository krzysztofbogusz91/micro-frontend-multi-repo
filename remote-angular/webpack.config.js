const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "angularMf",
  // library: { type: "var", name: "angularMf" },
  exposes: {
    "./Component": "./src/app/app.component.ts",
    "./angular-web-component": "./src/bootstrap.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
