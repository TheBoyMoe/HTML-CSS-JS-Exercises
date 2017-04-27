'use strict';

/*
	You can make any object iterable, the object needs to implement the Symbol.iterator property - allowing you to loop through your own objects
	You can overwrite the default behaviour of iterable objects like arrays - provide a custom iterable obj

 */

const numbers = [1,2,3,4];

console.log(typeof numbers[Symbol.iterator]); // return function object

// override the default iterator with a custom iterator
// numbers[Symbol.iterator] returns a function - use that feature to provide a custom iterable function
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


// iterating over an object's properties - pick which property you want to iterate over
const person = {
	firstname: 'Peter',
	lastname: 'Jones',
	languages: ['js', 'python', 'php', 'java', 'c++'],
	age: 67,
	[Symbol.iterator]: function () {
		let i  = 0;
		let langs = this.languages;
		return {
			next: function () {
				let value = langs[i];
				i++;
				return {
					done: (i > langs.length),
					value: value
				}
			}
		}
	}
};

for(let skill of person)
	console.log(skill)