var C = {};

var H$ = require('domutil/dom');
var H = require('coreutil/core');

C.widthOf = function(ele) {
    return H$(ele).css('width');
};

C.heightOf = function(ele) {
    return H$(ele).css('height');
};

C.parentOf = function(ele) {
    return H$(ele).css('parent');
};


C.windowWidth = function() {
    return H.root.innerWidth || (document.compatMode == "BackCompat" ? document.body.clientWidth : document.documentElement.clientWidth);
};

C.windowHeight = function() {
    return H.root.innerHeight || (document.compatMode == "BackCompat" ? document.body.clientHeight : document.documentElement.clientHeight);
};

C.escape2Html = H.unescape || function(str) {
        var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
    };

C.encodeHTML = function(url) {
    return url.replaceAll('#', '%23');
};

C.translateFromWindowToCanvas = function(canvas, x, y) {
    var bbox = canvas.getBoundingClientRect();

    return {
        x: x - bbox.left - (bbox.width - canvas.width) / 2,
        y: y - bbox.top - (bbox.height - canvas.height) / 2
    };
};

C.random = function(min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = C;