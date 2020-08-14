const express = require("express");
const router = express.Router();

const ProjectsToResources = require('./projectstoresources-model.js');

router.get('/', (req, res) => {
    ProjectsToResources.find()
      .then(project => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get project' });
    });
});

  module.exports = router;