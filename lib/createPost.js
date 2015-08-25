var request = require('superagent');
var mongoose = require('mongoose');

var PostSchema = require('../schemas/post');
var Post = mongoose.model('Post', PostSchema);

var config = require('../config');

module.exports = function (fullname, callback) {
  request
    .get('https://www.reddit.com/api/info.json?id=' + fullname)
    .end(function(err, res){
      if(err != null) return callback(err);
      if(res.body.data.children.length < 1) {
        return callback('No such post found');
      }
      var resPost = res.body.data.children[0].data
      nPost = new Post();
      nPost.set(resPost);
      // overide id to ensure post fullname
      nPost.id = fullname
      nPost.embed = resPost.media_embed.content;
      nPost.save();
      console.log(resPost);
      return callback(null, config.url + '/' + fullname);
    });

};
