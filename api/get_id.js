var assign = require('object-assign');
var Post = require('../schemas/post');
var generatePostHTML = require('../lib/generatePostHTML');

module.exports = function (app) {
  app.get('/:id', function (req, res) {
    var id = req.params.id;

    Post.findOne({id: id}, function (err, post) {
      var opts, normalized_url, responseHTML;
      if (err != null) return res.send(err);
      if (post == null) return res.send('404 post not generated');
      else {
        responseHTML = generatePostHTML(post);
        return res.status(200).send(responseHTML);

      }
    });
  });
};
