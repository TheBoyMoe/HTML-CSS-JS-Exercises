'use strict';

/*
	You can make any object iterable, the object needs to implement the Symbol.iterator property - allowing you to loop through your own objects
	You can overwrite the default behaviour of iterable objects like arrays - provide a custom iterable obj

 */

const numbers = [1,2,3,4];

console.log(typeof numbers[Symbol.iterator]); // return function object

// create a custom iterator
numbers[Symbol.iterator] = function() {
	let nextValue = 10;
	return {
		next: function () {
			nextValue++;
			return {
				done: (nextValue > 15),
				value: nextValue
			};
		}
	}
};


const it = numbers[Symbol.iterator](); // invoking () returns an iterable object
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

