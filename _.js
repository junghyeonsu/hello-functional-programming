function _filter(list, predicate) {
	var new_list = [];
	for (var i = 0; i < list.length; i++) {
		if (predicate(list[i])) {
			new_list.push(list[i]);
		}
	}
	return new_list;
}

function _map(list, mapper) {
	var new_list = [];
	for (var i = 0; i < list.length; i++) {
		new_list.push(mapper(list[i]));
	}
	return new_list;
}
