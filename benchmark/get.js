'use strict';

var hammer = require('hammertime'),
    refpath = require('../lib');

var obj = {
    p1: {
        p1a: {
            p1a1: 'v1a1'
        }
    }
};

hammer({
    iterations: 1000,
    after: function (results) {
        console.log('%d operations/sec', results.ops);
    }
}).time(function () {
    refpath.get(obj, '#/p1/p1a/p1a1');
});
