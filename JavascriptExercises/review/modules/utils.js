'use strict';

// you can use the export keyword to export individual functions or properties, e.g
export let value = 12;

let result = 'This is the default value for the utils file';

const sum = (a,b)=>{
	return a+b;
};

const minus = (a,b)=>{
	return Math.abs(a-b);
};

// you can export multiple values using the export keyword
export {sum, minus}

// you can also define a default export, only one per file
// export default result;

// module.exports = { // this also works
// 	sum,
// 	minus
// };