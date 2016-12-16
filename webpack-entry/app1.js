// var stylesContext = require.context('../src', true, /\.scss$/);
// stylesContext.keys().forEach(stylesContext);

// TODO Get paths from config?
// JS files NOT ending in .spec.js
// var angularAppContext = require.context('../src', true, /^(?!.*\.spec\.ts$).*\.ts$/);
//
// angularAppContext.keys()
//   .forEach(angularAppContext);

require('__src/components/main-app/main-app.js');
require('__src/components/main-app/routes.js');

require('__src/redux/shared/target-connector.js');

require('__src/components/cmp1/cmp1.js');
require('__src/components/cmp2/cmp2a/cmp2a.js');
require('__src/components/cmp2/cmp2b/cmp2b.js');
require('__src/components/cmp2/cmp2.js');
