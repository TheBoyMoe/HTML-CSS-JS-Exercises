/*
	References
 [1] https://www.youtube.com/watch?v=iZLP4qOwY8I&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=6
 [2] https://www.sitepoint.com/currying-in-functional-javascript/
 [3] http://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/
 [4]http://2ality.com/2011/09/currying-vs-part-eval.html
 
 
 */

"use strict";
const _ = require('lodash');

// basic function
const dragon = (name, size, element) => {
	return `${name} is a ${size} dragon that breathes ${element}!`;
};

console.log(dragon('Max', 'Large', 'Fire'));

// currying version

const monster = (name) => {
	return (size) => {
		return (element) => {
			return `${name} is a ${size} monster that shits ${element}!`;
		}
	}
};

console.log(monster('Shreck')('huge')('lighting'));

// can also be called like this:
let kaizu = monster('Kaizu');
let huge = kaizu('giant');
console.log(huge('acid'));

// using lodash to convert any multi-parameter function into a currying function
const curriedDragon = _.curry(dragon);
console.log(curriedDragon('Alfred')('tiny')('smoke'));


// Another example
const dragons = [
	{ name: 'kaizu', element: 'fire'},
	{ name: 'azazel', element: 'lightening'},
	{ name: 'apep', element: 'fire'},
	{ name: 'aido', element: 'lightening'},
	{ name: 'zebedee', element: 'fire'},
];

// check if the object has the element prop with a particular value
const hasElement = (value, obj)=>{
	return obj.element === value;
};

const hasProperty = (prop, obj)=>{
	return obj.hasOwnProperty(prop);
};

// return an array of the dragons with the matching element
const matchingDragons = dragons.filter((obj)=>{
	// check each dragon for the lightening property
	return hasElement('lightening', obj);
});

console.log(matchingDragons);

// Curried version of dragons
const curriedHasElement =
	_.curry((value, obj)=>{
		return obj.element === value;
	});

// curried version of hasElement takes the value and returns a new function which
// then accepts the object before returning a value
const curriedDragons = dragons.filter(curriedHasElement('fire'));
console.log(curriedDragons);
