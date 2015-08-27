var checkURIDomainAndType = require('./checkURIDomainAndType');
var generateImgurImageMetadata = require('./imgurHelpers/generateImgurImageMetadata');
var generateImgurAlbumMetadata = require('./imgurHelpers/generateImgurAlbumMetadata');
var generateImgurGalleryMetadata = require('./imgurHelpers/generateImgurGalleryMetadata');

module.exports = function (post) {
  var uri = post.url;
  console.log('called here', checkURIDomainAndType(uri));
  switch (checkURIDomainAndType(uri)) {
      case 'imgur:image':
        generateImgurImageMetadata (uri, function (err, metadata){
          if (err != null ) return console.error(err);
          post.set(metadata);
          post.type = 'image';
          post.processed = true;
          post.save();
        });
        break;
      case 'imgur:album':
        generateImgurAlbumMetadata (uri, function(err, metadata){
          if (err != null ) return console.error(err);
          post.set(metadata);
          post.type = 'album';
          post.processed = true;
          post.save();
        });
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
