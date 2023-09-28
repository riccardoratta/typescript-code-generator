const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "TypescriptCodeGenerator.js",
    path: path.resolve(__dirname),
  },
  mode: "development",
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
};
