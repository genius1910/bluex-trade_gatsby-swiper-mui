module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" }, loose: true }],
    "@babel/preset-react",
  ],
  plugins: ["@babel/plugin-transform-modules-commonjs"],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
};
