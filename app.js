//node packages express, body parser are loaded
const express = require('express');
const bodyParser = require('body-parser');
require('console-stamp')(console, '[HH:MM:ss.l]');

//an express module is created
const app = express();


//the key-value pair in req.body is modified so the value is either a string or array
app.use(bodyParser.urlencoded({ extended: false}));
//the app is set to serve static files(css js) in the public directory and the pug template engine is set
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
app.listen(3000, ()=> {
	console.log('Port 3000: Portfolio Site is up and running!');
});