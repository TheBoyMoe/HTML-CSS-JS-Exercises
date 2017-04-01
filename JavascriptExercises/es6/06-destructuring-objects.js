/*
	De-structuring objects

 */

// use {} when destructuring an object - ONLY use it for obj properties
// 'this' is set to the window object if you destructure methods

let props = {
	firstname: 'Tom',
	lastname: 'Jones',
	age: 34,
	greet() {
		console.log(this);
		return `Hello my name is ${this.firstname} ${this.lastname}`;
	}
};

// you MUST use the same property names
// - simply pull out the value by it's property name - since we're referencing properties by name
// unlike arrays where we reference values by position
var {firstname, lastname} = props;
console.log(firstname, lastname); // Tom Jones

var {first, last, age} = props;
console.log(first, last, age); // undefined undefined 34

// HOWEVER, you can rename property names by using aliases, e.g
var {firstname: first, lastname: last} = props;
console.log(`aliasing ${first} ${last}`);

// you can ignore properties, but unlike array destructuring don't leave 'gaps'
let {greet} = props;
console.log(greet()); // this - window object - returns undefined for first/lastname
console.log(props.greet()); // this - obj - WORKS