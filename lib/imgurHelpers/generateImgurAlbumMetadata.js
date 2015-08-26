var imgur = require('imgur');

module.exports = function (img_uri, callback) {
  var attrs;
  var album_id = img_uri.split('/').pop().split('#')[0];

  imgur.getAlbumInfo(album_id)
    .then(function (json) {
      var attrs = {
        type: '',
        cover_photo: '',
        media: []
      };
      if (json.status === 404) return callback('Album not found');
      attrs.media = json.data.images.map(function (image){
        image.mimetype = image.type;
        delete image.type;
        image.img_id = image.id;
        delete image.id;
        image.poster_url = image.link;
        return image;
      });
      attrs.cover_photo = "https://i.imgur.com/" + json.data.cover;
      return callback(null, attrs);
    })
    .catch(function (err) {
      return callback(err);
    });

};
