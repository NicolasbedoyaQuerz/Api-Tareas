const Categories = require('../models/categories.model');

const createNewCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        const category = await Categories.create(newCategory);

        res.status(201).json(category);
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = {
   createNewCategory,
};