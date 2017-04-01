

// export let keyValue = 1000;

// export const fn = (a,b)=>{
//     return a*b;
// }

// combine exports
let keyValue = 1000;

const fn = (a,b)=>{
	return a*b;
}

let text = 'some default text';

// in addition to exporting variables and functions, you can export arrays and objects
export {keyValue, fn};

// define the default export
export default text;
