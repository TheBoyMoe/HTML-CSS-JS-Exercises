'use strict';

// Write ES6 code here...

// 1. import {keyValue} from './utils.js'; (.js ext is only req'd for testing)
// import {fn} from './utils.js';

// 2. combine imports
// import {keyValue, fn} from './utils.js';

// 3. renaming imports using alias
// import {keyValue as key, fn} from './utils.js';


// 4. import default export - you can call the default anything you want
// - don't have to use the same export name since there can only be one default per file
// import dummyText from './utils.js';

// 5. you can import default, plus other imports in one line, e.g
// import dummyText, {keyValue as key, } from './utils.js';

// 6. You can also import all you're exports from a single file as an object
import * as ext from './external.js'


// CONSOLE LOG RESULTS

// console.log(`${keyValue}`);
// console.log(`${key}`);  // renamed import
// console.log(fn(3,3));
// console.log(dummyText);

console.log(ext);
console.log(`${ext.keyValue} ${ext.default}`); // default is given the property name 'default'
console.log(ext.fn(2,3));



/*
    Exporting:
    
    export let keyValue = 4;
    export const fn = (a,b) => a*b;
    
    OR
    
    let keyValue = 4;
    const fn = (a,b) => a*b;
    
    export = {
        keyValue,
        fn
    }
    
    ////////////////

    import {keyValue, fn} from './utils.js'

    OR
    
    import * as ext from './utils'
    
    then - ext.keyValue and ext.fn() to use

 */