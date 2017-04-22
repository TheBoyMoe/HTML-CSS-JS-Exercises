/*
	References:
	[1] https://www.rithmschool.com/courses/node-express-fundamentals/introduction-to-express
	[2] https://pugjs.org/api/getting-started.html
	
 */
'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const colors = ['red', 'green', 'blue'];

// define templating engine
app.set('view engine', 'pug');

// GET '/'
app.get('/', (req, res)=>{
	// res.send('Received your request, now bog off!');
	const firstname = 'Elle';
	res.render('hello', {name: firstname});
});

app.get('/colors', (req, res)=>{
	// {colors} is ES2015 object shorthand notation for {colors: colors}
	// To evaluate variables inside of our templates, we will use the Jade #{variable} syntax.
	res.render('colors', {colors});
});


// GET '/instructor/[firstname]
// To specify that a part of a URL will be a "parameter", add the : character and give
// the URL parameter a name, e.g firstname in this example. This name will be the key in the params object.
// ALL url parameters are strings
app.get('/instructor/:firstname', (req, res)=>{
	res.send(`the instructors name is ${req.params.firstname}`);
});

app.listen(port, ()=>{
	console.log(`Express is listening on port ${port}`);
});