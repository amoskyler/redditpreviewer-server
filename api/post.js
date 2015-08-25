var createPost = require('../lib/createPost')
var config = require('../config');
var Post = require('../schemas/post');

module.exports = function (app) {
  app.post('/', function(req, res) {
    var fullname = req.body.fullname

    Post.findOne({'id': fullname}, function (err, post){
      if (err != null) {
        return res.send(new Error(err));
      } else if (post) {
        return res.send({value: config.site_url + '/' + fullname});
      } else {
        createPost(fullname, function (err, link) {
          if (err != null) return res.send(err);
          return res.send({value: link});
        });
      }
    });

  });
};
