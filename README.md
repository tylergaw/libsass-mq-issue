## Media Query issue in libsass

The issue:
Rule sets inside of media queries are removed when using `outputStyle: 'compressed'`.

Using `node-sass 1.0.1`

#### node-sass setup:
```javascript
var sass = require('node-sass');
sass.renderFile({
  file: 'app.scss',
  outFile: 'app.css',
  outputStyle: 'compressed',
  success: function (outFile) {
    console.log('Compiled to', outFile);
  }
```

#### SCSS:
```scss
@media screen and (min-width: 400px) {
  body {
    background-color: purple;
  }
}
```

#### Compiled CSS:
```css
@media screen and (min-width: 400px){}
```

#### Expected Compiled CSS:
```css
@media screen and (min-width: 400px){body{background-color:purple}}
```
