var Post = require('../schemas/post');
var generatePostHTML = require('../lib/generatePostHTML');

module.exports = function (app) {
  app.get('/:id', function (req, res) {
    var id = req.params.id;

    Post.findOne({id: id}, function (err, post) {
      if (err != null) return res.send(err);
      if (post == null) return res.send('404 post not generated');
      else return res.send(generatePostHTML(post));
    });
  });

};
