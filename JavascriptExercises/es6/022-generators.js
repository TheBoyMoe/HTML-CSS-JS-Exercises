/*
	Generators in es6
	 - add an astrix '*' symbol in front of a function name to convert it into a genereator
	 - return values from a generator using the 'yield' keyword
	 - invoking a generator returns an iterator
	 
 */
 
function *select() {
 yield 'javascript';
 yield 'php';
 yield 'c++';
 yield 'java';
}

// calling a generator returns a iterator

// let it = select();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// assign the langs generator directly to the iterator property
let languages = {
	[Symbol.iterator]: langs
};

function *langs() {
	yield 'javascript';
	yield 'php';
	yield 'c++';
	yield 'java';
	yield 'c#';
}

for(let language of languages)
	console.log(language);


// passing values to generators - define how many times the generator should yield values
// generators manage state, so they can handle errors, provided you handle them.
// the generator will carry on after the error is thrown - values are not skipped
// you can terminate the generator using the return statement - no more values are returned - not supported in all browsers
// both throw() and return() allow you to return a message
function *gen(end) {
	for(let i = 0; i < end; i++) {
		try {
			yield i;
		} catch (e) {
			console.error(e);
		}
		
	}
}

let it = gen(4);
console.log(it.next());
console.log(it.next());
console.log(it.throw('An error was thrown!!')); // value still returned
console.log(it.return('End reached')); // returning values stops
console.log(it.next());