'use strict';

var Hammer = require('hammertime');
var Refpath = require('../lib');

var obj = {
    p1: {
        p1a: {
            p1a1: 'v1a1'
        }
    }
};

Hammer({
    iterations: 10000,
    after: function (results) {
        console.log('%d operations/sec', results.ops);
    }
}).time(function () {
    Refpath.set(obj, '#/p1/p1a/p1a1', 'abcd');
});
