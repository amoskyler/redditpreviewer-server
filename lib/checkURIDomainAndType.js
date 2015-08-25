var isAlbum = require('./types/isAlbum');
var isGallery = require('./types/isGallery');
var isImgur = require('./types/isImgur');

module.exports = function(uri) {
  var uri_type = '';
  //TODO: Come up with support for other domains - whitelist accepted domains
  // Return domain:type
  
  if (isImgur(uri)) uri_type = 'imgur:';
  if(isGallery(uri)) {
    uri_type += 'gallery';
  } else if(isAlbum(uri)) {
    uri_type += 'album';
  } else {
    uri_type += 'image';
  }

  return uri_type;
};
