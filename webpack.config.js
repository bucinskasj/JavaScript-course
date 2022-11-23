const path = require('path');

module.exports= {
  mode: 'development',
  entry: './section-20-modules/src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'section-20-modules', 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './section-20-modules')
    }
  }
};