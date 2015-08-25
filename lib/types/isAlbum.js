//TODO: Figure out a more sane way of tracking is something is an album or not

// Function assumes imgur url
module.exports = function (url) {
  var res = (url.indexOf('/a/') > -1 || url.indexOf('/album/') > -1) ? true : false;
  return res;
};
