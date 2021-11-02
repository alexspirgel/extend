const extend = require('../src/index.js');

describe('extend', function () {
  describe('primitive, primitive', function () {
		it(`should return the second primitive`, function () {
			let value1 = 'hello';
			let value2 = 'world';
			const result = extend(value1, value2);
			if (result === 'world' &&
			value1 === 'hello' &&
			value2 === 'world') {
				return true;
			}
			throw new Error();
		});
	});
	describe('plain shallow object, plain shallow object', function () {
		it(`should return the first object with properties overridden by those present in the second object`, function () {
			let value1 = {
				a: 1,
				b: 2,
				c: 3
			};
			let value2 = {
				b: 2,
				c: 4,
				d: 5
			};
			const result = extend(value1, value2);
			if (result.a === 1 &&
			result.b === 2 &&
			result.c === 4 &&
			result.d === 5 &&
			result === value1 &&
			result !== value2) {
				return true;
			}
			throw new Error();
		});
	});
	describe('plain deep object, plain deep object', function () {
		it(`should return the first object with properties overridden by those present in the second object`, function () {
			let value1 = {
				a: 1,
				b: {
					a: 1,
					b: 2,
					c: 3
				},
				c: {
					a: 1,
					b: 2,
					c: 3
				}
			};
			let value2 = {
				b: 2,
				c: {
					b: 2,
					c: 4,
					d: 5
				},
				d: {
					b: 2,
					c: 4,
					d: 5
				}
			};
			const result = extend(value1, value2);
			if (result.a === 1 &&
			result.b === 2 &&
			result.c.a === 1 &&
			result.c.b === 2 &&
			result.c.c === 4 &&
			result.c.d === 5 &&
			result.d.b === 2 &&
			result.d.c === 4 &&
			result.d.d === 5 &&
			result === value1 &&
			result !== value2) {
				return true;
			}
			throw new Error();
		});
	});
	describe('primitive, null', function () {
		it(`should return null`, function () {
			let value1 = 'hello';
			let value2 = null;
			const result = extend(value1, value2);
			if (result === null &&
			value1 === 'hello' &&
			value2 === null) {
				return true;
			}
			throw new Error();
		});
	});
	describe('primitive, undefined', function () {
		it(`should return the first value, undefined should not be merged`, function () {
			let value1 = 'hello';
			let value2;
			const result = extend(value1, value2);
			if (result === 'hello' &&
			value1 === 'hello' &&
			value2 === undefined) {
				return true;
			}
			throw new Error();
		});
	});
	describe('array, array', function () {
		it(`should return a new array with identical items as the 2nd array`, function () {
			let value1 = [
				'a',
				'b',
				'c',
				'd'
			];
			let value2 = [
				5,
				6,
				7
			];
			const result = extend(value1, value2);
			if (result[0] === 5 &&
			result[1] === 6 &&
			result[2] === 7 &&
			result[3] === undefined &&
			result !== value1 &&
			result !== value2) {
				return true;
			}
			throw new Error();
		});
	});
	describe('complex merge with overrides and pass by reference examples', function () {
		let value1 = {
			a: 1,
			b: 2,
			c: {
				a: 1,
				b: 2
			},
			e: [
				true,
				'false'
			]
		};
		let value2 = {
			b: 2,
			c: {
				b: 200,
				c: 3
			},
			d: 4,
			e: [
				false
			],
			ref: Object
		};
		const result = extend(value1, value2);
		it(`result.a === 1`, function () {
			if (result.a === 1) {
				return true;
			}
			throw new Error();
		});
		it(`result.b === 2`, function () {
			if (result.b === 2) {
				return true;
			}
			throw new Error();
		});
		it(`result.c.a === 1`, function () {
			if (result.c.a === 1) {
				return true;
			}
			throw new Error();
		});
		it(`result.c.b === 200`, function () {
			if (result.c.b === 200) {
				return true;
			}
			throw new Error();
		});
		it(`result.c.c === 3`, function () {
			if (result.c.c === 3) {
				return true;
			}
			throw new Error();
		});
		it(`result.e[0] === false`, function () {
			if (result.e[0] === false) {
				return true;
			}
			throw new Error();
		});
		it(`result.e[1] === undefined`, function () {
			if (result.e[1] === undefined) {
				return true;
			}
			throw new Error();
		});
		it(`result.ref === Object`, function () {
			if (result.ref === Object) {
				return true;
			}
			throw new Error();
		});
		it(`result === value1`, function () {
			if (result === value1) {
				return true;
			}
			throw new Error();
		});
		it(`result !== value2`, function () {
			if (result !== value2) {
				return true;
			}
			throw new Error();
		});
	});
});
