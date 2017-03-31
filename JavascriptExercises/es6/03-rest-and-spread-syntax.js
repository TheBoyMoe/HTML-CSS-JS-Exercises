/*
 
	The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
	- ie, take in a series of parameters and treat it like an array
	[1] https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters
	
 */


const fnRest = (...arr)=>{
	console.log(arr); // prints an array of the parameters passed in
	
	// iterate through the array, sum the values
	return arr.reduce((prev, curr)=>prev+curr, 0);
};
// you can pass in a series of elements, e.g numbers, strings, etc - automatically turned into an array
console.log(fnRest(1,2,3,4,5,6,7));

