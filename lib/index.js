'use strict';

exports = module.exports = {
    get: function get(obj, path) {
        var fragment, paths;

        paths = Array.isArray(path) ? path : path.split('/');
        fragment = obj;

        for (var i = 1; i < paths.length && fragment; i++) {
            fragment = typeof fragment === 'object' && fragment[paths[i]];
        }

        return fragment;
    },
    set: function set(obj, path, value) {
        var fragment, candidate, paths;

        paths = path.split('/');
        fragment = obj;

        for (var i = 1; i < paths.length - 1 && fragment; i++) {
            if (typeof fragment === 'object') {
                candidate = fragment[paths[i]];

                if (candidate) {
                    fragment = candidate;
                    continue;
                }
                if (isNaN(paths[i + 1])) {
                    fragment = fragment[paths[i]] = {};
                    continue;
                }
                if (!isNaN(paths[i + 1])) {
                    fragment = fragment[paths[i]] = [];
                }
            }
        }

        if (fragment) {
            fragment[paths[paths.length - 1]] = value;
        }
    }
};
