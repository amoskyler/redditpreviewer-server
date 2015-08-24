var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var mongoose = require('mongoose');
var request = require('superagent');
var config = require('./config');

// Require mongoose schema
var db = mongoose.connect('mongodb://localhost/reddit-previewer');

var PostSchema = require('./schemas/post');
var Post = mongoose.model('Post', PostSchema);

var createPost = require('./lib/createPost');
var generatePostHTML = require('./lib/generatePostHTML')

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', function(req, res) {
  var fullname = req.body.fullname

  Post.findOne({'id': fullname}, function (err, post){
    if (err != null) {
      return res.send(new Error(err));
    } else if (post) {
      return res.send({value: config.url + '/' + fullname});
    } else {
      createPost(fullname, function (err, link) {
        if (err != null) return res.send(err);
        return res.send({value: link});
      });
    }
  });

});

app.get('/:id', function (req, res) {
  var id = req.params.id;

  Post.findOne({id: id}, function (err, post) {
    if (err != null) return res.send(err);
    if (post == null) return res.send('404 post not generated');
    else return res.send(generatePostHTML(post));
  });
});

app.get('/', function(req, res){
  return res.send('/')
});

app.listen(9090);
