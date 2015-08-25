// reads in all files in this directory and creates creates a
// exportable module to register api routes
var path = require('path');
var fs = require('fs');

// Read in all routes at ./
module.exports.registerRoutes = function (app) {
  var files = fs.readdirSync(path.join(__dirname, '/'));
  files.forEach(function (file) {
    if(file !== 'index.js') {
      // routes export a callable function
      // Call function with @param:[app] to register route
      require('./' + file)(app);
    }
  });
};
