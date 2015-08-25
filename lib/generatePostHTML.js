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
  switch(postData.type){
    case 'image':
      template = templates.img_gif;
      break;
    case 'album':
      template = templates.img_gif;
      break;
    case 'gallery':
      template = templates.album;
      break;
    default:
      template = templates.unsupported;
      break;
  }

  template = path.join(__dirname, template);
  return Jade.renderFile(template, assign(postData, config));
};
