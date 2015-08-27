var Jade = require('jade');
var path = require('path');
var assign = require('object-assign');
var config = require('../config');
var Post = require('../schemas/post');

module.exports = function (app) {
  app.get('/', function(req, res){
    var template, adHocHTML;
    Post.find({})
        .select('id title subreddit')
        .limit(15)
        .exec(function (err, docs) {
          if(err != null) return res.status(500).send(err);
          template = path.join(__dirname, '../templates/home.jade');
          adHocHTML = Jade.renderFile(template, assign({recent: docs}, config));
          return res.send(adHocHTML);
        });
  });
};
