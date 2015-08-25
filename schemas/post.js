var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  id: {
    type: String,
    unique: true
  },
  processed: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'unsupported'
  },
  uri: String,
  url: String,
  mp4: String,
  webm: String,
  gifv: String,
  animated: String,
  poster_url: String,
  img_id: String,
  mimetype: String,
  domain: String,
  author: String,
  permalink: String,
  selftext: String,
  selftext_html: String,
  subreddit: String,
  title: String,
  embed: String,

});

module.exports = mongoose.model('Post', schema);
