/*
	References:
	[1] https://www.rithmschool.com/courses/node-express-fundamentals/introduction-to-express
	[2] https://pugjs.org/api/getting-started.html
	[3] https://github.com/rithmschool/node_curriculum_examples (Git repo for exercises)
	[4] https://expressjs.com/en/guide/using-template-engines.html (Using pug with Express)

	
	Note:
	1. to render server-side templates, e.g pug, we use res.render().
	    - to send back a html file to the user use res.sendFile()
	    - to send back a simpl string message, res.send()
	2. to evaluate variables inside of the pug templates, injects the variables using #{variable_name} syntax
	3. express defaults to using the 'views' dir in the root of the project to serve up template files
	    - otherwise you can use: app.set('views', './path/to/views')
 */
'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const colors = ['red', 'green', 'blue'];

// define templating engine - express expects a 'views' folder in the
// root of the project to contain your template files
app.set('view engine', 'pug');

// serve up static assets(img/css/js)
app.use(express.static(`${__dirname}/public`));

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
	// res.send(`the instructors name is ${req.params.firstname}`);
    res.render('hello', {name: req.params.firstname});
});

// GET /signup - capture user first and last names
app.get('/signup', (req, res)=>{
    res.render('signup');
});



app.listen(port, ()=>{
	console.log(`Express is listening on port ${port}`);
});