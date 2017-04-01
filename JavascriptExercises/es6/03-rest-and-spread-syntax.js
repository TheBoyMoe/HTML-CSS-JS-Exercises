/*
 	Rest operator
	The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
	- ie, take in a series of parameters and treat it like an array
	- collects the arguments passed to a function - passing in an array
	- it needs to be the last parameter defined in the function signature
	[1] https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters
	[2] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
	
 */


const fnRest = (...arr)=>{
	console.log(arr); // prints an array of the parameters passed in
	
	// iterate through the array, sum the values
	return arr.reduce((prev, curr)=>prev+curr, 0);
};
// you can pass in a series of elements(any number), e.g numbers, strings, etc - automatically turned into an array
console.log(fnRest(1,2,3,4,5,6,7));

// rest parameters must be the last arg in the function signature when other parameters are also used
const fnRest2 = (num, ...params)=>{
	console.log(num, params);
};

console.log(fnRest2(1,2,3,4,5,6,7,8, 9,10,11));

/*
	Spread operator
	- opposite of the rest operator, expand an array passed into a function into a comma separated list - equivalent to passing multiple arguments.
	- use it for functions that expect multiple arguments, eg Math.max
	- where functions take one or more parameters and you pass in an array using the spread operator,
		the arrays' values will be assigned in the order they appear in the array.
 */
let arr = [2,4,3,1,3,5,6,7,4,8,9,5];
// expands the array into a comma separated list of values that the .max() method is expecting
console.log('spread', Math.max(...arr));

// in ES5 you could use the apply() method - pass in an array of values to a method that is expecting individual values
console.log('apply', Math.max.apply(null, arr));

// you can use the spread operator to concatenate an arrays
const original = [10,11,12,13,14];
const update = [20,21,22,23,24];
const expanded = [1,2,3, ...original, 4,5, ...update];
console.log(expanded);
