const express = require('express');
const router = express.Router();
const projects = require('../data.json').projects;

//get request for main page
router.get('/', (req, res) => {
	res.render('index', {projects});
});

module.exports = router;