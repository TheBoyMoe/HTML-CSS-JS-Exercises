/*
	for-of loop - same as for-in loop used for obj iteration
		- iterate over a string, map, set, node list, etc
		
	[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

 */
 
 const  fn = (values)=>{
 	"use strict";
 	for(let value of values){
 		console.log(value);
	}
 };
 
 fn([1,2,3,4,5,6,7,8]);
 fn('hello world!');