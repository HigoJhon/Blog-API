const { Category } = require('../models');

const postCategories = async (name) => {
    await Category.create({ name });
    const addCategory = await Category.findOne({ where: { name } });

    return { type: 201, message: addCategory };
};

const getCategories = async () => {
    const all = await Category.findAll();
    return { type: 200, message: all };
};

module.exports = {
    postCategories,
    getCategories,
};