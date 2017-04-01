'use strict';

// Write ES6 code here...

//import {keyValue} from './external.js';
// import {fn} from './external.js';

// combine imports - we're importing references to variables, objects, arrays, etc
// if they are changed somewhere else, the change will be reflected here as well.
import {keyValue, fn} from './external.js';

console.log(`${keyValue}`);
console.log(fn(3,3));