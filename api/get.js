var Post = require('../schemas/post');

module.exports = function (app) {
  app.get('/', function(req, res){
    var adHocHTML = '<div>'
    adHocHTML += '<h2>Recently Created!</h2>'
    Post.find({})
        .select('id title')
        .limit(15)
        .exec(function (err, docs) {
          if(err != null) return res.status(500).send(err);
          var reducedPosts = docs.reduce(function (prev, curr, idx) {
            return prev + '<div><a href="'+curr.id+'">' + curr.title + '</a></div>'
          }, '');
          adHocHTML += reducedPosts;
          adHocHTML += '</div>'
          return res.send(adHocHTML);
        });
  });
}
