'use strict';

// 1. basic promise, resolve and reject
const promise = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		// resolve('Promise was resolved!');
		reject(new Error('The promise failed, try again!'));
	}, 1500);
});

// then takes two parameters, 1st is when resolve succeeds, 2nd handles reject/errors
promise.then((str)=>{
	console.log(str);
}, (err)=>{
	console.error(err.message);
});