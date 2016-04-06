var Core = require('./core');
var H = require('coreutil/utils');

Core.extend(Core, H);

Core.root.H = Core;

module.exports = Core;