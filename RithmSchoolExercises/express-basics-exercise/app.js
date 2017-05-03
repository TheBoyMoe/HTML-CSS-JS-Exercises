"use strict";
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const items = ['apples', 'pears', 'oranges', 'lemons', 'blueberries'];

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

// GET /
app.get('/', (req, res)=>{
    res.render('list', {items});
});

// GET /search - handle form search submissions
app.get('/search', (req, res)=>{
    res.send(req.query);
});

// GET /new-item - display a form allowing users to submit new items
app.get('/new-item', (req, res)=>{
    res.render('new-item');
});


// POST /add-item - add new items to the shopping list


app.listen(port, ()=>{
    console.log(`Express is listening on port ${port}`);
});