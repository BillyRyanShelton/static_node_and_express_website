const express = require('express');
const router = express.Router();
const projects = require('../data.json').projects;

//get request for about me section
router.get('/about', (req, res) => {
	res.render('about');
});

module.exports = router;