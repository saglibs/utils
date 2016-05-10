var DOM = require('domutil/dom');
var H = require('coreutil/core');
var N = require('networkutil/network');

var C = require('./src/main/javascript/compatibility');

H.extend(H, DOM);
H.extend(H, C);

H.root.H = H;
//without encryption module
H.root.N = N;

module.exports = H;