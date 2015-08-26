var imgur = require('imgur');

// normalizes imgur album [images] (imgur api 3)
function _normalizeAlbumImages (images) {
  var _images;
  _images = images.map(function (image) {
    // map over fields
    image.mimetype = image.type;
    image.img_id = image.id;
    image.poster_url = image.link;
    //Remove fields which will cause issues when merging image objects later
    delete image.type;
    delete image.id;
    return image;
  });
  return _images;
}

module.exports = function (img_uri, callback) {
  var attrs;
  var gallery_id = img_uri.split('/').pop().split('#')[0];

  imgur.getGalleryInfo(gallery_id)
    .then(function (json) {
      if (json.status === 404) return callback('Gallery not found');
      attrs = {
        type: '',
        cover_photo: '',
        media: _normalizeAlbumImages(json.data.images)
      };
      attrs.cover_photo = "https://i.imgur.com/" + json.data.cover;
      return callback(null, attrs);
    })
    .catch(function (err) {
      return callback(err);
    });

};
