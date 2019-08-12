const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const clientConfig = {
  // Tell root file of our server application.
  entry: "./src/client/client.js",

  // Tell where to put output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};
module.exports = merge(baseConfig, clientConfig);
