var imgur = require('imgur');
var assign = require('object-assign');

module.exports = function (img_uri, callback) {
  var normalized_uri, attrs;
  var img_id = img_uri.split('/').pop().split('.')[0];

  console.log(img_uri, img_id);
  imgur.getInfo(img_id)
    .then(function (json){
      if (json.status === 404) return callback('Image no longer available');
      //TODO: Vulnrability here - Need to pull file type off url cleaner'
      // normalized_url = img_uri.replace(/\.[^/.]+$/, "");
      attrs = {
        type: '',
        media: []
      };
      json.data.mimetype = json.data.type;
      delete json.data.type;
      json.data.img_id = json.data.id;
      delete json.data.id;
      json.data.poster_url = json.data.link;

      attrs.media.push(json.data);
      return callback(null, attrs);
    })
    .catch(function (err) {
      if (err.status === 404) return callback('Image no longer available');
      return callback(err);
    });
};
