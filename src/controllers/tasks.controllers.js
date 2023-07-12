const Categories = require('../models/categories.model');
const Tasks = require('../models/task.model');
const Users = require('../models/users.model');


const getAllTasksByUser = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Tasks.findAll({
          where: { id },
          include: Categories, Users
        });
        res.json(task);
      } catch (error) {
        res.status(400).json(error);
      }
    };

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;

        await Tasks.destroy({
            where: {id}
        })
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
   getAllTasksByUser,
   deleteTask
};