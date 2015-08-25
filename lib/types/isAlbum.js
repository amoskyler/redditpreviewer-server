//TODO: Figure out a more sane way of tracking is something is an album or not

// Function assumes imgur url
module.exports = function (url) {
  return (url.indexOf('/a/') > -1 || url.indexOf('/album/')) ? true : false;
}
