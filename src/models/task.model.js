const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Tasks = db.define('tasks', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    completed: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
   },
   userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
   }
}, {
    timestamps: false,
});


module.exports = Tasks;