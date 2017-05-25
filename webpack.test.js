const path = require('path');
module.exports = {
  target: "web",
  entry: './app/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "wwwroot/js"),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};