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
		var fragment, paths;

		paths = path.split('/');
		fragment = this.get(obj, paths.slice(0, paths.length - 1));

		if (fragment) {
			fragment[paths[paths.length - 1]] = value;
		}
	}
};
