var fs = require('fs');
var path = require('path');
var assign = require('object-assign');
var Jade = require('jade');
var config = require('../config');
// var postProcess = require('./postPostProcess');
var registerMediatype = require('./registerMediatype');
var registerTemplate = require('./registerTemplate');

module.exports = function (postData) {
  var template, maintemplate;

  mediatype = registerMediatype(postData.type);
  template = registerTemplate(postData.processed,  postData.type);
  postData.mediatype = mediatype;
  maintemplate = path.join(__dirname, template);
  return Jade.renderFile(maintemplate, assign(postData, config));
};
