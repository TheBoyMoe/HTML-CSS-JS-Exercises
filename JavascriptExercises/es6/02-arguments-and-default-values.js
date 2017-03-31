/*
	ES 6 allows you to set default values on args, which are used when the arg is not passed to the function
	JS's rule regarding arg order still applies
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
