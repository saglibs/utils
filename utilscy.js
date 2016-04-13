var Core = require('./core');
var H = require('coreutil/utils');

require('cryptutil/crypt');

Core.extend(Core, H);

Core.root.H = Core;

module.exports = Core;