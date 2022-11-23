const path = require('path');

module.exports= {
  entry: './section-20-modules/src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'section-20-modules', 'assets', 'scripts')
  }
};