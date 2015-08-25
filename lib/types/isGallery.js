//TODO: Figure out a more sane way of tracking is something is an gallery or not

// Function assumes imgur url
module.exports = function (url) {
  var res =  (url.indexOf('/g/') > -1 || url.indexOf('/gallery/') > -1) ? true : false;
  return res;
};
