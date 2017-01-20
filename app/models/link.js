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


var Link = db.model('urls', {
  'id': Number,
  'url': String,
  'baseUrl': String,
  'title': String,
  'visits': Number,
  'code': Number
});

Link.prototype.fetch = function() {
  console.log(this);
  return Link.findOne({'url': this.url});
};


module.exports = Link;
