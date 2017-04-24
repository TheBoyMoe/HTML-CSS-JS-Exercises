'use strict';

// 1. basic promise, resolve and reject
const promise = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve('1. Promise was resolved!');
		reject(new Error('1. The promise failed, try again!'));
	}, 1500);
});

// then takes two parameters, 1st is when resolve succeeds, 2nd handles reject/errors
promise.then((str)=>{
	console.log(str);
}, (err)=>{
	console.error(err.message);
});


// 2. chaining promises
const waitASecond = (seconds)=>{
	return new Promise((resolve, reject)=>{
		if(seconds > 2)
			return reject(new Error('2. Reject!'));
		setTimeout(() => {
			seconds++;
			resolve(seconds);
		}, 1000);
		
	});
};

waitASecond(2)
	.then(waitASecond)
	.then((result)=>{
		console.log(result); // 2
	}).catch((err)=>{ // handle errors using catch block
		console.error(err.message);
	});


// 3.
const promise1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve('3a. Resolved');
	}, 1000);
});

const promise2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve('3b. Resolve');
	}, 2000);
});

const promise3 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		reject('3c. Rejected');
	}, 3000);
});

// all() combines all promises passed to it, waits for ALL of them to be resolved,
// only then is it resolved - returning the result of all of them
// if any promise in the chain is rejected, that error is caught and returned to
// the caller - none of them will resolve successfully
Promise.all([promise1, promise3, promise2])
	.then((success)=>{
		console.log(success);
	})
	.catch((error)=>{
		console.error(error);
	});

// race() returns the result of the promise that completes first - whether success/failure
Promise.race([promise1, promise3, promise2])
	.then((success)=>{
		console.log(success);
	})
	.catch((error)=>{
		console.error(error);
	});


// More Chaining - From Udemy Complete Node Course - Weather App using promises
const asyncAdd = (a, b)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			(typeof a === 'number' && typeof  b === 'number')?
				resolve(a + b):
				reject('One or both entries were not numbers');
		}, 1000);
	})
};


// Chaining promises where the result of one is used in the next, and so on.
// 1st failure stops the sequence
asyncAdd(2,3)
.then((result)=>{
	console.log('1st', result);
	return asyncAdd(result, 'we');
})
.then((result)=>{
	console.log('2nd', result);
	return asyncAdd(result, 'erer');
})
.then((result)=>{
	console.log('3rd', result);
})
.catch((err) => console.error(err));

