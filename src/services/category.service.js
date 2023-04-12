const { Category } = require('../models');

const postCategories = async (name) => {
    await Category.create({ name });
    const addCategory = await Category.findOne({ where: { name } });

    return { type: 201, message: addCategory };
};

module.exports = {
    postCategories,
};