'use strict';

const promise1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		//resolve('Promise resolved!')
		// you need to pass an error as the 2nd arg to then(), or include a catch block
		// reject('Promise rejected!');
	}, 1000);
});

promise1.then((val)=>{
	console.log(val);
}).catch((err) => console.error(err));


function waitASecond(secs) {
	return new Promise((resolve, reject)=>{
		if(secs > 10){
			reject('Promise rejected!');
		} else {
			setTimeout(() => {
				secs++;
				resolve(secs);
			}, 1000);
		}
	})
}

waitASecond(0) // 1st
	// result of the first promise is passed to the second
	.then(waitASecond) // 2nd
	.then(waitASecond) // 3rd
	.then(waitASecond)
	.then((result)=>{
		console.log(result);
	}).catch((e) => console.error(e));