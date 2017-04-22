'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// GET '/'
app.get('/', (req, res)=>{
	res.send('Received your request, now bog off!');
});

app.listen(port, ()=>{
	console.log(`Express is listening on port ${port}`);
});