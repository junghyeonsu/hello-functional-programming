function _filter(list, predicate) {
	var new_list = [];

	_each(list, function(val) {
		if (predicate(val)) {
			new_list.push(val);
		}
	})

	return new_list;
}

function _map(list, mapper) {
	var new_list = [];

	_each(list, function(val) {
		new_list.push(mapper(val));
	})
	
	return new_list;
}

function _each(list, iter) {
	for (var i = 0; i < list.length; i++) {
		iter(list[i]);
	}

	return list;
}

function _curry(fn) {
	return function(a) {
		return arguments.length === 2 ? fn(a, b) : function(b) { return fn(a, b);}
	}
}

function _curryr (fn) {
	return function(a, b) {
		return arguments.length === 2 ? fn(a, b) : function(b) { return fn(b, a);}
	}
}

function _get(obj, key) {
	return obj === null ? undefined : obj[key];
}

function _reduce(list, iter, memo) {
	_each(list, function(val) {
		memo = iter(memo, val);
	});
	return memo;
}

function _rest(list, num) {
	return Array.prototype.slice.call(list, num || 1);
}

function _pipe() {
	var fns = arguments;
	return function(arg) {
		return _reduce(fns, function(arg, fn) {
			return fn(arg);
		}, arg);
	}
}

function _go() {
	var fns = _rest(arguments);
	return function(arg) {
		return _pipe.apply(null, fns)(arg);
	}
}