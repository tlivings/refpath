'use strict';

var Test = require('tape');
var Refpath = require('../lib');

Test('refpath', function (t) {

    var obj = {
        p1: {
            p1a: 'v1a',
            p1b: 'v1b',
            p1c: {
                p1a1: 'v1a1'
            }
        },
        p2: 'v2',
        p3: [
            'v3a',
            'v3b'
        ],
        p4: [
            {
                p4a: 'v4a'
            },
            {
                p4b: 'v4b'
            }
        ]
    };

    t.test('get', function (t) {
        t.plan(5);

        t.ok(Refpath.get(obj, '#'), '# returns object.');
        t.strictEqual(Refpath.get(obj, '#/p1/p1a'), 'v1a', 'gets by keys');
        t.strictEqual(Refpath.get(obj, '#/p4/1/p4b'), 'v4b', 'gets by index');
        t.ok(!Refpath.get(obj, '#/p1/p1d'), 'unknown key should be undefined');
        t.ok(!Refpath.get(obj, '#/p1/p1a/0'), 'index on non object should be undefined');
    });

    t.test('set', function (t) {
        t.plan(3);

        Refpath.set(obj, '#/p4/1/p4b', 'v4c');
        t.strictEqual(Refpath.get(obj, '#/p4/1/p4b'), 'v4c', 'key value changed');

        Refpath.set(obj, '#/p3/0', 'v3c');
        t.strictEqual(Refpath.get(obj, '#/p3/0'), 'v3c', 'index value changed');

        Refpath.set(obj, '#/p1/p1e/p1e1/0', 'x');
        t.ok(Refpath.get(obj, '#/p1/p1e/p1e1/0'), 'set non existent.');
    });

});
