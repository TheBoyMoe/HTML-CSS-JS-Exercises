// export let keyValue = 1000;

// export const fn = (a,b)=>{
//     return a*b;
// }

// combine exports
let keyValue = 1000;

const fn = (a,b)=>{
	return a*b;
};

// in addition to exporting variables and functions, you can export arrays and objects
export {keyValue, fn};