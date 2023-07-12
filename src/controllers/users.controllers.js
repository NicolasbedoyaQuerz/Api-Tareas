const Categories = require('../models/categories.model');
const Tasks = require('../models/task.model');
const Users = require('../models/users.model');

const createNewUser = async (req, res) => {
    try {
        const newUser = req.body;
        const user = await Users.create(newUser);

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json(error)
    }
};

const createNewTask = async (req, res) => {
    try {
        const { title, categoryId, userId } = req.body;
    
        const categories = await Categories.findByPk(categoryId);
        if (!categories) {
          return res.status(404).json({ error: 'La categoría seleccionada no existe' });
        }
    
        const task = await Tasks.create({ title, categoryId, userId });
    
        res.status(201).json(task);
    } catch (error) {
        console.error('Error al crear la tarea:', error);
        res.status(400).json({ error: 'Ocurrió un error al crear la tarea' });
    }
};

const completedTaks = async (req, res) => {
    try {
        const {id} = req.params;
        const taskCompleted = req.body;

        await Tasks.update(taskCompleted, {
            where: {id}
        });

        res.status(204).send();
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
   createNewUser,
   createNewTask,
   completedTaks
};