// node_module requires
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
// local requires
var config = require('./config');

// Connect to db
mongoose.connect('mongodb://localhost/gifcoolery');

var api = require('./api');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

api.registerRoutes(app);

app.listen(config.port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:'+config.port);
