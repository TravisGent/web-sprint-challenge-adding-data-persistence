const express = require("express");
const router = express.Router();

const Tasks = require('./task-model.js');

router.get('/', (req, res) => {
  Tasks.find()
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
});

router.post('/', (req, res) => {
  const taskData = req.body;

  Tasks.add(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new post' });
    });
});

module.exports = router;