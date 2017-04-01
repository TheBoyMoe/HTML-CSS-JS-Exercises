'use strict';

// Write ES6 code here...

//import {keyValue} from './external.js';
// import {fn} from './external.js';

// combine imports
import {keyValue, fn} from './external.js';

// import default export - you can call the default anything you want
// - don't have to use the same export name since there can only be one default per file
import dummyText from './external.js';


console.log(`${keyValue}`);
console.log(fn(3,3));

console.log(dummyText);