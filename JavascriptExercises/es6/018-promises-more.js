'use strict';

// 1. basic promise
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(new Error('promise failed due to technical error'));
//     }, 1000)
// });


// promise.then((result)=>{
//     console.log('1st success:', result);
// })
// .catch((err) => console.error('1st failure:', err.message));

// OR
// promise.then((result)=>{
//     console.log('2nd success:', result);
// }, (err) => console.log('2nd Failure:', err.message));


// 2. chaining promises
const waitASecond = (seconds)=>{
    return new Promise((resolve, reject)=>{
        if(seconds > 5) {
            reject(new Error('Exceeded time'));
        } else {
            setTimeout(() => {
                seconds++;
                resolve(seconds);
            }, 1000)
        }
    })
};

// no chaining
waitASecond(1).then(
    (result) => console.log('time:',result),
    (err) => console.error(err.message)
);

waitASecond(3).then(
    (result) => console.log('time:',result),
    (err) => console.error(err.message)
);

// chaining => waitASecond(0).waitASecond(1).WaitASecond(2)....then(result, err)
waitASecond(6)          // 1
    .then(waitASecond)  // 2
    .then(waitASecond)  // 3
    .then(waitASecond)  // 4
    .then(waitASecond)  // 5
    .then((result) => console.log(result), (err) => console.error('You blew it!',err.message));

// OR
waitASecond(6)
    .then(waitASecond)
    .then(waitASecond)
    .then(waitASecond)
    .then(waitASecond)
    .then((result) => console.log(result))
    .catch((err) => console.error('Error caught:',err.message));


// 3. Using Promise.all() & race() methods
const promiseResolve = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise resolved!');
    }, 1000)
});

const promiseRejected = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('Promise rejected!');
    }, 2000)
});

// takes an array of promises and executes them one after the other
// only if all the promises are resulved is a success returned,
// any rejections terminates the sequence
Promise.all([promiseResolve, promiseResolve, promiseRejected, promiseResolve])
    .then((success) => console.log(success), (err) => console.error(err));

const promiseResolve1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise 1 resolved!');
    }, 2000)
});

const promiseResolve2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise 2 resolved!');
    }, 1000)
});

// waits for the first promise to finish
Promise.race([promiseResolve1, promiseResolve2, promiseRejected, promiseResolve1])
    .then((success) => console.log(success))
    .catch((err) => console.error(err));