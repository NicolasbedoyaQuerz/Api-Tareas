const Categories = require('./categories.model');
const Tasks = require('./task.model');
const Users = require('./users.model');

const initModels = () => {

    Categories.belongsTo(Tasks, {foreingKey: 'categoryId'});
    Tasks.hasMany(Categories, {foreingKey: 'categoryId'} ); 
};

module.exports = initModels;