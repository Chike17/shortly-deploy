var path = require('path');
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortly');

var db = mongoose.connection;

db.once('open', function () {
  console.log('Am I connected??????????????');
});

// var User = mongoose.model('users', {
//   'id': Number,
//   'username': String,
//   'password': String,
// });


db.on('error', function (error) {
  console.log(error);
});

// User.find({}).exec(function (err, data) {
//   console.log(data);
// });

// var Link = mongoose.model('urls', {
//   'id': Number,
//   'url': String,
//   'baseUrl': String,
//   'title': String,
//   'visits': Number,
//   'code': Number
// });



// var chike = new User({id: 1, username: 'Chike', password: 'lol'});

// // STORE
// chike.save();

// // GET 

// User.find('user: Chike', function (err, data) {
//   console.log(data);
// });


// var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

module.exports = db;
