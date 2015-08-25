var imgur = require('imgur');
var assign = require('object-assign');

module.exports = function (img_uri, callback) {
  var normalized_uri, configs;
  var img_id = img_uri.split('/').pop().split('.')[0];
  
  imgur.getInfo(img_id)
    .then(function (json){
      //TODO: Vulnrability here - Need to pull file type off url cleaner'
      // normalized_url = img_uri.replace(/\.[^/.]+$/, "");
      configs = {
        mimetype: json.data.type,
        poster_url: json.data.url,
        webm: json.data.webm,
        mp4: json.data.mp4,
        gifv: json.data.gifv,
        url: json.data.url,
        img_id: json.data.id
      };

      return callback(null, assign(configs, json));
    })
    .catch(function (err) {
      return callback(err);
    });
};
