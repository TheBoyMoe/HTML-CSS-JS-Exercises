'use strict';

const promise1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve('Resolved!');
	}, 1000);
});

const promise2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		reject('Rejected!');
	}, 2000);
});

// all promises have to resolve, to get back results from all promises
// a single promise in the sequence rejecting, they all fail

// Promise.all([promise1, promise2])
// 	.then((success)=>{
// 		console.log(success);
// 	})
// 	.catch((err) => console.error(err));


// first promise to resolve is returned
Promise.race([promise2, promise1])
	.then((success)=>{
		console.log(success);
	})
	.catch((err) => console.error(err));


// promise1.then((str)=>{
// 	console.log(str);
// }, (e) => Console.error(e));