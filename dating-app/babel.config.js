module.exports = function (api) {
  api.cache(false);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["tailwindcss-react-native/babel", ["module:react-native-dotenv", {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": "config.env",
      "safe": false,
      "allowUndefined": true,
      "verbose": false
    }]],
  };
};
