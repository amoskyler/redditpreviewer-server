var request = require('superagent');
var mongoose = require('mongoose');

var preProcess = require('./postPreProcess');
var postProcess = require('./postPostProcess');

var config = require('../config');

module.exports = function (fullname, callback) {
  if (fullname == null) return callback('No post specified');
  request
    .get('https://www.reddit.com/api/info.json?id=' + fullname)
    .end(function(err, res){
      // Lazy check for falsy values
      if(err != null) return callback(err);
      if(res.body.data.children.length < 1) {
        return callback('No such post found');
      }
      var resPost = res.body.data.children[0].data;

      // create post splits into two processes:
      // preProcess: Validates preview can be generated - sets initial values - marks processed as false - saves initial - returns URL
      // postProcess: validates link type - pulls image meta data - associates render templates - marks posts as processed

      resPost.id = fullname;
      preProcess(resPost, function (err, post) {
        if (err != null) return callback(err);
        callback(null, config.site_url + '/' + post.id);
        postProcess(post);
      });
    });

};
