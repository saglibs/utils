var Core = require('./core');
var H = require('coreutil/utils');

require('cryptutil/crypt');

Core.extend(Core, H);

Core.root.$H = Core;

Core.addProperty(Core.root, '$H', {
    value: Core,
    configurable: false,
    enumerable: false,
    writable: false
});

module.exports = Core;