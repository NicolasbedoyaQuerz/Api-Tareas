const { Router } = require('express');
const { getAllTasksByUser, deleteTask} = require('../controllers/tasks.controllers');

const router = Router();

router.get('/tasks/:id', getAllTasksByUser);
router.delete('/tasks/:id', deleteTask)


module.exports = router;