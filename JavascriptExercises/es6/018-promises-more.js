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
