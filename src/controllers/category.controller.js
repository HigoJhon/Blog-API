const categoryService = require('../services/category.service');

const postCategories = async (req, res) => {
    try {
        const { name } = req.body;
        const { type, message } = await categoryService.postCategories(name);
        return res.status(type).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    postCategories,
};