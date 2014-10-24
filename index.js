var sass = require('node-sass');
sass.renderFile({
  file: 'app.scss',
  outFile: 'app.css',
  outputStyle: 'compressed',
  success: function (outFile) {
    console.log('Compiled to', outFile);
  }
});
