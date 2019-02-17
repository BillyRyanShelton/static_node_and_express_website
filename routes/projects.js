const express = require('express');
const router = express.Router();
const projects = require('../data.json').projects;

router.get('/projects', (req, res) => {
	res.redirect('/');
});

router.get('/projects/:id', (req, res, next) => {
	const id = req.params.id;
	if(id > 0 && id <= projects.length) {
		res.render('project');	
	} else {
		next();
	}
});

module.exports = router;