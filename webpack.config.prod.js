const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports= {
  mode: 'production',
  entry: './section-20-modules/src/app.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'section-20-modules', 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './section-20-modules')
    }
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};