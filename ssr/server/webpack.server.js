const path = require("path");
module.exports = {
  // we are generating bundle for node.js not for browser.
  target: "node",

  // Tell root file of our server application.
  entry: "./src/index.js",

  // Tell where to put output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // Tell webpack to run babel on every file that it runs through.
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node-modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                targets: {
                  browsers: ["last 2 versions"]
                }
              }
            ]
          ]
        }
      }
    ]
  }
};
