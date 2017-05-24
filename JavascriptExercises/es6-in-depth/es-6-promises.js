/*
    Example of using promises to make a http request
    
    References:
    [1] https://ponyfoo.com/articles/es6-promises-in-depth
    [2] https://ponyfoo.com/articles/understanding-javascript-async-await (first paragraph shows the typical use of a promise)
    
 */
'use strict';
const request = require('request');
const marked = require('marked');
const hget = require('hget');
const Term = require('marked-terminal');
const url = 'https://ponyfoo.com/articles/random';

const getRandomArticle = () => {
    return new Promise((fulfill, reject) => {
        // wrap your http request in a promise - fulfilled at a point in the future,
        // i.e. when the article is received
        request(url, (err, res, body) => {
            if(err) return reject(err);
            fulfill(body);
        })
    })
};

const printArticle = () => {
    getRandomArticle() // returns a promise
        .then((html) => {
            hget(html, { // returns a promise
                markdown: true,
                root: 'main',
                ignore: '.at-subscribe, .mm-comments, .de-sidebar'
            })
        })
        .then((md) => {
            marked(md, {renderer: new Term()}) // returns a promise
        })
        .then((txt) => console.log(txt)) // fulfilled
        .catch((err) => console.error(err.message));
};

printArticle();