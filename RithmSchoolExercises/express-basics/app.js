/*
	References:
	[1] https://www.rithmschool.com/courses/node-express-fundamentals/introduction-to-express
 */
'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// GET '/'
app.get('/', (req, res)=>{
	res.send('Received your request, now bog off!');
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