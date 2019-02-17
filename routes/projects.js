const express = require('express');
const router = express.Router();
const projects = require('../data.json').projects;

router.get('/projects', (req, res) => {
	res.redirect('/');
});

router.get('/projects/:id', (req, res, next) => {
	let id = req.params.id;

	if(id >= 0 && id <= projects.length-1) {
		let projectData = projects[id];
		
		res.render('project', {
			projectName : projects[id].project_name,
			projectDesc : projects[id].description,
			projectTech : projects[id].technologies,
			projectLink : projects[id].live_link,
			projectGit : projects[id].github_link,
			projectImg1 : projects[id].image_urls[0],
			projectImg2 : projects[id].image_urls[1],
			projectImg3 : projects[id].image_urls[2],
		});	
	} else {
		next();
	}
});

module.exports = router;