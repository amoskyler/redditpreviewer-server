var imgur = require('imgur');

function processAlbum (img_uri, callback) {
  var album_id = img_uri.split('/').pop().split('#')[0];

  imgur.getAlbumInfo(album_id)
    .then(function (json) {
      callback(null, json);
    })
    .catch(function (err) {
      callback(err);
    });

}

processAlbum('lAgpH', function (err, metadata) {
  console.log(err, metadata);
});
