const express = require('express');
const router = express.Router();

const Task = require('../../models/Task');

// route GET api/tasks
// get all tasks

router.get('/', (req,res) => {
  Task.find()
      .then(tasks => res.json(tasks))
      .catch(err => res.status(400).json('Error' + err))
});

// route POST api/tasks
// create task

router.post('/', (req,res) => {
    const newTask = new Task({
      description: req.body.description,
      dueDate: req.body.dueDate
    });
    newTask.save()
           .then(task => res.json(task))
           .catch(err => res.status(400).json('Error: ' + err))
});

// route UPDATE
// update task
router.patch('/:id',(req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      task.description = req.body.description;
      task.dueDate = req.body.dueDate
      task.save()
          .then(() => res.json('Updated'))
          .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error:' + err))
});

// route DELETE api/tasks
// delete task

router.delete('/:id', (req,res) => {
  Task.findById(req.params.id)
      .then(task => task.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json('Error: ' + err))
  })


module.exports = router;
