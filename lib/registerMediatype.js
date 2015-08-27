var MEDIA_HASH = require('./MEDIA_CONSTANTS');

function registerMediatype (type) {
  var mediatype;
    // Register template
    switch(type){
      case 'image':
        mediatype = MEDIA_HASH.IMG_GIF;
        break;
      case 'album':
        mediatype = MEDIA_HASH.ALBUM;
        break;
      // case 'gallery':
      //   template = templates.gallery;
      //   break;
      default:
        mediatype = MEDIA_HASH;
        break;
    }
  return mediatype;
}

module.exports = registerMediatype;
