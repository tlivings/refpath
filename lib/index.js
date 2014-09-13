'use strict';

exports = module.exports = {
	get: function get(obj, path) {
		var paths, fragment;

		function grab(key) {
			if (!fragment && key === '#') {
				return obj;
			}
			return fragment && fragment[key];
		}

		paths = Array.isArray(path) ? path : path.split('/');

		for (var i = 0; i < paths.length; i++) {
			fragment = grab(paths[i]);

			if (!fragment) {
				return undefined;
			}
		}

		return fragment;
	},
	set: function set(obj, path, value) {
		var fragment, paths;

		paths = path.split('/');

		fragment = exports.get(obj, paths.slice(0, paths.length - 1));

		if (fragment) {
			fragment[paths[paths.length - 1]] = value;
		}
	}
};
