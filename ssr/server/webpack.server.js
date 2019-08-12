const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const serverConfig = {
  // we are generating bundle for node.js not for browser.
  target: "node",

  // Tell root file of our server application.
  entry: "./src/index.js",

  // Tell where to put output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  }
};
module.exports = merge(baseConfig, serverConfig);
