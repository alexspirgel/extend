# extend
Extends a value with another value using vanilla JavaScript. Similar in functionality to the jQuery extend function.

Notes:

* This function always performs a deep copy, there is no shallow copy option. Native solutions now exist for shallow copying.
* Arrays are not merged, they are replaced without referencing the original.
* Non-plain objects are passed by reference.
* `undefined` values are not merged into the target.

## Installation

### Using NPM:

```js
npm install @alexspirgel/extend
```

```js
const extend = require('@alexspirgel/extend');
```

### Using a script tag:

Download the `extend.js` file from the `/dist` folder.

```html
<script src="path/to/extend.js"></script>
```

## Usage

### Extend an object with other objects
```js
extend(object1, object2, objects3);
```
`object2` and `object3` will be merged into `object1`.

### Clone an object
```js
let object2 = extend({}, object1);
```
`object2` will be a clone of `object1`.

## Example

```js
const value1 = {
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

const value2 = {
	b: '2',
	body: document.body, // passed by reference
	c: {
		b: 200,
		c: 3
	},
	d: 4,
	e: [
		false
	]
};

const result = extend(value1, value2);

console.log(result);
/* 
Output:
{
	a: 1,
	b: '2',
	body: document.body,
	c: {
		a: 1,
		b: 200,
		c: 3
	}
	d: 4,
	e: [
		false
	]
}
*/
```