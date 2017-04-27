/*
	Symbols
	- new primitive in javascript
	- provide a unique identifier
	- are not iterable, when you loop over the object, they're not returned
	- the string you pass to the Symbol constructor is there simply for debugging - allows you to check which symbol you're accessing
	- symbol constructor creates a symbol object
	
 */
 
let symbol = Symbol('debug');

let obj = {
	firstname: 'Peter',
	lastname: 'Jones',
	age: 33,
	[symbol]: 3542342 // use the symbol as the property name
};

console.log(symbol);
console.log(obj[symbol]);