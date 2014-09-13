'use strict';

var test = require('tape'),
    jsonref = require('../lib');

test('test', function (t) {
    t.test('plan', function (t) {
        t.plan(7);

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

        t.strictEqual(jsonref.get(obj, '#/p2'), 'v2');
        t.strictEqual(jsonref.get(obj, '#/p1/p1a'), 'v1a');
        t.strictEqual(jsonref.get(obj, '#/p4/1/p4b'), 'v4b');
        t.ok(!jsonref.get(obj, '#/p1/p1d'), 'should be undefined');
        t.ok(!jsonref.get(obj, '#/p1/p1a/0'), 'should be undefined');
        jsonref.set(obj, '#/p4/1/p4b', 'v4c')
        t.strictEqual(jsonref.get(obj, '#/p4/1/p4b'), 'v4c');
        jsonref.set(obj, '#/p4/1/p4c', 'v4d');
        t.strictEqual(jsonref.get(obj, '#/p4/1/p4c'), 'v4d');
    });

});
