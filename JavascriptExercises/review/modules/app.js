'use strict';
console.log('app.js successfully loaded');

// require does not work with system js, also include file extensions
// your not importing copies of the values, you're importing a reference to those values
// should that value change, it's change will be reflected in this file also
// you can use aliases with imports - can't use original reference

// import {value as number, sum, minus} from './utils.js';

// import a default value - you can assign the default to any variable name
// import str from './utils.js';

// console.log('number = %d', number);
// console.log('add 2 + 3 = %d', sum(2,3));
// console.log('subtract 10 - 8 = %d', minus(10, 8));
// console.log(str);

// you can import all the properties/methods from a file as a single object
// refer to props/methods using dot notation - you can use any name for the object
// default values don't work with this technique
import * as utils from './utils.js'

console.log(utils.sum(2,3), utils.minus(3,1), utils.value);


/*

// EXPORT
export a
export b

export {a,b,c}


// IMPORT
import {a,b,c} from './path/to/file/js'
a()
b()

import {a as d, b,c} from './path/to/file.js'

import * as utils from './path/to/file.js'
utils.a()
utils.b()
 */