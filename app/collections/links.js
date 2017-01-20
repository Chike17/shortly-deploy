// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var Link = require('../models/link');

var Links = Link.collection;

Links.add = function () {};

// Links.model = Link;

module.exports = Links;

