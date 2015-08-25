var api_get = require('../api/get');
var api_get_id = require('../api/get_id');
var api_post = require('../api/post');

module.exports = function (app) {
  api_get(app);
  api_get_id(app);
  api_post(app)
};
