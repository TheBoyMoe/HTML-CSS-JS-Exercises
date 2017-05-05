/*
    'Full CRUD' means that we can perform Create, Read, Update, Delete operations on whatever resource we're working on.
    Thus  if you resource were users, we would have routes for the following (using RESTful convention):
 
    HTTP Verb	Path	            Description
    GET         /users	            Show all users
    GET         /users/new	        Show a form for creating a new user
    GET	        /users/:id	        Show a single user
    GET	        /users/:id/edit	    Show a form for editing a user
    POST	    /users	            Create a user when a form is submitted
    PATCH	    /users/:id	        Edit a user when a form is submitted
    DELETE	    /users/:id	        Delete a user when a form is submitted

    - html forms only use GET and POST methods. So we need to override these to implement PATCH and DELETE
    - this can be done using a header in the request, or through the query string with the help of a 3rd party package, method-override
    - to use method override, add '_method=PATCH' or '_method=DELETE' into the query string - where '_method ids the key and the http verb the value, e.g
 
     form(action=`/create-new-user/${user.id}?_method=PATCH` method="POST")
         input(type="text" name="first" value=`${first}`)
         input(type="text" name="last" value=`${last}`)
    
    - the form MUST use the POST method
    
 */
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'pug');

/* middleware */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// routes
app.get('/', (req, res)=>{
    res.send('It\'s working');
});


app.listen(port, ()=>{
    console.log(`Express is listening on port ${port}`);
});

