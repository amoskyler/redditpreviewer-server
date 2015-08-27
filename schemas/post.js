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
  lastUpdated: {
    type: Date,
    default: Date.now()
  },
  type: {
    type: String,
    default: 'unsupported'
  },
  rating: {
    up: Number,
    down: Number,
    weight: Number
  },

  media: [Schema.Types.Mixed],        // Should contain: {
                                      //   url: String,
                                      //   img_id: String,
                                      //   domain: String,
                                      //   mimetype: String,
                                      //   animated: String,
                                      //   mp4: String,
                                      //   webm: String,
                                      //   gifv: String,
                                      //   post_url: String
                                      // }
  cover_photo: String,
  uri: String,
  url: String,
  author: String,
  permalink: String,
  selftext: String,
  selftext_html: String,
  subreddit: String,
  title: String,
  embed: String,

});

module.exports = mongoose.model('Post', schema);
