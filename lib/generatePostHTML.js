var fs = require('fs');
var path = require('path');
var assign = require('object-assign');
var Jade = require('jade');
var config = require('../config');
var postProcess = require('./postPostProcess');

//TODO: Create Gallery template
var MEDIA_HASH = {
  IMG_GIF: 'image-gif',
  ALBUM: 'album',
  // GALLERY: '../gallery',
  UNSUPPORTED: 'unsupported',
  PROCESSING: 'processing'
};

var TEMPLATE_HASH = {
  IMG_GIF: '../templates/layout_preview.jade',
  ALBUM: '../templates/layout_preview.jade',
  // GALLERY: '../gallery',
  UNSUPPORTED: '../templates/unsupported.jade',
  PROCESSING: '../templates/processing.jade'
};

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

  return rendertype;
}

module.exports = function (postData) {
  var compiledHTML, compiledTemplate,
      template,     maintemplate,
      mediatemplate;

  if(!postData.processed) {
    template = path.join(__dirname, '../templates/processing.jade');
    return Jade.renderFile(template, assign(postData, config));
  }
  mediatype = registerMediatype(postData.type);
  template = registerTemplate(postData.processed,  mediatype);
  postData.mediatype = mediatype;
  maintemplate = path.join(__dirname, template);
  return Jade.renderFile(maintemplate, assign(postData, config));
};
