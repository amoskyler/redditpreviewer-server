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
  subtreddit: String,
  url: String,
  title: String
});
