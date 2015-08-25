var config = require('../config');

module.exports = function (postData) {
  adHocHTML = '';

  adHocHTML += '<div>';
  adHocHTML +=   '<a style="display:block;" class="perma-title" href="' + config.reddit_url + postData.permalink + '">';
  adHocHTML +=   postData.title
  adHocHTML +=   '</a>';
  adHocHTML +=   '<img style="width:500px; float:left; display:block;" src="' + postData.url + '"/>';
  adHocHTML += '</div>';
  // adHocHTML += "<div>" + htmlDecode(postData.embed) + "</div>"

  return adHocHTML

};
