const isPlainObject = require('@alexspirgel/is-plain-object');

function extend(...arguments) {
	let target = arguments[0];
	let merge;
	for (let argumentIndex = 1; argumentIndex < arguments.length; argumentIndex++) {
		merge = arguments[argumentIndex];
		if (merge === target) {
			continue;
		}
		if (Array.isArray(merge)) {
			target = [];
			for (const index of merge.keys()) {
				target[index] = extend(target[index], merge[index]);
			}
		}
		else if (isPlainObject(merge)) {
			if (!isPlainObject(target)) {
				target = {};
			}
			for (const property in merge) {
				target[property] = extend(target[property], merge[property]);
			}
		}
		else if (merge !== undefined) {
			target = merge;
		}
	}
	return target;
}

module.exports = extend;