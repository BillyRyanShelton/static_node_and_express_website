//node packages express, body parser are loaded
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
require('console-stamp')(console, '[HH:MM:ss.l]');

//an express module is created
const app = express();


//the key-value pair in req.body is modified so the value is either a string or array
app.use(bodyParser.urlencoded({ extended: false}));
//the app is allowed acces to the public folder and the pug template engine is set
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

//the index, about me, projects and error js files are loaded
const index = require('./routes');
const about = require('./routes/about');
const projects = require('./routes/projects');
const error = require('./routes/error')

//the home page, about me, projects and error js files are called
app.use(index);
app.use(about);
app.use(projects);
app.use(error);


//app listens for connections

app.listen(port, ()=> {
	console.log('Portfolio Site is up and running!');
});
