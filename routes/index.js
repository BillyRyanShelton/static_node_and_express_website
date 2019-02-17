const express = require('express');
const router = express.Router();
const projects = require('../data.json').projects;

router.get('/', (req, res) => {
	res.render('index');
});

module.exports = router;