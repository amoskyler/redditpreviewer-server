module.exports = (function (){
  var port, env;
  env = process.env.NODE_ENV || 'dev';

  // skipping first two indexes
  // reference: http://stackoverflow.com/questions/4351521/how-to-pass-command-line-arguments-to-node-js
  process.argv.splice(2).forEach(function (arg, index, args) {
    if(arg.indexOf('p') > -1 || arg.indexOf('port') > -1) {
      // Split by : first
      arg = arg.split(':');
      //if not split, try by =
      if (arg.length < 2) arg = arg[0].split('=');
      // set port
      port = arg[1] || 9090;
    }
  });

  if(env === 'production') {
    return {
      url: 'https://redditpreviewer.com',
      reddit_url: 'https://reddit.com',
      port: port
    };
  } else {
    // Dev config - dfeaults to dev config
    return {
      url: 'http://localhost:'+port,
      reddit_url: 'https://reddit.com',
      port: port
    }
  }
})();
