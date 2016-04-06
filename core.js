var DOM = require('domutil/dom');
var H = require('coreutil/core');

var C = require('./src/compatibility');

H.extend(H, DOM);
H.extend(H, C);

H.root.H = H;

module.exports = H;