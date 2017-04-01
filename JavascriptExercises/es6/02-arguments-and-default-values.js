/*
	ES 6 allows you to set default values on args, which are used when the arg is not passed to the function
	JS's rule regarding arg order still applies
	- values can be strings, numbers, boolean, objects, arrays or functions
 */
const divider = ()=>console.log(`-----------------------------`);


const defaultValues = (a=2,b=5,c=2)=>console.log(a*b*c);

defaultValues();		// 20
defaultValues(3);		// 30
defaultValues(2,3);		// 12
defaultValues(2,3,4);	// 24

let c = 10;
const defValues = (a=2,b=c)=>console.log(a*b);

divider();
defValues();		// 20
defValues(4);		// 40
defValues(4,4);		// 16


const defValues2 = (a=10, b=a)=>console.log(a*b);
divider();
defValues2();		// 100
defValues2(2);		// 4
defValues2(2,3);	// 6

// where we have parameters with a default value, we can pass in undefined if we
// don't want to set them (defaults will be used) but want to set parameters that com later in the sequence
// js applies args in sequence, you have to provide a value to 'early parameters' in order to set the later ones.
divider();
defaultValues(undefined, undefined, 10); // 2*5*10==100
