module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // 👈 This handles everything now
    plugins: [], 
  };
};
