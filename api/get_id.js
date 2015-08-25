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
        //TODO: Vulnrability here - Need to pull file type off url cleaner'
        normalized_url = post.url.replace(/\.[^/.]+$/, "");
        opts = {
          url: post.url,
          mp4_url: normalized_url + '.mp4',
          webm_url: normalized_url + '.webm',
          poster_url: normalized_url + '.jpg'
        };
        responseHTML = generatePostHTML(assign(post, opts));
        return res.status(200).send(responseHTML);

      }
    });
  });
};
