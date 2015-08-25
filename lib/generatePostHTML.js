var fs = require('fs');
var path = require('path');
var assign = require('object-assign');
var Jade = require('jade');
var config = require('../config');
var postProcess = require('./postPostProcess');

var templates = {
  img_gif: '../templates/img_gif.jade',
  album: '../templates/img_gif.jade',
  gallery: '../templates/img_gif.jade',
  unsupported: '../templates/unsupported.jade',
  processing: '../templates/processing.jade'
};

module.exports = function (postData) {
  var compiledHTML, compiledTemplate, template;

  if(!postData.processed) {
    template = path.join(__dirname, templates.processing);
    return Jade.renderFile(template, assign(postData, config));
  }

  // Register correct template
  switch(postData.mimetype){
    case 'image/jpeg':
      template = templates.img_gif;
      break;
    case 'image/gif':
      template = templates.img_gif;
      break;
    case 'video/mp4':
      template = templates.album;
      break;
    case 'video/webm':
      template = templates.gallery;
      break;
    default:
      template = templates.unsupported;
      break;
  }
  
  template = path.join(__dirname, template);
  return Jade.renderFile(template, assign(postData, config));
};
