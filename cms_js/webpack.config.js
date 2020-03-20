var path = require('path');
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    bicamera: './bicamera.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name].min.js',
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}