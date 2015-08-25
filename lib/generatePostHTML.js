var assign = require('object-assign');
var Jade = require('jade');
var config = require('../config');
var fs = require('fs');
var path = require('path');

var templates = {
  img_gif: '../templates/img_gif.jade',
  not_found: '../templates/not_found.jade'
};

module.exports = function (postData) {
  var compiledHTML, compiledTemplate, template;

  //TODO: depending on the type of post, render different templates
  template = path.join(__dirname, templates.img_gif);
  return Jade.renderFile(template, assign(postData, config));
  // fs.readFile(template, 'utf8', function (err, file) {
  //   if (err != null) return callback(err);
  //
  //   compiledTemplate = Jade.compile(file);
  //   compiledHTML = compiledTemplate(assign(postData, config));
  //   return callback(null, compiledHTML);
  //
  // });
};
