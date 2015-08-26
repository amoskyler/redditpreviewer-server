var imgur = require('imgur');

function _normalizeImageAttributes (image) {
  // Map over specific ids
  image.mimetype = image.type;
  image.img_id = image.id;
  image.poster_url = image.link;
  //Remove fields which will cause issues when merging image objects later
  delete image.type;
  delete image.id;

  return image;
}

module.exports = function (img_uri, callback) {
  var attrs;
  var img_id = img_uri.split('/').pop().split('.')[0];

  console.log(img_uri, img_id);
  imgur.getInfo(img_id)
    .then(function (json){
      if (json.status === 404) return callback('Image no longer available');
      attrs = {
        type: '',
          media: [_normalizeImageAttributes(json.data)]
      };

      return callback(null, attrs);
    })
    .catch(function (err) {
      if (err.status === 404) return callback('Image no longer available');
      return callback(err);
    });
};
