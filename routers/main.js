const path = require('path');
const express = require('express');
const projectsController = require('../controllers/session')
const router = express.Router();


router.post('/project', projectsController.saveProject);

router.get('/projects', projectsController.getProject);
// router.delete('/delete', projectsController.clearProject);

module.exports = router;