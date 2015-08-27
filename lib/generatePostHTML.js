var fs = require('fs');
var path = require('path');
var assign = require('object-assign');
var Jade = require('jade');
var config = require('../config');
var postProcess = require('./postPostProcess');

//TODO: Create Gallery template
var templates = {
  img_gif: 'image-gif',
  album: 'album',
  // gallery: '../templates/media_viewer_gallery.jade',
  unsupported: 'unsupported',
  processing: 'processing'
};

module.exports = function (postData) {
  var compiledHTML, compiledTemplate, rendertype;

  if(!postData.processed) {
    template = path.join(__dirname, '../templates/processing.jade');
    return Jade.renderFile(template, assign(postData, config));
  }

  // Register correct template
  switch(postData.type){
    case 'image':
      rendertype = templates.img_gif;
      break;
    case 'album':
      rendertype = templates.album;
      break;
    // case 'gallery':
    //   template = templates.gallery;
    //   break;
    default:
      rendertype = templates.unsupported;
      break;
  }

  postData.rendertype = rendertype;
  maintemplate = path.join(__dirname, '../templates/layout_preview.jade');
  return Jade.renderFile(maintemplate, assign(postData, config));
};
