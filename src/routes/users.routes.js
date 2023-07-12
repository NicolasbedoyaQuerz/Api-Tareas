const { Router } = require('express');
const { createNewUser, createNewTask, completedTaks } = require('../controllers/users.controllers');

const router = Router();

router.post('/users', createNewUser);
router.post('/tasks', createNewTask);
router.put('/tasks/:id', completedTaks);


module.exports = router;