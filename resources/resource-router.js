const express = require("express");
const router = express.Router();

const Resources = require('./resource-model.js');

router.get('/', (req, res) => {
  Resources.find()
    .then(resource => {
      res.json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resource' });
    });
});

router.post('/', (req, res) => {
  const resourceData = req.body;

  Resources.add(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

module.exports = router;