var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });


// var Link = mongoose.model('urls', {
//   'id': Number,
//   'url': String,
//   'baseUrl': String,
//   'title': String,
//   'visits': Number,
//   'code': Number
// });

// var linkie = new Link({id: 1, url: 'www', password: 'mememe', title: 'yesyesyes', visits: 'yueyuey', code: 15});

// linkie.save();

// Link.find({}).exec(function (err, data) {
//   console.log(data);
// });


// Link.pre('save', function (next) {
//   var link = this;
//   var shasum = crypto.createHash('sha1');
//   shasum.update(this.url);
//   link.code = shasum.digest('hex').slice(0, 5);
//   next();
// });

Link.prototype.fetch = function() {
  console.log(this);
  return Link.findOne({'url': this.url});
};


module.exports = Link;
