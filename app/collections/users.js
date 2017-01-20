// NOTE: this file is not needed when using MongoDB
// var db = require('../config');
var User = require('../models/user');
var mongoose = require('mongoose');



User.find({}).exec(function(err, data) {
  console.log(data);
});

// Users.model = User;

// module.exports = Users;