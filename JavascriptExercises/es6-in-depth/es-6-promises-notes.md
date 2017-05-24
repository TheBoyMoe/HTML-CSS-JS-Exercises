### Typical Callbacks and Events

```javascript
fetch('path/to/resource', (err, res) => {
    if(err){
        // handle error
    } else {
        // handle response
    }
})
```

Typical of callbacks, the first parameter is for errors, that may or may not occur, the 2nd parameter is used to pass in the result of the operation. The callback is not invoked until the operation, i.e, fetch in this case, has completed and returned a result or error. In this model, you can only specify a single callback in which you add all the functionality req'd for the response - result and error.


A typical Event model returns an object to which you can bind as many event handlers as neede, e.g error and data handlers, via the on() method.

```javascript
fetch('path/to/resource')
    .on('error', (err) => {
        
    })
    .on('data', (data) => {
        
    })
```

### Typical Promise
Similar to the Event model, allows the binding of as many listeners as required via then() and catch() methods, though there's no need to use an event type, such as 'error' or 'data'.

```javascript
let promise = fetch('path/to/resource');
promise.then(() => {
    // handle response
    // return a promise, whose result is passed into the next then()
})
.then(() =>{
    // further processing
})
.catch((err) => {
    // handle error
})
```

You can pass two callbacks to .then(), 1st the response and the 2nd the error, and not use a catch block

```javascript
let promise = fetch('path/to/resource');
promise.then(() => {
    // handle response
}, (err) => {
    // handle error
})
```

You can omit the onRejection/error callback:

```javascript
let promise = fetch('path/to/resource');
promise.then(() => {
    // handle response
})
```

You can also omit the onFulfillment/response callback:

```javascript
let promise = fetch('path/to/resource');
promise.then(null, (err) => {
    // handle error
})
```

OR

```javascript
let promise = fetch('path/to/resource');
promise.catch((err) => {
    // handle error
})
```

Promises can be chained together, you can save a reference to any point in the promise chain and add more promises to it - then() and catch() return a new promise every time.


```javascript
let p1 = fetch('foo'); // returns a brancd new promise p1
let p2 = p1.then(res => res.a.prop.that.does.not.exist); // when p1 is fulfilled, p.then() is executed returning a new promise p2
let p3 = p2.catch(err => {});  // when p2 is fulfilled, ps.catch() is executed, returning a new promise p3
let p4 = p3.catch(err => console.error(err.message));  // when p3 is fulfilled, p3.catch() is executed returning p4
```


### Creating Promises
You can create promises using the Promise constructor, new Promise(), and the Promise.resolve() and Promise.reject() methods.