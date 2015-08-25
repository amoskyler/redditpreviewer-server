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
