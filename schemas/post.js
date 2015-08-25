mongoose = require('mongoose');
Schema = mongoose.Schema;

module.exports = new Schema({
  id: {
    type: String,
    unique: true
  },
  uri: String,
  domain: String,
  author: String,
  permalink: String,
  selftext: String,
  selftext_html: String,
  subreddit: String,
  url: String,
  title: String,
  embed: String
});
