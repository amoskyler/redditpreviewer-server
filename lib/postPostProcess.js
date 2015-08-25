var checkURIDomainAndType = require('./checkURIDomainAndType');
var generateImgurImageMetadata = require('./imgurHelpers/generateImgurImageMetadata');
module.exports = function (post) {
  var uri = post.url;
  
  switch (checkURIDomainAndType(uri)) {
      case 'imgur:image':
        generateImgurImageMetadata (uri, function (err, metadata){
          post.type = 'image';
          post.processed = true;
          post.set(metadata);
          post.save();
        });
        break;
      case 'imgur:album':
        post.type = 'album';
        post.processed = true;
        post.save();
        break;
      case 'imgur:gallery':
        post.type = 'gallery';
        post.processed = true;
        post.save();
        break;
      default:
        post.processed = true;
        post.save();
        post.type = 'unsupported';
        break;
  }
};
