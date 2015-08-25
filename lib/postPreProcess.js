var mongoose = require('mongoose');

var PostSchema = require('../schemas/post');
var Post = mongoose.model('Post', PostSchema);

module.exports = function (post_data, callback) {
  var uri = post_data.url;
  var tempId = post_data.id;

  var nPost = new Post();
  nPost.set(post_data);
  // overide id to ensure id=fullname
  nPost.id = tempId;
  nPost.save(callback);
};
