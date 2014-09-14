'use strict';

exports = module.exports = {
	get: function get(obj, path) {
		var paths, fragment;

		fragment = obj;

		function grab(key) {
			return typeof fragment === 'object' && fragment[key];
		}

		paths = Array.isArray(path) ? path : path.split('/');

		for (var i = 1; i < paths.length; i++) {
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

		fragment = this.get(obj, paths.slice(0, paths.length - 1));

		if (fragment) {
			fragment[paths[paths.length - 1]] = value;
		}
	}
};
