var TEMPLATE_HASH = require('./TEMPLATE_CONSTANTS');

function registerTemplate (processed, mediatype) {

  var rendertype;
    // Register template
  switch(mediatype){
    case 'image':
      rendertype = TEMPLATE_HASH.IMG_GIF;
      break;
    case 'album':
      rendertype = TEMPLATE_HASH.ALBUM;
      break;
    // case 'gallery':
    //   template = templates.gallery;
    //   break;
    default:
      rendertype = TEMPLATE_HASH.UNSUPPORTED;
      break;
  }
  if (!processed) rendertype = TEMPLATE_HASH.PROCESSING;
  return rendertype;
}

module.exports = registerTemplate;
