/*
 	Rest operator
	The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
	- ie, take in a series of parameters and treat it like an array
	[1] https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters
	
 */


const fnRest = (...arr)=>{
	console.log(arr); // prints an array of the parameters passed in
	
	// iterate through the array, sum the values
	return arr.reduce((prev, curr)=>prev+curr, 0);
};
// you can pass in a series of elements(any number), e.g numbers, strings, etc - automatically turned into an array
console.log(fnRest(1,2,3,4,5,6,7));

/*
	Spread operator
	- opposite of the rest operator, expand an array passed in as multiple arguments.
	- use it for functions that expect multiple arguments, eg Math.max
 */
let arr = [2,4,3,1,3,5,6,7,4,8,9,5];
// expands the array into a comma separated list of values that the .max() method is expecting
console.log('spread', Math.max(...arr));

// in ES5 you could use the apply() method - pass in an array of values to a method that is expecting individual values
console.log('apply', Math.max.apply(null, arr));
